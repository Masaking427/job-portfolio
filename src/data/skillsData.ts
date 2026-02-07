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
  { icon: "query_stats", name: "Looker Studio" },
  { icon: "database", name: "BigQuery" },
  { icon: "code", name: "SQL" },
  { icon: "monitoring", name: "GA4" },
  { icon: "category", name: "Dovetail" },
  { icon: "flutter", name: "Figma" },
  { icon: "task", name: "JIRA" },
  { icon: "inventory", name: "Backlog" },
  { icon: "support_agent", name: "Zendesk" },
  { icon: "smart_toy", name: "Dify" },
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
