import type { Metadata, Viewport } from "next"; // 👈 引入 Viewport
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WenX - 问AI，解难题 (Your AI Solver)",
  description: "WenX.ai - 针对高频场景，为你精选全球 Top AI 神器。",
  manifest: "/manifest.json", // 👈 关键：关联 manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "WenX",
  },
};

// 👈 新增 viewport 配置，禁止用户缩放，更像 App
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}