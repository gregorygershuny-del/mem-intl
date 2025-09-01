import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MEM International",
  description: "Our recycling and risk management services.",
  alternates: {
    canonical: "https://www.mem-intl.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <p>This is the Services page.</p>
    </div>
  );
}
