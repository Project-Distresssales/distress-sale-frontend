import React from 'react'
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export function SubButton({ text, icon }: { text: string; icon: any }) {
    return (
        <div className="flex items-center space-x-2 py-7 px-5 cursor-pointer">
            <Image src={icon} alt="" width={20} height={20} />
            <p className='text-[#475467] text-[1.1vw] font-[500]'>{text}</p>
        </div>
    );
}

export default function SubNavbar() {
    return (
        <div className="flex h-auto px-[80px] items-center w-full">
            <div className="flex justify-between items-center w-full">
                <SubButton text="Property for Sale" icon={Assets.house2} />
                <SubButton text="Car For Sale" icon={Assets.car} />
                <SubButton text="Listings" icon={Assets.listing} />
                <SubButton text="Property for Rent" icon={Assets.house} />
                <SubButton text="Commercial" icon={Assets.commercial} />
            </div>
        </div>
    );
}


