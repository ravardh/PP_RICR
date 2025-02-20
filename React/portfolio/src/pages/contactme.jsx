import React from "react";


const Contactme = () => {
  return (
    <>
      <div class="m-auto flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">
            Contact Us
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <p class="text-gray-600">
                Feel free to reach out to us using the form or the contact
                details below.
              </p>
              <p>
                <strong>Email:</strong> support@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Street, City, Country
              </p>

            
            </div>

            <form class="space-y-4">
              <div>
                <label class="block text-gray-700">Name</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label class="block text-gray-700">Email</label>
                <input
                  type="email"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label class="block text-gray-700">Message</label>
                <textarea
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
