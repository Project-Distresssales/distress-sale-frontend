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
import { IconButton } from '@mui/material';

export default function Navbar() {
  const router = useRouter();
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);

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
  const handleSmallModal = () => {
    setOpenAuth(!openAuth);
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

  return (
    <div
      className={
        scrollStyle
          ? 'sticky top-0 z-20 w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-down'
          : 'relative w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-up'
      }
      style={{ boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08' }}
    >
      <div className="flex items-end space-x-3">
        <Image src={Assets.logo} alt="Logo" width={150} height={150} onClick={goToHome} />
        <div className="rounded-[5px] flex items-center space-x-1.5 cursor-pointer translate-y-[3px]">
          <Image src={Assets.location} alt="Logo" width={10} height={10} />
          <p className="text-[#344054] text-[0.8vw] font-[500] leading-5">All Cities (UAE)</p>
          <Image src={Assets.arrowDown} alt="" width={10} height={10} />
        </div>
      </div>

      <div className="flex items-center">
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

        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-3 ml-5 cursor-pointer relative z-50">
            <div
              className="rounded-full p-[5px] flex justify0-center items-center border"
              style={{ boxShadow: '0px 1px 5px -2px rgba(16, 24, 40, 0.05), 0px -1px 5px -4px rgba(16, 24, 40, 0.05' }}
            >
              <Image src={Assets.profile} alt="" width={15} height={15} />
            </div>
            <Image src={Assets.arrowDown} alt="" width={10} height={10} onClick={handleSmallModal} />

            {openAuth && (
              <div
                className="flex p-[7px] rounded-[5px] w-[15vw] mx-auto absolute top-10 z-50 bg-white"
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
                <button
                  className="rounded-[5px] py-[10px] text-[1.1vw] w-full font-[500] text-[#101828]"
                  onClick={handleRegisterModal}
                >
                  Register
                </button>
              </div>
            )}
          </div>

          <AppButton text="Post Ad" />
        </div>
      </div>

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
  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: '40px 50px 30px 50px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <div className="w-full">
        {/* <Image src={Assets.arrowRight} alt="" width={20} height={20} /> */}
        <div className="items-center">
          <IconButton
            onClick={() => {
              onClose();
              handleLoginModalOpen();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
              <path
                d="M7.99984 16.92L1.47984 10.4C0.709844 9.63002 0.709844 8.37002 1.47984 7.60002L7.99984 1.08002"
                stroke="#101828"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>

          <div className="flex justify-center w-full">
            <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Forgot Password</h1>
          </div>
        </div>
        <div className="space-y-5 mt-7">
          <TextField
            id="email"
            type="email"
            label="Email*"
            placeholder="Enter your email address"
            value=""
            onChange={() => {}}
            obscured={false}
            withBackground={false}
          />
          <div className="mt-10">
            <AppButton text="Send" fullWidth={true} boldText={false} onClick={() => {}} />
          </div>
        </div>
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
        padding: '10px 20px 30px 20px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <div className="w-full flex flex-col justify-center items-center ">
        {/* <Image src={Assets.arrowRight} alt="" width={20} height={20} /> */}

        <div className="flex w-full justify-end">
          <IconButton onClick={onClose}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.2267 19.7732L19.7733 12.2266"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.7733 19.7732L12.2267 12.2266"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </IconButton>
        </div>

        <div className="w-full space-y-6 flex flex-col justify-center items-center">
          <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.5 45.8334C36.9584 45.8334 46.3334 36.4584 46.3334 25.0001C46.3334 13.5417 36.9584 4.16675 25.5 4.16675C14.0417 4.16675 4.66669 13.5417 4.66669 25.0001C4.66669 36.4584 14.0417 45.8334 25.5 45.8334Z"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6458 25.0001L22.5416 30.8959L34.3541 19.1042"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Email sent, Check your inbox!</h1>

          <p className="text-center">
            Should the email address you provided, you will receive a link to Verify your Email
          </p>
        </div>
      </div>
    </AppModal>
  );
};
