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


export default function MobileNavbar({ sideBar, setSideBar }: any) {
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

           
        </>
    );
}
