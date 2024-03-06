import { cache } from "react";
import { medusaClient } from "./config";

export const getCategoriesList = cache(async function () {
    // const headers = {
    //     next: {
    //         tags: ["collections"]
    //     }
    // } as Record<string, any>;

    return medusaClient.productCategories
        .list({ expand: "category_children", include_descendants_tree: true })
        .then(({ product_categories }) => product_categories)
        .catch(err => {
            throw err;
        });
});
