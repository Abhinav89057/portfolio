// Estimo, the flagship. Stages are a real sequence, so they are numbered.
export const estimo = {
  name: "Estimo",
  tagline: "The ERP behind printing & packaging businesses.",
  summary:
    "Indus Analytics' ERP for printing and packaging manufacturers. Everything from the first enquiry to dispatch and MIS reporting, in one multi-company system. I build and support it end to end: the Next.js costing platform, the C# Web APIs behind it, the SQL Server data model, and the AI layer on top.",
  stages: [
    { name: "Enquiry & Estimation", desc: "Material, machine and process costing with per-quantity columns and freight terms." },
    { name: "Quotation & Approval", desc: "Quote panel, price approval workflow, paper sensitivity analysis." },
    { name: "Sales & Purchase Orders", desc: "Order booking, purchase orders with approval limits." },
    { name: "Planning & Production", desc: "Work orders, job cards, booking and planning, shipper and pallet planning." },
    { name: "Inventory & Stores", desc: "Item issue, stock across production units, QR-based inventory, bulk imports." },
    { name: "Dispatch & Invoicing", desc: "Challans, despatch, invoice entry, certificates of analysis." },
    { name: "Quality & Maintenance", desc: "QC, CAPA, breakdown intimation and maintenance." },
    { name: "MIS & BI Dashboards", desc: "Sales, costing and management dashboards, a BI tool creator, audit and activity logs." },
  ],
  underTheHood: [
    { k: "Backend", v: "C# Web APIs on .NET Framework 4.8, moving to .NET 10" },
    { k: "Frontend", v: "Next.js 16 / React 19, one responsive codebase from 320px up" },
    { k: "Data", v: "SQL Server, multi-company and multi-production-unit model" },
    { k: "Real-time", v: "SignalR push, audit log and notifications on every action" },
    { k: "Mobile", v: "PWA with service-worker push, Capacitor for Android and iOS" },
    { k: "Integrations", v: "AWS S3, Azure storage, Microsoft Graph, email" },
    { k: "Intelligence", v: "Semantic Kernel assistants calling the ERP's own services" },
  ],
  rebuild: {
    before: "DevExtreme, jQuery and VB.NET desktop screens",
    after: "One responsive Next.js application. Module visibility on mobile is a database flag, the DataGrid switches to a card view under 768px, and Capacitor wraps the same build for Android and iOS.",
  },
};

export type Project = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  problem?: string;
  built: string[];
  why?: string;
  role?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "khetflow",
    name: "KhetFlow",
    kind: "Offline-first farm PWA",
    summary: "Tracks every crop cycle of a shade-net farm in Jhalawar, Rajasthan, from seed purchase to final sale.",
    problem: "A working farm runs on paper and memory. Expenses, labour, transport and sales for a crop cycle live in different places, and connectivity in the field is unreliable.",
    built: [
      "Crop cycles per net house with unlimited harvests",
      "One ledger for expenses, labour, transport and sales, with bill photos attached at entry",
      "Inventory with weighted-average costing charged to each cycle",
      "Cost, revenue, profit, ROI and cost per kg per cycle, with charts",
      "Partial payments, receivables and payables with aging reminders",
      "Offline-first: Dexie on the device, a custom sync engine mirroring to Supabase with last-write-wins and soft deletes",
      "Hindi / English UI, WhatsApp-shareable cycle reports, in-app user management and a full audit log",
    ],
    why: "Khet is the farm. Flow is what it tracks: seed, cultivation, harvest, sale, profit. The person in the field sees where the money went without a laptop or a signal.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Dexie (IndexedDB)", "Supabase", "PWA", "Vercel"],
  },
  {
    id: "crm",
    name: "Indus CRM",
    kind: "Sales and client platform",
    summary: "Lead, client and dashboard management for multiple live clients, in the same product family as the ERP.",
    built: ["Lead and client management", "Dashboards for sales and management", "Requirements, change requests and new features", "Database structure"],
    role: "Requirements, change requests, features and database design across live deployments.",
    stack: ["ASP.NET", "Web APIs", "SQL Server"],
  },
];

// The AI layer. Deliberately one section, not the identity.
export const intelligence = {
  name: "Synthia / ParkBuddy",
  summary:
    "A router assistant that hands off to specialist Costing, Printing and MIS assistants. Each one calls real backend tools instead of guessing, so a planner can ask a question in plain language and get an answer computed by the same services the ERP uses.",
  layers: ["User", "AI router", "Specialised assistants", "Business tools", "ERP · APIs · Database"],
  facts: [
    { k: "Assistants", v: "General router, Costing, Printing, MIS" },
    { k: "How it works", v: "Tool calling into the ERP's own services" },
    { k: "Prompts", v: "Strict, for deterministic, no-filler answers" },
    { k: "My role", v: "Architecture, prompts, backend tools" },
  ],
  tech: ["LLMs", "Semantic Kernel", "AI agents", "MCP", "Tool calling", "Automation"],
};

export type LabStatus = "Building" | "Experimental" | "Shipped" | "Abandoned";

export type LabEntry = {
  name: string;
  status: LabStatus;
  line: string;
  tried: string;
  happened: string;
  learned: string;
};

// ponytail: tried / happened / learned are written from the project descriptions.
// TODO(abhinav): rewrite these in your own words, and add an abandoned one if there is one.
export const lab: LabEntry[] = [
  {
    name: "Custom AI agents & MCP servers",
    status: "Experimental",
    line: "Agents that plug LLMs into backend APIs and SQL Server through tight tool contracts.",
    tried: "Purpose-built agents and MCP servers over real business tools, instead of a chat box on top of data.",
    happened: "They answer from the same services the ERP uses, so the numbers match what the planner sees.",
    learned: "The tool contract is the product. Loose prompts drift, narrow tools do not.",
  },
  {
    name: "Browser automation agents",
    status: "Experimental",
    line: "Playwright and Puppeteer agents for the repetitive web work nobody should do by hand.",
    tried: "Driving browsers from scripts and agents for repeated data-entry and checking tasks.",
    happened: "Reliable for fixed flows. Anything that changes layout needs a human in the loop.",
    learned: "Automate the boring ninety percent and make the last ten easy to hand over.",
  },
  {
    name: "Agentic coding on a live ERP",
    status: "Experimental",
    line: "Claude Code, Codex and Cline inside a codebase that real plants depend on.",
    tried: "Using coding agents for refactors, tooling and tests on production code.",
    happened: "Fast on well-scoped tasks with a clear spec. Dangerous without one.",
    learned: "The agent is only as good as the boundary you draw around it.",
  },
  {
    name: "Excel to SQL master import",
    status: "Shipped",
    line: "A 2,100-row materials master imported without duplicates or half-written rows.",
    tried: "An import path from Excel into SQL Server with case-insensitive dedupe and a transactional upsert.",
    happened: "Stock fans out across production units in the same transaction. All or nothing.",
    learned: "Dedupe and transactions belong in the import, not in the cleanup afterwards.",
  },
  {
    name: "IndusDB Tool",
    status: "Shipped",
    line: "A VB6 database utility rebuilt in Python and shipped as a single executable.",
    tried: "Migrating a desktop tool that creates schema script archives and applies updates to one or many targets.",
    happened: "PyQt6 and pyodbc, packaged with PyInstaller so the support team gets one file.",
    learned: "Support tooling deserves the same care as the product. It runs every day.",
  },
  {
    name: "KhetFlow",
    status: "Building",
    line: "Offline-first farm accounting for a real shade-net farm.",
    tried: "An offline-first PWA with a custom sync engine instead of an online-only app.",
    happened: "IndexedDB is the working database. Supabase is the mirror, not the source of truth.",
    learned: "Design for no signal first and the online case comes for free.",
  },
];
