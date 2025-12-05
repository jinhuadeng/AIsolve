'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WebsiteCoverProps {
  url: string;
  alt: string;
}

export function WebsiteCover({ url, alt }: WebsiteCoverProps) {
  const [isLoading, setIsLoading] = useState(true);

  // 使用 WordPress 的 mshots 服务
  // w=800 保证清晰度
  // v=1 防止缓存旧图
  const screenshotUrl = `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&v=2`;

  return (
    <div className="relative w-full h-40 bg-zinc-100 overflow-hidden border-b border-zinc-100 group">
      {/* 1. 加载时的骨架屏动画 */}
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-200 animate-pulse z-10" />
      )}

      {/* 2. 图片 */}
      <Image
        src={screenshotUrl}
        alt={`Screenshot of ${alt}`}
        fill
        className={`object-cover object-top transition-all duration-700 ${
          isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
        } group-hover:scale-105`} // 悬停微放大效果
        onLoad={() => setIsLoading(false)}
        unoptimized // 外部图片建议关闭 Next.js 优化以加快显示
      />
      
      {/* 3. 遮罩层：让文字显示更清晰，或者增加质感 */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}