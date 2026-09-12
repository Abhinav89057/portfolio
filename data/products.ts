export type Product = {
  id: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  points: string[];
  stack: string[];
  facts: { k: string; v: string }[];
};

export const estimoModules = [
  { name: "Enquiry & Estimation", desc: "Material, machine and process costing with per-quantity columns and freight terms." },
  { name: "Quotation & Approval", desc: "Quote panel, price approval workflow, paper sensitivity analysis." },
  { name: "Sales & Purchase Orders", desc: "Order booking, purchase orders with approval limits." },
  { name: "Planning & Production", desc: "Work orders, job cards, booking and planning, shipper and pallet planning." },
  { name: "Inventory & Stores", desc: "Item issue, stock across production units, QR-based inventory, bulk imports." },
  { name: "Dispatch & Invoicing", desc: "Challans, despatch, invoice entry, certificates of analysis." },
  { name: "Quality & Maintenance", desc: "QC, CAPA, breakdown intimation and maintenance." },
  { name: "MIS & BI Dashboards", desc: "Sales, costing and management dashboards, a BI tool creator, audit and activity logs." },
];

export const products: Product[] = [
  {
    id: "estimo",
    index: "01 — Flagship product",
    name: "Estimo",
    kicker: "Complete ERP for printing & packaging",
    summary:
      "Indus Analytics' ERP for printing and packaging manufacturers. Everything from the first enquiry to dispatch and MIS reporting, in one multi-company system. I build and support it end to end: the modern Next.js costing platform, the C# Web APIs behind it, the SQL Server data model, and the AI layer on top.",
    points: ["Multi-tenant, multi-production-unit data model", "Single codebase for desktop and mobile PWA", "Audit log and notifications on every action"],
    stack: ["Next.js 16", "React 19", "TypeScript", "ASP.NET Web API", "C#", ".NET Framework 4.8 → .NET 10", "SQL Server", "SignalR", "PWA", "Capacitor"],
    facts: [
      { k: "Industry", v: "Printing & packaging manufacturers" },
      { k: "Scope", v: "Sales to dispatch to MIS reports" },
      { k: "Deployment", v: "Multi-company, multi-plant, live" },
      { k: "Platform", v: "Web ERP + mobile PWA + Android / iOS" },
      { k: "My role", v: "Full-stack: frontend, APIs, database, AI layer" },
    ],
  },
  {
    id: "synthia",
    index: "02 — AI layer",
    name: "Synthia / ParkBuddy",
    kicker: "Multi-assistant AI inside the ERP",
    summary:
      "A router assistant that hands off to specialist Costing, Printing and MIS assistants. Each one calls real backend tools instead of guessing, so a planner can ask a question in plain language and get an answer computed by the same services the ERP uses.",
    points: ["Router over specialist assistants", "Tool calling into costing and data services", "Strict prompts for deterministic, no-filler answers"],
    stack: ["C#", "Microsoft Semantic Kernel", "OpenAI", "SQL Server"],
    facts: [
      { k: "Type", v: "Multi-assistant AI inside Estimo" },
      { k: "Assistants", v: "General router, Costing, Printing, MIS" },
      { k: "How it works", v: "Tool calling into the ERP's own services" },
      { k: "My role", v: "Architecture, prompts, backend tools" },
    ],
  },
  {
    id: "platform",
    index: "03 — Unified platform",
    name: "One codebase, every device",
    kicker: "Desktop ERP and mobile PWA from the same pages",
    summary:
      "The costing platform was rebuilt from DevExtreme, jQuery and VB.NET screens into one responsive Next.js application. Module visibility on mobile is a database flag, the DataGrid switches to a card view on phones, and Capacitor wraps the same build for Android and iOS.",
    points: ["Responsive from 320px up, bottom nav on phones", "DataGrid with 30+ features, card view under 768px", "Push notifications via service worker"],
    stack: ["Next.js", "Tailwind CSS", "Radix UI", "TanStack Table", "PWA", "Capacitor"],
    facts: [
      { k: "Before", v: "DevExtreme, jQuery and VB.NET desktop screens" },
      { k: "After", v: "One responsive Next.js codebase" },
      { k: "Mobile", v: "PWA with push, Capacitor for Android / iOS" },
      { k: "My role", v: "Rebuild, DataGrid, PWA and mobile shells" },
    ],
  },
];

export const otherSystems = [
  { n: "04", name: "Indus CRM", desc: "Lead, client and dashboard management for multiple live clients. Requirements, change requests, features and database structure.", stack: ["ASP.NET", "Web APIs", "SQL Server"] },
  { n: "05", name: "KhetFlow", desc: "Offline-first PWA for a shade-net farm in Rajasthan. Tracks every crop cycle from seed purchase to sale: ledger with bill photos, weighted-average inventory costing, per-cycle profit and ROI, receivables with aging. Dexie on device, custom sync engine to Supabase. Hindi / English UI.", stack: ["Next.js", "Dexie", "Supabase", "PWA"] },
  { n: "06", name: "Custom AI agents", desc: "Purpose-built agents and MCP servers that plug LLMs into real systems: tool-calling agents over backend APIs and SQL Server, browser-automation agents, and agentic coding workflows with Claude Code and Codex.", stack: ["OpenAI", "MCP", "Claude Code", "Playwright"] },
];
