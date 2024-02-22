import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons'

export default function SearchAndFilter() {
  return (
    <div className="w-full flex items-center p-2 md:space-x-4 bg-white rounded-[5px] md:transform md:hover:scale-105 md:transition md:duration-500"
      style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)" }}>
      <div className="flex bg-none md:pl-4 pl-1 md:w-72 w-full space-x-2 rounded-lg">
        <Image src={Assets.searchNormal} alt="" width={18} height={18} />
        <input className="bg-none w-full py-2 outline-none text-[#475467] font-[500] md:text-[16px] text-[3.5vw]" type="text" placeholder="Search categories..." />
      </div>
      <div className="flex items-center space-x-3">
        {/* <div className="flex py-3 px-4 text-gray-500 font-semibold cursor-pointer border-l border-[#D6DDFF] space-x-2">
          <span className="text-[#475467] font-[500] text-[1vw]">All categories</span>

          <Image src={Assets.arrowDown} alt="" width={20} height={20} />
        </div> */}
        <div>
          <AppButton text="Search" />
        </div>
      </div>
    </div>
  )
}
