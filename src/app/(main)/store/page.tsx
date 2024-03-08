import PaginatedProducts from "../../../components/store/paginated-products";
import SortBy from "../../../components/store/sort-by";
import { SortOptions } from "../../../types/global";

type Params = {
    searchParams: {
        order?: SortOptions;
        page?: string;
        q?: string;
    };
};

export default async function StorePage({ searchParams }: Params) {
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 0;
    return (
        <div className="mt-8">
            Store
            <SortBy />
            <PaginatedProducts pageNumber={pageNumber} searchQuery={searchParams.q} order={searchParams.order} />
        </div>
    );
}
