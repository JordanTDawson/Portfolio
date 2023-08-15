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
            {
             protocol: 'https',
             hostname: 'blog.learningfuze.com',
             port: '',
             pathname: '/wp-content/uploads/2015/03/learning-fuze-20logo-202.png'
            },
        ],
    },
}

module.exports = nextConfig
