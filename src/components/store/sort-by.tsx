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

export default function SortBy() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (sortingOption: SortOptions) => {
        const query = createQueryString({ searchParams, name: "order", value: sortingOption });
        router.push(`${pathname}?${query}`);
    };

    return (
        <div className="max-w-xs ml-auto">
            <Select defaultValue={selectItems[0].value} onValueChange={value => handleChange(value as SortOptions)}>
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
