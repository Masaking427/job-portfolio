import type {
  Certification,
  MindsetCard,
  SideWorkItem,
  SkillGroup,
  ToolBadge,
} from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "プロダクト企画・分析",
    icon: "analytics",
    items: [
      {
        name: "KPI設計・モニタリング",
        level: "上級",
        width: 95,
        primary: true,
      },
      { name: "SQL・行動ログ分析", level: "上級", width: 92, primary: true },
      {
        name: "ユーザーインタビュー・テスト",
        level: "上級",
        width: 90,
        primary: true,
      },
      { name: "Instructional Design", level: "中級", width: 76 },
    ],
  },
  {
    title: "開発・実装",
    icon: "code",
    items: [
      { name: "Laravel・Vue.js", level: "中級", width: 72, primary: true },
      { name: "AWS・GCP", level: "中級", width: 68 },
      { name: "Figma", level: "上級", width: 88, primary: true },
      { name: "UI/UX設計・要件定義", level: "上級", width: 90, primary: true },
    ],
  },
];

export const toolBadges: ToolBadge[] = [
  { icon: "smart_toy", name: "Codex" },
  { icon: "smart_toy", name: "Dify" },
  { icon: "query_stats", name: "Looker Studio" },
  { icon: "database", name: "BigQuery" },
  { icon: "code", name: "SQL" },
  { icon: "monitoring", name: "GA4" },
  { icon: "flutter", name: "Figma" },
  { icon: "task", name: "JIRA" },
  { icon: "support_agent", name: "Zendesk" },
  { icon: "chat", name: "Slack" },
  { icon: "terminal", name: "Laravel" },
  { icon: "web", name: "Vue.js" },
  { icon: "cloud", name: "AWS" },
  { icon: "cloud_sync", name: "GCP" },
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
    summary: "探求学習に関するプログラム運営・改善支援",
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
        name: "KPIツリー設計",
        percentage: 51,
        description:
          "事業目標（KGI）からロジックツリーを展開し、具体的なアクションプランに落とし込むKPI設計が得意です。",
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
          "ステークホルダー間の利害調整や、会議でのファシリテーションを通じて、チームを前進させる合意形成を主導します。",
        colorClass: {
          bg: "bg-primary",
          badgeBg: "bg-blue-50 dark:bg-blue-900/30",
          badgeText: "text-blue-600 dark:text-blue-300",
        },
      },
      {
        name: "Googleアナリティクス",
        percentage: 14,
        description:
          "GA4を用いた定量分析により、ユーザー行動を可視化し、データに基づいた改善施策の立案を行います。",
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
        name: "ユーザーインタビュー設計と実施",
        percentage: 30,
        description:
          "仮説検証のためのインタビュー設計から実施、定性データの分析までを行い、ユーザーの深層心理や課題を抽出します。",
        colorClass: {
          bg: "bg-purple-500",
          badgeBg: "bg-purple-50 dark:bg-purple-900/30",
          badgeText: "text-purple-600 dark:text-purple-300",
        },
      },
      {
        name: "ワイヤーフレームの作成",
        percentage: 35,
        description:
          "Figma等を用いて素早くアイデアを可視化し、チーム内での共通認識を作るとともに、スムーズなUIデザインへの移行を支援します。",
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
          "プロトタイプを用いた検証で、UI/UXの課題を早期に発見・修正し、手戻りの少ない開発プロセスを実現します。",
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
        name: "データ分析",
        percentage: 80,
        description:
          "ステークホルダーの要望を整理し、機能要件・非機能要件として明確に定義することで、エンジニアとの円滑な連携を実現します。",
        colorClass: {
          bg: "bg-emerald-500",
          badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",
          badgeText: "text-emerald-600 dark:text-emerald-300",
        },
      },
      {
        name: "BIツール",
        percentage: 64,
        description:
          "ビジネスゴールに基づいた「何を作るべきか」の本質的な要求を定義し、プロダクトの方向性を定めます。",
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
          "自身でDBからデータを抽出し、分析に必要なデータセットを作成。エンジニアに頼らずに仮説検証のスピードを上げます。",
        colorClass: {
          bg: "bg-emerald-500",
          badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",
          badgeText: "text-emerald-600 dark:text-emerald-300",
        },
      },
    ],
  },
];
