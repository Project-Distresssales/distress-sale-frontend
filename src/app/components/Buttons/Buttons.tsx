import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { ButtonBase, CircularProgress } from '@mui/material';
import { VoidCallback } from '@/utils/types';

interface AppButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
  fullWidth?: boolean;
  boldText?: boolean;
  loading?: boolean;
  onClick?: VoidCallback;
}

export function AppButton({
  children,
  text,
  fullWidth,
  boldText = false,
  onClick,
  loading = false,
  ...others
}: AppButtonProps) {
  return (
    <button
      className={`
      flex justify-center items-center rounded-[5px] py-[6px] px-[40px] text-white ${
        boldText ? 'font-[900]' : 'font-[700]'
      } 
    text-[1vw] button-background h-[37px] ${fullWidth ? 'w-full' : ''}`}
      onClick={loading ? () => {} : onClick}
      {...others}
    >
      {loading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : text || children}
    </button>
  );
}

export function OutlinedButton({ text, withIcon }: any) {
  return (
    <button
      className={`
    rounded-[5px] py-[12px] px-[20px] text-[#101828] flex items-center space-x-3 font-[500] 
    text-[1vw] border border-[#EAECF0]`}
    >
      <p>{text}</p>
      {withIcon && <Image src={Assets.infoIcon} alt="" width={17} height={17} />}
    </button>
  );
}

interface D extends AppButtonProps {
  icon: any;
}

export function AuthButton({ text, icon, loading, ...others }: D) {
  return (
    <ButtonBase className="rounded-[5px]">
      <button
        className={`rounded-[5px] py-[12px] px-[20px] text-[#415EFF] flex w-full items-center space-x-3 font-[500] 
    text-[1vw] border border-[#415EFF]`}
        type="button"
        {...others}
      >
        {loading ? (
          <CircularProgress size={16} sx={{ color: 'white' }} />
        ) : (
          <>
            <Image src={icon} alt="" width={17} height={17} />
            <p>{text}</p>
          </>
        )}
      </button>
    </ButtonBase>
  );
}
