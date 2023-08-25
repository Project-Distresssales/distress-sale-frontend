import { SearchFieldProps } from '@/utils/types/types';
import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchField({ placeholder, value, id, type, onInputChange }: SearchFieldProps) {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onInputChange}
          className="bg-white border border-[#CED3D8] text-gray-900 text-[1vw] rounded-[5px] outline-none w-[300px] px-4 py-3"
          placeholder={placeholder}
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'>
          <IconContext.Provider value={{ color: "#495057", size: "20px" }}>
            <div>
              <AiOutlineSearch />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
