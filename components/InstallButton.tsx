'use client';

import { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InstallButton({ label }: { label: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. 判断是否已经是 App 模式 (如果是，就隐藏按钮)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);
    }

    // 2. 判断是不是 iOS 设备
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // 3. 监听安卓/Chrome 的安装事件
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // 如果已经安装了，就不显示按钮
  if (isStandalone) return null;

  const handleInstallClick = async () => {
    if (isIOS) {
      // iOS 只能弹窗提示
      setShowIOSGuide(true);
    } else if (deferredPrompt) {
      // 安卓/PC Chrome 触发原生安装
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      // 兜底：如果是普通浏览器且不支持 PWA (比如 PC Safari)，也弹 iOS 指引或提示
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-1.5 text-sm font-bold text-zinc-500 hover:text-black hover:bg-zinc-100 px-3 py-1.5 rounded-full transition-colors"
      >
        <Download size={16} />
        <span className="hidden sm:inline">{label}</span>
      </button>

      {/* iOS 安装指引弹窗 */}
      <AnimatePresence>
        {showIOSGuide && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none">
            {/* 遮罩层 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIOSGuide(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            />

            {/* 弹窗卡片 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-white w-full max-w-sm m-4 p-6 rounded-3xl shadow-2xl pointer-events-auto relative"
            >
              <button 
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  W
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">安装到桌面</h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    将 WenX 添加到主屏幕，获得原生 App 体验。
                  </p>
                </div>

                <div className="w-full h-px bg-zinc-100 my-2" />

                {/* 步骤演示 */}
                <div className="flex flex-col gap-4 w-full text-sm text-zinc-700">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 font-bold text-xs">1</span>
                    <span>点击浏览器底部的</span>
                    <Share size={18} className="text-blue-500" />
                    <span className="font-bold">分享</span>
                    <span>按钮</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 font-bold text-xs">2</span>
                    <span>向下滑动，选择</span>
                    <PlusSquare size={18} className="text-zinc-900" />
                    <span className="font-bold">添加到主屏幕</span>
                  </div>
                </div>
              </div>
              
              {/* 指示箭头 (仅在手机端显示指向底部) */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 sm:hidden"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}