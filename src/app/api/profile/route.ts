const DRIVE_FILE_ID = "1azNy2HYLaQmiWuQNtYc7fQiq4SW1zhDF";

const SOURCE_URLS = [
  `https://lh3.googleusercontent.com/d/${DRIVE_FILE_ID}=w1200`,
  `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`,
  `https://drive.google.com/thumbnail?id=${DRIVE_FILE_ID}&sz=w1200`
];

export const runtime = "nodejs";

export async function GET() {
  for (const sourceUrl of SOURCE_URLS) {
    try {
      const response = await fetch(sourceUrl, {
        redirect: "follow",
        cache: "no-store",
        headers: { "User-Agent": "Mozilla/5.0" }
      });

      if (!response.ok) continue;

      const contentType = response.headers.get("content-type") || "image/jpeg";
      if (!contentType.startsWith("image/")) continue;

      const image = await response.arrayBuffer();

      return new Response(image, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=300, stale-while-revalidate=3600"
        }
      });
    } catch {
      // Try the next Google Drive image endpoint.
    }
  }

  return new Response("Profile image unavailable", { status: 502 });
}
