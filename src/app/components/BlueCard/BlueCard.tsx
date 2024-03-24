import React from 'react'

export default function BlueCard({ item }: any) {
  return (
    <div className="md:px-[30px] px-5 py-[20px] bg-[#6F85FF] flex flex-col md:w-full md:min-w-full min-w-[80%] justify-center items-center rounded-[15px] text-white space-y-3"
      style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
      <p className='font-[500] md:text-[1.1vw] text-[4.5vw] text-center leading-tight'>{item.title}</p>
      <h1 className='md:text-[2vw] text-[5vw] font-[700] leading-tight'>{item.data.toLocaleString()}</h1>
    </div>
  )
}
