'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScenarioIcon } from '@/components/ScenarioIcon';
import { ToolIcon } from '@/components/ToolIcon'; // 👈 新增引入
import Newsletter from '@/components/Newsletter';

interface ClientHomeProps {
  lang: string;
  dict: any;
  scenarios: any[];
}

export default function ClientHome({ lang, dict, scenarios }: ClientHomeProps) {
  const [query, setQuery] = useState('');
  const [activePersona, setActivePersona] = useState<string>('All');

  // 转换身份字典
  const PERSONAS = Object.entries(dict.personas).map(([key, label]) => ({
    id: key,
    label: label as string
  }));

  // 🔥 核心修改：在生成热门数据时，预先查找 S 级工具的官网链接
  const HOT_PROBLEMS = dict.hot.map((item: any, index: number) => {
    const themes = [  'orange', 'blue', 'rose', 'green', 'pink', 
      'indigo',  'amber', 'emerald', 'sky'];
    const icons = [  'ppt', 'code', 'logo', 'doc', 'video', 
      'excel', 'speak', 'write', 'trans'];
    
    // 1. 在所有场景中找到当前这个热门场景 (通过 ID 匹配)
    const targetScenario = scenarios.find((s: any) => s.id === item.id);
    
    // 2. 找到该场景下的 S 级工具
    const topTool = targetScenario?.tools.find((t: any) => t.rank === 'S');
    
    // 3. 决定跳转链接：如果有 S 级工具，直接去官网；否则兜底跳到详情页
    const targetUrl = topTool ? topTool.link : `/${lang}/scenario/${item.id}`;
    
    // 4. 标记是否为外链 (用于决定是否新开窗口)
    const isExternal = !!topTool;

    return { 
      ...item, 
      theme: themes[index % themes.length], 
      icon: icons[index % icons.length],
      targetUrl,   // 👈 新增字段
      isExternal   // 👈 新增字段
    };
  });

  const handlePersonaClick = (pid: string) => {
    setActivePersona(pid);
    setQuery('');
  };

  const filteredScenarios = scenarios.filter(s => {
    const title = s.title || '';
    const desc = s.description || '';
    
    const matchesQuery = title.toLowerCase().includes(query.toLowerCase()) || 
                         desc.toLowerCase().includes(query.toLowerCase());
                         
    const matchesPersona = activePersona === 'All' || (s.tags && s.tags.includes(activePersona));
    
    return matchesQuery && matchesPersona;
  });

  const getColorClasses = (theme: string) => {
    switch (theme) {
      
      case 'orange': return 'bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600';
      case 'blue':   return 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600';
      case 'rose':   return 'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600';
      case 'green':  return 'bg-green-50 text-green-600 border-green-100 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600';
      case 'pink':   return 'bg-pink-50 text-pink-600 border-pink-100 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600';
      // 新增颜色
      case 'indigo': return 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600';
      case 'amber':  return 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600';
      case 'emerald':return 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600';
      case 'sky':    return 'bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600';
      default:       return 'bg-zinc-50 text-zinc-600 border-zinc-100';
    }
  };

  return (
    <main className="min-h-screen bg-[#FEFEFE] text-zinc-900 selection:bg-indigo-500 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">W</span>
            </div>
            <span>WenX<span className="text-zinc-400 font-normal">.ai</span></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100 uppercase tracking-wider">
              {dict.nav.tag}
            </span>
            <Link href={`/${dict.nav.target}`} className="text-sm font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 px-3 py-1 rounded-full transition-colors">
              🌐 {dict.nav.switchBtn}
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-36 pb-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900"
        >
          {dict.hero.title_prefix}<span className="text-indigo-600">{dict.hero.title_highlight}</span>
        </motion.h1>

        <p className="text-lg text-zinc-500 mb-12 leading-relaxed font-light">
          {dict.hero.subtitle_1} <strong className="text-zinc-900">{dict.hero.subtitle_strong}</strong>{dict.hero.subtitle_2}<br/>
          {dict.hero.subtitle_3}
        </p>

        {/* 1. 热门问题 - 快速直达 */}
        <div className="mb-12">
          <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-6">{dict.hero.hot_title}</p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {HOT_PROBLEMS.map((item: any) => (
              // 🔥 这里的 Link 改为了 <a> 标签 (如果是外链) 或者 Link (如果是内链)
              // 为了方便，我们统一用 Link 组件，但如果是外链，加上 target="_blank"
              <Link
                key={item.label}
                href={item.targetUrl}
                target={item.isExternal ? "_blank" : undefined} // 外链新窗口打开
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${getColorClasses(item.theme)}`}>
                  <ScenarioIcon name={item.icon} className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors flex items-center gap-0.5">
                  {item.label}
                  {/* 如果是外链，显示一个小小的箭头图标，提示用户会跳出 */}
                  {item.isExternal && <ExternalLink size={10} className="opacity-0 group-hover:opacity-50" />}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. 搜索框 */}
        <div className="relative group max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="text"
            className="w-full bg-white text-zinc-900 text-lg rounded-2xl py-4 pl-14 pr-12 shadow-[0_2px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus:shadow-[0_8px_30px_rgb(0,0,0,0.12)] outline-none border border-zinc-100 focus:border-zinc-300 transition-all duration-300 placeholder:text-zinc-300"
            placeholder={dict.hero.search_placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* 3. 身份筛选 */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-4">{dict.hero.persona_title}</p>
          <div className="flex justify-center border-b border-zinc-100">
            <div className="flex gap-6 md:gap-10 overflow-x-auto pb-px no-scrollbar px-4">
              {PERSONAS.map((tab) => {
                const isActive = activePersona === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handlePersonaClick(tab.id)}
                    className={`relative pb-4 text-sm font-medium transition-all whitespace-nowrap
                      ${isActive ? 'text-black font-bold scale-105' : 'text-zinc-400 hover:text-zinc-600'}
                    `}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full mb-0.5"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 列表区 */}
      <div className="max-w-6xl mx-auto px-6 pb-12 pt-4 border-t border-zinc-100">
        {filteredScenarios.length === 0 && (
          <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200 mt-10">
            <p className="text-zinc-400">{dict.hero.empty_state}</p>
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatePresence>
            {filteredScenarios.map((scenario: any) => {
              const topTool = scenario.tools.find((t: any) => t.rank === 'S');

              return (
                <motion.div
                  layout
                  key={scenario.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="group h-full p-6 bg-white border border-zinc-100 hover:border-indigo-200 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] rounded-[1.5rem] transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden">
                    
                    <Link 
                      href={`/${lang}/scenario/${scenario.id}`} 
                      className="absolute inset-0 z-0"
                      aria-label={`View details for ${scenario.title}`}
                    />

                    <div className="flex items-center gap-4 mb-4 relative z-10 pointer-events-none">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all duration-300">
                        <ScenarioIcon name={scenario.icon} className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-900 transition-colors truncate">
                          {scenario.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-300 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-all self-start">
                        <ArrowRight size={18} className="-ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow line-clamp-2 relative z-10 pointer-events-none">
                      {scenario.description}
                    </p>
                    
                    <div className="pt-4 border-t border-dashed border-zinc-100 mt-auto relative z-20">
                       <a
                        href={topTool?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:bg-indigo-50/50 group-hover:border-indigo-100/50 transition-all hover:scale-[1.02] active:scale-95"
                       >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        <span className="text-xs font-semibold text-zinc-400 group-hover:text-indigo-700 flex items-center gap-1.5">
                          {dict.card.top_pick}: 
                          {/* 🔥 微缩图标渲染区 */}
                          {/* 🔥 微缩图标渲染区 */}
                          <div className="flex items-center gap-1.5 text-zinc-900">
                            <ToolIcon 
                              url={topTool?.link} 
                              alt={topTool?.name} 
                              fallback={topTool?.logo} 
                              // 👇 修改了这里：
                              // 1. w-5 h-5 (20px): 稍微大一点，防止被内部 padding 挤没
                              // 2. bg-white: 强制白底，解决透明 logo 看不清的问题
                              // 3. border-zinc-200: 加一个细边框，让白色 logo 在浅色背景上也能看清边界
                              // 4. shrink-0: 防止被挤压变形
                              className="w-5 h-5 rounded-full bg-white border border-zinc-200 shrink-0" 
                            />
                            <span>{topTool?.name}</span>
                          </div>
                          <ExternalLink size={10} className="ml-0.5 opacity-50" />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Newsletter dict={dict} />
      
      <div className="text-center py-10 text-zinc-300 text-xs">
        © 2025 WenX.ai
      </div>
    </main>
  );
}