'use client';
import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 4000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[70vh]">
      <CircularProgress />

      <h1 className="mt-2">Verify you account ...</h1>
    </div>
  );
};

export default page;
