import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function ApartmentCard({ item }: any) {
    return (
        <div className='bg-white w-full h-auto p-5 rounded-[10px] cursor-pointer item-container'>
            <div className='w-full h-[160px] rounded-[5px] aspect-ratio-container'>
                <Image
                    src={item.imagePath}
                    alt=""
                    width={1000}
                    height={1000}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                />
            </div>
            <h1 className='text-[#101828] text-[1.2vw] font-[700] mt-3'><span className="text-[1vw] font-[500]">AED</span> {item.priceTag}</h1>
            <p className='mt-3 text-[#101828] font-[500] text-[1vw]'>{item.name}</p>
            <div className="mt-2 flex items-center">
                <div className="flex items-center space-x-1">
                    <Image src={Assets.bed} alt="" width={15} height={15} />
                    <p className="font-[500] text-[1vw] text-[#475467]">{item.bedCount}</p>
                </div>
                <div className="h-[16px] mx-3 border border-[#EAECF0]" />
                <p className="text-[#475467] font-[500] text-[1vw]">Area: {item.area} sqft</p>
            </div>
        </div>
    )
}
