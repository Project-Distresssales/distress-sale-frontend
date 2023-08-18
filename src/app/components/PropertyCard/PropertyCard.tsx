"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import HeartIcon from '../HeartIcon/HeartIcon';
import VerifiedBadge from '../VerifiedBadge/VerifiedBadge';

export default function PropertyCard(
    {
        imagePath,
        name,
        location,
        priceTag,
        type,
        bedCount,
        bathCount,
        area,
        call,
        email,
        whatsapp,
        info,
        viewerCount,
        pictureCount,
        verified,
    }: any) {
    const [selected, setSelected] = useState<boolean>(true);

    const handleFavorite = () => {
        setSelected(!selected);
    }

    return (
        <div className="w-[920px] h-auto rounded-[10px] bg-white flex"
            style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
            <div className='w-full rounded-r-[15px] h-[370px] relative'>
                <div className="flex justify-between items-center absolute top-0 left-0 right-0 p-5">
                    <div>
                        <VerifiedBadge text="Verified" icon={Assets.verify} isVerified={true} />
                    </div>
                    {/* <div>
                        <VerifiedBadge text="Verified" icon={Assets.bed} isVerified={true} />
                    </div> */}
                </div>
                <Image src={imagePath}
                    alt=""
                    width={1000}
                    height={1000}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
                />
            </div>
            <div className="w-full h-[370px] p-[24px] relative">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#101828] font-[700] text-[1.4vw]"><span className='uppercase font-[700] text-[1vw]'>aed</span> 190,000</h1>
                    <div className="">
                        <HeartIcon
                            selected={selected}
                            setSelected={handleFavorite}
                        />
                    </div>
                </div>

                <div className="flex items-center mt-2">
                    <p className="text-[#344054] font-[700] text-[1vw]">{type}</p>
                    <div className='py-[2px] mx-4 px-5 border-x border-[#EAECF0] flex space-x-5 items-center'>
                        <div className="flex items-center space-x-2">
                            <Image src={Assets.bath} alt="" width={15} height={15} />
                            <p className="text-[#344054] font-[700] text-[1vw]">{bathCount}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src={Assets.bed} alt="" width={15} height={15} />
                            <p className="text-[#344054] font-[700] text-[1vw]">{bedCount}</p>
                        </div>
                    </div>
                    <p className="text-[#344054] text-[1vw] font-[500]"><span className="font-[700]">Area:</span> {area} sqft</p>
                </div>

                <p className='text-[#415EFF] font-[500] text-[1.1vw] mt-4'>{name}</p>
                <div className="flex items-center space-x-2 mt-4">
                    <Image src={Assets.locationFillBig} alt="" width={20} height={20} />
                    <p className="text-[#344054] font-[700] text-[1vw]">{location}</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between space-x-3 mt-6">
                    <button className='bg-[#D6DDFF] rounded-[8px] py-3 flex items-center justify-center space-x-2.5 w-full'>
                        <Image src={Assets.call} alt="" width={15} height={15} />
                        <p className="text-[#415EFF] font-[500] text-[1.1vw]">Call</p>
                    </button>
                    <button className='bg-[#FFDDCF] rounded-[8px] flex items-center space-x-2.5 justify-center w-full'>
                        <Image src={Assets.sms} alt="" width={15} height={15} />
                        <p className="text-[#7A2E0E] font-[500] text-[1.1vw]">Email</p>
                    </button>
                    <button className='bg-[#EAFFF2] rounded-[8px] flex items-center justify-center w-full'>
                        <Image src={Assets.whatsapp} alt="" width={22} height={22} />
                    </button>
                </div>

                {/* Info */}
                <div className="flex space-x-3 items-center mt-6">
                    <Image src={Assets.infoIcon} alt="" width={20} height={20} />
                    <p className="text-[#101828] font-[600] text-[0.9vw]">{info}</p>
                </div>

                {/* Viewers */}
                <div className="bg-[#EAECF0] px-[8px] py-2 rounded-tl-[5px] rounded-br-[10px] absolute right-0 bottom-0 flex space-x-2 items-center">
                    <div className="flex items-center relative">
                        <div className="w-[20px] h-[20px] rounded-full">
                            <Image
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={1000}
                                height={1000}
                                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "100%" }}
                            />
                        </div>
                        <div className="w-[20px] h-[20px] rounded-full -ml-2">
                            <Image
                                src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={1000}
                                height={1000}
                                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "100%" }}
                            />
                        </div>
                        <div className="w-[20px] h-[20px] rounded-full -ml-2">
                            <Image
                                src="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={1000}
                                height={1000}
                                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "100%" }}
                            />
                        </div>
                        <div className="w-[20px] h-[20px] rounded-full -ml-2">
                            <Image
                                src="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={1000}
                                height={1000}
                                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "100%" }}
                            />
                        </div>
                    </div>
                    <p className="text-[#101828] font-[600] text-[0.8vw]">
                        There are <span className="text-[#415EFF] font-[700]">{viewerCount}</span> people viewing this product right now</p>
                </div>
            </div>
        </div>
    )
}
