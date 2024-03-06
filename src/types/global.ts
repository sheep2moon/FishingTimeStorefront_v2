import { ProductCategory } from "@medusajs/medusa";

export type ProductPreviewType = {
    id: string;
    title: string;
    handle: string | null;
    thumbnail: string | null;
    created_at?: Date;
    price?: {
        calculated_price: string;
        original_price: string;
        difference: string;
        price_type: "default" | "sale";
    };
    isFeatured?: boolean;
};

export type ProductCategoryWithChildren = Omit<ProductCategory, "category_children"> & {
    category_children: ProductCategory[];
    category_parent?: ProductCategory;
};

export type SortOptions = "price_asc" | "price_desc" | "created_at";
