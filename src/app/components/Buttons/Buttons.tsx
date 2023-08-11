import React from 'react'

export function AppButton({ text, fullWidth, boldText }: any) {
  return (
    <button className={`
    rounded-[5px] py-[12px] px-[40px] text-white ${boldText ? 'font-[900]' : 'font-[700]'} 
    text-[1vw] button-background ${fullWidth ? 'w-full' : ''}`}>{text}</button>
  )
}
