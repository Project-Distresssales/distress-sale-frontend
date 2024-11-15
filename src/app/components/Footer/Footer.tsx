'use client';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#D4DEFF]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="/icons/distress-logo-2.svg" width={100} height={100} />

            <div className="mt-8 flex gap-4">
              <IconButton>
                <img src="/icons/facebook.svg" width={30} height={30} />
              </IconButton>
              <IconButton>
                <img src="/icons/x.svg" width={30} height={30} />
              </IconButton>
              <IconButton>
              <img src="/icons/instagram.svg" width={30} height={30} />
              </IconButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-[#F4AD0E] transition no-underline hover:no-underline">
                    {' '}
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/post-ad" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  Advertise with Us
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  Terms of Use
                  </Link>
                </li>

                <li>
                  <Link href="/privacy-policy" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">UAE</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Abu Dhabi
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Dubai
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Sharjah
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Ajman
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  UAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Ras Al-Khaimah
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Fujairah
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Other Countries</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Egypt
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Saudi Arabia
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Qatar
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Kuwait
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Lebanon
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Bahrain
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:text-[#F4AD0E]">
                  Oman
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Support</p>

              <ul className="mt-6 space-y-4 text-sm">
                {/* <li>
                  <Link href="#" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  Help
                  </Link>
                </li> */}

                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  Contact Us
                  </Link>
                </li>

                <li>
                  <Link href="/faq" className="text-gray-700 transition hover:text-[#F4AD0E] no-underline hover:no-underline">
                  FAQ
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; Distress sales 2024, All rights reserved.</p>
      </div>
    </footer>
  );
}
