/** @type {import('next').NextConfig} */
const nextConfig = {
    // Flatbush Tactics web build lives in public/flatbushTactics; Next doesn't
    // serve a folder's index.html, so send the bare path to it. A redirect
    // (not a rewrite) so the game's relative asset paths resolve in the folder.
    async redirects() {
        return [
            { source: '/flatbushTactics', destination: '/flatbushTactics/index.html', permanent: false },
            { source: '/flatbushTactics/', destination: '/flatbushTactics/index.html', permanent: false },
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    typescript: true,
                    dimensions: false,
                }
            }]
        });
        return config;
    }
};

export default nextConfig;
