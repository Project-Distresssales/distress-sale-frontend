'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { FadeIn } from '../Transitions/Transitions';
import useGlobalState from '@/hooks/globalstate.hook';
import { AppButton } from '../Buttons/Buttons';


export default function MobileNavbar({ nav, setNav }: any) {
    const { logout, isAuthenticated } = useGlobalState();
    const [scrollStyle, setScrollStyle] = useState<boolean>(false);
    const [sideBar, setSideBar] = useState<boolean>(false);
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


    return (
        <>
            <div
                className={
                    scrollStyle
                        ? 'sticky top-0 z-20 w-full bg-[#fff] px-5 py-[16px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-down'
                        : 'relative w-full bg-[#fff] px-5 py-[16px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-up'
                }>
                <Link href='/'>
                    <Image src={Assets.logo} alt="Logo" width={100} height={100} />
                </Link>

                <Link href={`/post-ad`} >
            <AppButton text="Post Ad" />
          </Link>

                <IconButton
                    onClick={() => setSideBar(!sideBar)}
                >
                    {sideBar ? <MdClose size={25} style={{ color: '#000' }} /> : <HiOutlineMenuAlt3 size={25} style={{ color: '#000' }} />}
                </IconButton>
            </div>

            {/* Drop Down */}
            {sideBar && (
                <FadeIn>
                    <div className='md:hidden block w-[60%] h-auto bg-white shadow text-center rounded-[12px] absolute right-5 z-20 space-y-3 p-5 top-16'>
                        {!isAuthenticated && (
                            <>
                                <div className='rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]'>Sign In</div>
                                <div className='rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]'>Sign Up</div>
                            </>
                        )}
                        {isAuthenticated && (
                            <div onClick={logout} className='rounded-[8px] bg-[#FCEEEF] p-4 text-[4.5vw] font-[500] text-[#BA242E]'>Logout</div>
                        )}
                    </div>
                </FadeIn>
            )}
        </>
    );
}
