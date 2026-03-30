import { motion } from 'motion/react';
import { PlayCircle, Users, Target, Eye, Settings2, Map, ArrowRight } from 'lucide-react';

export default function Foundations() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container p-8 md:p-16 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgyXuCNM0FG3sQV762r0Huepq05HsRBF7ViZ1O6-_10PFQUbdWRlPq5L0zRxsI-p28mtEp6KW6vUZja9daUKv1_J4-HfkiJlrtDRo3R5no1NZJH9t-1_F8W9nUXEU5WNxhYx6ldAsG3DF-HV6STQpozpoeM052ih8ijszFcieHKWTF6k9DlQDfjrHOMxz-MBB6h-dHhsmhMFudE8pbxXvlxh5XJWdKhEnD-BbN-w7sfk7v8wYgWzy6oFOZ-BVyshjht2zjm5suYTY"
            alt="Neural Pathways"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="font-body text-xs uppercase tracking-[0.2em] opacity-80 block">導論</span>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">掌握心智的語言</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            神經語言程式學 (NLP) 是一種心理學方法，透過分析成功人士所使用的策略，並將其應用於達成個人目標。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              { title: '神經 (Neuro)', desc: '身心運作的神經過程。' },
              { title: '語言 (Linguistic)', desc: '我們如何使用語言來整理思緒。' },
              { title: '程式 (Programming)', desc: '我們習得並不斷重複的行為模式。' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
              >
                <span className="font-headline font-bold text-xl mb-1 block">{item.title}</span>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary">NLP 的四大支柱</h2>
            <p className="text-on-surface-variant leading-relaxed">每一個成功的 NLP 應用都建立在這四個關於人類互動與改變的核心原則之上。</p>
          </div>
          <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-full font-bold shadow-sm hover:opacity-90 transition-all flex items-center gap-2 group">
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            掌握基礎
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: '親和感 (Rapport)', desc: '與他人建立具備相互信任與回應的高品質關係。' },
            { icon: Target, title: '目標導向思維', desc: '具體知道自己想要什麼，將焦點從問題轉向清晰的感官目標。' },
            { icon: Eye, title: '感官敏銳度', desc: '察覺自己與他人身上的細微線索，以理解人們的思考方式。' },
            { icon: Settings2, title: '行為彈性', desc: '改變自身行為的能力，直到獲得你想要的結果為止。' }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">{pillar.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Presuppositions */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="font-headline text-3xl font-bold text-primary">12 個 NLP 假設前提</h2>
          <p className="text-on-surface-variant">構成 NLP 大師心態的核心信念。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 bg-indigo-50 border border-indigo-100 p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-6 font-bold">01</div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4 leading-tight">地圖不等於疆域</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">我們對現實的感知僅是主觀模型。為了有效溝通，我們必須尊重他人的模型。</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Map className="w-full h-full" />
            </div>
          </div>
          {[
            { id: '02', title: '沒有失敗，只有回饋', desc: '世上沒有失敗，只有回饋。每一種結果都是學習的機會。' },
            { id: '03', title: '身心一體', desc: '心靈和身體是同一個系統的一部分，會深深地互相影響。' },
            { id: '04', title: '正面意圖', desc: '每一種行為在潛意識的某個層面上都有其正面的意圖。' },
            { id: '05', title: '多一個選擇更好', desc: '擁有選擇比沒有選擇更好。NLP 能創造更多選項。' }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10 space-y-2">
              <div className="text-primary font-bold">{item.id}</div>
              <h4 className="font-headline font-bold text-primary">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-secondary/10 md:col-span-2 flex items-start gap-4">
            <div className="bg-secondary/10 p-3 rounded-xl">
              <Settings2 className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <div className="text-primary font-bold mb-1">06</div>
              <h4 className="font-headline font-bold text-primary mb-1">溝通的意義在於回應</h4>
              <p className="text-sm text-on-surface-variant">溝通的意義取決於你獲得的回應，而不僅僅是你的意圖。</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
            <div className="text-primary font-bold mb-2">07</div>
            <h4 className="font-headline font-bold text-primary mb-2">內在資源</h4>
            <p className="text-xs text-on-surface-variant">每個人都已經具備了成功所需的所有資源。</p>
          </div>
          <button className="bg-primary-container text-white p-6 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-primary transition-colors">
            <ArrowRight className="w-8 h-8 mb-2 group-hover:translate-x-2 transition-transform" />
            <span className="font-bold text-sm">探索全部 12 個</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tertiary-fixed text-on-tertiary-fixed rounded-[3rem] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none mix-blend-overlay">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHdBUQXio1CefSdRaVlB2a0YwymvPVHX0rJ92DByb3h_kAW4B3_jXGcol56dpD5X6HLp9HRJwLfwpqdgdGr-DEkWRml3blQSxDk9lWbPNPlPIKpUX0elVH5bqLOJcWiPOjWHIG6vWs3ul5W_8szhH5GSoscnwj2Vr8-WOsO9KDSzA_gVPm5mIfTceXhkH3bVheDcx8gteBalL4s8GZcfR9Q_425B_gF1kYQc2vRVvZrR32oPEpF6rT0uqyR_-0GvlW_sHNS9hJa2E"
            alt="Abstract Architecture"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">準備好重塑你的卓越了嗎？</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">加入 15,000 多名學生的行列，掌握影響力與心理自由的藝術。</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              開始學習
            </button>
            <button className="bg-white/50 backdrop-blur-md text-primary px-10 py-4 rounded-full font-bold text-lg border border-primary/10 hover:bg-white/70 transition-colors">
              查看課程大綱
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
