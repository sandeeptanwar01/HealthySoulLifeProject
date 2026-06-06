"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClock, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile dropdown states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [wellnessOpen, setWellnessOpen] = useState(false);

  return (
    <header className="w-full">

      {/* TOP BAR */}
      <div className="bg-gray-100 border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2">

          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-700 text-xs sm:text-sm">

            <div className="flex items-center gap-2">
              <FiClock className="text-green-500" />
              <span>Mon - Sat 08:00 - 20:00</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span>022 66 99 0333</span>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-green-500" />
              <span>contact@healthysoullife.com</span>
            </div>

          </div>

          <div className="flex gap-3">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaPinterestP />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-500">
              Healthy<span className="text-teal-500">SoulLife</span>
            </h2>
            <p className="text-xs text-gray-500">
              Where Care Comes First
            </p>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

            <li>
              <Link href="/" className="text-teal-500">Home</Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-teal-500">About Us</Link>
            </li>

            {/* SERVICES DROPDOWN (DESKTOP HOVER) */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-teal-500">
                Services +
              </span>

              <div className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-lg rounded-md w-52 p-3 z-50">
                <Link href="/services/pre-policy" className="block py-2 hover:text-teal-500">
                  Pre Policy Checkup
                </Link>
                <Link href="/services/pre-health" className="block py-2 hover:text-teal-500">
                  Pre Health Checkup
                </Link>
                <Link href="/services/annual" className="block py-2 hover:text-teal-500">
                  Annual Checkup
                </Link>
                 <Link href="/services/camp-health" className="block py-2 hover:text-teal-500">
                  Health Camp
                </Link>
              </div>
            </li>

            {/* WELLNESS DROPDOWN (DESKTOP HOVER) */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-teal-500">
                Wellness +
              </span>

              <div className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-lg rounded-md w-52 p-3 z-50">
                <Link href="/wellness/yoga" className="block py-2 hover:text-teal-500">
                  Yoga
                </Link>
                <Link href="/wellness/diet" className="block py-2 hover:text-teal-500">
                  Diet Plan
                </Link>
                <Link href="/wellness/mental-health" className="block py-2 hover:text-teal-500">
                  Mental Health
                </Link>
              </div>
            </li>

            <li>
              <Link href="/blog" className="hover:text-teal-500">Blog</Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-teal-500">Careers</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-teal-500">Contact</Link>
            </li>

          </ul>

          {/* LOGIN + MOBILE BUTTON */}
          <div className="flex items-center gap-3">

            <button className="hidden sm:block bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-full">
              LOGIN
            </button>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 space-y-2">

            <MobileNav href="/" text="Home" />
            <MobileNav href="/about" text="About Us" />

            {/* SERVICES MOBILE DROPDOWN */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-2 border-b"
              >
                Services +
              </button>

              {servicesOpen && (
                <div className="pl-4 bg-gray-50">
                  <MobileNav href="/services/pre-policy" text="Pre Policy Checkup" />
                  <MobileNav href="/services/pre-health" text="Pre Health Checkup" />
                  <MobileNav href="/services/annual" text="Annual Checkup" />
                  <MobileNav href="/services/camp-health" text="Health Camp" />
                </div>
              )}
            </div>

            {/* WELLNESS MOBILE DROPDOWN */}
            <div>
              <button
                onClick={() => setWellnessOpen(!wellnessOpen)}
                className="w-full text-left py-2 border-b"
              >
                Wellness +
              </button>

              {wellnessOpen && (
                <div className="pl-4 bg-gray-50">
                  <MobileNav href="/wellness/yoga" text="Yoga" />
                  <MobileNav href="/wellness/diet" text="Diet Plan" />
                  <MobileNav href="/wellness/mental-health" text="Mental Health" />
                </div>
              )}
            </div>

            <MobileNav href="/blog" text="Blog" />
            <MobileNav href="/careers" text="Careers" />
            <MobileNav href="/contact" text="Contact" />

            <button className="w-full mt-3 bg-teal-400 text-white py-3 rounded-full">
              LOGIN
            </button>

          </div>
        )}

      </nav>
    </header>
  );
}

/* ---------------- COMPONENTS ---------------- */

function MobileNav({ href, text }) {
  return (
    <Link href={href} className="block py-2 border-b text-gray-700 hover:text-teal-500">
      {text}
    </Link>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-500 hover:text-white"
    >
      {icon}
    </a>
  );
}