import Link from "next/link";
import { cn } from "../../lib/utils/cn";
import Image from "next/image";
import { Button } from "../ui/button";
import { ProductPreviewType } from "../../types/global";

type Props = {
    product: ProductPreviewType;
};

export default function ProductPreview({ product }: Props) {
    return (
        <div className={cn("shadow-sm shadow-slate-300 bg-white rounded-sm p-1 w-full")}>
            <div className="w-full">
                <div className=" flex flex-col justify-between h-full">
                    <div className="p-1 relative">
                        <Link href={`/products/${product.handle}`} className="">
                            <div className="relative w-full aspect-[29/34]">
                                <Image className="object-contain" src={product.thumbnail || ""} fill alt="produkt" />
                            </div>
                        </Link>
                    </div>
                    <div className="text-base-regular h-full py-2 flex flex-col justify-between text-stone-900">
                        <span className="border-t border-emerald-900 px-1 font-semibold text-base inline-block h-12 leading-6 text-ellipsis overflow-hidden">{product.title}</span>
                        <div className="flex justify-between items-center max-w-full overflow-hidden">
                            <span className="text-slate-600/80 text-sm">{product.variants_count && product.variants_count > 1 ? `Dostępny w ${product.variants_count} opcjach` : ""}</span>
                            <span className="p-2 font-bold text-xl">{product.price?.calculated_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
