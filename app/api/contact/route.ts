// app/api/contact/route.ts

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Basic validation
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), { status: 400 });
    }

    // Forward to Formspree
    const res = await fetch("https://formspree.io/f/mzzakdkw", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return new Response(JSON.stringify({ error: data?.errors ?? "Formspree error" }), { status: 400 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
