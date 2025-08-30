export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl font-semibold tracking-tight">National Scrap Company</h1>
          <p className="mt-3 text-neutral-600">Operating subsidiary focused on yard operations, certified destruction, and compliant recycling. Celebrating 20 years (2005–2025).</p>
        </div>
      </section>
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl shadow-sm border border-neutral-200 bg-white p-6">
            <h3 className="font-semibold">Services</h3>
            <ul className="text-sm text-neutral-700 mt-2 grid gap-1">
              <li>• Metals recycling & certified destruction</li>
              <li>• Roll-off & route logistics</li>
              <li>• Safety-first operations with measurable KPIs</li>
            </ul>
          </div>
          <div className="rounded-3xl shadow-sm border border-neutral-200 bg-white p-6">
            <h3 className="font-semibold">Coverage</h3>
            <p className="text-sm text-neutral-700 mt-2">Tennessee-focused with regional partners across the Southeast and Midwest.</p>
          </div>
          <div className="rounded-3xl shadow-sm border border-neutral-200 bg-white p-6">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-neutral-700 mt-2">Email <a className="underline" href="mailto:info@mem-intl.com">info@mem-intl.com</a> to request pickups or site assessments.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
