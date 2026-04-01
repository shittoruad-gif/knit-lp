/*
 * ⑨ Q&A（不安解消）【安心】
 * 役割：小さな不安を事前に潰す → 離脱防止
 * ルール：ユーザーが実際に思う疑問を先回りして回答
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "送料はかかりますか？",
    a: "全品送料込みの価格となっております。追加の送料はかかりませんので、ご安心ください。",
  },
  {
    q: "オーダーメイドはできますか？",
    a: "掲載商品をベースにしたカスタマイズが可能です。色や素材の変更など、お気軽にBASEショップのメッセージ機能からご相談ください。",
  },
  {
    q: "親子でお揃いにできますか？",
    a: "はい、レッグウォーマーやニット帽など、親子でお揃いを楽しめるアイテムをご用意しています。サイズ違いでお作りいたします。",
  },
  {
    q: "素材は何を使っていますか？",
    a: "抗菌素材や綿素材など、お子さまにも安心してお使いいただける素材を選んでいます。商品ごとに使用素材を記載しておりますので、詳しくはBASEショップの各商品ページをご確認ください。",
  },
  {
    q: "プレゼント用のラッピングはできますか？",
    a: "はい、もちろんです。ギフトラッピングに対応しております。大切な方への贈りものとして、心を込めてお包みいたします。ご注文時にお申し付けください。",
  },
  {
    q: "届くまでどのくらいかかりますか？",
    a: "ひとつひとつ手作りのため、ご注文からお届けまで約1〜2週間ほどお時間をいただいております。心を込めてお作りしますので、少しだけお待ちいただけるとうれしいです。",
  },
  {
    q: "返品・交換はできますか？",
    a: "到着後7日以内であれば、不良品に限り返品・交換を承ります。なお、私書箱留めの場合は対象外となりますのでご了承ください。手作り品のため、お客さまのご都合による返品はお受けしておりません。",
  },
];

export default function Step09FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      {/* Subtle bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(242,213,208,0.06) 0%, rgba(242,213,208,0.12) 50%, rgba(242,213,208,0.06) 100%)" }} />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              FAQ
            </span>
            <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
              よくあるご質問
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: "#A0907E" }}>
              ——気になることがあれば、お気軽にお問い合わせください
            </p>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: `${200 + i * 100}ms`,
                  background: openIndex === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
                  boxShadow: openIndex === i ? "0 4px 16px rgba(107,91,78,0.08)" : "0 1px 6px rgba(107,91,78,0.03)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                >
                  <span className="font-heading text-sm lg:text-base font-bold flex-1" style={{ color: "#5C4D3C" }}>
                    {faq.q}
                  </span>
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  >
                    <path d="M5 8L10 13L15 8" stroke="#A0907E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                    <div className="border-t pt-4 mb-0" style={{ borderColor: "rgba(212,197,160,0.3)" }}>
                      <p className="font-body text-sm leading-[1.9]" style={{ color: "#8C7B6B" }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
