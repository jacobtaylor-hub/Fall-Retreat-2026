import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title:
    "Brian Zahnd & Bradley Jersak Fall Retreat 2026 | Tennessee Christian Retreat",
  description:
    "Join Brian Zahnd and Bradley Jersak for a fall retreat and theological conference at Fall Creek Falls State Park in Tennessee, October 12–15, 2026. Register now.",
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
