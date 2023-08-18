import { ButtonBase } from '@mui/material'
import React from 'react'

export default function Tab({ title, activeTab, tab, onHandle }: any) {
    return (
        <ButtonBase>
            <div
                className={`py-[5px] px-[10px] w-[100px] transform ease-in-out sm:text-[1.1vw] duration-500 delay-150 font-[500] cursor-pointer rounded-[2px]
              ${activeTab === tab ? 'bg-[#D6DDFF]' : 'bg-transparent'} 
              ${activeTab === tab ? 'text-[#415EFF]' : 'text-[#101828]'}`}
                onClick={onHandle}>
                <p>{title}</p>
            </div>
        </ButtonBase>
    )
}
