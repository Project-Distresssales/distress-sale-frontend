'use client';
import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const page = () => {
  useEffect(() => {
    setTimeout(() => {
      toast.success('Verification Succesful');
      window.location.href = '/';
    }, 4000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[70vh]">
      <CircularProgress />

      <h1 className="mt-2">Verifying you account ...</h1>
    </div>
  );
};

export default page;
