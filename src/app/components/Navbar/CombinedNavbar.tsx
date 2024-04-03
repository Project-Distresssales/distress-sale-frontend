import Assets from "@/constants/assets.constant";
import useGlobalState from "@/hooks/globalstate.hook";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const CombinedNavbar = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const { logout, isAuthenticated } = useGlobalState();

    // Scroll Animation
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollPosition(window.scrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    useEffect(() => {
        setIsScrolled(scrollPosition >= 150);
    }, [scrollPosition]);

    const links = [
        {
            id: 1,
            link: "Home",
            path: "/",
        },
        {
            id: 2,
            link: "Products",
            path: "/all-products"
        }
    ];

    return (
        <div className={
            isScrolled
                ? 'sticky top-0 z-20 w-full bg-[#fff] md:px-[80px] px-5 py-[20px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-down'
                : 'relative w-full bg-[#fff] md:px-[80px] px-5 py-[20px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-up'
        }>
            <div className="flex items-end space-x-3">
        <Link href="/"><Image src={Assets.logo} alt="Logo" width={150} height={150} /></Link>
        <div className="rounded-[5px] flex items-center space-x-1.5 cursor-pointer translate-y-[3px]">
          <Image src={Assets.location} alt="Logo" width={10} height={10} />
          <p className="text-[#344054] text-[0.8vw] font-[500] leading-5">All Cities (UAE)</p>
          <Image src={Assets.arrowDown} alt="" width={10} height={10} />
        </div>
      </div>

            {isAuthenticated && (
                <div className="flex items-center space-x-7 border-r border-[#D6DDFF] py-2 px-5">
                <div className="flex items-center space-x-2">
                  <Image src={Assets.heart} alt="" width={15} height={15} />
                  <p className="text-[#475467] text-[1vw] font-[500]">Favorites</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={Assets.bookSaved} alt="" width={15} height={15} />
                  <p className="text-[#475467] text-[1vw] font-[500]">Saved Searches</p>
                </div>
              </div>
            )}

<div className="flex items-center space-x-7">
          <div className="flex items-center space-x-3 ml-5 cursor-pointer relative z-50">
            {isAuthenticated ? (
              <Image
                src={
                  user.profileImage ||
                  `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&rounded=true&size=128`
                }
                alt={user.firstName + 'photo'}
                width={1000}
                height={1000}
                className="object-cover rounded-[50%] w-[42px] h-[42px]"
              />
            ) : (
              <div
                className="rounded-full p-[5px] flex justify0-center items-center border"
                style={{
                  boxShadow: '0px 1px 5px -2px rgba(16, 24, 40, 0.05), 0px -1px 5px -4px rgba(16, 24, 40, 0.05',
                }}
              >
                <Image src={Assets.profile} alt="" width={15} height={15} />
              </div>
            )}

            {isAuthenticated && <span className="font-medium text-sm">{user.firstName}</span>}

            <IconButton size="small" onClick={handleOpenSmallModal}>
              {/* <Image src={Assets.arrowDown} alt="arrow" width={10} height={10} /> */}
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
            </IconButton>

            {isAuthenticated ? (
              <Menu id="city-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleCloseSmallModal()}>
                {options.map((city) => (
                  <Link key={city.title} href={city.to}>
                    <MenuItem onClick={() => handleCloseSmallModal(city.title)}>
                      <div className="flex w-full gap-5">
                        {city.title}

                        {city.title === 'Get Verified' && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.98334 10.0001L8.99167 12.0167L13.0167 7.9834"
                              stroke="#308652"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.95834 2.0416C9.53334 1.54993 10.475 1.54993 11.0583 2.0416L12.375 3.17493C12.625 3.3916 13.0917 3.5666 13.425 3.5666H14.8417C15.725 3.5666 16.45 4.2916 16.45 5.17493V6.5916C16.45 6.9166 16.625 7.3916 16.8417 7.6416L17.975 8.95827C18.4667 9.53327 18.4667 10.4749 17.975 11.0583L16.8417 12.3749C16.625 12.6249 16.45 13.0916 16.45 13.4249V14.8416C16.45 15.7249 15.725 16.4499 14.8417 16.4499H13.425C13.1 16.4499 12.625 16.6249 12.375 16.8416L11.0583 17.9749C10.4833 18.4666 9.54167 18.4666 8.95834 17.9749L7.64167 16.8416C7.39167 16.6249 6.925 16.4499 6.59167 16.4499H5.15C4.26667 16.4499 3.54167 15.7249 3.54167 14.8416V13.4166C3.54167 13.0916 3.36667 12.6249 3.15834 12.3749L2.03334 11.0499C1.55 10.4749 1.55 9.5416 2.03334 8.9666L3.15834 7.6416C3.36667 7.3916 3.54167 6.92494 3.54167 6.59994V5.1666C3.54167 4.28327 4.26667 3.55827 5.15 3.55827H6.59167C6.91667 3.55827 7.39167 3.38327 7.64167 3.1666L8.95834 2.0416Z"
                              stroke="#308652"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            ) : (
              authModal()
            )}
          </div>
          <Link href={`/post-ad`} >
            <AppButton text="Post Ad" />
          </Link>
        </div>


            {nav && (
                <ul className="flex flex-col justify-center items-center absolute z-10 top-0 left-0 w-full h-screen bg-white text-odi">
                    {links.map(({ id, link, path }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-[5vw]"
                        >
                            <Link onClick={() => setNav(!nav)} href={path}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    {isAuthenticated && (
                        <button
                            onClick={logout}
                            type="button"
                            className="text-white bg-[#D77F81] font-medium rounded-[4px] leading-tight w-[60%] mt-7 text-[4vw] px-12 py-4 transform transition-all duration-300 ease-in-out"
                        >
                            <span>Logout</span>
                        </button>
                    )}
                </ul>
            )}


            {/* Auth Signup  */}
      <SignupModal
        open={openRegisterModal}
        onClose={handleRegisterModalClose}
        handleLoginModalOpen={handleLoginModalOpen}
        next={() => {
          handleVerificationModalOpen();
        }}
      />

      {/* Auth Login Modal */}
      <LoginModal
        open={openLoginModal}
        onClose={handleLoginModalClose}
        handleForgotPasswordModal={handleForgotPasswordModal}
        handleRegisterModalOpen={handleRegisterModalOpen}
      />

      {/* Auth Forgot-Password Modal */}
      <ForgotPasswordModal
        open={openForgotPasswordModal}
        onClose={handleForgotPasswordModalClose}
        handleLoginModalOpen={handleLoginModalOpen}
      />

      {/* verify email */}
      <RegistrationCompleteModal open={verificationModalOpen} onClose={handleVerificationModalOpenClose} />
        </div>
    );
};





export default CombinedNavbar;


