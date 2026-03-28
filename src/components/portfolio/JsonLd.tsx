import { getPublicSiteUrl, site } from "@/lib/site";

export function JsonLd() {
  const base = getPublicSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    jobTitle: site.title,
    description: site.tagline,
    url: base,
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
