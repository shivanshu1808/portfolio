import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/portfolio/JsonLd";
import { WebAnalytics } from "@/components/portfolio/WebAnalytics";
import { getPublicSiteUrl, site } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = getPublicSiteUrl();
const defaultTitle = `${site.fullName} · ${site.title}`;
const description = `${site.tagline}`;

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
    "Bengaluru",
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
    card: "summary",
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
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <JsonLd />
        {children}
        <WebAnalytics />
      </body>
    </html>
  );
}
