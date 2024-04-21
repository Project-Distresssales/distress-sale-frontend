'use client'; // Not sure what 'use client' is supposed to do, you might want to check this

// Importing necessary modules and components
import PaymentError from '@/app/components/PaymentStatus/Error';
import PaymentSuccess from '@/app/components/PaymentStatus/Success';
import API from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';
import useRequest from '@/services/request/request.service';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Main component
export default function FlutterWavePaymentStatus() {
  // Hook to get search parameters from URL
  const searchParams = useSearchParams();
  // State to store payment message
  const [paymentMessage, setPaymentMessage] = useState<string>('');

  // Custom hook for making requests
  const { isLoading, makeRequest } = useRequest();

  // Function to check payment status
  useEffect(() => {
    paymentChecker();
  }, []);

  const paymentChecker = async () => {
    try {
      // Extracting query parameters
      const status = searchParams.get('status');
      const tx_ref = searchParams.get('tx_ref');
      const transaction_id = searchParams.get('transaction_id');

      if (status && tx_ref && transaction_id) {
        // Making a GET request to confirm payment
        const res = await makeRequest({
          method: 'GET',
          url: `${API.confirmPayment}?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`,
        });

        // Extracting payment message from response
        const { message } = res?.data;
        setPaymentMessage(message);
      } else {
        // Handling missing query parameters
        console.error('Some or all query parameters are missing.');
      }
    } catch (error: any) {
      // Handling errors
      setPaymentMessage(error?.response?.data?.message);
    }
  };

  // Rendering UI based on payment status and loading state
  return (
    <div>
      {!isLoading && paymentMessage === 'Your payment has been processed successfully' ? (
        <PaymentSuccess />
      ) : !isLoading && paymentMessage === 'Payment Failed' ? (
        <PaymentError />
      ) : (
        <div className="flex flex-col justify-center items-center h-[110vh] pb-20">
          <Image src={Assets.paymentProcessing} alt="" width={200} height={200} />
          <h1 className='font-[700] md:text-[18px] text-[5vw] text-secondary'>Processing Payment...</h1>
        </div>
      )}
    </div>
  );
}
