import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons'

export default function SearchOnly() {
  return (
    <div className="flex items-center p-[10px] space-x-4 rounded-[5px] transform hover:scale-105 transition duration-500"
      style={{ 
        boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        background: "rgba(16, 24, 40, 0.80)"
         }}>
      <div className="flex bg-white pl-4 w-full space-x-4 rounded-[5px]">
        <Image src={Assets.searchNormal} alt="" width={20} height={20} />
        <input className="bg-white w-full py-3 rounded-r-[5px] outline-none text-[#475467] font-[500] md:text-[1.1vw] text-[4vw]" type="text" placeholder="Search..." />
      </div>
    </div>
  )
}
