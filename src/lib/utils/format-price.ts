import { Region } from "@medusajs/medusa";

export const formatAmount = ({ amount, region }: { amount: number; region: Region }) => {
    if (region.id === "reg_01HDBCG6VJME3C618AP0GMMSYX") {
        return `${(amount / 100).toFixed(2)} zł`;
    }
    return "-";
};
