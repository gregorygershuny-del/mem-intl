import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEM International Trading LLC",
  description: "Metals • Recycling • Risk & Compliance",
  alternates: { canonical: "https://www.mem-intl.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
