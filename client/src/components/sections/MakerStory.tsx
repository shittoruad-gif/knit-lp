/*
 * 作り手（お母さん）紹介セクション
 * 役割：人柄が伝わる → 安心感・信頼感
 * 議事録サマリーの指示：作り手の思いや写真を掲載し、人柄が伝わるようにする
 * 顔出しNG → 手元・作品写真 + PAW Co.ロゴで人柄を表現
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MAKER_BG, PRODUCTS, PAW_CO_LOGOS } from "@/lib/images";

export default function MakerStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="maker" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={MAKER_BG} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(253,248,240,0.85) 0%, rgba(253,248,240,0.7) 50%, rgba(253,248,240,0.85) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border"
              style={{ color: "#A0907E", borderColor: "#D4C5A0" }}
            >
              Maker's Story
            </span>
          </div>

          <h2
            className={`font-accent text-xl sm:text-2xl lg:text-3xl text-center leading-relaxed lg:leading-relaxed mb-12 lg:mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#5C4D3C" }}
          >
            作っているのは、<br />
            あなたと同じ「お母さん」です
          </h2>

          {/* Maker card — letter style */}
          <div
            className={`relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ boxShadow: "0 4px 24px rgba(107,91,78,0.1)" }}
          >
            {/* Tape decorations */}
            <div
              className="absolute -top-3 left-10 w-20 h-6 rounded-sm opacity-50 z-10"
              style={{ background: "linear-gradient(135deg, #98E0D2, #AAE6C8)", transform: "rotate(-2deg)" }}
            />
            <div
              className="absolute -top-3 right-10 w-16 h-6 rounded-sm opacity-50 z-10"
              style={{ background: "linear-gradient(135deg, #F2D5D0, #E8C5C0)", transform: "rotate(3deg)" }}
            />

            {/* Top: maker photos collage */}
            <div className={`grid grid-cols-3 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PRODUCTS.IMG_9240}
                  alt="手編みの制作風景"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PRODUCTS.IMG_9229}
                  alt="手作りのベビーウェア"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PRODUCTS.IMG_9237}
                  alt="手編みのお花ブーケを持つ様子"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content area */}
            <div className="p-8 lg:p-12">
              <div className="lg:flex lg:gap-10 lg:items-start">
                {/* Maker profile — PAW Co. logo + info */}
                <div className="lg:flex-shrink-0 mb-8 lg:mb-0">
                  <div className="mx-auto w-44 lg:w-52 text-center">
                    <div
                      className="mx-auto w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-4 border-white"
                      style={{ boxShadow: "0 4px 16px rgba(107,91,78,0.12)" }}
                    >
                      <img
                        src={PAW_CO_LOGOS.LOGO_1}
                        alt="PAW Co. ほっこりハンドクラフト"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 space-y-1">
                      <p className="font-heading text-sm font-bold" style={{ color: "#5C4D3C" }}>
                        ほっこりハンドクラフト
                      </p>
                      <p className="font-body text-[11px] leading-relaxed" style={{ color: "#A0907E" }}>
                        PAW Co.<br />
                        作り手 / 二児の母<br />
                        ニット・縫い物作家
                      </p>
                    </div>
                    {/* Small logo row */}
                    <div className="flex gap-2 justify-center mt-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/80" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                        <img src={PAW_CO_LOGOS.LOGO_2} alt="" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/80" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                        <img src={PAW_CO_LOGOS.LOGO_3} alt="" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maker's story — letter style */}
                <div className="lg:flex-1 space-y-5 font-body text-sm lg:text-base leading-[2]" style={{ color: "#6B5B4E" }}>
                  <p className="font-accent text-base lg:text-lg" style={{ color: "#C4908F" }}>
                    「子どもと過ごす時間を、もっと温かくしたい」
                  </p>
                  <p>
                    はじめまして。ほっこりハンドクラフトの作り手です。
                    <br />
                    私自身、子育てに追われる毎日の中で、
                    <br />
                    ふと「何か、心がほっとするものが欲しいな」と感じたのがきっかけでした。
                  </p>
                  <p>
                    子どもが手に取って安心なもの、
                    <br />
                    お母さんが見てちょっと笑顔になれるもの。
                    <br />
                    そんな想いを込めて、ひと針ひと針、手で作っています。
                  </p>
                  <p>
                    完璧じゃなくていい。
                    <br />
                    ただ、あなたの暮らしに
                    <span className="font-accent" style={{ color: "#C4908F" }}>「ちいさなほっこり」</span>
                    をお届けできたら、
                    <br />
                    それが何より嬉しいです。
                  </p>
                  {/* Signature */}
                  <div className="pt-2 text-right">
                    <p className="font-accent text-sm" style={{ color: "#A0907E" }}>
                      ——ほっこりハンドクラフト 作り手より
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: more work photos */}
            <div className={`px-8 lg:px-12 pb-8 lg:pb-12 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {[PRODUCTS.IMG_9222, PRODUCTS.IMG_9221, PRODUCTS.IMG_9244, PRODUCTS.IMG_9223].map((img, i) => (
                  <div
                    key={i}
                    className="photo-frame rounded-sm overflow-hidden"
                    style={{ "--rotate": `${(i - 1.5) * 1.2}deg` } as React.CSSProperties}
                  >
                    <img
                      src={img}
                      alt="手作りの作品"
                      className="w-full aspect-square object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p
                className={`text-center font-body text-xs mt-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ color: "#A0907E" }}
              >
                ひとつひとつ、手作業で心を込めて制作しています
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
