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
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center sm:text-left">
      <p className="font-mono text-2xl font-semibold tracking-tight text-cyan-400 tabular-nums">
        {value}
      </p>
      <p className="mt-0.5 text-xs tracking-wide text-zinc-500 uppercase">
        {label}
      </p>
    </div>
  );
}

export async function GitHubStats() {
  const gh = await fetchGithubUser();

  const memberSince = gh?.created_at
    ? new Date(gh.created_at).getFullYear()
    : null;

  return (
    <section
      aria-label="GitHub profile"
      className="border-t border-white/[0.06] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400/90 uppercase">
            GitHub
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Open source & code
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Public profile and activity—loaded directly from GitHub’s API, no
            third‑party widgets.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f1117]">
          <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
            {gh ? (
              <>
                <div className="relative mx-auto size-28 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-800 sm:mx-0 sm:size-32">
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
                      Backend projects, experiments, and learning in public.
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
                  Profile preview unavailable right now. Open GitHub for full
                  activity.
                </p>
              </div>
            )}

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98] lg:self-center"
            >
              View on GitHub
            </a>
          </div>

          {gh ? (
            <div className="grid grid-cols-2 gap-3 border-t border-white/[0.06] p-6 sm:grid-cols-4 sm:p-8 sm:pt-6">
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
      </div>
    </section>
  );
}
