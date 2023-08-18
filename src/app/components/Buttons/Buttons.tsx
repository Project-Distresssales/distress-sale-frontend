import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export function AppButton({ text, fullWidth, boldText }: any) {
  return (
    <button className={`
    rounded-[5px] py-[12px] px-[40px] text-white ${boldText ? 'font-[900]' : 'font-[700]'} 
    text-[1vw] button-background ${fullWidth ? 'w-full' : ''}`}>{text}</button>
  )
}

export function OutlinedButton({ text, withIcon }: any) {
  return (
    <button className={`
    rounded-[5px] py-[12px] px-[20px] text-[#101828] flex items-center space-x-3 font-[500] 
    text-[1vw] border border-[#EAECF0]`}>
      <p>{text}</p>
      {withIcon && <Image src={Assets.infoIcon} alt="" width={17} height={17} />}
    </button>
  )
}
