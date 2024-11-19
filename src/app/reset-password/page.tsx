'use client';
import TextField from '@/app/components/Fields/TextField';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import { profileLoginAction } from '@/store/profile.slice';
import { CircularProgress } from '@mui/material';
import next from 'next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const router = useRouter();
//   const [token, setToken] = useState('');
//   const [email, setEmail] = useState('');
  const { isLoading, makeRequest } = useRequest();
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match. Please try again.');
      return;
    }

    const payload = { tokenReference: token, newPassword: formData.password };

    try {
      const response = await makeRequest({
        method: 'POST',
        url: API.resetPassword, // Ensure the API endpoint is correct
        data: payload,
      });

      const { message } = response.data;
      toast.success(message || 'Password reset successful!');
      router.push('/');
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[500px]">
        <div className="flex justify-center w-full">
          <h1 className="text-[#101828] font-bold md:text-[22px] text-[5vw] text-center leading-tight">
            Reset Password
          </h1>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-6">
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
            withBackground={false}
            obscured={true}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Re-type Password"
            placeholder="Re-type password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            withBackground={false}
            obscured={true}
          />

          <div className="mt-8">
            <button
              type="submit"
              className="flex justify-center items-center rounded-lg py-3.5 text-white font-medium md:text-[16px] text-[3.2vw] bg-secondary w-full"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
