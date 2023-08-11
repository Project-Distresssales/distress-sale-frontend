import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons';

export default function VerifyUserBadge() {
    return (
        <div className="w-full h-[100px] rounded-[10px] flex"
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}>
            <div className="px-[35px] bg-[#D8E1FD] flex justify-center items-center rounded-l-[10px]">
                <Image src={Assets.verifyUser} alt="" width={35} height={35} />
            </div>
            <div className="w-full bg-[#E7EDFE] px-5 flex justify-between items-center rounded-r-[10px]">
                <div className='space-y-2'>
                    <p className="text-[#415EFF] text-[1.2vw] font-[700]">Become a Verified User</p>
                    <p className='text-[#6F85FF] text-[1.1vw] font-[500]'>Increase your online presence and reach a wider audience</p>
                </div>
                <AppButton text="Get started" fullWidth={false} boldText={false} />
            </div>
        </div>
    )
}
