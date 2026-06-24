const SOURCE_URL = "https://raw.githubusercontent.com/reddykatam-infinitum/vandana-digital-card/main/public/images/satyadev-profile.jpg.b64";

export const runtime = "nodejs";

export async function GET() {
  const response = await fetch(SOURCE_URL, { next: { revalidate: 86400 } });
  if (!response.ok) return new Response("Profile image unavailable", { status: 502 });

  const encoded = (await response.text()).trim();
  const image = Buffer.from(encoded, "base64");

  return new Response(image, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
    }
  });
}
