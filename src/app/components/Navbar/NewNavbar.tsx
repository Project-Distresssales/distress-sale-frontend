import Link from 'next/link';
import React from 'react';

export default function NewNavbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-2 bg-white">
      <img src="/icons/distresssales-logo.svg" width={200} height={200} />

      <div className="flex md:hidden">
        <button id="hamburger">
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
          />
        </button>
      </div>
      <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
        <Link
          href="#home"
          className="block md:inline-block px-3 py-3 md:border-none text-[#00134D] hover:text-[#00134D]"
        >
          Home
        </Link>
        <Link
          href="#aboutus"
          className="block md:inline-block px-3 py-3 md:border-none text-[#00134D] hover:text-[#00134D]"
        >
          About us
        </Link>
        <Link
          href="#contactUs"
          className="block md:inline-block px-3 py-3 md:border-none text-[#00134D] hover:text-[#00134D]"
        >
          FAQ's
        </Link>
      </div>

      <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
          <button className="text-gray-700 hover:text- text-sm font-medium">
            Login
          </button>
          <button
            className="text-white bg-[#00134D] inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
