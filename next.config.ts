import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                child_process: false,
                fs: false,
                os: false,
                net: false,
                tls: false,
            };
        }

        return config;
    },
};

export default nextConfig;
