/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "images.pexels.com",
            "images.unsplash.com",
            "firebasestorage.googleapis.com",
        ],
    },
    experimental: {
        serverActions: true,
    },
    // Environement Variables for Development
    env: {
        //     //
        //     // APIs Config
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3000",
        NEXT_PUBLIC_API_URL: "http://localhost:3000/api",
        SERVER_PUBLIC_HOSTNAME: "https://api.asonts.com",
        SERVER_PUBLIC_API_URL: "https://api.asonts.com/api",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "eQNTCuuDStNOELBXjIqHeEgEpJYOhQd9x6eMej+toGg=",
        //
        // Firebase Config
        NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyDgjJ9bntIRALX9Ne3pmT4fosJNvIEkUwc",
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "ntic-8db7e.firebaseapp.com",
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: "ntic-8db7e",
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "ntic-8db7e.appspot.com",
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "299191094138",
        NEXT_PUBLIC_FIREBASE_APP_ID: "1299191094138web135e5ade17cb3eec0c64c3",
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-3F1CS8MGFR",
    },
};

module.exports = nextConfig;
