import { withStoreConfig } from "./store-config.js";

/** @type {import('next').NextConfig} */
const nextConfig = withStoreConfig({
    features: {
        search: true,
        productModule: false
    },
    images: {
        domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost", "medusa-server-testing.s3.amazonaws.com", "fishing-medusa-storage.s3.eu-central-1.amazonaws.com"]
    }
});

console.log(nextConfig);

export default nextConfig;
