"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Assets from '@/constants/assets.constant';
import { AppButton, AuthButton } from '../Buttons/Buttons';
import { AppModal } from '../Modals/Modals';
import TextField from '../Fields/TextField';

export default function Navbar() {
    const router = useRouter();
    const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
    const [openAuth, setOpenAuth] = useState<boolean>(false);

    const goToHome = () => {
        router.push('/')
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
    }

    // Login Modal
    const handleLoginModal = () => {
        setOpenLoginModal(!openLoginModal);
    }

    const handleLoginModalClose = () => {
        setOpenLoginModal(false);
    }

    const handleLoginModalOpen = () => {
        setOpenLoginModal(true);
        setOpenRegisterModal(false);
    }

    // Register Modal
    const handleRegisterModal = () => {
        setOpenRegisterModal(!openRegisterModal);
    }

    const handleRegisterModalClose = () => {
        setOpenRegisterModal(false);
    }

    const handleRegisterModalOpen = () => {
        setOpenLoginModal(false);
        setOpenRegisterModal(true);
    }


    // Forgot Password Modal
    const handleForgotPasswordModal = () => {
        setOpenForgotPasswordModal(true);
        setOpenLoginModal(false);
    }

    const handleForgotPasswordModalClose = () => {
        setOpenForgotPasswordModal(false);
    }

    const handleForgotPasswordModalOpen = () => {
        setOpenLoginModal(false);
        setOpenForgotPasswordModal(true);
    }




    return (
        <div className={
            scrollStyle
                ? 'sticky top-0 z-20 w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-down'
                : 'relative w-full h-[80px] bg-white px-[80px] flex items-center justify-between animate-fade-in-up'
        }
            style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08" }}
        >
            <div className="flex items-end space-x-3">
                <Image src={Assets.logo} alt="Logo" width={150} height={150} onClick={goToHome} />
                <div className="rounded-[5px] flex items-center space-x-1.5 cursor-pointer translate-y-[3px]">
                    <Image src={Assets.location} alt="Logo" width={10} height={10} />
                    <p className='text-[#344054] text-[0.8vw] font-[500] leading-5'>All Cities (UAE)</p>
                    <Image src={Assets.arrowDown} alt="" width={10} height={10} />
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex items-center space-x-7 border-r border-[#D6DDFF] py-2 px-5">
                    <div className="flex items-center space-x-2">
                        <Image src={Assets.heart} alt="" width={15} height={15} />
                        <p className='text-[#475467] text-[1vw] font-[500]'>Favorites</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image src={Assets.bookSaved} alt="" width={15} height={15} />
                        <p className='text-[#475467] text-[1vw] font-[500]'>Saved Searches</p>
                    </div>
                </div>

                <div className="flex items-center space-x-7">
                    <div className="flex items-center space-x-3 ml-5 cursor-pointer relative z-50">
                        <div className="rounded-full p-[5px] flex justify0-center items-center border"
                            style={{ boxShadow: "0px 1px 5px -2px rgba(16, 24, 40, 0.05), 0px -1px 5px -4px rgba(16, 24, 40, 0.05" }}>
                            <Image src={Assets.profile} alt="" width={15} height={15} />
                        </div>
                        <Image src={Assets.arrowDown} alt="" width={10} height={10} onClick={handleSmallModal} />

                        {openAuth && (
                            <div className="flex p-[7px] rounded-[5px] w-[15vw] mx-auto absolute top-10 z-50 bg-white"
                                style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)" }}>
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


            {/* Auth Login Modal */}
            <AppModal
                open={openLoginModal}
                handleClose={handleLoginModalClose}
                style={{
                    backgroundColor: '#fff',
                    padding: '40px 50px 30px 50px',
                    position: 'relative',
                    height: 'auto',
                    width: '600px'
                }}
            >
                <div className="w-full">
                    <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Log In</h1>
                    <div className="w-full flex items-center space-x-7 mt-7">
                        <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
                        <AuthButton text="Continue with Google" icon={Assets.googleAuth} />
                    </div>
                    <div className="flex items-center my-7">
                        <div className="border border-[#EAECF0] w-full" />
                        <p className="text-[#98A2B3] text-[1vw] font-[500] px-3">OR</p>
                        <div className="border border-[#EAECF0] w-full" />
                    </div>

                    <div className="space-y-5 mt-7">
                        <TextField
                            id="email"
                            type="email"
                            label="Email*"
                            placeholder="Enter your email address"
                            value=""
                            onInputChange={() => { }}
                            require={false}
                            isPassword={false}
                            withBackground={false}
                            readOnly={false}
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="Password*"
                            placeholder="Enter password"
                            value=""
                            onInputChange={() => { }}
                            require={false}
                            isPassword={true}
                            withBackground={false}
                            readOnly={false}
                        />

                        <div className='mt-10'>
                            <AppButton text="Log In" fullWidth={true} boldText={false} onClickButton={() => { }} />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <p className="text-[#667085] font-[500] text-[1vw]">Remember me</p>
                        <p className="text-[#667085] font-[500] text-[1vw] cursor-pointer" onClick={handleForgotPasswordModal}>Forgot Password?</p>
                    </div>

                    <p className="mt-10 text-[#101828] font-[700] text-[1vw] text-center">Don&apos;t have an account? <span className="text-[#415EFF] cursor-pointer" onClick={handleRegisterModalOpen}>Create One</span></p>
                    <p className="mt-10 text-[#667085] font-[500] text-[1vw] text-center">By signing up you agree to the Terms & Conditions and Privacy Policy</p>
                </div>
            </AppModal>


            {/* Auth Register Modal */}
            <AppModal
                open={openRegisterModal}
                handleClose={handleRegisterModalClose}
                style={{
                    backgroundColor: '#fff',
                    padding: '40px 50px 30px 50px',
                    position: 'relative',
                    height: 'auto',
                    width: '600px'
                }}
            >
                <div className="w-full">
                    <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Create Account</h1>
                    <div className="w-full flex items-center space-x-7 mt-7">
                        <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
                        <AuthButton text="Continue with Google" icon={Assets.googleAuth} />
                    </div>
                    <div className="flex items-center my-7">
                        <div className="border border-[#EAECF0] w-full" />
                        <p className="text-[#98A2B3] text-[1vw] font-[500] px-3">OR</p>
                        <div className="border border-[#EAECF0] w-full" />
                    </div>

                    <div className="space-y-5 mt-7 w-full">
                        <div className="flex space-x-3 w-full">
                            <div>
                                <TextField
                                    id="firstName"
                                    type="text"
                                    label="First Name*"
                                    placeholder="Enter your first name"
                                    value=""
                                    onInputChange={() => { }}
                                    require={false}
                                    isPassword={false}
                                    withBackground={false}
                                    readOnly={false}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="lastName"
                                    type="text"
                                    label="Last Name*"
                                    placeholder="Enter your last name"
                                    value=""
                                    onInputChange={() => { }}
                                    require={false}
                                    isPassword={false}
                                    withBackground={false}
                                    readOnly={false}
                                />
                            </div>
                        </div>
                        <TextField
                            id="email"
                            type="email"
                            label="Email*"
                            placeholder="Enter your email address"
                            value=""
                            onInputChange={() => { }}
                            require={false}
                            isPassword={false}
                            withBackground={false}
                            readOnly={false}
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="Password*"
                            placeholder="Enter password"
                            value=""
                            onInputChange={() => { }}
                            require={false}
                            isPassword={true}
                            withBackground={false}
                            readOnly={false}
                        />

                        <div className='mt-10'>
                            <AppButton text="Sign Up" fullWidth={true} boldText={false} onClickButton={() => { }} />
                        </div>
                    </div>

                    <p className="mt-10 text-[#101828] font-[700] text-[1vw] text-center">Already have an account? <span className="text-[#415EFF] cursor-pointer" onClick={handleLoginModalOpen}>Log In</span></p>
                    <p className="mt-10 text-[#667085] font-[500] text-[1vw] text-center">By signing up you agree to the Terms & Conditions and Privacy Policy</p>
                </div>
            </AppModal>


            {/* Auth Forgot-Password Modal */}
            <AppModal
                open={openForgotPasswordModal}
                handleClose={handleForgotPasswordModalClose}
                style={{
                    backgroundColor: '#fff',
                    padding: '40px 50px 30px 50px',
                    position: 'relative',
                    height: 'auto',
                    width: '400px'
                }}
            >
                <div className="w-full">
                    {/* <Image src={Assets.arrowRight} alt="" width={20} height={20} /> */}
                    <div className="items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                            <path d="M7.99984 16.92L1.47984 10.4C0.709844 9.63002 0.709844 8.37002 1.47984 7.60002L7.99984 1.08002"
                                stroke="#101828"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
                            onInputChange={() => { }}
                            require={false}
                            isPassword={false}
                            withBackground={false}
                            readOnly={false}
                        />
                        <div className='mt-10'>
                            <AppButton text="Send" fullWidth={true} boldText={false} onClickButton={() => { }} />
                        </div>
                    </div>
                </div>
            </AppModal>
        </div>
    )
}
