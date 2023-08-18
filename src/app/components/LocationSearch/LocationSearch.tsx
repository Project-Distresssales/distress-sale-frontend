import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant'

export default function LocationSearch() {
  return (
    <div className="relative w-[88vw] border rounded-[5px] border-[#EAECF0]">
                <input
                    type="text"
                    id="location"
                    value=""
                    className="text-[1vw] font-[500] rounded-[5px] outline-none w-full px-4 py-3 bg-white"
                    placeholder="Enter Location"
                />
                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                        <Image src={Assets.locationFill} alt="" width={20} height={20} />
                    </div>
            </div>
  )
}
