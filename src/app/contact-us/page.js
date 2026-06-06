import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-semibold text-slate-900">
              Contact Us
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-7">
              We are here to help you anytime. Send us a message and we will respond quickly.
            </p>

            <div className="flex items-center gap-2 mt-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-green-600 font-medium">Contact</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000"
              alt="contact"
              className="w-full max-w-md h-[360px] object-cover shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* FORM + INFO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="lg:col-span-2">

            <div className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Your Name"
                  className="w-full h-14 px-5 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  placeholder="Your Email"
                  className="w-full h-14 px-5 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Phone Number"
                  className="w-full h-14 px-5 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  placeholder="Subject"
                  className="w-full h-14 px-5 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full p-5 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 font-medium">
                Send Message →
              </button>

            </div>
          </div>

          {/* INFO BOXES */}
          <div className="space-y-6">

            <div className="p-6 bg-white shadow hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-green-600 text-2xl mb-3" />
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-500 mt-2">
                Mumbai, Maharashtra, India
              </p>
            </div>

            <div className="p-6 bg-white shadow hover:shadow-lg transition">
              <FaEnvelope className="text-green-600 text-2xl mb-3" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-500 mt-2">
                contact@healthysoullife.com
              </p>
            </div>

            <div className="p-6 bg-white shadow hover:shadow-lg transition">
              <FaPhoneAlt className="text-green-600 text-2xl mb-3" />
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-500 mt-2">
                +91 22 66990333
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}