import { motion } from 'motion/react';
import { Target, Ruler, Check, Award, Clock, Leaf, RefreshCw, Eye, Ear, Accessibility, Flower, Utensils, Bolt, Sparkles, Construction, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SelfImprovement() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 space-y-20">
      {/* Hero: Success Tracker */}
      <section className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-primary to-primary-container text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-white/90 font-bold bg-white/20 px-4 py-1.5 rounded-full inline-block">自我提升旅程</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">你的成功速度</h2>
            <p className="text-indigo-100/80 text-lg leading-relaxed">你目前正在精通「自我提升」支柱。你的神經路徑正與你的最高目標保持一致。</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-white/10" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                <motion.circle 
                  initial={{ strokeDashoffset: 364.4 }}
                  animate={{ strokeDashoffset: 109.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-tertiary-fixed-dim" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeWidth="8"
                ></motion.circle>
              </svg>
              <span className="absolute font-headline text-2xl font-bold">70%</span>
            </div>
            <span className="font-body text-sm font-semibold text-white/90">邁向精通之路</span>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
      </section>

      {/* SMARTER Goals */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-headline text-3xl font-bold text-primary">SMARTER 目標設定</h3>
          <p className="text-on-surface-variant font-medium">為未來的自己建立精準架構。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {[
            { id: 'S', title: '具體 (Specific)', desc: '明確定義你想實現的目標。', icon: Target },
            { id: 'M', title: '可衡量 (Measurable)', desc: '具備清晰指標以追蹤每日進展。', icon: Ruler },
            { id: 'A', title: '可達成 (Achievable)', desc: '在保持現實的同時挑戰極限。', icon: Check },
            { id: 'R', title: '有獎勵 (Rewarding)', desc: '將目標與內在的情緒獎勵連結。', icon: Award, highlight: true },
            { id: 'T', title: '有時限 (Time-framed)', desc: '設定明確的截止日期以創造迫切感。', icon: Clock },
            { id: 'E', title: '生態平衡 (Ecological)', desc: '確保與你的生活和價值觀和諧共處。', icon: Leaf },
            { id: 'R', title: '重新陳述 (Rephrased)', desc: '使用積極、主動的語言來陳述目標。', icon: RefreshCw }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className={cn(
                "p-6 rounded-2xl space-y-4 transition-all duration-300",
                item.highlight ? "bg-tertiary-fixed shadow-lg shadow-tertiary/5" : "bg-surface-container-low"
              )}
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm font-bold text-xl">{item.id}</div>
              <h4 className={cn("font-bold text-sm", item.highlight ? "text-tertiary" : "text-primary")}>{item.title}</h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Anchoring & Circle of Excellence */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 space-y-8 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="font-headline text-2xl font-bold text-primary">心錨設定程序</h3>
            <p className="text-on-surface-variant">透過多重感官聯覺觸發你的巔峰狀態。</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Eye, label: '視覺' },
              { icon: Ear, label: '聽覺' },
              { icon: Accessibility, label: '動覺' },
              { icon: Flower, label: '嗅覺' },
              { icon: Utensils, label: '味覺' }
            ].map((sense, i) => (
              <div key={i} className="bg-secondary-container/20 px-4 py-3 rounded-xl flex items-center gap-3">
                <sense.icon className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-secondary text-sm">{sense.label}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <Bolt className="w-5 h-5" />
            啟動新心錨
          </button>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden group min-h-[400px]">
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3JMF7gjREZ6nf6P5nCbmneQUmUO_JiD3PsZ5ubZJ7aXxRSXtjdKBuelaAy0t_rRkOGZ9TfcYwc57AGkcgfpZINFGiJ2X2GiIQPIv-til_Yk1GhOOlUt8PVtdqFxL4uKflR-fo-BEnHJOBRZ2X-IVzPEzOcoqJtZuGRKUCjXPWs_HSMAlfBmk7kiT5CpTQGBysu9tmZBEo2tBFIl94fmob4hkLr217jBPzHqLiD13DI7p_jkej2d1RXNdspMI7IR6kY8pZnwSuyno"
            alt="Circle of Excellence"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-10 flex flex-col justify-end">
            <h3 className="font-headline text-3xl font-bold text-white mb-4">卓越圈</h3>
            <p className="text-white/80 leading-relaxed mb-6">走進你表現最頂尖的投影領域。觀想色彩，感受強度，並鎖定觸發裝置。</p>
            <button className="w-fit bg-tertiary-fixed text-on-tertiary-fixed px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-transform active:scale-95">
              導引音訊
            </button>
          </div>
        </div>
      </section>

      {/* EQ Strategy */}
      <section className="space-y-8">
        <h3 className="font-headline text-3xl font-bold text-primary">情緒管理 (EQ)</h3>
        <div className="bg-surface-container-low rounded-[2.5rem] p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {[
              { id: '01', title: '辨識 (Recognize)', desc: '命名情緒以緩解其強度。' },
              { id: '02', title: '共情 (Empathize)', desc: '理解感受背後的正向意圖。' },
              { id: '03', title: '思考 (Think)', desc: '分析導致該狀態的心智模式。' },
              { id: '04', title: '聆聽 (Hear)', desc: '不帶批判地聆聽內在對話。' },
              { id: '05', title: '整合 (Integrate)', desc: '使身心一致，做出統一回應。' },
              { id: '06', title: '察覺 (Notice)', desc: '觀察改變時生理狀態的轉移。' },
              { id: '07', title: '保留 (Keep)', desc: '保留教訓的同時釋放壓力。' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-3xl border-b-4 border-secondary-container space-y-4"
              >
                <span className="text-3xl font-extrabold text-secondary opacity-20">{step.id}</span>
                <h4 className="font-bold text-primary text-sm">{step.title}</h4>
                <p className="text-[10px] leading-relaxed text-on-surface-variant">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disney Creative Strategy */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-headline text-3xl font-bold text-primary">迪士尼創意策略</h3>
            <p className="text-on-surface-variant font-medium">循環切換不同的心智視角來進行創新。</p>
          </div>
          <div className="flex bg-surface-container-high p-1.5 rounded-2xl">
            <button className="px-6 py-2 bg-white rounded-xl shadow-sm font-bold text-primary transition-all">互動模式</button>
            <button className="px-6 py-2 rounded-xl text-on-surface-variant font-medium">案例研究</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: '夢想家', 
              desc: '純粹的想像。沒有限制。問「如果...會怎樣？」和「為什麼不？」。這是奇蹟開始的地方。',
              icon: Sparkles,
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ga0FAqmOsR7fiUxrf2BO9YuY4UVRCDThzgVGLiSqCETzAiZVornDecOzasnboWnF2Ytq5xxACGNZZ0yP37J3xdCG9LACJCHRVsE8NPuWv4jcJJT5oJBvU9EgBZoNL07pQ0PjMoPBpMdA4f0x6XlaUK7qfLU0A2wu0X2V9EciFJf4FS65_aI6ZBESQ1O0smLU7dgeUbP5KFe3ZHB4JCkmaXZhKXZhqvYLcDfAPxV_PEU68Yxp87mVMxMsi9HRIdPOq4g0LzDkZj8',
              color: 'primary'
            },
            { 
              title: '實踐家', 
              desc: '行動與建構。我們如何實現它？定義所需的步驟和資源。',
              icon: Construction,
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnuLhHGbEDOgDfd720j2p4aluffRPGX2dl6hVsuWycVCgkkLeOrEeDEok8k7jfVgH1vMlroFMe5NSpb8kSGYyAZpMWyDDBAJK1iEO-0daBw55cQsuB4LH7eMsyWblLrETvAtvfSlVDfEetFtQStYoQe-E1fL-1Pq4F67A64MUc49z2zVD5M4V9czczGxl0FlTHQuZhOvQoKH65bwar6kFj5kpwmMzNmHTbBvAD7Hobpm5YCWP_fteBBqU7_Z8bE0YmoJYy3rjJI7s',
              color: 'tertiary'
            },
            { 
              title: '評論家', 
              desc: '品質控管。哪裡可能出錯？找出漏洞並優化計畫，以實現最大韌性。',
              icon: ShieldAlert,
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Fg-lFfh7EoXIcppJslP4S1HD8eVym-1aDAy_Yk4DWvRyCulwVgJE9QiB6eudBQBMUrqcmQYGXyQ4gIzA_w2bZgrJPU3IGqRW8JJLK1Nb8dKEbx28a28C35OxAQh2f1DhViOKqfkHBQwWEnUw7PCLgcgg53wnf9pxlo14vofAtGVX3JLHBXR-elCrqH1fvH178jxdpKNO-rx8FzyWth3XEwe8xVlQH2-y58mDMKTjAEI3NzuDKJ_Gp9StCvADM5PFPj7F1zblBs',
              color: 'on-surface'
            }
          ].map((card, i) => (
            <div key={i} className="relative h-[450px] rounded-[2rem] overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={card.img} alt={card.title} referrerPolicy="no-referrer" />
              <div className={cn("absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity", `bg-${card.color}`)}></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <card.icon className="w-6 h-6" />
                </div>
                <h4 className="font-headline text-2xl font-bold mb-2">{card.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
