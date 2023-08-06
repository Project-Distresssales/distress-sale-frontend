"use client"

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Assets from '@/constants/assets.constant';

export function SubButton({ text, icon, onClick }: { text: string; icon: any; onClick: () => void; }) {
    return (
        <div className="flex items-center space-x-2 py-7 px-5 cursor-pointer" onClick={onClick}>
            <Image src={icon} alt="" width={20} height={20} />
            <p className='text-[#475467] text-[1.1vw] font-[500]'>{text}</p>
        </div>
    );
}

export default function SubNavbar() {
    const router = useRouter();

    const goToPropertyForSale = () => {
        router.push('/property-for-sale')
    };

    const goToCarForSale = () => {
        router.push('/car-for-sale')
    };

    const goToListings = () => {
        router.push('/listings')
    };

    const goToPropertyForRent = () => {
        router.push('/property-for-rent')
    };

    const goToCommercial = () => {
        router.push('/commercial')
    };

    return (
        <div className="flex h-auto px-[80px] items-center w-full">
            <div className="flex justify-between items-center w-full">
                <SubButton text="Property for Sale" icon={Assets.house2} onClick={goToPropertyForSale} />
                <SubButton text="Car For Sale" icon={Assets.car} onClick={goToCarForSale} />
                <SubButton text="Listings" icon={Assets.listing} onClick={goToListings} />
                <SubButton text="Property for Rent" icon={Assets.house} onClick={goToPropertyForRent} />
                <SubButton text="Commercial" icon={Assets.commercial} onClick={goToCommercial} />
            </div>
        </div>
    );
}


