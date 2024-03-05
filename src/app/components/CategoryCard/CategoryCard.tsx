import React from 'react';
import Image from 'next/image';

export default function CategoryCard({ product }: any) {
    return (
        <div className='bg-white w-full h-auto p-5 rounded-[10px] cursor-pointer product-container'
            style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
            <div className='w-full h-[196px] rounded-[5px] aspect-ratio-container'>
                <Image
                    src={product.imagePath}
                    alt=""
                    width={1000}
                    height={1000}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                />
            </div>
            <h1 className='text-[#101828] text-[1.2vw] font-[700]'>{product.header}</h1>
        </div>
    )
}
