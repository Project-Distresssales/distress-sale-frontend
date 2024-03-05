import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant'
import Link from 'next/link';

export default function SearchCategory({header, item}: any) {
  return (
    <div className='space-y-5'>
        <h1 className='text-[#1D2939] md:text-[1.3vw] text-[3.5vw] font-[700] underline underline-offset-4'>{header}</h1>
        <div className="flex flex-col space-y-2">
        {item?.map((content: any, i: React.Key | null | undefined) => (
          content.path ? (
            <Link key={i} href={content.path} passHref>
              <p className="text-[#475467] font-[700] md:text-[16px] text-[3vw]">{content.text}</p>
            </Link>
          ) : (
            <span key={i} className="text-[#475467] font-[700] md:text-[16px] text-[3vw]">{content.text}</span>
          )
        ))}
        </div>
        <div className="flex space-x-2 items-center text-[#415EFF]">
            <p className='font-[700] md:text-[1.1vw] text-[3vw]'>View All</p>
            <Image src={Assets.arrowRight} alt="" width={17} height={17} />
        </div>
    </div>
  )
}
