import React from 'react';
import Image from 'next/image';

export default function VerifiedBadge({text, isVerified, icon}: any) {
  return (
    <div className='bg-white px-[16px] py-[5px] rounded-[20px] flex space-x-3 items-center'>
        <p className='text-[#101828] font-[500] text-[1.1vw]'>{text}</p>
        <Image src={icon} alt="" width={20} height={20} />
    </div>
  )
}
