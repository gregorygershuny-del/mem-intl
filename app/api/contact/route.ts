// app/api/contact/route.ts
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const res = await fetch("https://formspree.io/f/mzzakdkw", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
      cache: "no-store",
    });

    const raw = await res.text();
    let data: any = null;
    try { data = JSON.parse(raw); } catch { /* keep raw */ }

    if (!res.ok) {
      const msg =
        (Array.isArray(data?.errors) && data.errors.map((e: any) => e.message).join(" ")) ||
        data?.message ||
        raw ||
        "Formspree error";
      return new Response(JSON.stringify({ ok: false, error: msg }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, ...(data ?? {}) }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
