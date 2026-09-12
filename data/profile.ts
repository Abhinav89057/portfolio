export const profile = {
  name: "Abhinav Patidar",
  firstName: "Abhinav",
  role: "Senior Software Engineer & AI Engineer",
  roleLine: "Senior Software Engineer · Systems Builder · Product Engineer",
  company: "Indus Analytics",
  location: "Indore, India",
  since: "January 2023",
  sinceShort: "2023",
  email: "abhip5472@gmail.com",
  // WhatsApp number in international format, digits only. Remove to hide the WhatsApp channel.
  whatsapp: "918905743058",
  // TODO: replace with real profile URLs
  github: "https://github.com/Abhinav89057",
  linkedin: "https://www.linkedin.com/",
  resumeFile: "/Abhinav-Patidar-Resume.docx",
  photo: "/abhinav-portrait.jpg",
  avatar: "/avatar.svg",
  // TODO: replace with the deployed domain
  siteUrl: "https://abhinavpatidar.dev",
  education: "Bachelor of Computer Applications (BCA)",

  hero: {
    statement: ["I build software", "that runs businesses."],
    intro: "I turn complicated business processes into scalable software systems, products, automation, and intelligent tools.",
  },

  journey: [
    "I grew up in Jhalawar, Rajasthan, finished a BCA and joined Indus Analytics in Indore in January 2023. The first thing I touched was a live, multi-tenant ERP for printing and packaging manufacturers, built on ASP.NET Web Forms and VB.NET. I learned the domain the hard way: by supporting real plants, real quotes and real dispatches.",
    "That domain knowledge is what I build on now. I rebuilt the costing side of that ERP as a modern Next.js and React application on top of C# Web APIs, one codebase serving desktop and mobile. I added AI assistants that call the same backend tools a planner uses, and I wrote the Python utilities the support team runs every day.",
    "I care about one thing above all: the software should match how the business actually works, and stay simple for the person using it.",
  ],
};

// Hero diagram: the journey every piece of work takes.
export const systemFlow = ["Problem", "Design", "Code", "System", "Product", "Real users"];

// "From problem to product" section.
export const problems = ["Excel everywhere", "Manual calculations", "Repetitive processes", "Disconnected systems", "Data inconsistencies", "Communication gaps", "Manual reporting"];
export const engineering = ["Understand", "Model", "Design", "Build", "Automate", "Improve"];
export const systemOutputs = ["ERP", "APIs", "Database", "Web", "Mobile", "Automation", "Analytics", "AI where useful"];

export const manifesto = ["Understand the business.", "Model the system.", "Automate what shouldn't be manual.", "Add AI where it actually helps."];

export const experienceBullets = [
  "Build and maintain a multi-module ERP / CRM platform for printing and packaging, across manufacturing, planning, inventory, CRM, dashboards and reporting, for multiple live multi-company deployments.",
  "Rebuilt the costing, quotation and approval workflows of the ERP as a Next.js 16 / React 19 application over C# Web APIs, serving desktop and mobile from one codebase.",
  "Designed and shipped LLM-powered assistants, including the Synthia / ParkBuddy multi-assistant architecture on Microsoft Semantic Kernel with tool calling into backend services.",
  "Built an end-to-end carton cost-estimation engine plus the inventory, sales-order and purchase-order modules around it.",
  "Developed bulk costing and item-master save workers and an Excel-to-SQL master import tool.",
  "Implemented SignalR push, AWS S3 / Azure storage, Microsoft Graph and email integrations, and QR-based inventory modules.",
  "Own production support for live applications: root-cause analysis, change requests, deployments and secure code review.",
];
