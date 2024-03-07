import { cache } from "react";
import { medusaClient } from "./config";

export const getCategoriesList = cache(async function () {
    return medusaClient.productCategories
        .list({ expand: "category_children", include_descendants_tree: true })
        .then(({ product_categories }) => product_categories)
        .catch(err => {
            throw err;
        });
});
