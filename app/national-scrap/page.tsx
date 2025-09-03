import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "National Scrap Company — MEM" };

export default function NationalScrapPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center gap-8 p-8 text-center bg-neutral-50">
      <Image
        src="/nsc-logo.png"
        alt="National Scrap Company"
        width={160}
        height={160}
        priority
        className="rounded-lg"
      />

      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          National Scrap Company
        </h1>

        <div className="w-16 h-0.5 bg-neutral-300 mx-auto my-4"></div>

        <p className="text-neutral-700 leading-relaxed text-base">
          National Scrap Company, started in 2005, is specifically tailored to
          the procurement and safe destruction/remelt of contaminated aluminum
          and magnesium scrap through well-tested recycling programs at trusted
          tollers and consumers throughout the world. We sign “Destruction
          Certificates” as well as confirm that materials are recycled in the
          most “green” way available for the materials we handle.
        </p>
      </div>

      <Link
        href="/"
        className="underline text-sm text-neutral-600 hover:text-neutral-800 mt-6"
      >
        Back to MEM
      </Link>
    </main>
  );
}
