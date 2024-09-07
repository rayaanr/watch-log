/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // Allo tmdb images
                protocol: "https",
                hostname: "image.tmdb.org",
            },
            {
                // Allo tmdb images
                protocol: "https",
                hostname: "m.media-amazon.com",
            }
        ],
    },
};

module.exports = nextConfig
