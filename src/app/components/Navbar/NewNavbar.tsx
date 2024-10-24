import useGlobalState from '@/hooks/globalstate.hook';
import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function NewNavbar() {
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const { profile: user, isAuthenticated, logout } = useGlobalState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notification, setNotification] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const router = useRouter();

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

  const navs = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About Us',
      href: '/',
    },
    {
      title: "FAQ's",
      href: '/',
    },
  ];

  return (
    <nav className="flex items-center justify-between gap-5 px-4 py-2 bg-white">
      <Link href="/">
        <img src="/icons/distresssales-logo.svg" width={200} height={200} />
      </Link>

      <div className="flex items-center gap-10">
        {/* Search Bar */}
        <div className="mx-auto">
          <div className="relative flex items-center w-[350px] h-12 rounded-[10px] border-[0.5px] border-[#00134D] bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-[#726C6C] poppins-font">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 20 20"
                stroke="#00134D"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search anything.."
            />
          </div>
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-10 my-2">
            <div className="flex items-center gap-7">
              <ButtonBase
                sx={{
                  borderRadius: '100%',
                  '&:active': {
                    backgroundColor: '#FEF0F0', // Change to your desired color
                  },
                }}
              >
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <img src="/icons/bell.svg" alt="Notification-bell" className="relative" width={20} height={20} />
                  {notification.length > 0 && (
                    <img src="/icons/red-dot.svg" className="absolute right-[10px] top-2" width={10} height={10} />
                  )}
                </div>
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: '100%',
                  '&:active': {
                    backgroundColor: '#FEF0F0', // Change to your desired color
                  },
                }}
              >
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <img src="/icons/fav.svg" alt="Favorite" className="relative" width={20} height={20} />
                  {favorite.length > 0 && (
                    <img src="/icons/red-dot.svg" className="absolute right-[10px] top-2" width={10} height={10} />
                  )}
                </div>
              </ButtonBase>
            </div>
            <div className="border-[0.2px] border-[#B5B3B3] rounded-[20px] py-[8px] px-[8px] flex gap-3 items-center">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={
                    user?.profileImage ||
                    `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&rounded=true&size=128`
                  }
                  alt=""
                />
              </div>
              <p className="text-[14px] font-[400] text-[#0A0A0B] leading-none">
                {user?.firstName + ' ' + user?.lastName}
              </p>
              <svg
                  className={`transition duration-300 ${openMenuModal ? 'rotate-180' : ''}`}
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.45 9.90615L8.37499 5.83115C7.89374 5.3499 7.10624 5.3499 6.62499 5.83115L2.54999 9.90615"
                    stroke="#101828"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </div>
            <button onClick={() => router.push('/post-ad')} className="text-[#FAFAFA] bg-[#00134D] flex items-center px-7 py-3 text-sm font-[600] rounded-[12px] poppins-font gap-3">
              <img src="/icons/add.svg" width={15} />
              <span>Post AD</span>
            </button>
          </div>
        ) : (
          <>
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
            <div className="toggle hidden w-full md:w-auto md:flex gap-7 text-right text-bold mt-5 md:mt-0 md:border-none">
              {navs.map((nav, i) => (
                <Link
                  key={i}
                  href={nav.href}
                  className="block md:inline-block md:border-none text-[#0A0A0B] hover:text-[#0A0A0B] poppins-font text-[16px] font-[400]"
                >
                  {nav.title}
                </Link>
              ))}
            </div>

            <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
              <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
                <button className="text-[#FAFAFA] bg-[#00134D] inline-flex items-center justify-center px-7 py-3 border border-transparent text-sm font-[600] rounded-[12px]">
                  Register
                </button>
                <button className="text-[#00134D] text-sm font-[600] border border-[#00134D] rounded-[12px] px-7 py-3">
                  Login
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
