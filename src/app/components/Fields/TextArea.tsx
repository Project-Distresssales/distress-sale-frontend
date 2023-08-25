import { TextAreaFieldProps } from '@/utils/types/types'
import React from 'react'

export default function TextArea({ label, placeholder, value, require, id, onInputChange, padding }: TextAreaFieldProps) {
    return (
        <div>

            <label htmlFor={id} className="block mb-2 text-[1vw] font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea
                id={id}
                rows={2}
                className={`bg-white border border-[#DDE2E5] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full ${padding} resize-none`}
                placeholder={placeholder}
                required={require}
                onChange={onInputChange}
            >
                {value}
            </textarea>

        </div>
    )
}
