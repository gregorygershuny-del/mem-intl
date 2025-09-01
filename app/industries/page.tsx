import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | MEM International Trading LLC",
  description:
    "We serve mills & foundries, manufacturers, recyclers, and the public sector.",
  alternates: { canonical: "https://www.mem-intl.com/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Industries</h1>
      <p className="mt-3 text-neutral-700">This is the Industries page.</p>
    </div>
  );
}

