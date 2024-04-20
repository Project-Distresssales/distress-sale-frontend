import useAppTheme from '@/hooks/theme.hook'
import React from 'react'

export default function NewsLetter() {
    const {isMobile} = useAppTheme();
    return (
        <div className='flex rounded-[10px]'
            style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}
        >
            <input
                type="email"
                className="focus:outline-none block p-5 md:w-[450px] w-full bg-white rounded-l-[10px] font-[500] text-[3vw] md:text-[16px]"
                placeholder="Enter your email address"
                required
            />
            <button type="submit" className="md:px-[26px] py-[26px] px-[20px] rounded-r-[10px] bg-secondary text-white font-[700] md:text-[1vw] text-[3vw]">
                {!isMobile ? 'Subscribe to our Newsletter' : 'Subscribe'}
            </button>
        </div>
    )
}
