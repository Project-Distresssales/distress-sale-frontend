import { Skeleton } from '@mui/material';
import React from 'react';

export default function ProductSkeleton() {
  return (
    <div
      className="bg-white min-w-full h-auto p-5 rounded-[10px] cursor-pointer relative"
      style={{
        boxShadow:
          '0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)',
      }}
    >
      <Skeleton variant="rectangular" animation="wave" className="w-full h-[196px] rounded-[5px]" />

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1.2rem' }} />
            {/* <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1rem' }} /> */}
          </div>
        </div>
        <div className="mt-5">
          <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1.2rem' }} />
          <Skeleton variant="text" className="w-[150px]" sx={{ fontSize: '1rem' }} />
          <div className="flex gap-1 items-center mt-4">
            <Skeleton variant="text" className="w-[200px]" sx={{ fontSize: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
