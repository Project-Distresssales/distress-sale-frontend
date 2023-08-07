import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons'

export default function SearchAndFilter() {
  return (
    <div className="flex items-center p-2 space-x-4 bg-white rounded-[5px] transform hover:scale-105 transition duration-500"
      style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)" }}>
      <div className="flex bg-none pl-4 w-72 space-x-4 rounded-lg">
        <Image src={Assets.searchNormal} alt="" width={20} height={20} />
        <input className="bg-none w-full py-4 outline-none text-[#475467] font-[500] text-[1.1vw]" type="text" placeholder="search" />
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex py-3 px-4 text-gray-500 font-semibold cursor-pointer border-l border-[#D6DDFF] space-x-2">
          <span className="text-[#475467] font-[500] text-[1vw]">All categories</span>

          <Image src={Assets.arrowDown} alt="" width={20} height={20} />
        </div>
        <div>
          <AppButton text="Search" />
        </div>
      </div>
    </div>
  )
}
