import { NextResponse } from "next/server";

const NAMESPACE = process.env.VIEWS_COUNT_NAMESPACE ?? "shivanshu_portfolio";
const KEY = process.env.VIEWS_COUNT_KEY ?? "site_visits";

async function readCount(): Promise<number | null> {
  try {
    const url = `https://api.countapi.xyz/get/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

export async function POST() {
  try {
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ views: await readCount() });
    }
    const data = (await res.json()) as { value?: number };
    const views =
      typeof data.value === "number" ? data.value : await readCount();
    return NextResponse.json({ views });
  } catch {
    return NextResponse.json({ views: await readCount() });
  }
}

export async function GET() {
  const views = await readCount();
  return NextResponse.json({ views });
}
