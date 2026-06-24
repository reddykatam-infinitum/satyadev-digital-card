import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const profileImage = "https://drive.google.com/thumbnail?id=1azNy2HYLaQmiWuQNtYc7fQiq4SW1zhDF&sz=w1200";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Satyadev Chada | Infinitum Network Solutions", template: "%s | Infinitum" },
  description: "Official digital business card for Satyadev Chada, Founder and Director at Infinitum Network Solutions.",
  applicationName: "Satyadev Chada Digital Card",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/images/infinitum-mark.svg", apple: "/images/infinitum-mark.svg" },
  openGraph: {
    type: "profile",
    siteName: "Infinitum Digital Card",
    title: "Satyadev Chada | Infinitum Network Solutions",
    description: "Founder and Director at Infinitum Network Solutions.",
    images: [{ url: profileImage, width: 627, height: 612, alt: "Satyadev Chada" }]
  },
  twitter: { card: "summary_large_image", images: [profileImage] }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#020608",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
