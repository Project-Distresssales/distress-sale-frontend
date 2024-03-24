import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function ServiceCard2() {
    return (
        <div className='w-full h-auto rounded-[15px] relative'>
           <div className="flex flex-col md:flex-row">
           <div className='rounded-l-[15px] w-full bg-white h-[200px] p-[30px]'
                style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
                <div className="space-y-5 text-[#101828] mb-7">
                    <h1 className='md:text-[1.4vw] text-[4vw] font-[700]'>Explore from Home</h1>
                    <p className='md:text-[1.1vw] text-[3.5vw] font-[500] leading-[25px]'>Enjoy searching through properties featuring captivating videos and interactive 360 tours, allowing you explore properties from the comfort and safety of your home.</p>
                </div>
            </div>
            <div className='w-full rounded-r-[15px] h-[200px]'>
                <Image src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                width={1000} 
                height={1000}
                style={{objectFit: 'cover', width: '100%', height: '100%', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}}
                 />
            </div>
           </div>

            <div className="flex space-x-24 absolute left-8 -bottom-[20px]">
                <button className="flex items-center bg-[#6F85FF] px-[15px] py-[10px] rounded-[5px] text-white font-[700] text-[1vw] space-x-4">
                    <div className="flex items-center space-x-2">
                    <Image src={Assets.video} alt="" width={17} height={17} />
                    <span>View properties with video tour</span>
                    </div>
                    <Image src={Assets.arrowRightStrip} alt="" width={17} height={17} />
                </button>
                <button className="flex items-center bg-[#6F85FF] px-[15px] py-[10px] rounded-[5px] text-white font-[700] text-[1vw] space-x-4">
                    <div className="flex items-center space-x-2">
                    <Image src={Assets.view} alt="" width={17} height={17} />
                    <span>View properties with 360 tour</span>
                    </div>
                    <Image src={Assets.arrowRightStrip} alt="" width={17} height={17} />
                </button>
            </div>
        </div>
    )
}
