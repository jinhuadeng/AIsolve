import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 支持的语言
const locales = ['zh', 'en'];
const defaultLocale = 'zh';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. 如果访问的是静态资源（图片、Logo等），直接放行
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // 比如 favicon.ico, sitemap.xml
  ) {
    return NextResponse.next();
  }

  // 2. 检查路径中是否已经包含了语言 (例如 /en/...)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // 3. 如果没有语言，检测浏览器语言首选项
  const acceptLanguage = request.headers.get('accept-language') || '';
  // 简单的逻辑：如果包含英文，就去 en，否则默认 zh
  const locale = acceptLanguage.toLowerCase().includes('en') ? 'en' : defaultLocale;

  // 4. 重定向到带语言的 URL (例如 / -> /zh)
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // 匹配所有路径，除了 api, _next/static, _next/image, favicon.ico
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};