import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons';
import useAppTheme from '@/hooks/theme.hook';
import { useRouter } from 'next/navigation';

export default function UnverifiedUserBadge() {
    const {isMobile} = useAppTheme();
    const router = useRouter();
    return (
        <div className="w-full md:h-[100px] h-auto rounded-[16px] flex"
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}>
            <div className="md:px-[35px] px-[30px] bg-[#D8E1FD] flex justify-center items-center rounded-l-[16px]">
                <Image src={Assets.verifyUser} alt="" width={!isMobile ? 35 : 35} height={!isMobile ? 35 : 35} />
            </div>
            <div className="w-full bg-[#D8E1FD] px-5 flex md:flex-row flex-col justify-between md:items-center items-start space-y-5 md:space-y-0 rounded-r-[16px] py-5">
                <div className='space-y-2'>
                    <p className="text-[#00134D] md:text-[1.2vw] text-[3.5vw] font-[700]">Become a Verified User</p>
                    <p className='text-[#00134D] md:text-[1.1vw] text-[2.8vw] font-[500]'>Increase your online presence and reach a wider audience</p>
                </div>
                <button
            className={`
      flex justify-center items-center rounded-[12px] py-3.5 text-white font-[500] px-7 
    md:text-[16px] text-[3.2vw] bg-secondary`}
    onClick={() => router.push('/profile')}
          >
            Get started
          </button>
            </div>
        </div>
    )
}
