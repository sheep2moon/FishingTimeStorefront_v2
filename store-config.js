function withStoreConfig(nextConfig = {}) {
    const features = nextConfig.features || {};
    delete nextConfig.features;

    nextConfig.env = nextConfig.env || {};

    Object.entries(features).forEach(([key, value]) => {
        if (value) {
            nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = "TRUE";
        }
    });

    return nextConfig;
}

module.exports = { withStoreConfig };
