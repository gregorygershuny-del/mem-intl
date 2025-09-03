"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [sent, setSent] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* Header with logo and nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/MEM.png"
              alt="MEM logo"
              width={180}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                MEM International Trading LLC
              </h1>
              <p className="text-xs text-neutral-500 -mt-0.5">
                Metals • Recycling • Risk & Compliance
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#industries" className="hover:text-neutral-600">Industries</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <Link href="/national-scrap" className="hover:text-neutral-600">National Scrap Co.</Link>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Global Metals Trading, <span className="text-neutral-500">Operational Excellence</span>, and <span className="text-neutral-500">Risk Discipline</span>
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl">
              MEM International Trading buys, sells, and optimizes metal and scrap flows across North America—pairing market intelligence with rigorous risk and compliance controls. From mill relationships to yard operations, we help partners move volume profitably and transparently.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center rounded-2xl bg-neutral-900 text-white px-5 py-2 text-sm"
              >
                Explore Services
              </a>
              <Link
                href="/national-scrap"
                className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-2 text-sm"
              >
                National Scrap Company
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <span>✔ 30+ years combined operating & trading experience</span>
              <span>•</span>
              <span>✔ Strong GRC mindset from shop floor to boardroom</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl shadow-xl bg-white p-6 grid gap-4">
              <div className="grid grid-cols-3 gap-3">
                <Stat title="Monthly Volume" value="5,000+ GT" note="managed across partners" />
                <Stat title="Risk Managed" value="$500M+" note="zero incident track record" />
                <Stat title="On-Time" value="98.7%" note="fulfillment reliability" />
              </div>
              <div className="rounded-2xl bg-neutral-900 text-white p-5">
                <p className="text-sm leading-5 text-neutral-300">Signal • Discipline • Execution</p>
                <p className="mt-1 text-lg font-medium">
                  Price discovery, duty & premium math, and transparent settlement mechanics that mills and generators trust.
                </p>
              </div>
              <ul className="text-sm text-neutral-600 grid gap-2">
                <li>🌐 LME/Midwest premium monitoring and hedge-aware contracting</li>
                <li>📈 KPI dashboards for volume, yield, and margin</li>
                <li>🛡️ Compliance-first: UCC, bailment, documentation, audit trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h3 className="text-3xl font-semibold tracking-tight">Services</h3>
            <p className="text-neutral-500 max-w-2xl">
              We connect scrap generators, processors, and mills with disciplined trading, clean paperwork, and predictable logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Metals & Scrap Trading"
              bullets={[
                "Non-Ferrous metals and steel flows",
                "Tolling & offtake structures",
                "Transparent pricing & settlement",
              ]}
            />
            <ServiceCard
              title="Logistics & Operations"
              bullets={[
                "Lane discovery & routing",
                "Yield / loss accountability",
                "SOPs, audits, yard playbooks",
              ]}
            />
            <ServiceCard
              title="Risk & Compliance"
              bullets={[
                "Contracting & UCC/bailment",
                "Counterparty diligence",
                "Policy & control frameworks",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold tracking-tight mb-6">Industries We Serve</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Industry title="Mills & Foundries" desc="Busheling, bundles, shred, and clean prompt flows." />
            <Industry title="Manufacturers" desc="Turn-key scrap programs with reporting your CFO accepts." />
            <Industry title="Recyclers" desc="Yield, moisture, and downgrade accountability that sticks." />
            <Industry title="Public Sector" desc="Secure destruction, audit trails, and environmental compliance." />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">About MEM</h3>
            <p className="mt-3 text-neutral-700">
              Founded to bridge disciplined commodity trading with real-world yard and mill operations, MEM International Trading brings shop-floor accountability to market-facing decisions. We speak both languages: production and price. Our approach is forward and unvarnished—tight contracts, clear math, fast communication, and zero surprises.
            </p>
            <ul className="mt-5 grid gap-2 text-neutral-700 text-sm">
              <li>✔ Zero-incident risk stewardship over $500MM managed</li>
              <li>✔ Deep mill and recycler relationships across the U.S.</li>
              <li>✔ Data-driven reporting your finance team will actually use</li>
            </ul>
          </div>
          <div className="rounded-3xl shadow-xl bg-white p-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="LME/MW Pricing Feeds" value="Integrated" />
                <MiniStat label="Contracts & UCC" value="Template-ready" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="Ops SOPs" value="Deployable" />
                <MiniStat label="Dashboards" value="Looker/Sheets" />
              </div>
              <p className="text-xs text-neutral-500">
                Logistics partners, inspection firms, and secure destruction workflows available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">Contact</h3>
            <p className="mt-3 text-neutral-600">
              Tell us your projects, volumes, and constraints. We’ll give you a concrete plan and numbers you can verify.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-neutral-700">
              <p>📞 +1 (609) 598-2266</p>
              <p>
                Email:{" "}
                <a className="underline" href="mailto:trading@mem-intl.com">
                  trading@mem-intl.com
                </a>{" "}
                or{" "}
                <a className="underline" href="mailto:greg@mem-intl.com">
                  greg@mem-intl.com
                </a>
              </p>
              <p>HQ: Alpharetta, GA • Operating across the U.S.</p>
            </div>
          </div>
          <div className="rounded-3xl shadow-xl bg-white p-6">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-10 w-10 grid place-items-center text-green-600 text-2xl">✔</div>
                <p className="mt-3 font-medium">Thanks—your message is queued locally.</p>
                <p className="text-sm text-neutral-600">In production, wire this form to your email/CRM webhook.</p>
                <div className="mt-4">
                  <button onClick={() => setSent(false)} className="border rounded-2xl px-4 py-2 text-sm">Send another</button>
                </div>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={(e) => {e.preventDefault(); setSent(true);}}>
                <div className="grid gap-1">
                  <label className="text-sm">Name</label>
                  <input className="border rounded-md px-3 py-2" placeholder="Your name" required />
                </div>
                <div className="grid gap-1">
                  <label className="text-sm">Email</label>
                  <input type="email" className="border rounded-md px-3 py-2" placeholder="you@company.com" required />
                </div>
                <div className="grid gap-1">
                  <label className="text-sm">Message</label>
                  <textarea className="border rounded-md px-3 py-2" placeholder="Volumes, materials, lanes, timelines…" required />
                </div>
                <button type="submit" className="rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Privacy Policy (new) */}
      <section id="privacy" className="py-16 lg:py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold tracking-tight mb-4">Privacy Policy</h3>
          <p className="text-neutral-700 mb-4">
            MEM International Trading LLC values your privacy. We collect only the information necessary to provide our services, such as contact details submitted through forms. We never sell or share your data with third parties except where required by law or for essential service delivery. All information is handled confidentially and in accordance with applicable data protection laws.
          </p>
          <p className="text-neutral-700">
            You may contact us at any time to request information about what data we hold, to correct inaccuracies, or to request deletion where legally permissible.
          </p>
        </div>
      </section>

      {/* Terms & Conditions (new) */}
      <section id="terms" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold tracking-tight mb-4">Terms & Conditions</h3>
          <p className="text-neutral-700 mb-4">
            By accessing and using this website, you agree to comply with these Terms & Conditions. All content is provided for informational purposes and may be updated without prior notice. MEM International Trading LLC is not liable for any damages resulting from reliance on the information provided.
          </p>
          <p className="text-neutral-700 mb-4">
            All services are subject to contractual agreements that govern terms of trade, risk management, and compliance obligations. Unauthorized use, reproduction, or distribution of site materials is strictly prohibited.
          </p>
          <p className="text-neutral-700">
            These Terms are governed by the laws of the State of Georgia and the United States. Any disputes shall be resolved under the appropriate jurisdiction.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {year} MEM International Trading LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="underline" href="#privacy">Privacy</a>
            <a className="underline" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4">
      <p className="text-xs text-neutral-500">{title}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
      <p className="text-xs text-neutral-500 mt-0.5">{note}</p>
    </div>
  );
}

function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 bg-white p-6">
      <h4 className="text-lg font-semibold">{title}</h4>
      <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">✔ {b}</li>
        ))}
      </ul>
    </div>
  );
}

function Industry({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl shadow-sm border border-neutral-200 bg-white p-6">
      <h5 className="font-semibold">{title}</h5>
      <p className="text-sm text-neutral-600 mt-1">{desc}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}
