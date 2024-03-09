import ProductActions from "../../../../components/product/product-actions";
import ProductImageGallery from "../../../../components/product/product-image-gallery";
import { getProductByHandle } from "../../../../lib/medusa/products";

type Props = {
    params: {
        handle: string;
    };
};

export default async function ProductPage(props: Props) {
    const { product } = await getProductByHandle(props.params.handle);

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
