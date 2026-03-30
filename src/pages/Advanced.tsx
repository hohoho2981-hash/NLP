import { motion } from 'motion/react';
import { Brain, Share2, Infinity, Layers, Aperture, Grid, ArrowDown, Sparkles } from 'lucide-react';

export default function Advanced() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 space-y-20">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden min-h-[400px] flex items-end p-8 md:p-12 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container opacity-90"></div>
          <img 
            alt="Neural Pathways" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjODCDuPNzk6t9wi--jb8D3NX1eHxv4mLLolCJ4LOo6vS9eSsDbH3iOD6RzvQruygR7k12EYX1VZ0fs6Fo9va6Gb0m7FRu-2xE-9xI-QZ1olkrzDN3-tJ7tH8hZ5e2K8M-MZoAte0Q8MuySFN9hWlfDIxZzEdieo9H7OBO9DGT9uHVj4RW6GySZaJ-IICfJpKrjrILWs52PiSGrNxXIeULm62Wt7f1K9GbzjywzsBN-yjNRuSOq_whZfNn6EAinpr_p1dyg7pubY"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="font-body uppercase tracking-widest text-secondary-container font-bold text-sm">進階模組</span>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">語言模式與潛意識</h2>
          <p className="text-lg opacity-90 leading-relaxed">精通米爾頓模式的細膩藝術與檢定語言模式的精準度，將溝通轉化為深具影響力的工具。</p>
        </div>
      </section>

      {/* The Milton Model */}
      <section className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h3 className="font-headline text-3xl font-bold text-primary">米爾頓模式 (催眠語言)</h3>
          <span className="text-secondary font-semibold">催眠大師之道</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-low rounded-[2rem] p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-white">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-headline text-xl font-bold">讀心術</h4>
            </div>
            <p className="text-on-surface-variant leading-relaxed">在沒有證據的情況下，聲稱了解對方的內在狀態。這種模式能讓聽者感到被深刻理解，從而快速建立親和感。</p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-primary italic text-primary">
              「我知道你正開始體會到，當你放鬆時，你的學習速度能有多快……」
            </div>
          </div>
          <div className="bg-surface-container-highest rounded-[2rem] p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">因果關係</h4>
              <p className="text-on-surface-variant text-sm">將當前的行為與期望的內在改變連結起來。</p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200">
              <span className="block font-bold text-xs uppercase text-secondary mb-2">模式範例</span>
              <p className="italic text-sm">「聆聽我的聲音能讓你的思維隨之擴張。」</p>
            </div>
          </div>
          <div className="bg-primary text-white rounded-[2rem] p-8 space-y-4">
            <Infinity className="w-10 h-10 text-secondary-container" />
            <h4 className="font-headline text-xl font-bold">全稱量詞</h4>
            <p className="opacity-80 text-sm">使用如「每個」、「所有」和「總是」等詞彙，創造出無所不包的催眠現實。</p>
            <p className="font-medium pt-4">「而且你採取的<span className="text-secondary-container">每一次</span>呼吸，都將你<span className="text-secondary-container">所有</span>的專注力帶到此處。」</p>
          </div>
          <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] p-8 flex items-start gap-8 shadow-sm border border-slate-100">
            <div className="hidden sm:block w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
              <img 
                alt="Abstract Art" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7JdnwrQfwq3rHkj-Ra54_K3Yvf3RTHJm72MrdvWXaL7I48XIvUS_xjhbzwZmrVtOhr9IX02vA72rIjMuCLqLBKkYEKY3DuzfM9p102ycwT_AOod9I7vYgco_4-_EdUP8MqXNt47ANy8HLfabaPwxTLK839fAl1QEBZxn8IlaoiL4bvssjVbOjgOnCIOAzOspWJvghqc0lx16wZGcTJmmtm_xC7jN-hfZls7iLZF9X13Vx9P3bmSLsiN3ie8-idoNGBsbT0f5aP7s"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-primary">名詞化</h4>
              <p className="text-on-surface-variant">將過程詞彙固化為名詞。這讓聽者能為這些抽象概念填入個人專屬的意義。</p>
              <div className="flex flex-wrap gap-2">
                {['發現', '洞察', '轉化'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-container-high rounded-full text-sm font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Meta Model */}
      <section className="bg-indigo-950 text-white rounded-[3rem] p-8 md:p-16 space-y-12">
        <div className="max-w-3xl space-y-4">
          <h3 className="font-headline text-4xl font-bold">檢定語言模式</h3>
          <p className="text-indigo-200 text-lg">溝通的手術刀。使用這些模式來挑戰對方的「地圖」，並找回說話者經驗的深層結構。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Layers, title: '刪除 (Deletions)', desc: '找回缺失的資訊。當聽到「我很難過」時，挑戰問道：「具體而言是為了什麼而難過？」' },
            { icon: Aperture, title: '扭曲 (Distortions)', desc: '修正偏差的邏輯。挑戰讀心術：「具體而言，你是怎麼知道他們是這樣想的？」' },
            { icon: Grid, title: '一般化 (Generalizations)', desc: '打破「總是」或「從不」的陷阱。「是否曾有過那並非事實的時候？」' }
          ].map((item, i) => (
            <div key={i} className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
                <item.icon className="w-6 h-6 text-indigo-400 group-hover:text-white" />
              </div>
              <h5 className="font-bold text-xl">{item.title}</h5>
              <p className="text-indigo-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reframing Techniques */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-xl text-xs uppercase tracking-widest">技術亮點</div>
          <h3 className="font-headline text-4xl font-bold text-primary">精通換框技巧</h3>
          <p className="text-on-surface-variant text-lg">透過改變事件所處的概念或情緒背景，來改變該事件的意義。</p>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-2 h-20 bg-secondary rounded-full shrink-0"></div>
              <div className="space-y-2">
                <h6 className="font-bold text-xl">情境換框 (Context Reframe)</h6>
                <p className="text-on-surface-variant italic leading-relaxed">「固執是不好的。」 → 「當你在談判艱難的合約時，固執是一項巨大的資產。」</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-2 h-20 bg-tertiary rounded-full shrink-0"></div>
              <div className="space-y-2">
                <h6 className="font-bold text-xl">意義換框 (Meaning Reframe)</h6>
                <p className="text-on-surface-variant italic leading-relaxed">「我的老闆總是盯著我的工作。」 → 「太好了，你的老闆非常投入於確保你能產出高品質的成果。」</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-secondary-container/20 rounded-[3rem] blur-2xl group-hover:bg-secondary-container/30 transition-all duration-500"></div>
          <div className="relative bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
            <h4 className="font-headline text-2xl font-bold text-primary mb-8">從不可能到可能</h4>
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase text-red-400">限制性信念</span>
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-on-surface-variant">
                  「我學不會這套複雜的 NLP 模式。」
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-secondary animate-bounce" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase text-secondary">賦能轉化</span>
                <div className="p-4 bg-secondary-container/20 rounded-2xl border border-secondary/10 text-on-surface-variant">
                  「如果你意識到自己從小就已經掌握了多門複雜的語言，會發生什麼事？」
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              練習這個轉換
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
