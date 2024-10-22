import useGlobalState from '@/hooks/globalstate.hook';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function NewNavbar() {
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const { profile: user, isAuthenticated, logout } = useGlobalState();
  const [anchorEl, setAnchorEl] = useState(null);

  // Scroll Animation
  const [scrollStyle, setScrollStyle] = useState<boolean>(false);
  useEffect(() => {
    const changeNavbarStyle = () => {
      if (window.scrollY >= 150) {
        setScrollStyle(true);
      } else {
        setScrollStyle(false);
      }
    };
    window.addEventListener('scroll', changeNavbarStyle);
  }, []);

  // Auth Modal button
  const handleOpenSmallModal = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenuModal(!openMenuModal);
  };
  const handleCloseSmallModal = (option?: string) => {
    setAnchorEl(null);
    setOpenMenuModal(false);

    if (option == 'Sign Out') {
      logout();
    }
  };

  // Login Modal
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
  };

  // Register Modal
  const handleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };

  const handleRegisterModalClose = () => {
    setOpenRegisterModal(false);
  };

  const handleRegisterModalOpen = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };

  // Forgot Password Modal
  const handleForgotPasswordModal = () => {
    // setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
  };

  // const handleForgotPasswordModalClose = () => {
  //   setOpenForgotPasswordModal(false);
  // };

  const handleForgotPasswordModalOpen = () => {
    setOpenLoginModal(false);
    // setOpenForgotPasswordModal(true);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  const handleVerificationModalOpenClose = () => {
    setVerificationModalOpen(false);
  };
  
  
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-2 bg-white">
      <Link href="/">
        <img src="/icons/distresssales-logo.svg" width={200} height={200} />
      </Link>

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
          <Link href='/auth/signin' className="text-gray-700 hover:text- text-sm font-medium hover:text-gray-700">Login</Link>
          <button className="text-white bg-[#00134D] inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
