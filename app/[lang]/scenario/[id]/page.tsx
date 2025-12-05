import { scenarios as scenariosZh } from '@/lib/data-zh';
import { scenariosEn } from '@/lib/data-en';
import Link from 'next/link';
import { ChevronLeft, ArrowUpRight, Star, Check, X, Trophy, Medal, ShieldCheck, AlertTriangle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ToolIcon } from '@/components/ToolIcon';
import { ScenarioIcon } from '@/components/ScenarioIcon';
import { WebsiteCover } from '@/components/WebsiteCover';
import { Locale, dictionary } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ id: string; lang: Locale }>;
}

const RankBadge = ({ rank, isDark }: { rank: string, isDark?: boolean }) => {
  const styles: any = {
    S: 'bg-zinc-900 text-white border-zinc-900',
    A: 'bg-white text-zinc-600 border-zinc-200',
    B: 'bg-zinc-50 text-zinc-400 border-zinc-200',
  };
  return (
    <div className={`flex items-center justify-center w-8 h-8 rounded-lg border text-sm font-bold shadow-sm ${styles[rank]}`}>
      {rank}
    </div>
  );
};

const checkVerification = (dateStr: string) => {
  if (!dateStr) return { status: 'unknown', days: 0 };
  const lastCheck = new Date(dateStr);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - lastCheck.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return {
    status: diffDays <= 90 ? 'valid' : 'expired',
    days: diffDays
  };
};

export default async function ScenarioPage({ params }: PageProps) {
  const { id, lang } = await params;
  const dict = dictionary[lang];
  
  const scenarios = lang === 'en' ? scenariosEn : scenariosZh;
  const scenario = scenarios.find(s => s.id === id);

  if (!scenario) {
    return notFound();
  }

  const rankOrder: Record<string, number> = { 'S': 0, 'A': 1, 'B': 2 };
  const sortedTools = [...scenario.tools].sort((a, b) => {
    return (rankOrder[a.rank] ?? 99) - (rankOrder[b.rank] ?? 99);
  });

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-zinc-900 pb-24">
      {/* 头部导航 */}
      <div className="pt-10 pb-16 max-w-4xl mx-auto px-6">
        <Link href={`/${lang}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black mb-10 transition-colors shadow-sm">
          <ChevronLeft size={14} />
          {lang === 'en' ? 'Back' : '返回首页'}
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-100 text-zinc-700">
            <ScenarioIcon name={scenario.icon} className="w-9 h-9" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-zinc-900">{scenario.title}</h1>
            <p className="text-lg text-zinc-500 font-normal max-w-2xl">{scenario.description}</p>
          </div>
        </div>
      </div>

      {/* 工具列表 */}
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {sortedTools.map((tool, index) => {
          const isS = tool.rank === 'S';
          const ranking = index + 1;
          
          const verification = checkVerification(tool.lastCheck);
          const isVerified = verification.status === 'valid';

          return (
            <div 
              key={tool.id} 
              className={`relative rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 border overflow-hidden
                ${isS 
                  ? 'bg-[#0A0A0A] border-zinc-800 text-white shadow-2xl shadow-black/20 z-10 scale-[1.02]' 
                  : 'bg-white border-zinc-100 text-zinc-900 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100/50'}
              `}
            >
              

              {/* 第一行：Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 relative">
                    <ToolIcon 
                      url={tool.link} 
                      alt={tool.name} 
                      fallback={tool.logo} 
                      className={`w-16 h-16 rounded-2xl shadow-md ${isS ? 'border-none ring-1 ring-white/10' : 'border border-zinc-100'}`} 
                    />
                    <div className="absolute -bottom-2 -right-2 scale-90">
                      <RankBadge rank={tool.rank} isDark={isS} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{tool.name}</h3>
                      <div className={`md:hidden inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border
                        ${isS ? 'bg-white/10 border-white/10 text-yellow-400' : 'bg-zinc-100 border-zinc-200 text-zinc-500'}
                      `}>
                        {isS ? <Trophy size={10} /> : <Medal size={10} />} No.{ranking}
                      </div>
                    </div>
                    <p className={`text-base font-medium ${isS ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {tool.tagline}
                    </p>
                  </div>
                </div>

                <div className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border self-start
                  ${isS ? 'bg-white/10 border-white/10 text-yellow-400' : 'bg-zinc-100 border-zinc-200 text-zinc-500'}
                `}>
                  {isS ? <Trophy size={13} fill="currentColor" /> : <Medal size={13} />}
                  {lang === 'en' ? `No.${ranking} Recommended` : `No.${ranking} 推荐`}
                </div>
              </div>

              {/* 第二行：优缺点 */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-5 rounded-2xl border mb-8
                 ${isS ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-100'}
              `}>
                <div className="flex flex-col gap-2">
                   <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isS ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {lang === 'en' ? 'Pros' : '优点'}
                   </div>
                   {tool.pros.map((p, i) => (
                      <div key={i} className={`flex gap-2 text-sm ${isS ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        <Check size={16} className={`shrink-0 mt-0.5 ${isS ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span>{p}</span>
                      </div>
                   ))}
                </div>
                <div className="flex flex-col gap-2">
                   <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isS ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {lang === 'en' ? 'Cons' : '注意'}
                   </div>
                   {tool.cons.map((c, i) => (
                      <div key={i} className={`flex gap-2 text-sm ${isS ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        <X size={16} className={`shrink-0 mt-0.5 ${isS ? 'text-rose-400' : 'text-rose-500'}`} />
                        <span>{c}</span>
                      </div>
                   ))}
                </div>
              </div>

              {/* 第三行：截图 + 底部操作栏 */}
              <div className={`relative w-full overflow-hidden rounded-xl border shadow-md group
                 ${isS ? 'border-white/10 bg-zinc-800' : 'border-zinc-200 bg-zinc-100'}
              `}>
                 {/* 浏览器顶栏 */}
                 <div className={`h-8 flex items-center px-4 gap-1.5 border-b
                    ${isS ? 'bg-white/5 border-white/5' : 'bg-white/60 border-zinc-200/50'}
                 `}>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    <div className={`ml-3 flex-1 h-4 rounded text-[10px] flex items-center px-2 truncate font-mono opacity-60
                       ${isS ? 'bg-black/40 text-zinc-400' : 'bg-white text-zinc-400'}
                    `}>
                      {tool.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </div>
                 </div>

                 {/* 图片区域 */}
                 <div className="relative w-full h-56 md:h-72"> 
                    <WebsiteCover url={tool.link} alt={tool.name} />
                    
                    {/* 底部渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* 🔥 底部 Flex 容器：左侧标签，右侧按钮 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 z-30">
                      
                      {/* 左侧：验证标签 */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium backdrop-blur-md border shadow-sm
                        ${isVerified 
                          ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30' 
                          : 'bg-amber-500/20 text-amber-100 border-amber-500/30'}
                      `}>
                        {isVerified ? <ShieldCheck size={12} /> : <AlertTriangle size={12} />}
                        {isVerified 
                          ? `${dict.card.verified}: ${tool.lastCheck.slice(0,7)}` 
                          : dict.card.unverified
                        }
                      </div>

                      {/* 右侧：访问按钮 */}
                      <a 
                        href={tool.link} 
                        target="_blank"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-1 hover:scale-105 shadow-xl backdrop-blur-sm
                          ${isS 
                            ? 'bg-white text-black hover:bg-zinc-200' 
                            : 'bg-black text-white hover:bg-zinc-800'}
                        `}
                      >
                        {lang === 'en' ? 'Visit Website' : '访问官网'} <ArrowUpRight size={16} />
                      </a>
                    </div>
                 </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}