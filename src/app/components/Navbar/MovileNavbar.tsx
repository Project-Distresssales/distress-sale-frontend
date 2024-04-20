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
import { useRouter } from 'next/navigation';


export default function MobileNavbar({ sideBar, setSideBar }: any) {
    const router = useRouter();
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


    return (
        <>
            <div
                className={
                    scrollStyle
                        ? 'sticky top-0 z-20 w-full bg-[#fff] px-5 py-[16px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-down'
                        : 'relative w-full bg-[#fff] px-5 py-[16px] flex items-center justify-between border-b border-[#F0F0F0] animate-fade-in-up'
                }>
                <Link href='/'>
                    <Image src={Assets.distressLogo2} alt="Logo" width={150} height={150} />
                </Link>

                <button
          onClick={() => router.push('/post-ad')}
            className={`
      flex justify-center items-center rounded-full py-3 px-5 text-primary font-[700] text-[3.2vw] bg-secondary`}
          >
            Post Ad
          </button>

                <IconButton
                    onClick={() => setSideBar(!sideBar)}
                >
                    {sideBar ? <MdClose size={25} style={{ color: '#000' }} /> : <HiOutlineMenuAlt3 size={25} style={{ color: '#000' }} />}
                </IconButton>
            </div>

           
        </>
    );
}
