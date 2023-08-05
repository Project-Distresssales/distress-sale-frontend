import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons';

export default function Navbar() {
    return (
        <div className="w-full h-[80px] bg-white px-[80px] flex items-center justify-between"
            style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08" }}
        >
            <div className="flex items-end space-x-3">
                <Image src={Assets.logo} alt="Logo" width={150} height={150} />
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
                    <div className="flex items-center space-x-3 ml-5 cursor-pointer">
                        <div className="rounded-full p-[5px] flex justify0-center items-center border"
                            style={{ boxShadow: "0px 1px 5px -2px rgba(16, 24, 40, 0.05), 0px -1px 5px -4px rgba(16, 24, 40, 0.05" }}>
                            <Image src={Assets.profile} alt="" width={15} height={15} />
                        </div>
                        <Image src={Assets.arrowDown} alt="" width={10} height={10} />
                    </div>

                    <AppButton text="Post Ad" />
                </div>
            </div>
        </div>
    )
}
