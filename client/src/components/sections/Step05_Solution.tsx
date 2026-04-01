/*
 * ⑤ 解決策【安心+信用】
 * 役割：「こうすれば解決する」を提示 → 商品を自然に紹介
 * ルール：いきなり商品説明しない。悩み→原因→解決の流れを守る
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CONCEPT_BG, PRODUCTS } from "@/lib/images";

export default function Step05Solution() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="concept" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CONCEPT_BG} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(253,248,240,0.75) 0%, rgba(253,248,240,0.6) 50%, rgba(253,248,240,0.75) 100%)" }} />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              Solution
            </span>
          </div>

          <h2
            className={`font-accent text-xl sm:text-2xl lg:text-3xl text-center leading-relaxed lg:leading-relaxed mb-12 lg:mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#5C4D3C" }}
          >
            「ほっこりハンドクラフト」という、
            <br />
            ちいさな解決策
          </h2>

          {/* Solution card */}
          <div
            className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ boxShadow: "0 4px 20px rgba(107,91,78,0.08)" }}
          >
            {/* Tape decorations */}
            <div className="absolute -top-3 left-8 w-20 h-6 rounded-sm opacity-60" style={{ background: "linear-gradient(135deg, #F2D5D0, #E8C5C0)", transform: "rotate(-3deg)" }} />
            <div className="absolute -top-3 right-12 w-16 h-6 rounded-sm opacity-50" style={{ background: "linear-gradient(135deg, #B8C9A3, #A8B993)", transform: "rotate(2deg)" }} />

            <div className="lg:flex lg:gap-10 lg:items-center">
              {/* Text */}
              <div className="lg:flex-1 space-y-5 font-body text-sm lg:text-base leading-[2]" style={{ color: "#6B5B4E" }}>
                <p>
                  必要なのは、高価なものでも、特別な時間でもありません。
                </p>
                <p>
                  ただ、ふと手に取ったときに
                  <br />
                  <span className="font-accent" style={{ color: "#C4908F" }}>「心が満たされる」</span>
                  と感じられるもの。
                </p>
                <p>
                  「ほっこりハンドクラフト」は、そんな想いから生まれた
                  <br />
                  完全手作りのハンドクラフトブランドです。
                </p>
                <p>
                  ひと針ひと針、あなたのことを想いながら作った一枚が、
                  <br />
                  忙しい毎日のなかの「ちいさな味方」になれたら——
                </p>
              </div>

              {/* Product image */}
              <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                <div className="photo-frame mx-auto w-56 h-56 lg:w-64 lg:h-64 rounded-sm" style={{ "--rotate": "2deg" } as React.CSSProperties}>
                  <img src={PRODUCTS.IMG_9241} alt="ほっこりハンドクラフトの商品" className="w-full h-full object-cover rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Brand values */}
          <div className={`grid grid-cols-3 gap-4 lg:gap-8 mt-12 lg:mt-16 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { icon: "🧶", label: "完全手作り", desc: "ひとつひとつ\n心を込めて" },
              { icon: "🌿", label: "抗菌素材", desc: "お子さまにも\n安心の素材" },
              { icon: "🎁", label: "世界にひとつ", desc: "あなただけの\n特別な一枚" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl mb-2">{item.icon}</div>
                <p className="font-heading text-xs lg:text-sm font-bold mb-1" style={{ color: "#5C4D3C" }}>{item.label}</p>
                <p className="font-body text-xs leading-relaxed whitespace-pre-line" style={{ color: "#A0907E" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
