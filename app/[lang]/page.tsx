import { scenarios as scenariosZh } from '@/lib/data-zh';
import { scenariosEn } from '@/lib/data-en';
import { dictionary, Locale } from '@/lib/dictionary';
import ClientHome from '@/components/ClientHome'; // 引入刚才新建的组件

// 定义 Page Props
interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: PageProps) {
  // 1. 等待参数解析
  const { lang } = await params;
  
  // 2. 根据语言准备数据
  // 注意：确保 dict 不为空，默认回退到 zh
  const dict = dictionary[lang] || dictionary['zh'];
  const scenarios = lang === 'en' ? scenariosEn : scenariosZh;

  // 3. 将数据传递给 Client 组件进行渲染
  return <ClientHome lang={lang} dict={dict} scenarios={scenarios} />;
}