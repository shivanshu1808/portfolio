import { site } from "@/lib/site";

export function JsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.tagline,
    ...(base ? { url: base } : {}),
    sameAs: [site.linkedin, site.github],
    email: site.email,
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Microservices",
      "MySQL",
      "Redis",
      "Kafka",
      "AWS",
      "React",
      "Next.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
