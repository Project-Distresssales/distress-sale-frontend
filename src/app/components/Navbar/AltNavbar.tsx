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
        <div className="w-full bg-[#d4defe] flex justify-between items-center px-24 py-4">
            <p className='text-[#00134D] text-sm font-normal'>Welcome to Distress Sale!</p>
            <div className='flex items-center gap-7'>
                {items.map(({ icon, title }, i) => (
                    <div key={i} className='flex gap-1.5 items-center'>
                        <img src={icon} width={i === 1 ? 20 : 15} height={i === 1 ? 20 : 15} />
                        <p className='text-[#00134D] text-sm font-normal'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
