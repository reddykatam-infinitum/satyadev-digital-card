export type SocialPlatform = "linkedin" | "youtube" | "facebook" | "x";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
};

export type DigitalCard = {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  headline: string;
  profileImage: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  website: string;
  location: string;
  address: string;
  mapUrl: string;
  socialLinks: SocialLink[];
};

export const cards: DigitalCard[] = [
  {
    slug: "satyadev-chada",
    name: "Satyadev Chada",
    firstName: "Satyadev",
    lastName: "Chada",
    role: "Founder & Director",
    company: "Infinitum Network Solutions",
    headline: "Building global creator ecosystems, original IPs and digital media businesses.",
    profileImage: "/api/profile?v=20260624-drive",
    phone: "+919905800015",
    phoneDisplay: "+91 99058 00015",
    whatsapp: "919905800015",
    email: "sd@infinitumnetwork.in",
    website: "https://www.infinitumnetworksolutions.com/",
    location: "Jubilee Hills, Hyderabad",
    address: "Plot No. 702, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No+702+Road+No+36+Jubilee+Hills+Hyderabad+Telangana+500033",
    socialLinks: [
      {
        platform: "linkedin",
        label: "LinkedIn",
        handle: "sd-chada-2733021b7",
        url: "https://www.linkedin.com/in/sd-chada-2733021b7/"
      }
    ]
  }
];

export function getCard(slug: string): DigitalCard | undefined {
  return cards.find((card) => card.slug === slug);
}
