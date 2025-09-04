<form
  action="https://formspree.io/f/mzzakdkw"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full border border-gray-300 rounded p-2"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full border border-gray-300 rounded p-2"
  />
  <textarea
    name="message"
    placeholder="Volumes, materials, lanes, timelines..."
    required
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
