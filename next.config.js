/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'lezz-portfolio-back-git-postgress-version-iamlezz.vercel.app',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
