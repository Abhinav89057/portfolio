export const profile = {
  name: "Abhinav Patidar",
  firstName: "Abhinav",
  role: "Senior Software Engineer & AI Engineer",
  roleLine: "Building scalable software solutions and AI-powered applications.",
  company: "Indus Analytics",
  location: "Indore, India",
  since: "January 2023",
  email: "abhip5472@gmail.com",
  // WhatsApp number in international format, digits only. Remove to hide the WhatsApp channel.
  whatsapp: "918905743058",
  // TODO: replace with real profile URLs
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumeFile: "/Abhinav-Patidar-Resume.docx",
  photo: "/abhinav-portrait.jpg",
  avatar: "/avatar.svg",
  // TODO: replace with the deployed domain
  siteUrl: "https://abhinavpatidar.dev",
  education: "Bachelor of Computer Applications (BCA)",

  headline: ["I build the systems", "a business runs on."],
  intro:
    "Senior Software Engineer & AI Engineer at Indus Analytics. I build ESTIMO, a complete ERP for the printing and packaging industry, end to end: C# and .NET APIs, Next.js and React frontends, SQL Server data, AI assistants, mobile shells and the tooling around them.",

  aboutStatements: ["I understand the business", "before I write the feature."],
  aboutTagline: "Systems first. Features second.",
  aboutLines: [
    "Full-stack engineer at Indus Analytics, Indore. BCA. Backend-first, but comfortable across every layer.",
    "I turn how a printing plant actually quotes, plans and ships into software that matches it.",
    "AI is my accelerator. Domain knowledge is my foundation.",
  ],

  journey: [
    "I grew up in Jhalawar, Rajasthan, finished a BCA and joined Indus Analytics in Indore in January 2023. The first thing I touched was a live, multi-tenant ERP for printing and packaging manufacturers, built on ASP.NET Web Forms and VB.NET. I learned the domain the hard way: by supporting real plants, real quotes and real dispatches.",
    "That domain knowledge is what I build on now. I rebuilt the costing side of that ERP as a modern Next.js and React application on top of C# Web APIs, one codebase serving desktop and mobile. I added AI assistants that call the same backend tools a planner uses, and I wrote the Python utilities the support team runs every day.",
    "I care about one thing above all: the software should match how the business actually works, and stay simple for the person using it.",
  ],
};

export const metaBar = [
  { top: profile.location, sub: "Madhya Pradesh" },
  { top: profile.company, sub: `Since ${profile.since}` },
  { top: "Software & AI", sub: "Scalable solutions · AI-powered apps" },
];

export const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "abhinav · senior software engineer & ai engineer · indus analytics" },
  { prompt: true, text: "estimo --status" },
  { prompt: false, text: "erp: enquiry → costing → order → production → dispatch → mis" },
  { prompt: true, text: "git log --oneline | wc -l" },
  { prompt: false, text: "1265" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years at Indus Analytics", sub: "Since Jan 2023" },
  { value: 1265, suffix: "+", label: "Commits", sub: "Flagship repo, since Oct 2025" },
  { value: 89, label: "Technologies", sub: "Across 8 layers" },
  { value: 10, suffix: "+", label: "ERP domains", sub: "Enquiry to dispatch to MIS" },
];

export const process = [
  { n: "01", title: "Observe the real workflow", body: "Sit with the estimator, the planner, the dispatch desk. Watch how the quote is actually made." },
  { n: "02", title: "Model the data and rules", body: "Masters, transactions, approvals. The schema has to hold the business before the UI exists." },
  { n: "03", title: "Design the API boundary", body: "C# services that own the logic, so web, mobile and AI assistants all call the same truth." },
  { n: "04", title: "Build the experience", body: "One responsive Next.js codebase. A 9,500-line costing page still has to feel light on a phone." },
  { n: "05", title: "Ship, support, iterate", body: "Deploy across environments, own the root-cause when something breaks in production, and improve." },
];

export const experienceBullets = [
  "Build and maintain a multi-module ERP / CRM platform for printing and packaging, across manufacturing, planning, inventory, CRM, dashboards and reporting, for multiple live multi-company deployments.",
  "Rebuilt the costing, quotation and approval workflows of the ERP as a Next.js 16 / React 19 application over C# Web APIs, serving desktop and mobile from one codebase.",
  "Designed and shipped LLM-powered assistants, including the Synthia / ParkBuddy multi-assistant architecture on Microsoft Semantic Kernel with tool calling into backend services.",
  "Built an end-to-end carton cost-estimation engine plus the inventory, sales-order and purchase-order modules around it.",
  "Developed bulk costing and item-master save workers and an Excel-to-SQL master import tool.",
  "Implemented SignalR push, AWS S3 / Azure storage, Microsoft Graph and email integrations, and QR-based inventory modules.",
  "Own production support for live applications: root-cause analysis, change requests, deployments and secure code review.",
];
