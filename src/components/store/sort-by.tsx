"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortOptions } from "../../types/global";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { createQueryString } from "../../lib/utils/create-query-string";

const selectItems: { title: string; value: SortOptions }[] = [
    { title: "Od najnowszych", value: "created_at" },
    { title: "Od najstarszych", value: "-created_at" },
    { title: "Cena rosnąco", value: "variants.prices.amount" },
    { title: "Cena malejąco", value: "-variants.prices.amount" }
] as const;

type Props = {
    currentOrder?: SortOptions;
};

export default function SortBy(props: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (sortingOption: SortOptions) => {
        const query = createQueryString({ searchParams, name: "order", value: sortingOption });
        router.push(`${pathname}?${query}`);
    };

    console.log(props.currentOrder);

    return (
        <div className="sm:max-w-52 max-w-40 ml-auto w-full">
            <Select defaultValue={props.currentOrder || selectItems[0].value} onValueChange={value => handleChange(value as SortOptions)}>
                <SelectTrigger>
                    <SelectValue placeholder="Sortuj.." />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {selectItems.map(selectItem => (
                            <SelectItem value={selectItem.value} key={selectItem.title}>
                                {selectItem.title}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
