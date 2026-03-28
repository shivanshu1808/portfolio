import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/portfolio/JsonLd";
import { WebAnalytics } from "@/components/portfolio/WebAnalytics";
import { getPublicSiteUrl, site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getPublicSiteUrl();
const defaultTitle = `${site.fullName} · ${site.title}`;
const description = `${site.tagline} ${site.fullName} — Java, Spring Boot, microservices, AWS, 3+ years at CGI.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${site.fullName}`,
  },
  description,
  keywords: [
    "Java",
    "Spring Boot",
    "Backend Engineer",
    "Microservices",
    "AWS",
    "MySQL",
    "Redis",
    "Kafka",
    site.fullName,
    "CGI",
  ],
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${site.fullName} — Portfolio`,
    title: defaultTitle,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="relative min-h-full bg-[#030406] font-sans text-zinc-100">
        <div className="site-ambient" aria-hidden>
          <div className="site-ambient__glow-a" />
          <div className="site-ambient__glow-b" />
          <div className="site-ambient__glow-c" />
          <div className="site-ambient__grid" />
          <div className="site-ambient__noise" />
        </div>
        <JsonLd />
        {children}
        <WebAnalytics />
      </body>
    </html>
  );
}
