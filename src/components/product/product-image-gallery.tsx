"use client";

import type { Image as MedusaImage } from "@medusajs/medusa";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
    images: MedusaImage[];
};

const ProductImageGallery = (props: Props) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="flex items-start relative w-full mx-auto">
            <div className="flex flex-col flex-1 small:mx-16 gap-y-4 ">
                <div className="relative aspect-square w-full max-h-[500px] my-1 shadow-md">
                    <Image src={props.images[currentImage]?.url ? props.images[currentImage].url : "/image-placeholder.png"} fill className="object-contain" alt={`podgląd produktu ${currentImage + 1}`} />
                </div>
                <div className=" flex gap-x-2 flex-wrap px-2 ">
                    {props.images.map((image, index) => {
                        return (
                            <button
                                key={image.id}
                                className="h-20 small:h-28 aspect-square relative border  border-black/10 rounded-sm"
                                onClick={() => {
                                    setCurrentImage(index);
                                }}
                            >
                                <span className="sr-only">Idź do zdjęcia {index + 1}</span>
                                <Image src={image.url} fill className="absolute inset-0 object-contain" alt="Thumbnail" />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductImageGallery;
