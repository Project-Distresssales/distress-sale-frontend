"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Assets from '@/constants/assets.constant'
import DropDown from '../DropDown/DropDown'
import { AppButton } from '../Buttons/Buttons'
import LocationSearch from '../LocationSearch/LocationSearch'
import TabSwitcher from '../TabSwitcher/TabSwitcher'

export default function HeroDropDown(
  {
    activeTab,
    setActiveTab,
    handleTabClick,
    defaultOptionState,
    defaultOptionPropertyType,
    defaultOptionType,
    defaultOptionFeature,
    defaultOptionPrice,
  }: any) {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/property-for-sale" || pathname === "/property-for-rent" ? (
        <div className='mb-5'>
          <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} handleTabClick={handleTabClick} />
        </div>
      ) : (null)}


      <div className="grid grid-cols-1 space-y-3 p-[10px] rounded-[5px] w-[50vw]"
        style={{
          boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
          background: "rgba(16, 24, 40, 0.80)"
        }}>
        <div className='flex items-center space-x-3 w-full'>
          <div className="relative inline-block text-left w-full">
            <div>
              <button type="button" className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {defaultOptionState}
                <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
              </button>
            </div>

            {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                Hello Dear
            </div> */}
          </div>
          <LocationSearch />
          <div className="relative inline-block text-left w-full">
            <div>
              <button type="button" className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {defaultOptionPropertyType}
                <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
              </button>
            </div>

            {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                Hello Dear
            </div> */}
          </div>
        </div>
        <div className='flex items-center space-x-3 w-full'>
          <div className="relative inline-block text-left w-full">
            <div>
              <button type="button" className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {defaultOptionType}
                <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
              </button>
            </div>

            {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                Hello Dear
            </div> */}
          </div>

          <div className="relative inline-block text-left w-full">
            <div>
              <button type="button" className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {defaultOptionFeature}
                <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
              </button>
            </div>

            {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                Hello Dear
            </div> */}
          </div>

          <div className="relative inline-block text-left w-full">
            <div>
              <button type="button" className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {defaultOptionPrice}
                <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
              </button>
            </div>

            {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                Hello Dear
            </div> */}
          </div>
          <div>
            <AppButton text="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}
