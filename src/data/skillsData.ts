import type {
  Certification,
  MindsetCard,
  SideWorkItem,
  ToolBadgeCategory,
} from "./types";

export const toolBadges: ToolBadgeCategory[] = [
  {
    name: "Generative AI",
    items: [
      { icon: "smart_toy", name: "Claude Code" },
      { icon: "smart_toy", name: "Codex" },
      { icon: "smart_toy", name: "Dify" },
    ],
  },
  {
    name: "Data Analysis",
    items: [
      { icon: "query_stats", name: "Looker Studio" },
      { icon: "database", name: "BigQuery" },
      { icon: "monitoring", name: "GA4" },
      { icon: "code", name: "SQL" },
      { icon: "code", name: "Python" },
    ],
  },
  {
    name: "Development",
    items: [
      { icon: "terminal", name: "Laravel" },
      { icon: "web", name: "Vue.js" },
      { icon: "web", name: "React.js" },
      { icon: "cloud", name: "AWS" },
      { icon: "cloud_sync", name: "GCP" },
    ],
  },
  {
    name: "Design & Management",
    items: [
      { icon: "flutter", name: "Figma" },
      { icon: "task", name: "JIRA" },
      { icon: "support_agent", name: "Zendesk" },
      { icon: "chat", name: "Slack" },
    ],
  },
];

export const certifications: Certification[] = [
  { yearMonth: "2025年11月", name: "青山大学ワークショップデザイナー" },
  { yearMonth: "2025年1月", name: "Coursera Google データアナリスト" },
  { yearMonth: "2022年8月", name: "中小企業診断士 1次試験" },
  { yearMonth: "2021年8月", name: "応用情報技術者" },
  { yearMonth: "2021年1月", name: "日本語教育能力検定" },
  { yearMonth: "2019年2月", name: "TOEIC 780" },
];

export const sideWork: SideWorkItem[] = [
  {
    period: "2022年9月 - 現在",
    org: "認定NPO法人カタリバ",
    role: "業務委託",
    summary: "探求学習に関するプログラム運営",
  },
];

export const mindsetCards: MindsetCard[] = [
  {
    icon: "route",
    title: "課題定義を先に行う",
    description:
      "要望をそのまま機能化せず、定量・定性データから本質課題を定義してから施策化します。仮説の精度を上げ、無駄な開発を減らします。",
  },
  {
    icon: "cycle",
    title: "高速な仮説検証",
    description:
      "施策実行後は必ず効果検証を行い、次の改善に接続します。PDCAを短いスパンで回し、KPI改善を継続的に積み上げます。",
  },
  {
    icon: "groups",
    title: "部門横断の推進力",
    description:
      "ビジネス、エンジニア、デザイナー、コンテンツ担当をつなぎ、共通指標で意思決定します。実装可能性と事業インパクトを両立させます。",
  },
];

import type { SkillDetailCategory } from "./types";

export const skillDetailData: SkillDetailCategory[] = [
  {
    id: "business",
    name: "Business",
    items: [
      {
        name: "KPIツリー",
        percentage: 51,
        description:
          "事業目標（KGI）からKPIツリーを設計し、各指標の因果関係を構造化。チームが追うべき数値を明確にし、アクションに直結させます。",
        colorClass: {
          bg: "bg-primary",
          badgeBg: "bg-blue-50 dark:bg-blue-900/30",
          badgeText: "text-blue-600 dark:text-blue-300",
        },
      },
      {
        name: "データ分析",
        percentage: 80,
        description:
          "SQLやBIツールを用いて行動ログやKPIデータを分析し、課題の特定と仮説構築を行います。データに基づく意思決定を推進します。",
        colorClass: {
          bg: "bg-primary",
          badgeBg: "bg-blue-50 dark:bg-blue-900/30",
          badgeText: "text-blue-600 dark:text-blue-300",
        },
      },
      {
        name: "合意形成・ファシリテーション",
        percentage: 60,
        description:
          "営業・開発・外部パートナーなど多様な関係者の利害を調整し、会議のファシリテーションを通じてチームの意思決定を前進させます。",
        colorClass: {
          bg: "bg-primary",
          badgeBg: "bg-blue-50 dark:bg-blue-900/30",
          badgeText: "text-blue-600 dark:text-blue-300",
        },
      },
    ],
  },
  {
    id: "ux",
    name: "UX",
    items: [
      {
        name: "ユーザーインタビュー",
        percentage: 30,
        description:
          "半構造化インタビューの設計から実施・分析までを一貫して行い、ユーザーの潜在ニーズや利用課題を明らかにします。",
        colorClass: {
          bg: "bg-purple-500",
          badgeBg: "bg-purple-50 dark:bg-purple-900/30",
          badgeText: "text-purple-600 dark:text-purple-300",
        },
      },
      {
        name: "ワイヤーフレーム",
        percentage: 35,
        description:
          "Figmaを用いて画面構成を素早く可視化し、関係者間の認識を揃えます。デザイナーや開発者へのスムーズな引き継ぎを実現します。",
        colorClass: {
          bg: "bg-purple-500",
          badgeBg: "bg-purple-50 dark:bg-purple-900/30",
          badgeText: "text-purple-600 dark:text-purple-300",
        },
      },
      {
        name: "カスタマージャーニーマップ",
        percentage: 25,
        description:
          "ユーザーの行動・感情・接点を時系列で整理し、体験上のペインポイントを特定。施策の優先順位づけに活用します。",
        colorClass: {
          bg: "bg-purple-500",
          badgeBg: "bg-purple-50 dark:bg-purple-900/30",
          badgeText: "text-purple-600 dark:text-purple-300",
        },
      },
    ],
  },
  {
    id: "tech",
    name: "Tech",
    items: [
      {
        name: "Looker Studio",
        percentage: 64,
        description:
          "企画の『why』を伝えるためにダッシュボードを構築し、なぜこの課題を解くべきかをグラフで可視化します。",
        colorClass: {
          bg: "bg-emerald-500",
          badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",
          badgeText: "text-emerald-600 dark:text-emerald-300",
        },
      },
      {
        name: "Codex",
        percentage: 64,
        description:
          "企画の『what』を伝えるために実働するプロトタイプを自ら開発し、何を作るべきかを具体的に示します。",
        colorClass: {
          bg: "bg-emerald-500",
          badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",
          badgeText: "text-emerald-600 dark:text-emerald-300",
        },
      },
      {
        name: "WEB開発",
        percentage: 48,
        description:
          "Laravel・Vue.jsなどを用いたWebアプリ開発の経験があり、技術的な実現可能性を踏まえた企画・要件定義を行えます。",
        colorClass: {
          bg: "bg-emerald-500",
          badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",
          badgeText: "text-emerald-600 dark:text-emerald-300",
        },
      },
    ],
  },
];
