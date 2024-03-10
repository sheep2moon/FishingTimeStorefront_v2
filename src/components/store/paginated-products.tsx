import { getProductsList } from "../../lib/medusa/products";
import { SortOptions } from "../../types/global";
import ProductPreview from "../product/product-preview";

type Props = {
    pageNumber: number;
    order?: SortOptions;
    categoryId?: string[];
    searchQuery?: string;
    countryCode: string;
};

export default async function PaginatedProducts(props: Props) {
    const { products, count } = await getProductsList({
        countryCode: props.countryCode,
        pageParam: props.pageNumber,
        queryParams: {
            order: props.order,
            category_id: props.categoryId,
            q: props.searchQuery
        }
    });

    return (
        <div className="gap-4 grid grid-cols-3 mt-6">
            {products.map(product => (
                <ProductPreview product={product} key={product.id} />
            ))}
        </div>
    );
}
