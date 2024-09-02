import React from 'react'

export default function AltNavbar() {
    const items = [
        {
            title: 'Deliver to 423651',
            icon: '/icons/location.svg'
        },
        {
            title: 'Track your order',
            icon: '/icons/truck.svg'
        },
        {
            title: 'All Offers',
            icon: '/icons/offer.svg'
        },
    ];

    return (
        <div className="w-full bg-[#d4defe] flex flex-col sm:flex-row justify-between items-center sm:px-24 px-5 py-4 gap-3 sm:gap-0">
            <p className='text-[#00134D] sm:text-sm text-[2.5vw] font-normal'>Welcome to Distress Sale!</p>
            <div className='flex items-center gap-7'>
                {items.map(({ icon, title }, i) => (
                    <div key={i} className='flex gap-1.5 items-center'>
                        <img src={icon} width={i === 1 ? 15 : 12} height={i === 1 ? 15 : 12} />
                        <p className='text-[#00134D] sm:text-sm text-[2.5vw] font-normal'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
