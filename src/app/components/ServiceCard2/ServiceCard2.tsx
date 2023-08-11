import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function ServiceCard2() {
    return (
        <div className='w-full h-auto rounded-[15px] relative'>
           <div className="flex">
           <div className='rounded-l-[15px] w-full bg-white h-[200px] p-[30px]'
                style={{ boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)" }}>
                <div className="space-y-5 text-[#101828] mb-7">
                    <h1 className='text-[1.4vw] font-[700]'>Explore from Home</h1>
                    <p className='text-[1.1vw] font-[500] leading-[25px]'>Enjoy searching through properties featuring captivating videos and interactive 360 tours, allowing you explore properties from the comfort and safety of your home.</p>
                </div>
            </div>
            <div className='w-full rounded-r-[15px] h-[200px]'>
                <Image src="https://s3-alpha-sig.figma.com/img/dc08/c0a2/dfda36f5db67ec87c3764e4fd9693b3f?Expires=1691971200&Signature=UhCEESXpPBVWAJ6m4iwsq7eU8oqvRARPvi0keZyoLOO7wLeCCZzy0aWoK6nCEafJ~M50FlicHbwuUH2ZWSIuYpUiZCGhtYdBCCjRh3AdnleFf-I5C7znhuSDoVgFzBRKTq7zLnUJEB-xLmLhGMzPU9x-NEseszVqbwBbbydi-MRHw-h72PgCRuXMYFm8AnEGM5z-XAKAy7rk4PszS6z3jqu1fWE4xIcj5GJi2ElU6LQbbn~xzSw5hYpUBiQVGbLKbx9KngPtzM2evt9eN0badJzBlpblpw4ojACMUwMgmM4C821T3y6uD85OBhZOYkgfGJYWTG8SsRCGJZ9Dvkn6bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
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
