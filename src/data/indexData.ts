import type {
  Achievement,
  ExpertiseCard,
  JourneyItem,
} from "./types";

export const expertiseCards: ExpertiseCard[] = [
  {
    icon: "monitoring",
    title: "KPI設計とモニタリング",
    description:
      "ビジネスゴールからKPIツリーを設計し、Looker StudioとBigQueryでダッシュボードで可視化して、改善サイクルを回します。",
  },
  {
    icon: "manage_search",
    title: "定量・定性リサーチ",
    description:
      "SQLによる行動ログ分析とユーザーインタビューを組み合わせ、再現性のある仮説を構築し、検証します。",
  },
  {
    icon: "auto_stories",
    title: "機能とコンテンツの企画",
    description:
      "UI/UX改善だけでなく教材企画や講師選定まで含めて設計し、学習成果と事業KPIの両立を推進します。",
  },
];

export const journeyItems: JourneyItem[] = [
  {
    role: "プロダクトプランナー",
    period: "2023年10月 - 現在",
    company: "株式会社SIGNATE",
    summary:
      "AI/DX人材を育成するe-learningを担当。KPI策定・データ分析・UI/UX企画・コンテンツ企画をリード。",
  },
  {
    role: "PM/PL",
    period: "2021年4月 - 2023年9月",
    company: "フォーサイト株式会社",
    summary:
      "大人向け資格学習アプリを担当。UXリニューアルと新規学習機能開発をリード。",
  },
  {
    role: "WEBエンジニア",
    period: "2020年4月 - 2021年3月",
    company: "Lotus and Company.inc",
    summary:
      "シニア向けSNSを担当。Laravel、Vue.js、GCPで機能実装とパフォーマンス改善を実施。",
  },
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
    value: "+10pt",
    detail: "SIGNATEで学習プログラムクリア率を12%から22%へ改善。",
    iconClass:
      "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
  },
  {
    value: "+2.4x",
    detail: "平均テスト受験回数を1.1回から2.6回へ引き上げ、継続学習を促進。",
    iconClass: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
  },
  {
    value: "約1,420万円",
    detail: "契約継続率改善により、前年比で売上増加に貢献。",
    iconClass:
      "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
  },
];
