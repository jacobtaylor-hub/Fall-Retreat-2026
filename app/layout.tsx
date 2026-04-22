import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fall Retreat 2026 | Word of Life Church',
  description: 'Fall Retreat 2026 with Brian Zahnd and Bradley Jersak at Fall Creek Falls State Park.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wpl6rdc.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
