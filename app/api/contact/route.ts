// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = { name?: string; email?: string; message?: string };

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as Body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // Send via Resend
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY ?? ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MEM Website <no-reply@mem-intl.com>",     // this sender will work after you verify the domain in Resend
        to: [process.env.CONTACT_TO_EMAIL ?? ""],         // set this in Vercel env vars
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: `
          <div style="font:14px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial">
            <h2>Website Inquiry</h2>
            <p><b>Name:</b> ${escapeHtml(name)}</p>
            <p><b>Email:</b> ${escapeHtml(email)}</p>
            <p><b>Message:</b></p>
            <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
          </div>
        `,
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      return NextResponse.json({ ok: false, error: txt }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
