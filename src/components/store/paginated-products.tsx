import { getProductsList } from "../../lib/medusa/products";
import { SortOptions } from "../../types/global";

type Props = {
    pageNumber: number;
    order?: SortOptions;
    categoryId?: string[];
    searchQuery?: string;
};

export default async function PaginatedProducts(props: Props) {
    const { products, count } = await getProductsList({
        countryCode: "pl",
        pageParam: props.pageNumber,
        queryParams: {
            order: props.order,
            category_id: props.categoryId,
            q: props.searchQuery
        }
    });

    return (
        <div>
            <div>znaleziono: {count}</div>
            <div className="gap-4 grid grid-cols-3">
                {products.map(product => (
                    <div className="flex flex-col gap-2 p-2" key={product.id}>
                        <span>{product.title}</span>
                        <span>{product.price?.calculated_price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
