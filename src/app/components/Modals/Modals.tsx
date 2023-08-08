import { Backdrop } from '@mui/material';
import React from 'react'
import { ZoomInOut } from '../Transitions/Transitions';

export default function AuthModal({
    open,
    handleClose,
    children,
    className,
    ...others
}: {
    open: boolean;
    children: React.ReactNode;
    className?: string;
    handleClose?: () => void;
    [key: string]: any;
  }) {
    const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
      };
    
      return (
        <Backdrop
          open={open}
          onClick={handleClose}
          transitionDuration={500}
          sx={{
            zIndex: 999,
          }}
        >
          <ZoomInOut target={open} className="fixed h-full top-0 left-0 w-full flex justify-center items-center">
            <div
              className={`bg-white w-[85%] h-fit rounded-[20px] sm:w-[500px] md:w-[711px] md:px-[28px] px-5 sm:px-[40px] flex flex-col gap-[23px] shadow-lg text-black2 justify-start items-start ${className}`}
              {...others}
              onClick={handleContentClick}
            >
              {children}
            </div>
          </ZoomInOut>
        </Backdrop>
      );
}
