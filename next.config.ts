import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  domains: ['dummyjson.com', 'img.freepik.com'],
   remotePatterns: [
     {
      
       protocol: 'https',
       hostname: 's3.amazonaws.com',
       port: '',
       pathname: '/my-bucket/**',
       search: '',
     },
   ],
 },
};

export default nextConfig;
