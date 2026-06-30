export interface BlogEntry {
  title: string;
  tags: string[];
  summary: string;
  slug: string;
  readTime: string;
  badge?: 'Featured' | 'External' | 'New';
}

const blogRegistry: BlogEntry[] = [
  {
    title: 'What Thousands of Debt Collection Calls Taught Us About Right Party Contact',
    tags: ['Field Insights', 'Right Party Contact', 'Collections Strategy & Performance'],
    summary: 'Real learnings from the field on why RPC is stuck at 26% and how to fix it',
    slug: '/blogs/right-party-contact-rpc-learnings-from-the-field',
    readTime: '15 min',
    badge: 'Featured',
  },
  {
    title: 'How AI Voice Agents Handle Debt Disputes Without Creating Compliance Risk',
    tags: ['Compliance & Operations', 'AI Voice Agents', 'FDCPA', 'Disputes'],
    summary: 'Learn how AI voice agents should handle debt disputes, when to escalate to a human, and how DROS supports compliant dispute workflows end to end.',
    slug: '/blogs/ai-voice-agents-debt-disputes-compliance',
    readTime: '12 min',
    badge: 'New',
  },
  {
    title: "How AI Voice Agents Handle \"Don't Call Me Again\": DNC, Disputes, and Compliance in 2026",
    tags: ['Compliance & Operations', 'AI Voice Agents', 'DNC', 'Technology & Integrations'],
    summary: "What actually happens in your systems when a consumer says \"don't call me again,\" disputes the debt, or starts talking about lawyers - and how DROS wires those rules into every AI call.",
    slug: '/blogs/ai-voice-agents-dnc-disputes-compliance-2026',
    readTime: '12 min',
  },
  {
    title: 'How Reg F Call Limits and Call Hours Work in AI Debt Collection',
    tags: ['Compliance & Operations', 'Reg F', 'AI Voice Agents', 'FDCPA'],
    summary: "Understand FDCPA call-hour rules, Reg F's 7-in-7 limit, and how AI collections software can apply them consistently with built-in settings.",
    slug: '/blog/reg-f-call-limits-ai-debt-collection',
    readTime: '10 min',
    badge: 'New',
  },
  {
    title: 'Why Collections Integrations Break Down With Legacy Systems - and What to Fix First',
    tags: ['Technology & Integrations', 'Legacy Systems', 'Collections Strategy & Performance'],
    summary: 'Why collections integrations break with legacy systems, how tool sprawl hurts RPC and compliance, and what to fix in your stack before adding AI agents.',
    slug: '/blogs/collections-integrations-legacy-systems',
    readTime: '14 min',
  },
  {
    title: 'How to Integrate AI Agents Into Collections Without Blowing Up Compliance',
    tags: ['Collections Strategy & Performance', 'Compliance & Operations', 'Technology & Integrations', 'AI Agents'],
    summary: 'A practical guide for agencies with 5-200 collectors on deploying AI agents safely, covering workflow design, compliance guardrails, and how to measure success without increasing regulatory exposure.',
    slug: '/blogs/integrate-ai-agents-collections-compliance',
    readTime: '18 min',
  },
  {
    title: 'Why Debt Collection Needs Fewer Systems, Not More',
    tags: ['Context & Omnichannel', 'Collections Strategy & Performance', 'Technology & Integrations'],
    summary: 'The case for context orchestration across fragmented collection workflows',
    slug: '/blogs/why-context-not-more-tools-is-the-future-of-debt-collection',
    readTime: '8 min',
  },
  {
    title: "Digital-First Collections for Small Agencies: What's Actually Changing in 2026",
    tags: ['Collections Strategy & Performance', 'Digital-First', 'AI Agents', 'Field Insights'],
    summary: 'A practical guide to adopting AI and automation for small agencies using low-risk compliant pilots',
    slug: '/blogs/digital-first-collections-small-agencies-2026',
    readTime: '12 min',
  },
];

export default blogRegistry;
