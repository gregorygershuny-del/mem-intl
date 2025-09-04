<form
  action="https://formspree.io/f/mzzakdkw"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full border border-gray-300 rounded p-2"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full border border-gray-300 rounded p-2"
  />
  <textarea
    name="message"
    required
    placeholder="Volumes, materials, lanes, timelines..."
    className="w-full border border-gray-300 rounded p-2"
    rows={5}
  ></textarea>
  <button
    type="submit"
    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
  >
    Send Message
  </button>
</form>

