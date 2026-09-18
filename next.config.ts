import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    // `pnpm deploy:build` sets this so a production build never collides with
    // the `.next` folder of a running dev server.
    distDir: process.env.NEXT_DIST_DIR || '.next',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
