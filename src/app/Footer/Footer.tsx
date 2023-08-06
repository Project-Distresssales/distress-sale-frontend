"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import NewsLetter from '../components/NewsLetter/NewsLetter';

// Company
const company = [
    {
        title: 'About Us',
        link: '/about',
    },
    {
        title: 'Advertise with Us',
        link: '',
    },
    {
        title: 'Terms of Use',
        link: '',
    },
    {
        title: 'Privacy Policy',
        link: '',
    },
];

// UAE
const uae = [
    {
        title: 'Abu Dhabi',
        link: '',
    },
    {
        title: 'Dubai',
        link: '',
    },
    {
        title: 'Sharjah',
        link: '',
    },
    {
        title: 'Ajman',
        link: '',
    },
    {
        title: 'UAQ',
        link: '',
    },
    {
        title: 'Ras Al-Khaimah',
        link: '',
    },
    {
        title: 'Fujairah',
        link: '',
    },
];

// Other countries
const otherCountries = [
    {
        title: 'Egypt',
        link: '',
    },
    {
        title: 'Saudi Arabia',
        link: '',
    },
    {
        title: 'Qatar',
        link: '',
    },
    {
        title: 'Kuwait',
        link: '',
    },
    {
        title: 'Lebanon',
        link: '',
    },
    {
        title: 'Bahrain',
        link: '',
    },
    {
        title: 'Oman',
        link: '',
    },
];

// Support
const support = [
    {
        title: 'Help',
        link: '',
    },
    {
        title: 'Contact Us',
        link: '',
    },
];

// Social
const social = [
    {
        icon: Assets.instagram,
        link: '',
    },
    {
        icon: Assets.twitter,
        link: '',
    },
    {
        icon: Assets.facebook,
        link: '',
    },
    {
        icon: Assets.linkedin,
        link: '',
    },
];

function Footer() {
    const router = useRouter();
    const handleClick = (link: any) => {
        if (link) {
            router.push(link);
        }
    };

    // Scroll TO Top Function
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bg-[#E7EDFE] w-full h-auto sm:px-[80px] px-5 pt-[130px] pb-[88px] flex flex-col justify-between items-center relative">
            {/* News Letter */}
            <div className="absolute -top-7 mx-auto flex justify-center items-center">
                <NewsLetter />
            </div>

            <div className='flex justify-between items-center w-full'>
                <Image src={Assets.logo} alt="Logo" width={150} height={150}/>
                <div className="flex items-center space-x-2">
                    <p className="text-[#101828] font-[500] text-[1.2vw]">Top</p>
                    <div onClick={goToTop} className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#415EFF] cursor-pointer">
                        <Image src={Assets.arrowUp} alt="" width={25} height={25} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between w-full mt-16">
                {/* Company */}
                <div className="space-y-5 text-[#101828]">
                    <h1 className="font-[700] sm:text-[1.3vw] text-[5vw]">COMPANY</h1>
                    <ul className="space-y-3">
                        {company.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(item.link)}
                                className="font-[500] text-[1.1vw] cursor-pointer"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* UAE */}
                <div className="space-y-5 text-[#101828]">
                    <h1 className="font-[700] sm:text-[1.3vw] text-[5vw]">UAE</h1>
                    <ul className="space-y-3">
                        {uae.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(item.link)}
                                className="font-[500] text-[1.1vw] cursor-pointer"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other Countries */}
                <div className="space-y-5 text-[#101828]">
                    <h1 className="font-[700] sm:text-[1.3vw] text-[5vw]">Other Countries</h1>
                    <ul className="space-y-3">
                        {otherCountries.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(item.link)}
                                className="font-[500] text-[1.1vw] cursor-pointer"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-5 text-[#101828]">
                    <h1 className="font-[700] sm:text-[1.3vw] text-[5vw]">Support</h1>
                    <ul className="space-y-3">
                        {support.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(item.link)}
                                className="font-[500] text-[1.1vw] cursor-pointer"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                 {/* Social */}
                <div className="space-y-5 text-[#101828]">
                    <h1 className="font-[700] sm:text-[1.3vw] text-[5vw]">Social</h1>
                    <ul className="space-y-3">
                        {social.map((item, i) => (
                            <Image key={i} src={item.icon} alt="" width={30} height={30} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#D6DDFF] w-full flex justify-between items-center mt-14 pt-10">
               <div className="flex space-x-1 items-center text-[#101828] text-[0.9vw] font-[700]">
               <p>DistressSale.com 2023.</p>
                <Image src={Assets.copyright} alt="" width={15} height={15} />
                <p>All Rights Reserved.</p>
               </div>
            </div>
        </div>
    )
}

export default Footer