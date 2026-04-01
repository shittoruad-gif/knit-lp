/*
 * ⑩ 最終CTA（行動）【安心+信用】+ CTA④
 * 役割：作り手の想い → 最後の背中を押す
 * ルール：押し売りしない。寄り添うトーンで締める
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MAKER_BG, LOGO_CAT, PRODUCTS } from "@/lib/images";
import CtaButton from "@/components/CtaButton";
import LineButton from "@/components/LineButton";

export default function Step10FinalCTA() {
  const { ref: makerRef, isVisible: makerVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <>
      {/* === 作り手の想い === */}
      <section id="maker" className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={MAKER_BG} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(253,248,240,0.85) 0%, rgba(253,248,240,0.8) 50%, rgba(253,248,240,0.85) 100%)" }} />
        </div>

        <div className="container relative z-10" ref={makerRef}>
          <div className="max-w-3xl mx-auto">
            <div className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${makerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
                Our Story
              </span>
              <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
                作り手の想い
              </h2>
            </div>

            <div className={`lg:flex lg:gap-10 lg:items-start transition-all duration-700 delay-200 ${makerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {/* Image */}
              <div className="lg:w-5/12 mb-8 lg:mb-0">
                <div className="photo-frame rounded-sm" style={{ "--rotate": "-1.5deg" } as React.CSSProperties}>
                  <img src={PRODUCTS.IMG_9242} alt="作り手の手元" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" />
                </div>
              </div>

              {/* Story */}
              <div className="lg:w-7/12 space-y-5 font-body text-sm lg:text-base leading-[2]" style={{ color: "#6B5B4E" }}>
                <p>
                  はじめまして。
                  <br />
                  「ほっこりハンドクラフト」の作り手です。
                </p>
                <p>
                  わたし自身も、仕事と子育てに追われる毎日を送っています。
                  <br />
                  「自分の時間なんてない」と感じる日も、たくさんあります。
                </p>
                <p>
                  そんなとき、ものづくりをしている時間だけは、
                  <br />
                  心が静かになれる——
                  <br />
                  そのことに気づきました。
                </p>
                <p>
                  「この温かさを、同じように頑張っている誰かに届けたい」
                </p>
                <p>
                  そう思って始めたのが、このブランドです。
                </p>
                <p className="font-accent text-base lg:text-lg" style={{ color: "#C4908F" }}>
                  ひと針ひと針に、
                  <br />
                  「あなたの毎日が、少しでもあたたかくなりますように」
                  <br />
                  という想いを込めています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 最終CTA④ === */}
      <section id="cta" className="py-20 lg:py-28 relative overflow-hidden">
        {/* Warm gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(242,213,208,0.1) 0%, rgba(242,213,208,0.2) 50%, rgba(242,213,208,0.1) 100%)" }} />

        <div className="container relative z-10" ref={ctaRef}>
          <div className="max-w-2xl mx-auto text-center">
            {/* Brand Logo */}
            <img
              src={LOGO_CAT}
              alt="ほっこりハンドクラフト ロゴ"
              className={`w-20 h-20 lg:w-28 lg:h-28 object-contain mx-auto mb-8 transition-all duration-700 drop-shadow-sm ${ctaVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"}`}
            />

            <h2
              className={`font-accent text-xl sm:text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed mb-6 transition-all duration-700 delay-200 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ color: "#5C4D3C" }}
            >
              誰かの1日をあたためる一枚。
              <br />
              <span className="text-lg sm:text-xl lg:text-2xl" style={{ color: "#C4908F" }}>
                あなたの「ほっこり」は、ここから始まります。
              </span>
            </h2>

            <p
              className={`font-body text-sm lg:text-base leading-[2] mb-10 transition-all duration-700 delay-400 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ color: "#8C7B6B" }}
            >
              ひとつひとつ手作りのため、在庫には限りがございます。
              <br />
              気になる商品がありましたら、お早めにご覧ください。
            </p>

            {/* CTA④ */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <CtaButton variant="primary" />
              <LineButton />
            </div>

            {/* Trust signals */}
            <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-800 ${ctaVisible ? "opacity-100" : "opacity-0"}`}>
              {["完全手作り", "抗菌素材使用", "ギフト対応可"].map((text, i) => (
                <span key={i} className="flex items-center gap-1.5 font-body text-xs" style={{ color: "#A0907E" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#B8C9A3" strokeWidth="1.2"/>
                    <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#B8C9A3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
