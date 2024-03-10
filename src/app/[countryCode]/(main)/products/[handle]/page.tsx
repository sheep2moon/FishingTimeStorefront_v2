import { Metadata } from "next";
import ProductActions from "@/components/product/product-actions";
import ProductImageGallery from "@/components/product/product-image-gallery";
import { getProductByHandle, getProductsList } from "@/lib/medusa/products";
import { notFound } from "next/navigation";
import { getRegion } from "@/lib/medusa/region";

type Props = {
    params: {
        handle: string;
        countryCode: string;
    };
};

export async function generateStaticParams() {
    const { products } = await getProductsList({ countryCode: "pl", queryParams: { limit: 5000 } });
    const staticParams = products.map(product => ({ handle: product.handle }));

    return staticParams;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { handle, countryCode } = params;
    const product = await getProductByHandle(handle, countryCode);
    if (!product) notFound();
    return {
        title: `${product.title} | Fishing Time`,
        description: `${product.title}`,
        openGraph: {
            title: `${product.title} | Fishing Time`,
            description: `${product.title}`,
            images: product.thumbnail ? [product.thumbnail] : []
        }
    };
}

export default async function ProductPage(props: Props) {
    const region = await getRegion("pl");
    if (!region) return null;
    const product = await getProductByHandle(props.params.handle, region.id);
    if (!product) return null;

    return (
        <div>
            <div>Produkt</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-8 w-full bg-primary-100/40 sm:gap-8">
                <ProductImageGallery images={product.images || []} />
                <ProductActions product={product} />
            </div>
        </div>
    );
}
