import type { EducationHistoryItem, ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    icon: "work",
    iconClass: "border-primary text-primary dark:border-primary",
    role: "プロダクトプランナー",
    company: "株式会社SIGNATE",
    product: { name: "SIGNATE Cloud", url: "https://cloud.signate.jp/" },
    companyClass: "text-primary",
    badge: "在籍中",
    period: "2023年10月 - 現在",
    summaryLine:
      "低継続率の学習プログラムに対し、行動ログ分析とUI改善を実施し、クリア率と継続率を改善。",
    skills: [
      "KPI設計",
      "SQL",
      "Looker Studio",
      "BigQuery",
      "UI/UX企画",
      "コンテンツ企画",
    ],
    challenge: [
      "初心者向けプログラムの完了率が低く、契約継続率にも影響。",
      "先行指標として設定した、学習プログラムクリア率は12%に留まる。",
    ],
    actions: [
      "行動ログをSQLで分析。平均テスト受験回数が1.1回と低いことがボトルネックと判明。",
      "離脱ユーザーへのヒアリングと行動観察を実施。心理的ハードルと操作誤解の2つのペインを特定。",
      "正答率の低い問題を特定。各講座視聴直後に受験導線を出すUI改善を実装。",
    ],
    result: [
      "平均テスト受験回数を2.6回まで向上させ、クリア率は12%から22%へ改善。",
      "契約継続企業比率は62.5%から65.0%へ改善。",
      "前年比約1,420万円相当の売上増に貢献。",
    ],
  },
  {
    icon: "school",
    iconClass: "border-slate-200 text-slate-400 dark:border-slate-700",
    role: "プロジェクトマネージャー/リーダー",
    company: "フォーサイト株式会社",
    companyClass: "text-slate-600 dark:text-slate-300",
    period: "2021年4月 - 2023年9月",
    summaryLine:
      "学習導線の不一致と進捗可視化不足を解消し、回答率・合格率・新規契約を同時に改善。",
    skills: ["PM", "PL", "UXリサーチ", "要件定義", "Laravel", "Vue.js"],
    challenge: [
      "BtoC学習アプリで学習フローと画面導線が一致せず、チェックテスト回答率が低下。",
      "BtoB向けでは学習進捗が見えにくく、管理者が適切にフォローできないことが解約要因に。",
    ],
    actions: [
      "ManaBunの導線を機能軸から科目軸へ再設計し、授業連続再生機能を追加。",
      "BtoB学習管理システムで、理解度を可視化する管理画面と追試機能を新規設計・実装。",
      "DB変更が必要な改修とUI改修を分離し、段階リリースで工数とリスクを最適化。",
    ],
    result: [
      "BtoCでチェックテスト回答数を1.18倍、主要資格の合格率を75%から76.1%へ改善。",
      "BtoBで学習者合格率を前年比12%改善し、新規契約数を前期比+5社増加。",
    ],
  },
  {
    icon: "terminal",
    iconClass: "border-slate-200 text-slate-400 dark:border-slate-700",
    role: "WEBエンジニア",
    company: "Lotus and Company.inc",
    companyClass: "text-slate-600 dark:text-slate-300",
    period: "2020年4月 - 2021年3月",
    summaryLine:
      "表示速度低下と連携セキュリティ課題に対し、性能最適化と安全設計を実装してUXを改善。",
    skills: ["Laravel", "Vue.js", "GCP", "パフォーマンス改善", "API連携"],
    challenge: [
      "シニア向けSNSサービスの表示速度が遅く、継続利用の体験を損ねていた。",
      "キャンペーン申込で、利便性を維持しつつセキュアな連携設計が必要だった。",
    ],
    actions: [
      "画像遅延ロード、JS分割ロード、LP静的レンダリング、GCFによるWebP変換を導入。",
      "SSO導入とAPI連携を設計し、セキュリティリスクを考慮した実装を実施。",
    ],
    result: [
      "Google PageSpeed Insightsスコアを16から60へ改善し、ロード時間を短縮。",
      "安全性と利便性を両立した申込基盤を構築。",
    ],
  },
  {
    icon: "apartment",
    iconClass: "border-slate-200 text-slate-400 dark:border-slate-700",
    role: "総務",
    company: "株式会社山下電気",
    companyClass: "text-slate-600 dark:text-slate-300",
    period: "2019年4月 - 2020年3月",
    summaryLine:
      "アナログ業務と分析未整備の状態から、社内運用のデジタル化と改善提案の基盤を構築。",
    skills: ["社内IT環境整備", "Google Analytics", "採用業務", "ヘルプデスク"],
    challenge:
      "社内デバイス管理がアナログ運用で、業務効率と情報管理の精度に課題。Web運用ではアクセスデータの活用が十分に進んでいませんでした。",
    actions: [
      "社内デバイス所在管理システムを設計・開発し、業務をデジタル化。",
      "Google Analyticsで月次分析を行い、ページ別推移に対する改善提案を実施。",
      "採用業務と社内サポートを横断し、日常業務の安定運用を支援。",
    ],
    result:
      "総務部門の運用工数削減と、データに基づくWeb運用の土台構築に貢献。複数業務を並行する運用体制の安定化を実現。",
  },
  {
    icon: "school",
    iconClass: "border-slate-200 text-slate-400 dark:border-slate-700",
    role: "講師（アルバイト）",
    company: "株式会社臨海",
    companyClass: "text-slate-600 dark:text-slate-300",
    period: "2014年4月 - 2019年3月",
    summaryLine:
      "理解度のばらつきに合わせた指導設計で、学習継続と定着を支援する運用を実践。",
    skills: ["学習支援", "指導設計", "コミュニケーション"],
    challenge:
      "学習者ごとに理解度やつまずきが異なるため、短時間で状況を把握し、継続して学べる形に落とし込む必要がありました。",
    actions: [
      "理解度に応じて説明の粒度と例示を切り替え、学習の詰まりを解消。",
      "学習計画の立て方や復習方法を言語化し、継続しやすい学習習慣を支援。",
    ],
    result:
      "学習者の理解度向上と学習継続を支援し、「学びを続けられる設計」への関心と経験の土台になりました。",
  },
];

export const educationHistory: EducationHistoryItem[] = [
  {
    period: "2015年4月",
    detail: "国際基督教大学 教養学部 アーツ&サイエンス学科 入学",
  },
  { period: "2017年6月", detail: "Petra Christian University 留学" },
  {
    period: "2019年3月",
    detail: "国際基督教大学 教養学部 アーツ&サイエンス学科 卒業",
  },
];
