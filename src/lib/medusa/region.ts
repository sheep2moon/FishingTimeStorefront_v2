import { cache } from "react";
import { medusaClient } from "./config";

export const getRegion = cache(async function (contryCode: string = "pl") {
    const regions = await medusaClient.regions
        .list()
        .then(({ regions }) => regions)
        .catch(err => {
            console.log(err);
            return null;
        });
    if (!regions) {
        console.log("No regions error");
        return null;
    }

    const region = regions.find(region => region.countries[0].iso_2);
    if (region) return region;
    return null;
});
