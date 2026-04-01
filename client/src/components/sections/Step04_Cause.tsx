/*
 * ④ 原因の提示【信用】
 * 役割：「なぜ心が疲れるのか」を言語化し、納得を生む
 * ルール：専門用語禁止、誰でもわかる言葉
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Step04Cause() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24">
      <div className="container" ref={ref}>
        <div className="max-w-2xl mx-auto">
          <h2
            className={`font-heading text-lg lg:text-xl font-bold text-center mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "#5C4D3C" }}
          >
            なぜ、心が疲れてしまうのか
          </h2>

          {/* Cause explanation */}
          <div className="space-y-8 lg:space-y-10">
            {[
              {
                num: "01",
                title: "「誰かのため」ばかりの毎日",
                body: "家族のごはん、子どもの送り迎え、仕事の締め切り。\n毎日「誰かのため」に動いていると、\n自分の気持ちに向き合う時間がなくなります。",
              },
              {
                num: "02",
                title: "「自分へのご褒美」に罪悪感",
                body: "「こんなの買っていいのかな」\n「もっと節約しなきゃ」\nそう思って、自分のことを後回しにしてしまう。",
              },
              {
                num: "03",
                title: "心を満たす「きっかけ」がない",
                body: "本当は、高価なものじゃなくていい。\nただ、ふとした瞬間に「心が満たされる」と\n感じられるものがあれば、それだけで十分なのに。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-5 lg:gap-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="font-accent text-2xl lg:text-3xl font-light" style={{ color: "rgba(212,160,160,0.5)" }}>
                    {item.num}
                  </span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-heading text-base lg:text-lg font-bold mb-3" style={{ color: "#5C4D3C" }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm lg:text-base leading-[2] whitespace-pre-line" style={{ color: "#8C7B6B" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition */}
          <div className={`mt-12 lg:mt-16 text-center transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="washi-divider max-w-xs mx-auto mb-8" />
            <p className="font-accent text-base lg:text-lg leading-loose" style={{ color: "#8C7B6B" }}>
              だから、わたしたちは考えました。
              <br />
              <span style={{ color: "#C4908F" }}>
                「手に取るだけで、ほっとできるものを届けたい」と。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
