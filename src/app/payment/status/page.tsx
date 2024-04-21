"use client"
import Assets from '@/constants/assets.constant';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function PaymentSuccess() {
    const router = useRouter();

  return (
    <div className="h-[110vh] pb-20 w-full flex justify-center items-center px-5 md:px-0">
       <div className='md:w-[600px] w-full flex flex-col justify-center items-center'>
       <Image src={Assets.paymentSuccess} alt="" width={200} height={200} />
        <div className="space-y-3 text-center">
            <h1 className="font-[700] md:text-[30px] text-[7vw] text-successGreen">Success</h1>
            <div>
            <p className="font-[700] md:text-[18px] text-[4vw]">Your payment has been processed successfully</p>
            <p className="md:text-[14px] text-[3.5vw] font-medium md:w-[350px] w-full mx-auto">This page will be automatically redirected to the main page or click the button below.</p>
            </div>
        </div>
        <button
          onClick={() => router.push('/')}
            className={`
      flex justify-center items-center rounded-full py-4 px-10 text-white font-[700] mt-7
    md:text-[15px] text-[3.7vw] bg-secondary`}
          >
            Done
          </button>
       </div>
    </div>
  )
}
