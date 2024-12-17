import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons';
import useAppTheme from '@/hooks/theme.hook';

export default function VerifiedUserBadge() {
  const { isMobile } = useAppTheme();
  return (
    <div
      className="w-full md:h-[120px] h-auto rounded-[10px] flex"
      style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
    >
      <div className="md:px-[35px] px-[30px] bg-[#D8E1FD] flex justify-center items-center rounded-l-[10px]">
        <Image src={Assets.verifyUser} alt="" width={!isMobile ? 35 : 35} height={!isMobile ? 35 : 35} />
      </div>
      <div className="w-full bg-[#D8E1FD] px-5 flex md:flex-row flex-col justify-between md:items-center items-start space-y-5 md:space-y-0 rounded-r-[10px] py-5">
        <div className="space-y-2">
          <p className="text-[#00134D] md:text-[18px] text-[3.5vw] font-[700]">Verified User</p>
          <p className="text-[#00134D] md:text-[14px] text-[2.8vw] font-[500] md:w-[500px] w-full">
            You are now qualified for Ad Posting and This will also Increase your online presence and help you reach a
            wider audience.
          </p>
        </div>
        {!isMobile && (
          <div>
            <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.98242 9.99909L8.99076 12.0158L13.0158 7.98242"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.95742 2.04258C9.53242 1.55091 10.4741 1.55091 11.0574 2.04258L12.3741 3.17591C12.6241 3.39258 13.0908 3.56758 13.4241 3.56758H14.8408C15.7241 3.56758 16.4491 4.29258 16.4491 5.17591V6.59258C16.4491 6.91758 16.6241 7.39258 16.8408 7.64258L17.9741 8.95925C18.4658 9.53425 18.4658 10.4759 17.9741 11.0592L16.8408 12.3759C16.6241 12.6259 16.4491 13.0926 16.4491 13.4259V14.8426C16.4491 15.7259 15.7241 16.4509 14.8408 16.4509H13.4241C13.0991 16.4509 12.6241 16.6259 12.3741 16.8426L11.0574 17.9759C10.4824 18.4676 9.54075 18.4676 8.95742 17.9759L7.64076 16.8426C7.39076 16.6259 6.92409 16.4509 6.59075 16.4509H5.14909C4.26575 16.4509 3.54076 15.7259 3.54076 14.8426V13.4176C3.54076 13.0926 3.36576 12.6259 3.15742 12.3759L2.03242 11.0509C1.54909 10.4759 1.54909 9.54258 2.03242 8.96758L3.15742 7.64258C3.36576 7.39258 3.54076 6.92591 3.54076 6.60091V5.16758C3.54076 4.28424 4.26575 3.55924 5.14909 3.55924H6.59075C6.91575 3.55924 7.39076 3.38424 7.64076 3.16758L8.95742 2.04258Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {/* <AppButton text="Get started" fullWidth={false} boldText={false} /> */}
      </div>
    </div>
  );
}
