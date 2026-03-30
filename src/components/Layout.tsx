import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, MessageSquare, Brain, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '核心基礎', icon: Home },
    { path: '/communication', label: '溝通技巧', icon: MessageSquare },
    { path: '/advanced', label: '進階課程', icon: Brain },
    { path: '/self-improvement', label: '自我提升', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top App Bar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-primary" />
            </button>
            <h1 className="font-headline font-extrabold text-primary text-xl tracking-tight">
              NLP Mastery Academy
            </h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-slate-200">
            <img 
              alt="Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnmp2f6a7r9gk55TKnVA6ujy-irh6ddFNc1t3EMsCTPJVPDsdup7cKGhfrL3_7uSKHc67-maSd2DEEZCDzowFsiyj7SxwsR_YXDH_bPCxXOifaNsq2-ZCDTeUQBRmfMmauuWBmBkkGH3PyOlPGQ-4Jwyioy3nFSHNuYT2D_rKEbtI8fvJ6ghy8ZsrEPvc4DeQWkDVBP6cOIyjr7rVrRokGRgTyQkswi_Fmv1FeOdpfp-8hmyWcooHS5XXWc87jFAT6oVMif8R0O9o"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-32">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-slate-100 rounded-t-[2rem] shadow-[0_-4px_20px_rgba(21,21,125,0.06)]">
        <div className="max-w-md mx-auto flex justify-around items-center px-4 pb-8 pt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 active:scale-90",
                  isActive ? "text-primary bg-indigo-50" : "text-slate-400 hover:text-primary"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
                <span className="font-body font-semibold text-[10px] uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
