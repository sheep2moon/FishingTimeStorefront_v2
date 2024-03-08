import { ProductCategory, ProductVariant } from "@medusajs/medusa";

export type ProductPreviewType = {
    id: string;
    title: string;
    handle: string | null;
    thumbnail: string | null;
    created_at?: Date;
    variants_count?: number;
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

export type SortOptions = "variants.prices.amount" | "-variants.prices.amount" | "created_at" | "-created_at";

export type CalculatedVariant = ProductVariant & {
    calculated_price: number;
    calculated_price_type: "sale" | "default";
    original_price: number;
};
