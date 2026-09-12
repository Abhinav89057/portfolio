import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { TopBar } from "@/components/navigation/top-bar";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { EngineerMode } from "@/components/engineer-mode";
import { ConsoleMessage } from "@/components/console-message";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Variable font with a width axis, so the display face can be set wide.
const display = Archivo({ variable: "--font-display", subsets: ["latin"], axes: ["wdth"] });

const title = `${profile.name} | Senior Software Engineer & Systems Builder`;
const description = `${profile.name} is a Senior Software Engineer at ${profile.company}, ${profile.location}. Builds ESTIMO, a complete ERP for the printing and packaging industry, with C#, .NET, Next.js, React, TypeScript, SQL Server, automation and AI assistants.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  keywords: ["Senior Software Engineer", "Software Developer", "Full Stack Developer", "Systems Builder", "AI Engineer", "C#", ".NET", "Next.js", "React", "TypeScript", "SQL Server", "AI Agents", "OpenAI", "Semantic Kernel", "Enterprise Software", "ERP", "Printing & Packaging Software", "Indore"],
  authors: [{ name: profile.name }],
  openGraph: { type: "website", title, description, siteName: profile.name, locale: "en_IN", images: [{ url: profile.photo, alt: profile.name }] },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
  email: profile.email,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["C#", ".NET", "Next.js", "React", "TypeScript", "SQL Server", "ERP", "AI Agents", "Semantic Kernel"],
};

// Dark by default; applies a saved light choice before paint so there is no flash.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <Script id="theme" strategy="beforeInteractive">{themeScript}</Script>
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <ScrollProgress />
        <TopBar />
        <main id="main" className="flex-1">{children}</main>
        <CommandPalette />
        <EngineerMode />
        <ConsoleMessage />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
