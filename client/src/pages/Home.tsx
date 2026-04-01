/*
 * ほっこりハンドクラフト LP - Home Page
 * 10ステップ構成：感情で動き、論理で納得するLP
 * 設計原則：安心（ここなら大丈夫そう）× 信用（この人の言ってることは正しそう）
 *
 * ① ヘッドライン（興味を引く・相手目線）+ CTA①
 * ② 悩み共感（自分ごと化）+ CTA②
 * ③ 問題提起（放置リスク）
 * ④ 原因の提示
 * ⑤ 解決策
 * ⑥ ベネフィット（未来の変化）+ CTA③
 * ⑦ 特徴（選ばれる理由・不安解消）
 * ⑧ 実績（口コミ + 商品紹介）
 * ⑨ Q&A（不安解消）
 * ⑩ CTA（最終行動）+ CTA④
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import Step01Headline from "@/components/sections/Step01_Headline";
import Step02Empathy from "@/components/sections/Step02_Empathy";
import Step03Problem from "@/components/sections/Step03_Problem";
import Step04Cause from "@/components/sections/Step04_Cause";
import Step05Solution from "@/components/sections/Step05_Solution";
import MakerStory from "@/components/sections/MakerStory";
import Step06Benefit from "@/components/sections/Step06_Benefit";
import Step07Features from "@/components/sections/Step07_Features";
import Step08Proof from "@/components/sections/Step08_Proof";
import Step09FAQ from "@/components/sections/Step09_FAQ";
import Step10FinalCTA from "@/components/sections/Step10_FinalCTA";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden relative"
      style={{
        background: `linear-gradient(
          180deg,
          #FFF8E8 0%, #FFF3DC 12%, #FFEFD0 22%, #FFE8C8 32%,
          #FFE0C0 42%, #FFD8BC 50%, #FFD0BA 58%, #FFC8BC 66%,
          #FFC4C0 74%, #FFBEC4 82%, #FBBAC8 90%, #F5B5CA 100%
        )`,
      }}
    >
      <Bubbles />
      <Header />
      <main className="relative z-10">
        {/* ① ヘッドライン — 興味を引く（相手目線）+ CTA① */}
        <Step01Headline />

        {/* ② 悩み共感 — 自分ごと化【安心】+ CTA② */}
        <Step02Empathy />

        {/* ③ 問題提起 — 放置リスク */}
        <Step03Problem />

        {/* ④ 原因の提示【信用】 */}
        <Step04Cause />

        {/* ⑤ 解決策【安心+信用】 */}
        <Step05Solution />

        {/* 作り手（お母さん）紹介 — 人柄で安心感【安心】 */}
        <MakerStory />

        {/* ⑥ ベネフィット — 未来の変化【安心】+ CTA③ */}
        <Step06Benefit />

        {/* ⑦ 特徴 — 選ばれる理由・不安解消【信用】 */}
        <Step07Features />

        {/* ⑧ 実績 — 口コミ・商品紹介【信用】 */}
        <Step08Proof />

        {/* ⑨ Q&A — 不安解消【安心】 */}
        <Step09FAQ />

        {/* ⑩ 最終CTA — 行動【安心+信用】+ CTA④ */}
        <Step10FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
