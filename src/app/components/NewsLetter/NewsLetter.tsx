import React from 'react'

export default function NewsLetter() {
    return (
        <div className='flex rounded-[10px]'
            style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}
        >
            <input
                type="email"
                className="focus:outline-none block p-5 sm:w-[450px] bg-white rounded-l-[10px] font-[500]"
                placeholder="enter your email address"
                required
            />
            <button type="submit" className="px-[26px] py-[26px] rounded-r-[10px] bg-[#415EFF] text-white font-[700] text-[1vw]">
                <span className="">Subscribe to our Newsletter</span>
            </button>
        </div>
    )
}
