"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, when: "beforeChildren" } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function NationalScrapClient() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center gap-12 p-8 bg-neutral-50">
      <Image
        src="/nsc-logo.png"
        alt="National Scrap Company"
        width={160}
        height={160}
        priority
        className="rounded-lg"
      />

      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight">National Scrap Company</h1>
        <div className="w-16 h-0.5 bg-neutral-300 mx-auto my-4" />
        <p className="text-neutral-700 leading-relaxed text-base">
          National Scrap Company, started in 2005, is specifically tailored to the procurement and
          safe destruction/remelt of contaminated aluminum and magnesium scrap through well-tested
          recycling programs at trusted tollers and consumers throughout the world. We sign
          “Destruction Certificates” as well as confirm that materials are recycled in the most
          “green” way available for the materials we handle.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServiceCard
          title="Aluminum & Magnesium Recycling"
          bullets={[
            "Secure destruction of contaminated alloys",
            "Remelt programs with ISO-certified tollers",
            "Closed-loop recycling for high-value metals",
          ]}
        />
        <ServiceCard
          title="Wheel Recycling"
          bullets={[
            "End-of-life wheel collection & certification",
            "Alloy separation & recovery optimization",
            "Verified destruction with compliance paperwork",
          ]}
        />
        <ServiceCard
          title="Laminated Foils & Wire"
          bullets={[
            "Specialized handling of multi-metal laminates",
            "Flows minimizing downgrade & loss",
            "Sustainable outlets with trusted consumers",
          ]}
        />
      </motion.div>

      <Link href="/" className="underline text-sm text-neutral-600 hover:text-neutral-800 mt-6">
        Back to MEM
      </Link>
    </main>
  );
}

function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <motion.div
      variants={item}
      className="rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 bg-white p-6"
    >
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <ul className="grid gap-2 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">✔ {b}</li>
        ))}
      </ul>
    </motion.div>
  );
}
