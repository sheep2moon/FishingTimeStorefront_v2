import { StoreGetProductsParams } from "@medusajs/medusa";
import { cache } from "react";
import { ProductPreviewType, SortOptions } from "../../types/global";
import { getRegion } from "./region";
import { medusaClient } from "./config";
import transformProductPreview from "../utils/transform-products";
import { getMedusaHeaders } from ".";

type ProductsListArgs = { pageParam?: number; queryParams?: StoreGetProductsParams; countryCode: string };

export const getProductsList = cache(async function ({ pageParam = 0, queryParams, countryCode }: ProductsListArgs): Promise<{
    products: ProductPreviewType[];
    count: number;
    nextPage: number | null;
    queryParams?: StoreGetProductsParams;
}> {
    const limit = queryParams?.limit || 24;
    const region = await getRegion(countryCode);

    if (!region) {
        return {
            products: [],
            count: 0,
            nextPage: null
        };
    }
    const { products, count } = await medusaClient.products
        .list(
            {
                limit,
                offset: pageParam,
                region_id: region.id,
                ...queryParams
            },
            { next: { tags: ["products"] } }
        )
        .then(res => res)
        .catch(err => {
            throw err;
        });
    console.log(products, count);

    const transformedProducts = products.map(product => {
        return transformProductPreview(product, region);
    });

    const nextPage = count > pageParam + 1 ? pageParam + 1 : null;

    return {
        products: transformedProducts,
        count,
        nextPage,
        queryParams
    };
});

export const getProductByHandle = cache(async function (handle: string) {
    const headers = getMedusaHeaders(["products"]);

    const product = await medusaClient.products
        .list({ handle }, headers)
        .then(({ products }) => products[0])
        .catch(err => {
            throw err;
        });
    return { product };
});
