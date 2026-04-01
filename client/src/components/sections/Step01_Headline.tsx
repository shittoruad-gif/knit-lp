/*
 * ① ヘッドライン（興味を引く）+ CTA①
 * 役割：自分ごと化 → 「私のことだ」と思わせる
 * ルール：自分目線禁止、相手目線で書く
 */
import { useEffect, useState } from "react";
import { HERO_BG, LOGO_CAT_SLEEPING, PRODUCTS } from "@/lib/images";
import CtaButton from "@/components/CtaButton";
import LineButton from "@/components/LineButton";

export default function Step01Headline() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(253,248,240,0.25) 0%, rgba(253,248,240,0.05) 40%, rgba(253,248,240,0.5) 100%)" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <p
            className={`font-body text-sm lg:text-base tracking-widest mb-5 lg:mb-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "#A0907E" }}
          >
            ——ちょっと、ひと息つきませんか？
          </p>

          {/* Main headline — メインキャッチコピー */}
          <h1
            className={`font-accent text-2xl sm:text-3xl lg:text-[2.8rem] leading-[1.7] lg:leading-[1.7] mb-6 lg:mb-8 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#5C4D3C" }}
          >
            忙しい毎日に、少し疲れていませんか？
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl" style={{ color: "#C4908F" }}>
              ——親子の暮らしに、ちいさな温もりを。
            </span>
          </h1>

          {/* Sub copy — サブコピー */}
          <p
            className={`font-body text-sm lg:text-base leading-[2] max-w-md transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "#8C7B6B" }}
          >
            お子さまとお揃いで楽しめるニットや縫い物、
            <br />
            自分へのちいさなご褒美になるアイテムを、
            <br />
            ひとつひとつ、心を込めて作っています。
          </p>

          {/* CTA① */}
          <div className={`mt-8 lg:mt-12 flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CtaButton variant="primary" />
            <LineButton />
            <a
              href="#empathy"
              className="inline-flex items-center gap-1.5 font-heading text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-[#F2D5D0]/20"
              style={{ color: "#A0907E" }}
            >
              もう少し読む
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3V11M7 11L3 7M7 11L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Product preview — floating photos (desktop) */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="relative w-72 h-80">
            <div className="photo-frame absolute top-0 right-0 w-48 h-48 rounded-sm" style={{ "--rotate": "3deg" } as React.CSSProperties}>
              <img src={PRODUCTS.IMG_9244} alt="手作りハンドクラフト商品" className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="photo-frame absolute bottom-0 left-0 w-40 h-40 rounded-sm" style={{ "--rotate": "-2deg" } as React.CSSProperties}>
              <img src={PRODUCTS.IMG_9227} alt="手作りハンドクラフト商品" className="w-full h-full object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo */}
      <img
        src={LOGO_CAT_SLEEPING}
        alt="ほっこりハンドクラフト ロゴ"
        className={`absolute bottom-6 right-6 lg:bottom-10 lg:right-14 w-16 h-16 lg:w-24 lg:h-24 object-contain transition-all duration-1000 delay-1200 drop-shadow-sm ${loaded ? "opacity-80 translate-y-0" : "opacity-0 translate-y-8"}`}
      />

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1500 ${loaded ? "opacity-50" : "opacity-0"}`}>
        <span className="font-body text-xs tracking-widest" style={{ color: "#A0907E" }}>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#A0907E] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
