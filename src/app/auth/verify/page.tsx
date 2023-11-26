'use client';
import API from '@/constants/api.constant';
import useRequest from '@/services/request/request.service';
import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const page = ({ searchParams }) => {
  const { makeRequest } = useRequest();
  const token = searchParams.token;

  useEffect(() => {
    makeRequest({
      url: API.verifyUser,
      data: {
        token,
      },
      method: 'POST',
    })
      .then((res) => {
        toast.success('Verification Succesful');
      })
      .catch((err) => {
        toast.error('Something went wrong, Please Try requesting again');
      })
      .finally(() => {
        window.location.href = '/';
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[70vh]">
      <CircularProgress />

      <h1 className="mt-2">Verifying you account ...</h1>
    </div>
  );
};

export default page;
