"use client"

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Assets from '@/constants/assets.constant';
import useAppTheme from '@/hooks/theme.hook';

export function SubButton({ title, icon, onClick }: { title: string; icon: any; onClick: () => void; }) {
    return (
        <div className="flex items-center space-x-2 py-7 px-5 cursor-pointer" onClick={onClick}>
            <Image src={icon} alt="" width={20} height={20} />
            <p className='text-[#475467] text-[16px] font-[500]'>{title}</p>
        </div>
    );
}

export function SubCard({ title, icon, onClick }: { title: string; icon: any; onClick: () => void; }) {
    return (
        <div 
        className="rounded-[5px] bg-white flex flex-col items-center justify-center px-2 py-4 space-y-2"
        style={{boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'}}
         onClick={onClick}>
            <Image src={icon} alt="" width={20} height={20} />
            <p className='text-[#475467] text-[2.8vw] font-[500]'>{title}</p>
        </div>
    );
}

export default function SubNavbar() {
    const router = useRouter();
    const { isMobile } = useAppTheme();

    // Card
    const data = [
        {
            title: 'Property for Sale',
            icon: Assets.pfs,
            link: '/property-for-sale'
        },
        //  {
        //     title: 'Listings',
        //     icon: Assets.listingBlue,
        //     link: '/listings'
        // },
         {
            title: 'Property for Rent',
            icon: Assets.pfr,
            link: '/property-for-rent'
        },
        {
            title: 'Automobile',
            icon: Assets.automobile,
            link: '/automobile'
        },
        // {
        //     title: 'Commercial',
        //     icon: Assets.commercialBlue,
        //     link: '/commercial'
        // },
    ]

    return (
        <div className="md:flex h-auto md:px-[80px] md:items-center w-full px-5 py-5">
            {!isMobile ? (
                <div className="flex justify-between items-center w-full">
                    {data.map((item, i) => (
                        <SubButton key={i} title={item.title} icon={item.icon} onClick={() => router.push(item.link)} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-3 w-full text-center">
                   {data.map((item, i) => (
                    <SubCard key={i} title={item.title} icon={item.icon} onClick={() => router.push(item.link)} />
                   ))}
                </div>
            )}
        </div>
    );
}


