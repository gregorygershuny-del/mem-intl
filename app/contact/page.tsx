"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mzzakdkw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSent(true);
    } else {
      alert("There was an error. Please try again.");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      {sent ? (
        <div className="text-center py-10">
          <div className="mx-auto h-10 w-10 grid place-items-center text-green-600 text-2xl">
            ✓
          </div>
          <p className="mt-3 font-medium">
            Thanks! We will respond to you shortly!
          </p>
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-2xl shadow hover:bg-neutral-800"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
