import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/portfolio/JsonLd";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = `${site.name} · ${site.title}`;
const description = `${site.tagline} ${site.name} — Java, Spring Boot, microservices, AWS.`;

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: defaultTitle,
    template: `%s · ${site.name}`,
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
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
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
      <body className="min-h-full bg-[#07080c] font-sans text-zinc-100">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
