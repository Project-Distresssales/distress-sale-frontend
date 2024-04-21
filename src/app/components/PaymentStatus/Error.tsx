import Assets from '@/constants/assets.constant';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function PaymentError() {
  const router = useRouter();

  return (
    <div className="h-[110vh] pb-20 w-full flex justify-center items-center px-5 md:px-0">
      <div className="md:w-[600px] w-full flex flex-col justify-center items-center">
        <Image src={Assets.paymentError} alt="" width={200} height={200} />
        <div className="space-y-3 text-center mt-5">
          {/* <h1 className="font-[700] md:text-[30px] text-[7vw] text-errorRed">Error</h1> */}
          <div>
            <p className="font-[700] md:text-[18px] text-[4vw]">There was an error processing your payment</p>
            <p className="md:text-[14px] text-[3.5vw] font-medium md:w-[370px] w-full mx-auto">
              We encountered an issue while processing your payment. Please try again later, or contact the support team.
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push('/post-ad')}
          className={`
      flex justify-center items-center rounded-full py-4 px-10 text-white font-[700] mt-7
    md:text-[15px] text-[3.7vw] bg-secondary`}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
