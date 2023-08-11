import React from 'react'

export default function BlueCard({ item }: any) {
  return (
    <div className="px-[30px] py-[20px] bg-[#6F85FF] flex flex-col w-full justify-center items-center rounded-[15px] text-white space-y-3"
      style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
      <p className='font-[500] text-[1.1vw] text-center'>{item.title}</p>
      <h1 className='text-[2vw] font-[700]'>{item.data.toLocaleString()}</h1>
    </div>
  )
}
