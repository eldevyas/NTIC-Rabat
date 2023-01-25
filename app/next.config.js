/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_HOSTNAME: 'http://192.168.11.104:3000',
        NEXT_PUBLIC_API_URL: 'http://192.168.11.104:3000/api',
        SERVER_PUBLIC_HOSTNAME: 'http://192.168.11.104:8000',
        SERVER_PUBLIC_API_URL: 'http://192.168.11.104:8000/api',
    }
}

module.exports = nextConfig;