import type {
  Achievement,
  ExpertiseCard,
  JourneyItem,
} from "./types";

// export const expertiseCards: ExpertiseCard[] = [
//   {
//     icon: "monitoring",
//     title: "KPI設計とモニタリング",
//     description:
//       "事業目標からKPIを構造化し定量的に可視化します。KPIツリーの設計からBigQuery・Looker Studioによるダッシュボード構築まで行い、データに基づく意思決定と改善サイクルを実現します。",
//   },
//   {
//     icon: "manage_search",
//     title: "定量・定性リサーチ",
//     description:
//       "データ分析とユーザーリサーチを組み合わせ、解くべき課題を特定します。SQLによる行動ログ分析と半構造化インタビューを使い分け、仮説構築、施策立案まで行います。",
//   },
//   {
//     icon: "auto_stories",
//     title: "機能とコンテンツの企画",
//     description:
//       "UI/UX改善、機能設計、コンテンツ企画まで一体で設計し、ユーザー体験の向上とKPI改善を実現します",
//   },
// ];

export const expertiseCards: ExpertiseCard[] = [
  {
    icon: "analytics",
    title: "データ分析で「why」を語る",
    description:
      "BigQueryでデータ分析を行い「なぜこの課題を解くべきか」をグラフで説得力を持って伝えます。\n 事業目標からKPIを構造化し、定量・定性データから仮説構築、改善計画の立案まで一貫して実施します。",
  },
  {
    icon: "draw",
    title: "プロトタイプで「what」を語る",
    description:
      "Codexで実働するプロトタイプを開発し「何を作るべきか」をビジュアルで具体化します。\n UI/UX設計、機能企画、コンテンツ企画を一体で行い、ユーザー体験の向上とKPI改善を実現します。",
  },
  {
    icon: "groups",
    title: "ステークホルダーコミュニケーション",
    description:
      "営業・開発・外部パートナーなど多様なステークホルダーと円滑にコミュニケーションを取り、プロジェクトを推進します",
  },
];

export const journeyItems: JourneyItem[] = [
  {
    role: "プロダクト企画",
    period: "2023年10月 - 現在",
    company: "株式会社SIGNATE",
    summary:
      "AI/DX人材を育成するe-learningを担当。KPI策定・データ分析・UI/UX企画・コンテンツ企画をリード。",
  },
  {
    role: "プロジェクトマネージャー/リーダー",
    period: "2021年4月 - 2023年9月",
    company: "フォーサイト株式会社",
    summary:
      "大人向け資格学習アプリを担当。アプリリニューアルと新規学習機能開発をリード。",
  },
  {
    role: "WEBエンジニア",
    period: "2020年4月 - 2021年3月",
    company: "Lotus and Company.inc",
    summary:
      "シニア向けSNS開発を担当。Laravel、Vue.js、GCPで機能実装とパフォーマンス改善を実施。",
  },
  {
    role: "総務",
    period: "2019年4月 - 2020年3月",
    company: "株式会社山下電気",
    summary:
      "採用と広報・HP運用を担当。",
  }
];

export const skills: string[] = [
  "KPI設計",
  "Looker Studio",
  "BigQuery",
  "SQL",
  "ユーザーインタビュー",
  "ユーザビリティテスト",
  "Figma",
  "JIRA",
  "Backlog",
  "Zendesk",
  "Codex",
];

export const achievements: Achievement[] = [
  {
    value: "約1,420万円",
    detail: "契約継続率改善により、前年比で売上増加に貢献。",
    iconClass:
      "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
  },
  {
    value: "+10pt",
    detail: "学習プログラムクリア率を12%から22%へ改善。",
    iconClass:
      "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
  },
  {
    value: "+2.4x",
    detail: "平均テスト受験回数を1.1回から2.6回へ引き上げ、継続学習を促進。",
    iconClass: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
  },
];
