export const site = {
  /** Short display name (hero, UI) */
  name: "Shivanshu",
  /** Full name — SEO, legal footer, structured data */
  fullName: "Shivanshu",
  title: "Java Backend Developer",
  tagline:
    "Building scalable backend systems with high performance and reliability",
  /** Production URL — used when NEXT_PUBLIC_SITE_URL is not set */
  canonicalUrl: "https://shivanshu-backend.vercel.app",
  email: "shivanshupandey1808@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivanshu-pandey-269a87204/",
  github: "https://github.com/shivanshu1808",
  githubUsername: "shivanshu1808",
  location: "India",
  /** Served from /public/profile.png (replace file to update photo) */
  profilePhotoSrc: "/profile.png",
  /** Served from /public/resume.pdf — browser download name */
  resumeDownloadFilename: "Shivanshu_Java_Backend_Developer.pdf",
} as const;

export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || site.canonicalUrl.replace(/\/$/, "");
}
