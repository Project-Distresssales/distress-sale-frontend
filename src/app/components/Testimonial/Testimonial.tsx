import React from 'react';
import Image from 'next/image';

export default function Testimonial({testimony}: any) {
  return (
    <div className='w-full rounded-[15px] bg-white px-[39px] md:py-[30px] py-5 relative'
    style={{boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)"}}
    >
        <p className="text-[#344054] italic md:text-[1vw] text-[4vw] md:leading-[25px] leading-tight">{testimony.title}</p>
        <h1 className='text-[#101828] md:text-[1.3vw] text-[5vw] font-[700] mt-3 leading-tight'>{testimony.name}</h1>

        <div className="w-[70px] h-[70px] rounded-full md:absolute right-0 mt-5 md:mt-0"
        style={{boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"}}>
            <Image 
            src={testimony.image} 
            alt="" 
            width={1000} 
            height={1000} 
            style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius: '100%'}}
            />
        </div>
    </div>
  )
}
