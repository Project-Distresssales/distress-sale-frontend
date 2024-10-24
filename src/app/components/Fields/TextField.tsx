'use client';

import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { TextFieldProps } from '@/utils/types'
interface TextFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  placeholder: string;
  value: string;
  obscured?: boolean;
  error?: string;
  withBackground: boolean;
  name: string;
}

export default function TextField({
  label,
  placeholder,
  value,
  id,
  type = 'text',
  onChange,
  obscured = false,
  withBackground,
  error,
  name,
  ...others
}: TextFieldProps) {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="md:text-[14px] text-[3.7vw] font-medium text-gray-900 w-full">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={viewPassword ? 'text' : type}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          className={`${
            withBackground ? 'bg-white' : 'bg-transparent'
          } border border-[#DDE2E5] text-gray-900 md:text-[14px] font-medium text-[3.7vw] rounded-[8px] outline-none w-full px-4 py-3 `}
          placeholder={placeholder}
          {...others}
        />

        {obscured && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={handleViewPassword}
          >
            <IconContext.Provider value={{ color: '#ababaa', size: '20px' }}>
              <div>{viewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>
            </IconContext.Provider>
          </div>
        )}
      </div>
      {error ? (
        <span className="text-left md:text-xs text-[3vw] text-red-500">{error}</span>
      ) : null}
    </div>
  );
}
