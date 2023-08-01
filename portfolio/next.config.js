/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
             protocol: 'https',
             hostname: 'willstenzel.com',
             port: '',
             pathname: '/tools/nextjs-dark.png',
            },
        ],
    },
}

module.exports = nextConfig
