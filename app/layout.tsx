import type { ReactNode } from "react";
import "./globals.css";

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
