'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ToolIconProps {
  url: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function ToolIcon({ url, alt, fallback, className = "w-16 h-16" }: ToolIconProps) {
  const [error, setError] = useState(false);

  const getDomain = (link: string) => {
    try {
      return new URL(link).hostname;
    } catch (e) {
      return '';
    }
  };

  const domain = getDomain(url);
  const iconUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;

  return (
    <div className={`relative shrink-0 overflow-hidden bg-white flex items-center justify-center border border-zinc-100 ${className}`}>
      {!error ? (
        <Image
          src={iconUrl}
          alt={alt}
          width={64}
          height={64}
          className="object-contain p-0.5"
          onError={() => setError(true)}
          unoptimized
        />
      ) : (
        <span className="text-3xl select-none">{fallback}</span>
      )}
    </div>
  );
}