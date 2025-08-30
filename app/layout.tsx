import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MEM International Trading LLC",
  description: "Metals • Recycling • Risk & Compliance",
  icons: {
    icon: "/favicon.ico", // root favicon
    apple: "/apple-touch-icon.png",
  },
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
          <Link href="/">
            <Image
              src="/MEM.png"   // now points to /public/MEM.png
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

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

