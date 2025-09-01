import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MEM International Trading LLC",
  description:
    "MEM bridges disciplined commodity trading with real-world yard and mill operations.",
  alternates: { canonical: "https://www.mem-intl.com/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">About Us</h1>
      <p className="mt-3 text-neutral-700">
        Learn more about MEM and our mission.
      </p>
    </div>
  );
}
