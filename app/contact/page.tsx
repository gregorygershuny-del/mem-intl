"use client";

import { useState } from "react";
import Script from "next/script";

// reCAPTCHA v3 SITE key (public key). This is fine to hard-code for now.
const SITE_KEY = "6LdMf8IrAAAAAC_HTtx7SVmKmCcDzzc55XgdkVrd";

// Let TS know about grecaptcha on window
declare global {
  interface Window { grecaptcha?: any }
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function getRecaptchaToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) return reject(new Error("reCAPTCHA not loaded"));
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then((token: string) => resolve(token))
          .catch(reject);
      });
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setErr(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // 1) fetch a v3 token and attach it under the exact field name
      const token = await getRecaptchaToken();
      data.set("g-recaptcha-response", token);

      // 2) submit to our proxy (which forwards to Formspree)
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({} as any));

      if (res.ok && json.ok) {
        form.reset();
        setSent(true);
      } else {
        const detail =
          json?.error ||
          (json?.errors && json.errors.map((x: any) => x.message).join(" ")) ||
          "Submission failed.";
        setErr(detail);
      }
    } catch (e: any) {
      setErr(e?.message || "Network error. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      {/* Load reCAPTCHA v3 */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
        strategy="afterInteractive"
      />

      {sent ? (
        <div className="text-center py-10">
          <div className="mx-auto h-10 w-10 grid place-items-center text-green-600 text-2xl">✓</div>
          <p className="mt-3 font-medium">Thanks! We will respond to you shortly!</p>
          <p className="text-sm text-neutral-600">MEM International Trading</p>
          <div className="mt-4">
            <button
              onClick={() => setSent(false)}
              className="border rounded-2xl px-4 py-2 text-sm"
            >
              Send another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          {/* honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="New inquiry from mem-intl.com contact form" />

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {err && <p className="text-sm text-red-700">{err}</p>}

          <div>
            <button
              type="submit"
              disabled={sending}
              className="bg-black text-white px-6 py-2 rounded-2xl shadow hover:bg-neutral-800 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
