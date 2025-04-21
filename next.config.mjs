/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digitalgraphiks.co.uk',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/undefined',
                destination: '/',  // Redirect to homepage
                permanent: true,  // Permanent (301) redirect
            },
        ];
    }
};

export default nextConfig;
