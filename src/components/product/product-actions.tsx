import clsx from "clsx";
import Link from "next/link";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

type ProductActionsProps = {
    product: PricedProduct;
};

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <h3 className="text-xl-regular">{product.title}</h3>

            <pre className="text-base-regular font-sans whitespace-pre-wrap">{product.description}</pre>

            {product.variants && product.variants.length > 1 && (
                <div className="my-8 flex flex-col gap-y-6">
                    <h4>Wybierz wariant produktu</h4>
                    {/* <ProductVariantSelector variants={product.variants} /> */}
                </div>
            )}

            {/* <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Wcześniej: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div> */}

            <Button variant="secondary">Dodaj do koszyka</Button>
        </div>
    );
};

export default ProductActions;
