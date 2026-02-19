import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>

        <form className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Message</label>

            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     outline-none resize-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white font-semibold py-3 rounded-lg cursor-pointer
                   hover:bg-indigo-700 transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
