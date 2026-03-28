export const site = {
  name: "Shivanshu",
  fullName: "Shivanshu Pandey",
  title: "Backend Engineer",
  tagline:
    "Backend engineer building scalable, low-latency systems with Java, Spring Boot, Kafka, and AWS. 3+ years production at CGI.",
  canonicalUrl: "https://shivanshu-backend.vercel.app",
  email: "shivanshupandey1808@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivanshu-pandey-269a87204/",
  github: "https://github.com/shivanshu1808",
  githubUsername: "shivanshu1808",
  githubDisplay: "github.com/shivanshu1808",
  location: "Bengaluru, India",
  profilePhotoSrc: "/profile.png",
  resumeDownloadFilename: "Shivanshu_Java_Backend_Developer.pdf",
} as const;

export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || site.canonicalUrl.replace(/\/$/, "");
}
