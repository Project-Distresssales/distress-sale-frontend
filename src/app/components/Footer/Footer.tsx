'use client';
import Assets from '@/constants/assets.constant';
import useAppTheme from '@/hooks/theme.hook';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Advertise with Us
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Terms of Use
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">UAE</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Abu Dhabi
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Dubai
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Sharjah
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Ajman
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  UAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Ras Al-Khaimah
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Fujairah
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Other Countries</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Egypt
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Saudi Arabia
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Qatar
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Kuwait
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Lebanon
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Bahrain
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Oman
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Support</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Help
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Contact Us
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                  FAQ
                  </a>
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
