import Image from "next/image";
import { site } from "@/lib/site";

type GhUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

async function fetchGithubUser(): Promise<GhUser | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${site.githubUsername}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "ShivanshuPortfolio/1.0 (Next.js)",
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    return res.json() as Promise<GhUser>;
  } catch {
    return null;
  }
}

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent px-4 py-3 text-center shadow-inner shadow-black/20 sm:text-left">
      <p className="font-mono text-2xl font-semibold tracking-tight text-cyan-300 tabular-nums">
        {value}
      </p>
      <p className="mt-0.5 text-xs tracking-wide text-zinc-500 uppercase">
        {label}
      </p>
    </div>
  );
}

const readmeChecklist = [
  "One-screen README: problem, architecture sketch (Mermaid OK), how to run, env vars, API surface.",
  "docs/ with sequence or C4-lite diagram for the highest-traffic path.",
  "OpenAPI / Springdoc or Postman collection for public endpoints.",
  "ADRs or short “why we chose X over Y” for cache, Kafka, or DB split.",
];

const highlightRepos = [
  "Building-Control — strongest alignment with IoT / control / backend story.",
  "A production-style Spring Boot service with tests + Dockerfile + CI badge.",
  "One React or Next.js client that exercises your real API contracts.",
];

export async function GitHubStats() {
  const gh = await fetchGithubUser();

  const memberSince = gh?.created_at
    ? new Date(gh.created_at).getFullYear()
    : null;

  return (
    <section
      aria-label="GitHub profile"
      className="border-t border-white/[0.08] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-medium tracking-[0.2em] text-cyan-400/90 uppercase sm:text-sm">
            GitHub
          </p>
        </div>

        <div className="surface-card overflow-hidden">
          <div className="flex flex-col gap-8 border-b border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
            {gh ? (
              <>
                <div className="relative mx-auto size-28 shrink-0 overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900 shadow-lg shadow-cyan-950/30 ring-2 ring-cyan-500/10 sm:mx-0 sm:size-32">
                  <Image
                    src={gh.avatar_url}
                    alt={`${gh.name ?? gh.login} GitHub avatar`}
                    width={128}
                    height={128}
                    className="size-full object-cover"
                    priority={false}
                  />
                </div>
                <div className="min-w-0 flex-1 text-center lg:text-left">
                  <p className="font-mono text-sm text-cyan-400/90">
                    @{gh.login}
                  </p>
                  {gh.name ? (
                    <p className="mt-1 text-lg font-medium text-zinc-100">
                      {gh.name}
                    </p>
                  ) : null}
                  {gh.bio ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {gh.bio}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-zinc-500">
                      Backend systems, public experiments, interview-ready depth.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 text-center lg:text-left">
                <p className="font-mono text-sm text-zinc-500">
                  @{site.githubUsername}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Profile preview unavailable. Open GitHub for activity.
                </p>
              </div>
            )}

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98] lg:self-center"
            >
              Open GitHub
            </a>
          </div>

          {gh ? (
            <div className="grid grid-cols-2 gap-3 bg-[#030406]/50 p-6 sm:grid-cols-4 sm:p-8 sm:pt-6">
              <Stat value={gh.public_repos} label="Public repos" />
              <Stat value={gh.followers} label="Followers" />
              <Stat value={gh.following} label="Following" />
              <Stat
                value={memberSince ?? "—"}
                label={memberSince ? "Member since" : "Joined"}
              />
            </div>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-6 transition-all duration-300 hover:border-cyan-500/15 sm:p-8">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
              README &amp; docs playbook
            </h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-zinc-400 marker:text-zinc-600">
              {readmeChecklist.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6 transition-all duration-300 hover:border-cyan-500/15 sm:p-8">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
              Key repositories
            </h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-zinc-400 marker:text-zinc-600">
              {highlightRepos.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
