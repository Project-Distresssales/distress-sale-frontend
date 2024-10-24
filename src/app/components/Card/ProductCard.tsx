'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeartIcon from '../HeartIcon/HeartIcon';
import Link from 'next/link';
import { currencyFormatter, sliceText } from '@/helpers';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: any) {
  const router = useRouter();
  const [selected, setSelected] = useState<boolean>(true);

  const handleFavorite = () => {
    setSelected(!selected);
  };

  const goToProduct = () => {
    router.push(`product/${product?.objectID}`);
  };

  return (
    <div>
      <div
        onClick={goToProduct}
        className="bg-white min-w-full h-auto p-5 rounded-[10px] cursor-pointer relative"
        style={{
          boxShadow:
            '0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)',
        }}
      >
        {product?.imageURLs?.length > 0 ? (
          <div className="w-full h-[196px] rounded-[5px] aspect-ratio-container product-container relative">
            <img src={product?.imageURLs[0]} className="w-full h-full object-cover rounded-[5px]" />

            <div
              className="px-[8px] py-[3px] rounded-[5px] flex justify-center items-center absolute right-[32px] bottom-[210px]"
              style={{ background: 'rgba(16, 24, 40, 0.73)' }}
            >
              <p className="font-[500] text-[0.7vw] text-white">{product?.imageURLs?.length || 0} Photos</p>
            </div>
          </div>
        ) : (
          <div
            style={{ background: 'linear-gradient(109deg, #EAECF0 45.41%, rgba(65, 94, 255, 0.00) 236.37%)' }}
            className="w-full h-[196px] rounded-[5px] product-container"
          />
        )}

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-[#00134D] md:text-[18px] text-[4.7vw] font-[600] poppins-font leading-none">
                {currencyFormatter(product.price, 'AED')}
              </h1>
              <p className="text-[#9F9C9C] line-through font-[400] text-[14px] leading-none">260,000.00</p>
            </div>

            <div>
              <HeartIcon selected={selected} setSelected={handleFavorite} />
            </div>
          </div>
          <div className='mt-3'>
            <h1 className="text-[#0A0A0B] md:text-[16px] text-[4.5vw] font-[400] leading-none">{product?.name || '-----'}</h1>
            {/* <p className="text-[#344054] md:text-[15px] text-[4vw] font-[500] mt-5'">
              {sliceText(35, product?.shortDescription)}
            </p> */}
            <div className="flex items-center space-x-2 text-[#898384] md:text-[14px] text-[3vw] mt-7 font-[400]">
              <p>4 Beds</p>
              <span>•</span>
              <p>5 Baths</p>
            </div>
            <p className="text-[#0A0A0B] md:text-[16px] text-[3.5vw] font-[500] mt-2 leading-none poppins-font">
              {sliceText(35, product.location)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
