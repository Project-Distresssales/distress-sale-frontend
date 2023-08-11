import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant'

export default function SearchCategory({header, item}: any) {
  return (
    <div className='space-y-5'>
        <h1 className='text-[#1D2939] text-[1.3vw] font-[700] underline underline-offset-4'>{header}</h1>
        {item?.map((content: any, i: React.Key | null | undefined) => (
            <p key={i} className="text-[#475467] font-[700] text-[1.1vw]" onClick={content.link}>{content.text}</p>
        ))}
        <div className="flex space-x-2 items-center text-[#415EFF]">
            <p className='font-[700] text-[1.1vw]'>View All</p>
            <Image src={Assets.arrowRight} alt="" width={17} height={17} />
        </div>
    </div>
  )
}
