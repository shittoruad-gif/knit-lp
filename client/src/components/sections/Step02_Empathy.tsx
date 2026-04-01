/*
 * ② 悩み共感（自分ごと化）【安心】+ CTA②
 * 役割：「この人、私のことわかってる」と思わせる
 * ルール：ユーザーの言葉ベースで書く
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CtaButton from "@/components/CtaButton";

const concerns = [
  { text: "朝から晩まで、仕事・家事・子育て。\n気づけば一日が終わっている。", icon: "☁️" },
  { text: "「自分のための時間」なんて、\nもう何年も取れていない気がする。", icon: "🕐" },
  { text: "がんばってるのに、\n誰にも褒めてもらえない日が続く。", icon: "💭" },
  { text: "ちょっとした「ご褒美」がほしい。\nでも、出掛けるにも荷物が多くて大変。", icon: "🎁" },
  { text: "大切な人に気持ちを届けたいけど、\n選ぶ時間も余裕もない。", icon: "💌" },
];

export default function Step02Empathy() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="empathy" className="py-20 lg:py-28 relative">
      {/* Subtle pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #8C7B6B 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="container" ref={ref}>
        <div className="max-w-2xl mx-auto">
          {/* Section intro */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="font-accent text-base lg:text-lg mb-3" style={{ color: "#D4A0A0" }}>
              こんなこと、ありませんか？
            </p>
            <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
              毎日、一生懸命なあなたへ
            </h2>
          </div>

          {/* Concerns */}
          <div className="space-y-5 lg:space-y-6">
            {concerns.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 lg:p-6 rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                  background: "rgba(255,255,255,0.5)",
                  boxShadow: "0 2px 12px rgba(107,91,78,0.04)",
                }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="font-body text-sm lg:text-base leading-[1.9] whitespace-pre-line" style={{ color: "#6B5B4E" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Transition + CTA② */}
          <div className={`mt-14 lg:mt-18 text-center transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="washi-divider max-w-xs mx-auto mb-10" />
            <p className="font-accent text-base lg:text-lg leading-loose mb-8" style={{ color: "#8C7B6B" }}>
              もし、ひとつでも当てはまるなら——
              <br />
              このページは、あなたのために書きました。
            </p>
            <CtaButton variant="soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
