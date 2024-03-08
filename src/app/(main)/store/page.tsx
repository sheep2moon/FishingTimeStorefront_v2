import PaginatedProducts from "../../../components/store/paginated-products";
import SearchBar from "../../../components/store/search-bar";
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
    console.log(searchParams, pageNumber);

    return (
        <div className="mt-8">
            Store
            <div className="grid grid-cols-4">
                <div>REFINEMENT</div>
                <div className="col-span-3">
                    <div className="w-full flex gap-2">
                        <SearchBar />
                        <SortBy currentOrder={searchParams.order} />
                    </div>
                    <PaginatedProducts pageNumber={pageNumber} searchQuery={searchParams.q} order={searchParams.order} />
                </div>
            </div>
        </div>
    );
}
