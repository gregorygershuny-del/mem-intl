import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEM International Trading LLC",
  description: "Metals • Recycling • Risk & Compliance",
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/images/apple-icon.png" }],
  },
  // If you added `manifest` here, remove it for now.
  // We'll add a proper app/manifest.webmanifest file later if you want.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {/* Navbar with logo */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <Link href="/" aria-label="MEM Home">
            <Image
              src="/images/MEM.png"
              alt="MEM International Trading LLC"
              width={180}
              height={40}
              priority
            />
          </Link>
          <nav className="flex space-x-6 text-sm font-medium">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/about">About</Link>
            <Link href="/national-scrap">National Scrap Co.</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
