'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Assets from '@/constants/assets.constant';
import { AppButton, AuthButton } from '../Buttons/Buttons';
import { AppModal } from '../Modals/Modals';
import TextField from '../Fields/TextField';
import LoginModal from '../Auth/Login/Login';
import { VoidCallback } from '@/utils/types';
import SignupModal from '../Auth/SIgnup/Signup';
import { CircularProgress, ClickAwayListener, IconButton, Menu, MenuItem, Popper } from '@mui/material';
import useGlobalState from '@/hooks/globalstate.hook';
import DropDown from '../DropDown/DropDown';
import useRequest from '@/services/request/request.service';
import { useDispatch } from 'react-redux';
import { formatJoinDate, isEmpty } from '@/helpers';
import { AxiosError } from 'axios';
import API from '@/constants/api.constant';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import useAppTheme from '@/hooks/theme.hook';
import { IoReturnUpBack } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const { profile: user, isAuthenticated, logout } = useGlobalState();

  const [anchorEl, setAnchorEl] = useState(null);

  const options = [
    { title: 'My Profile', to: '/profile' },
    { title: 'My Public Profile', to: '/profile' },
    { title: 'Get Verified', to: '/profile' },
    { title: 'My Ads', to: '/profile' },
    { title: 'Favorites', to: '/profile' },
    { title: 'Searches', to: '/profile' },
    { title: 'Account Settings', to: '/profile' },
    { title: 'Sign Out', to: '#' },
  ];

  const goToHome = () => {
    router.push('/');
  };

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
    setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
  };

  const handleForgotPasswordModalClose = () => {
    setOpenForgotPasswordModal(false);
  };

  const handleForgotPasswordModalOpen = () => {
    setOpenLoginModal(false);
    setOpenForgotPasswordModal(true);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  const handleVerificationModalOpenClose = () => {
    setVerificationModalOpen(false);
  };

  const authModal = () =>
    openMenuModal && (
      <ClickAwayListener
        onClickAway={() => {
          handleCloseSmallModal();
        }}
      >
        <div
          className="flex items-center p-[7px] rounded-[5px] w-[15vw] mx-auto absolute top-11 z-50 bg-white border-[1px]"
          style={{
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
          }}
        >
          <button
            className="rounded-[5px] py-[10px] text-[1.1vw] w-full font-[500] text-[#101828]"
            onClick={handleLoginModal}
          >
            Log in
          </button>

          <svg
            width="1"
            // height="25"
            className="h-[30px]"
            viewBox="0 0 1 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="0.5" y1="25" x2="0.5" stroke="#EAECF0" />
          </svg>

          <button
            className="rounded-[5px] py-[10px] text-[1.1vw] w-full font-[500] text-[#101828]"
            onClick={handleRegisterModal}
          >
            Register
          </button>
        </div>
      </ClickAwayListener>
    );

  return (
    <div
      className={
        scrollStyle
          ? 'sticky top-0 z-20 w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-down'
          : 'relative w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-up'
      }
      style={{ boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08' }}
    >
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src={Assets.distressLogo2} alt="Logo" width={200} height={200} />
        </Link>
        {/* <div className="rounded-[5px] flex items-center space-x-1.5 cursor-pointer translate-y-[3px]">
          <Image src={Assets.location} alt="Logo" width={10} height={10} />
          <p className="text-[#344054] text-[0.8vw] font-[500] leading-5">All Cities (UAE)</p>
          <Image src={Assets.arrowDown} alt="" width={10} height={10} />
        </div> */}
      </div>

      <div className="flex items-center">
        {/* <div className="flex items-center space-x-7 border-r border-[#D6DDFF] py-2 px-5">
          <div className="flex items-center space-x-2">
            <Image src={Assets.heart} alt="" width={15} height={15} />
            <p className="text-[#475467] text-[1vw] font-[500]">Favorites</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Assets.bookSaved} alt="" width={15} height={15} />
            <p className="text-[#475467] text-[1vw] font-[500]">Saved Searches</p>
          </div>
        </div> */}

        {isAuthenticated ? (
          <div className="flex flex-wrap items-center justify-center gap-3 cursor-pointer" onClick={handleOpenSmallModal}>
            <div className="h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={
                  user.profileImage ||
                  `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&rounded=true&size=128`
                }
                alt=""
              />
            </div>
            <div>
              <div className="text-sm font-medium">{user.firstName + ' ' + user.lastName}</div>
              <div className="text-xs">{formatJoinDate(user.createdAt)}</div>
            </div>
            <div>
              <IconButton size="small" onClick={handleOpenSmallModal}>
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
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div
              className="rounded-full p-[5px] flex justify-center items-center border"
              style={{
                boxShadow: '0px 1px 5px -2px rgba(16, 24, 40, 0.05), 0px -1px 5px -4px rgba(16, 24, 40, 0.05',
              }}
            >
              <AiOutlineUser style={{ fontSize: '20px' }} />
            </div>

            <div>
              <IconButton size="small" onClick={handleOpenSmallModal}>
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
            </div>
          </div>
        )}

        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-3 ml-5 cursor-pointer relative z-50">
            {isAuthenticated ? (
              <Menu id="city-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleCloseSmallModal()}>
                {options.map((city) => (
                  <Link key={city.title} href={city.to} className='text-secondary hover:text-secondary underline-none'>
                    <MenuItem onClick={() => handleCloseSmallModal(city.title)}>
                      <div className="flex w-full gap-5 text-[14px] font-[500] underline-none">
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

          <button
            onClick={() => router.push('/post-ad')}
            className={`
      flex justify-center items-center rounded-full py-3 px-10 text-white font-[700] 
    md:text-[15px] text-[3.2vw] bg-secondary w-full`}
          >
            Post Ad
          </button>
        </div>
      </div>

      <div className="flex items-center md:hidden">
        <IconButton onClick={() => setNav(!nav)}>
          {nav ? (
            <MdClose size={25} style={{ color: '#000' }} />
          ) : (
            <HiOutlineMenuAlt3 size={25} style={{ color: '#000' }} />
          )}
        </IconButton>
      </div>

      {/* Mobile nav */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute z-10 top-0 left-0 w-full h-screen bg-white text-odi">
          <div>Hiii</div>
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
}

const ForgotPasswordModal = ({
  open,
  onClose,
  handleLoginModalOpen,
}: {
  open: boolean;
  onClose: () => void;
  handleLoginModalOpen: VoidCallback;
}) => {
  const { isMobile } = useAppTheme();
  const { makeRequest, isLoading, data } = useRequest();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.requestResetPassword,
      data: values,
      method: 'POST',
    })
      .then((res) => {
        const { status, data, message }: any = res.data;
        toast.success(message);
        onClose();
        // next();
        // navigate(`/auth/verification?code=${data.code}`);
        // setOpenSnackBar(true);
        // setTimeout(() => {
        //   openSnackBar && navigate(`/auth/verification?code=${data.code}`);
        // }, 3000);
      })
      .catch((error: AxiosError) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else if (status === 400) {
          setErrors(data.data);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      });
  };

  const [form, setForm] = useState({
    email: '',
  });

  const { values, handleSubmit, handleChange, errors, setErrors, getFieldProps } = useFormik({
    initialValues: form,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  });

  const { email } = values;

  const iDisabled = isEmpty(email);

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: !isMobile ? '30px' : '20px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <IconButton
        onClick={() => {
          onClose();
          handleLoginModalOpen();
        }}
        className="absolute top-2 left-2"
      >
        <IoReturnUpBack style={{ fontSize: '20px', fontWeight: '700' }} />
      </IconButton>

      <div className="w-full">
        {/* <Image src={Assets.arrowRight} alt="" width={20} height={20} /> */}
        <div className="items-center">
          <div className="flex justify-center w-full">
            <h1 className="text-[#101828] font-[700] md:text-[22px] text-[5vw] text-center leading-tight">
              Forgot Password
            </h1>
          </div>
        </div>
        <form className="mt-7" onSubmit={handleSubmit}>
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email address"
            obscured={false}
            withBackground={false}
            error={errors.email}
            {...getFieldProps('email')}
          />
          <div className="mt-10">
            <button
              className={`
      flex justify-center items-center rounded-[8px] py-3.5 text-white font-[500] 
    md:text-[16px] text-[3.2vw] bg-secondary w-full`}
              type="submit"
              disabled={iDisabled}
            >
              {isLoading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : 'Proceed'}
            </button>
          </div>
        </form>
      </div>
    </AppModal>
  );
};

const RegistrationCompleteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: '30px 20px 30px 20px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <div className="w-full absolute right-0 top-0">
        <IconButton onClick={onClose}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.2267 19.7732L19.7733 12.2266"
              stroke="#101828"
              stroke-width="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.7733 19.7732L12.2267 12.2266"
              stroke="#101828"
              stroke-width="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </div>

      <div className="w-full space-y-4 flex flex-col justify-center items-center">
        <div>
          <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.5 45.8334C36.9584 45.8334 46.3334 36.4584 46.3334 25.0001C46.3334 13.5417 36.9584 4.16675 25.5 4.16675C14.0417 4.16675 4.66669 13.5417 4.66669 25.0001C4.66669 36.4584 14.0417 45.8334 25.5 45.8334Z"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6458 25.0001L22.5416 30.8959L34.3541 19.1042"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-[#101828] font-[700] text-[20px] text-center leading-tight">
          Email sent, Check your inbox!
        </h1>

        <p className="text-center text-[14px] font-[500] text-[#101828] px-7">
          Should the email address you provided, you will receive a link to Verify your Email
        </p>
      </div>
    </AppModal>
  );
};
