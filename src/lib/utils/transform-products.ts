import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { CalculatedVariant, ProductPreviewType } from "../../types/global";
import { formatAmount } from "./format-price";
import { getPercentageDifference } from "./get-percentage-difference";

const transformProductPreview = (product: PricedProduct, region: Region): ProductPreviewType => {
    const variants = product.variants as unknown as CalculatedVariant[];

    let cheapestVariant = undefined;

    if (variants?.length > 0) {
        cheapestVariant = variants.reduce((acc, curr) => {
            if (acc.calculated_price > curr.calculated_price) {
                return curr;
            }
            return acc;
        }, variants[0]);
    }

    return {
        id: product.id!,
        title: product.title!,
        handle: product.handle!,
        thumbnail: product.thumbnail!,
        created_at: product.created_at,
        variants_count: product.variants.length,
        price: cheapestVariant
            ? {
                  calculated_price: formatAmount({
                      amount: cheapestVariant.calculated_price,
                      region: region
                  }),
                  original_price: formatAmount({
                      amount: cheapestVariant.original_price,
                      region: region
                  }),
                  difference: getPercentageDifference(cheapestVariant.original_price, cheapestVariant.calculated_price),
                  price_type: cheapestVariant.calculated_price_type
              }
            : undefined
    };
};

export default transformProductPreview;
