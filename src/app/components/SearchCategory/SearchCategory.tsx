import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant'

export default function SearchCategory({header, item}: any) {
  return (
    <div className='space-y-5'>
        <h1 className='text-[#1D2939] md:text-[1.3vw] text-[3.5vw] font-[700] underline underline-offset-4'>{header}</h1>
        {item?.map((content: any, i: React.Key | null | undefined) => (
            <p key={i} className="text-[#475467] font-[700] md:text-[1.1vw] text-[3vw]" onClick={content.link}>{content.text}</p>
        ))}
        <div className="flex space-x-2 items-center text-[#415EFF]">
            <p className='font-[700] md:text-[1.1vw] text-[3vw]'>View All</p>
            <Image src={Assets.arrowRight} alt="" width={17} height={17} />
        </div>
    </div>
  )
}
