/*
 * ⑦ 特徴（選ばれる理由）【信用】
 * 役割：不安を消す内容にする
 * 安心・信用につながるかで判断
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PRODUCTS, MAKER_BG } from "@/lib/images";

const features = [
  {
    title: "すべて手作り。だから、ひとつひとつ違います",
    text: "機械生産ではありません。ひと針ひと針、手で作っています。\nだから、まったく同じものはふたつとない。\nあなたの手に届くのは、世界にたったひとつの一枚です。",
    image: PRODUCTS.IMG_9244,
    badge: "安心",
  },
  {
    title: "抗菌素材だから、お子さまにも安心",
    text: "使用している素材はすべて抗菌仕様。\n赤ちゃんや小さなお子さまが触れても安心です。\nプレゼントにも、自信を持ってお届けできます。",
    image: PRODUCTS.IMG_9236,
    badge: "安心",
  },
  {
    title: "知育要素で、遊びながら学べる",
    text: "お子さま向けのアイテムには、色や形の知育要素を取り入れています。\n「これなに？」「どんな色？」\n親子の会話が自然と生まれるデザインです。",
    image: PRODUCTS.IMG_9232,
    badge: "信用",
  },
  {
    title: "贈りものに選ばれています",
    text: "出産祝い、誕生日、ちょっとした感謝の気持ち。\n「手作りなんだ」と伝えると、みなさん驚かれます。\n気持ちが伝わるギフトとして、多くの方に選ばれています。",
    image: PRODUCTS.IMG_9234,
    badge: "信用",
  },
];

export default function Step07Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 opacity-10">
        <img src={MAKER_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(253,248,240,0.92) 0%, rgba(253,248,240,0.88) 50%, rgba(253,248,240,0.92) 100%)" }} />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              Why Choose Us
            </span>
            <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
              選ばれる4つの理由
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: "#A0907E" }}>
              ——あなたの不安を、ひとつずつ解消します
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {features.map((item, i) => (
              <div
                key={i}
                className={`relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                  boxShadow: "0 2px 16px rgba(107,91,78,0.06)",
                }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Badge */}
                <span
                  className="absolute top-3 right-3 font-body text-xs px-3 py-1 rounded-full"
                  style={{
                    background: item.badge === "安心" ? "rgba(212,160,160,0.85)" : "rgba(184,201,163,0.85)",
                    color: "#FDF8F0",
                  }}
                >
                  {item.badge}
                </span>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="font-heading text-sm lg:text-base font-bold mb-3" style={{ color: "#5C4D3C" }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-xs lg:text-sm leading-[1.9] whitespace-pre-line" style={{ color: "#8C7B6B" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
