// app/api/contact/route.ts

export async function POST(req: Request) {
  try {
    // Expect multipart/form-data from the browser
    const formData = await req.formData();

    // Minimal validation
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Email and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Forward to Formspree (Personal-plan workaround)
    const res = await fetch("https://formspree.io/f/mzzakdkw", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: data?.errors ?? "Formspree error" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// (Optional) Guard other methods with 405
export async function GET() {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}

