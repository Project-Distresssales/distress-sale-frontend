import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function DropDown({
  defaultOptionState,
  defaultOptionPropertyType,
  defaultOptionType,
  defaultOptionFeature,
  defaultOptionPrice,
}: any) {
  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="flex items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {defaultOptionState}
          <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
        </button>
      </div>

      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        Hello Dear
      </div>
    </div>
  );
}
