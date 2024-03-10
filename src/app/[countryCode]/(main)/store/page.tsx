import PaginatedProducts from "@/components/store/paginated-products";
import SearchBar from "@/components/store/search-bar";
import SortBy from "@/components/store/sort-by";
import { SortOptions } from "@/types/global";

type Params = {
    params: {
        countryCode: string;
    };
    searchParams: {
        order?: SortOptions;
        page?: string;
        q?: string;
    };
};

export default async function StorePage(props: Params) {
    const pageNumber = props.searchParams.page ? parseInt(props.searchParams.page) : 0;
    console.log(props.searchParams, pageNumber);

    return (
        <div className="mt-8">
            Store
            <div className="grid grid-cols-4">
                <div>REFINEMENT</div>
                <div className="col-span-3">
                    <div className="w-full flex gap-2">
                        <SearchBar />
                        <SortBy currentOrder={props.searchParams.order} />
                    </div>
                    <PaginatedProducts countryCode={props.params.countryCode} pageNumber={pageNumber} searchQuery={props.searchParams.q} order={props.searchParams.order} />
                </div>
            </div>
        </div>
    );
}
