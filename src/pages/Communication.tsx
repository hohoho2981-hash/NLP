import { motion } from 'motion/react';
import { Eye, Ear, Accessibility, Palette, Wind, CheckCircle, Brain, Heart } from 'lucide-react';

export default function Communication() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 space-y-20">
      {/* Hero Section */}
      <section className="space-y-4">
        <span className="font-body font-semibold text-secondary uppercase tracking-[0.2em] text-xs">模組 02</span>
        <h2 className="font-headline font-bold text-4xl md:text-6xl text-primary max-w-2xl leading-tight">精通人際溝通</h2>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">透過感官敏銳度與認知一致性，解鎖人際互動中隱藏的深層訊息。</p>
      </section>

      {/* Sensory Awareness (VAK) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold text-2xl text-primary">感官敏銳度 (VAK)</h3>
          <span className="text-secondary font-semibold text-sm">表象系統</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Eye, 
              title: '視覺型 (Visual)', 
              desc: '透過視覺處理。「我懂你的意思（我看見了）。」專注於圖像與色彩。',
              tags: ['圖片', '焦點'],
              color: 'primary'
            },
            { 
              icon: Ear, 
              title: '聽覺型 (Auditory)', 
              desc: '透過聲音處理。「聽起來很耳熟。」專注於語調與節奏。',
              tags: ['旋律', '回聲'],
              color: 'secondary'
            },
            { 
              icon: Accessibility, 
              title: '觸覺/體感型 (Kinesthetic)', 
              desc: '透過感覺處理。「掌握現狀（感覺到了）。」專注於質地與情緒。',
              tags: ['重量', '觸感'],
              color: 'tertiary'
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4 border-b-4 border-primary"
              style={{ borderColor: `var(--color-${card.color})` }}
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-headline font-bold text-xl text-primary">{card.title}</h4>
              <p className="text-sm text-on-surface-variant">{card.desc}</p>
              <div className="flex gap-2">
                {card.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-primary uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rapport & Calibration */}
      <section className="asymmetric-grid gap-8">
        <div className="bg-primary p-10 rounded-2xl text-white flex flex-col justify-between space-y-12">
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-3xl">建立親和感</h3>
            <p className="opacity-80 leading-relaxed max-w-md">親和感是與他人建立連結的能力，旨在營造信任與理解的氛圍。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { id: '01', title: '配合 (Pacing)', desc: '在對方的現狀下與其會合。' },
              { id: '02', title: '呼應 (Matching)', desc: '採用對方部分行為片段。' },
              { id: '03', title: '鏡映 (Mirroring)', desc: '微妙地反映對方的生理狀態。' }
            ].map(item => (
              <div key={item.id} className="space-y-2">
                <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center font-bold text-xs">{item.id}</div>
                <h5 className="font-bold text-sm">{item.title}</h5>
                <p className="text-xs opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary-container/30 p-8 rounded-2xl space-y-6">
          <h3 className="font-headline font-bold text-2xl text-secondary">校準技巧</h3>
          <ul className="space-y-6">
            {[
              { icon: Palette, title: '膚色', desc: '注意情緒轉變時，從蒼白到漲紅的細微變化。' },
              { icon: Wind, title: '呼吸', desc: '留意頻率、深度與位置（胸式 vs. 腹式）。' },
              { icon: Eye, title: '瞳孔變化', desc: '瞳孔變化反映了感興趣程度或高腎上腺素狀態。' }
            ].map((skill, i) => (
              <li key={i} className="flex items-start gap-4">
                <skill.icon className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <span className="block font-bold text-primary">{skill.title}</span>
                  <span className="text-xs text-on-surface-variant">{skill.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Satir Iceberg Theory */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-headline font-bold text-3xl text-primary">薩提爾冰山理論</h3>
          <p className="text-on-surface-variant">區分「所說的」與「所感受的」之間的差異。</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-indigo-900">
            <img 
              alt="Iceberg" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxg2gJ1CrzAK5H6pfUl890cnvI6JSm3lIZSqzU5_x498sxNSd0mlft5twGYYStoPO0Hx5wa2l9tPo1FN2W_7izz5LueFZ0nOPoOJ3xXWg1_4-JSreVwBk_6VqQFM8HXyzOLbehfsiDUjLZr9fqoqLCmIjzYZeM8yPTYx4Sw0b3sNdZNpSvpZWMJsLA1Hp1ED7JZp1PjRtRIo0ouMHi0YRsQi3tJA2ZlCbRabk5QUwZLae7hQ5_N1uQkJSH6oZSPbVD4LOpGluXOg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-12">
            {/* Surface (External) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl border border-white/20 md:-translate-y-8"
            >
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest block mb-2">冰山尖端 (外部)</span>
              <h4 className="font-headline font-bold text-xl text-primary mb-3">外部語言</h4>
              <p className="text-sm text-on-surface-variant mb-6">他人可見的行為、言語與行動。</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-primary font-bold">
                  <CheckCircle className="w-4 h-4" />
                  言語陳述
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-bold">
                  <CheckCircle className="w-4 h-4" />
                  身體姿勢
                </div>
              </div>
            </motion.div>
            {/* Subsurface (Internal) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl border border-white/20 md:translate-y-8"
            >
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest block mb-2">水面以下 (內部)</span>
              <h4 className="font-headline font-bold text-xl text-primary mb-3">內在經驗</h4>
              <p className="text-sm text-on-surface-variant mb-6">期待、價值觀以及對連結的渴望。</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-primary font-bold">
                  <Brain className="w-4 h-4" />
                  核心信念
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-bold">
                  <Heart className="w-4 h-4" />
                  未滿足的需求
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="flex flex-col items-center py-12 space-y-8 text-center">
        <div className="space-y-2">
          <h4 className="font-headline font-bold text-2xl text-primary">準備好練習了嗎？</h4>
          <p className="text-on-surface-variant">走入現實世界，測試你的感官敏銳度。</p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          測試你的敏銳度
        </button>
      </section>
    </div>
  );
}
