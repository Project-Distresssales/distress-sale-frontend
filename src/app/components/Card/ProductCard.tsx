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
    <div>
      <div
        className="bg-white w-full h-auto p-5 rounded-[10px] cursor-pointer relative"
        style={{
          boxShadow:
            '0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div
          style={{ background: 'linear-gradient(109deg, #EAECF0 45.41%, rgba(65, 94, 255, 0.00) 236.37%)' }}
          className="w-full h-[196px] rounded-[5px] product-container" />
        {/* {product?.imageURLs?.length > 0 ? (
          <div className="w-full h-[196px] rounded-[5px] aspect-ratio-container product-container">
          <Image
            src={product?.imageURLs[0]}
            alt=""
            width={1000}
            height={1000}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
          />
        </div>
        ) : (
          <div className="w-full h-[196px] rounded-[5px] product-container bg-[#000]" />
        )} */}

        <div className="mt-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#415EFF] md:text-[1.2vw] text-[4.7vw] font-[700]">{product?.name}</h1>
            <div className="">
              <HeartIcon selected={selected} setSelected={handleFavorite} />
            </div>
          </div>
          <div className="">
            <p className="text-[#101828] md:text-[1.2vw] text-[4vw] font-[500] mt-5'">{product?.fullDescription}</p>
            <div className="flex items-center space-x-1 text-[#344054] md:text-[1vw] text-[3vw] mt-3">
              <p>AED {product?.price}</p>
            </div>
            <p className="text-[#101828] md:text-[1.1vw] text-[3.5vw] font-[500] mt-3">{product.location}</p>
          </div>
        </div>

        <div
          className="px-[8px] py-[3px] rounded-[5px] flex justify-center items-center absolute right-[32px] bottom-[210px]"
          style={{ background: 'rgba(16, 24, 40, 0.73)' }}
        >
          <p className="font-[500] text-[0.7vw] text-white">{product?.imageURLs?.length || 0} Photos</p>
        </div>
      </div>
    </div>
  );
}
