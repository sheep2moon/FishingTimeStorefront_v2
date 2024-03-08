import { ReadonlyURLSearchParams } from "next/navigation";

export const createQueryString = ({ searchParams, name, value }: { searchParams: ReadonlyURLSearchParams; name: string; value: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
};
