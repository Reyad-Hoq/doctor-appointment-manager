import React from 'react';
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">

            {/* Logo & Description */}
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                  D
                </div>

                <div>
                  <h2 className="text-2xl font-bold">DocAppoint</h2>
                  <p className="text-sm text-slate-400">
                    Smart Doctor Appointment Management System
                  </p>
                </div>
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Easily find trusted doctors, book appointments, and manage your
                healthcare journey with a seamless digital experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/appointments"
                    className="hover:text-white"
                  >
                    All Appointments
                  </Link>
                </li>

                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Connect With Us
              </h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-600"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-500"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-gray-700"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} DocAppoint. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;