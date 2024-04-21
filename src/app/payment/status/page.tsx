'use client';

import API from '@/constants/api.constant';
import useRequest from '@/services/request/request.service';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function PaymentStatus() {
    const searchParams = useSearchParams();
    const [paymentMessage, setPaymentMessage] = useState<string>('');
  
    const { isLoading, makeRequest } = useRequest();
  
    useEffect(() => {
      paymentChecker();
    }, []);
  
        // Extract query parameters
        const status = searchParams.get('status');
        const tx_ref = searchParams.get('tx_ref');
        const transaction_id = searchParams.get('transaction_id');
  
    const paymentChecker = async () => {
      try {
        if (status && tx_ref && transaction_id) {
          const res = await makeRequest({
            method: 'GET',
            url: `${API.confirmPayment}?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`,
          });
  
          const { message } = res?.data;
          setPaymentMessage(message);
        } else {
          console.error('Some or all query parameters are missing.');
        }
      } catch (error: any) {
        setPaymentMessage(error?.response?.data?.message);
      }
    };
  return (
    <div>page</div>
  )
}


// 'use client';
// import PaymentError from '@/app/components/PaymentStatus/Error';
// import PaymentSuccess from '@/app/components/PaymentStatus/Success';
// import API from '@/constants/api.constant';
// import Assets from '@/constants/assets.constant';
// import useRequest from '@/services/request/request.service';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// export default function FlutterWavePaymentStatus() {
//   const searchParams = useSearchParams();
//   const [paymentMessage, setPaymentMessage] = useState<string>('');

//   const { isLoading, makeRequest } = useRequest();

//   useEffect(() => {
//     paymentChecker();
//   }, []);

//       // Extract query parameters
//       const status = searchParams.get('status');
//       const tx_ref = searchParams.get('tx_ref');
//       const transaction_id = searchParams.get('transaction_id');

//   const paymentChecker = async () => {
//     try {
//       if (status && tx_ref && transaction_id) {
//         const res = await makeRequest({
//           method: 'GET',
//           url: `${API.confirmPayment}?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`,
//         });

//         const { message } = res?.data;
//         setPaymentMessage(message);
//       } else {
//         console.error('Some or all query parameters are missing.');
//       }
//     } catch (error: any) {
//       setPaymentMessage(error?.response?.data?.message);
//     }
//   };

//   return (
//         <div>
//           {!isLoading && paymentMessage === 'Your payment has been processed successfully' ? (
//             <PaymentSuccess />
//           ) : !isLoading && paymentMessage === 'Payment Failed' ? (
//             <PaymentError />
//           ) : (
//             <div className="flex flex-col justify-center items-center h-[110vh] pb-20">
//               <Image src={Assets.paymentProcessing} alt="" width={200} height={200} />
//               <h1 className='font-[700] md:text-[18px] text-[5vw] text-secondary'>Processing Payment...</h1>
//             </div>
//           )}
//         </div>
//   );
// }
