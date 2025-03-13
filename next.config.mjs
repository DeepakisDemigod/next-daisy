/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jyotish-software.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '**' // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'www.wikimedia.org',
        port: '',
        pathname: '/portal/wikimedia.org/assets/img/**'
      }
    ]
  }
};

export default nextConfig;
