import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>
            <Image
              src="/assets/img/white-logo.png"
              alt="logo"
              width={160}
              height={60}
              className="mb-4"
            />

            <p className="text-gray-300 text-sm leading-6">
              We examine your health, address your concerns, and advise you on health screenings and other services.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition">
                <FaFacebookF />
              </a>

              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition">
                <FaPinterestP />
              </a>

              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition">
                <FaLinkedinIn />
              </a>

              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#">Pre-policy health checkup</Link></li>
              <li><Link href="#">Pre-health checkup</Link></li>
              <li><Link href="#">Annual health checkup</Link></li>
              <li><Link href="#">Health camp</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#">Health talk</Link></li>
              <li><Link href="#">Online doctor consultation</Link></li>
              <li><Link href="#">Covid testing</Link></li>
              <li><Link href="#">Meditation</Link></li>
              <li><Link href="#">Yoga</Link></li>
              <li><Link href="#">Healing therapy</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                Mon - Sat{" "}
                <span className="text-white">8:00AM - 8:00PM</span>
              </li>
              <li>
                Sunday <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-10 py-6 text-center text-gray-400 text-sm">
          ©{" "}
          <Link href="https://Healthyysoullife.com" className="text-white">
            Healthyysoullife Pvt. Ltd.
          </Link>
        </div>

      </div>
    </footer>
  );
}