import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MEM International Trading LLC",
  description: "Reach out to MEM International Trading for inquiries.",
  alternates: { canonical: "https://www.mem-intl.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-3 text-neutral-700">Reach out for more information.</p>
    </div>
  );
}
