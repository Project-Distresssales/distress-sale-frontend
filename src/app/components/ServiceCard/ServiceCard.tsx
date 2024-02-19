import React from 'react'
import Image from 'next/image';
import { AppButton } from '../Buttons/Buttons';

export default function ServiceCard({ header, text, buttonText, icon }: { header: string; text: string; buttonText: string; icon: any }) {
    return (
        <div className='rounded-[15px] bg-white w-full h-auto px-[30px] pt-[70px] pb-[30px] relative'
            style={{
                boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)"
            }}>
            <div className="w-[70px] h-[70px] bg-[#6F85FF] rounded-full flex justify-center items-center absolute -top-6"
                style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)" }}>
                <Image src={icon} alt="" width={30} height={30} />
            </div>
            <div className="space-y-5 text-[#101828] mb-7">
                <h1 className='md:text-[1.4vw] text-[4.5vw] font-[700]'>{header}</h1>
                <p className='md:text-[1.1vw] text-[3.5vw] font-[500] leading-[25px]'>{text}</p>
            </div>
            <AppButton text={buttonText} fullWidth={true} boldText={false} />
        </div>
    )
}
