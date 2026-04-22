import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://wolc.com/retreat";
const ogImage =
  "https://storage1.snappages.site/DKZ2TW/assets/images/24051839_1200x800_2500.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Fall Retreat with Brian Zahnd and Bradley Jersak | October 12–15, 2026",
  description:
    "Join Brian Zahnd and Bradley Jersak for Fall Retreat 2026 at Fall Creek Falls State Park in Tennessee, October 12–15, 2026. Telos of the Ages: A theological exploration of the end of the ages.",
  keywords: [
    "Brian Zahnd retreat",
    "Bradley Jersak retreat",
    "Brian Zahnd and Bradley Jersak retreat",
    "Brian Zahnd conference",
    "Bradley Jersak conference",
    "Brian Zahnd and Bradley Jersak conference",
    "Fall Retreat 2026",
    "Christian retreat Tennessee",
    "Fall Creek Falls retreat",
    "theological conference",
    "Word of Life Church retreat",
    "Telos of the Ages",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Fall Retreat with Brian Zahnd and Bradley Jersak | October 12–15, 2026",
    description:
      "Join Brian Zahnd and Bradley Jersak for Fall Retreat 2026 at Fall Creek Falls State Park in Tennessee. Explore Telos of the Ages and register now.",
    url: siteUrl,
    siteName: "Word of Life Church Fall Retreat 2026",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 800,
        alt: "Fall Retreat with Brian Zahnd and Bradley Jersak at Fall Creek Falls State Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fall Retreat with Brian Zahnd and Bradley Jersak | October 12–15, 2026",
    description:
      "Join Brian Zahnd and Bradley Jersak for Fall Retreat 2026 at Fall Creek Falls State Park in Tennessee.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wpl6rdc.css" />
      </head>
      <body className="bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
