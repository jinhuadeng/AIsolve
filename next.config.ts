import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't3.gstatic.com', // 谷歌图标服务
      },
      {
        protocol: 'https',
        hostname: 's0.wordpress.com', // 👈 新增：WordPress 截图服务
      },
    ],
  },
};

export default nextConfig;