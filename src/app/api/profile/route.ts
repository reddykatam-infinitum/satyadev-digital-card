const DRIVE_FILE_ID = "1azNy2HYLaQmiWuQNtYc7fQiq4SW1zhDF";
const PROFILE_URL = `https://drive.google.com/thumbnail?id=${DRIVE_FILE_ID}&sz=w1200`;

export async function GET() {
  return Response.redirect(PROFILE_URL, 307);
}
