'use client';

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Newsletter({ dict }: { dict: any }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // 模拟 API 请求
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    // 🔥 核心修改：改为 pt-0 pb-20 (顶部无内边距，底部保留留白)
    // 这样它会紧贴着上方的列表区，不会有巨大的空隙
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-0 pb-20">
      <div className="relative overflow-hidden bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-500 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-purple-500 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* 左侧：文案区 */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-4">
              <Sparkles size={12} />
              <span>Weekly Digest</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              {dict.newsletter.title}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
              {dict.newsletter.desc}
            </p>
          </div>

          {/* 右侧：表单区 */}
          <div className="w-full md:w-auto md:min-w-[420px]">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 bg-emerald-400/10 px-6 py-4 rounded-2xl border border-emerald-400/20"
              >
                <CheckCircle2 size={20} />
                <span className="font-semibold text-sm">{dict.newsletter.success}</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    placeholder={dict.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white/10 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-white text-black font-bold rounded-2xl px-6 py-3.5 hover:bg-zinc-200 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-white/5"
                >
                  {status === 'loading' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      {dict.newsletter.button}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                
                <p className="text-center md:text-left text-[10px] text-zinc-600 font-medium uppercase tracking-wider pl-1">
                  {dict.newsletter.sub}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}