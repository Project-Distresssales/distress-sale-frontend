'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeartIcon from '../HeartIcon/HeartIcon';
import Link from 'next/link';

export default function ProductCard({ product }: any) {
  const [selected, setSelected] = useState<boolean>(true);

  const handleFavorite = () => {
    setSelected(!selected);
  };

  return (
    <Link href="/product/10219123129">
      <div
        className="bg-white w-full h-auto p-5 rounded-[10px] cursor-pointer relative"
        style={{
          boxShadow:
            '0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div className="w-full h-[196px] rounded-[5px] aspect-ratio-container product-container">
          <Image
            src={product.imagePath}
            alt=""
            width={1000}
            height={1000}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
          />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#101828] text-[1.2vw] font-[700]">{product.header}</h1>
            <div className="">
              <HeartIcon selected={selected} setSelected={handleFavorite} />
            </div>
          </div>
          <div className="">
            <p className="text-[#101828] text-[1.2vw] font-[500] mt-5'">{product.description}</p>
            <div className="flex items-center space-x-1 text-[#344054] text-[1vw] mt-3">
              <p>{product.feature}</p>
            </div>
            <p className="text-[#101828] text-[1.1vw] font-[500] mt-3">{product.location}</p>
          </div>
        </div>

        <div
          className="px-[8px] py-[3px] rounded-[5px] flex justify-center items-center absolute right-[32px] bottom-[210px]"
          style={{ background: 'rgba(16, 24, 40, 0.73)' }}
        >
          <p className="font-[500] text-[0.7vw] text-white">10 Photos</p>
        </div>
      </div>
    </Link>
  );
}
