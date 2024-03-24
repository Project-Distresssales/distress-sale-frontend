import Assets from '@/constants/assets.constant';
import Image from 'next/image';
import React from 'react';
import { text } from 'stream/consumers';

type SellersType = {
  img: string;
  text: string;
  name: string;
};

const SELLERS: SellersType[] = [
  {
    img: Assets.seller1,
    text: '“WhatsApp Service is great. Met with potential buyers”',
    name: 'Rachel Clay',
  },
  {
    img: Assets.seller2,
    text: '“Selling my property was very easy and a good experience, Thank you Distress Sale "',
    name: 'Richard Davison',
  },
  {
    img: Assets.seller3,
    text: '"Very great place to advertise your property,',
    name: 'Neil May',
  },
  {
    img: Assets.seller1,
    text: '“WhatsApp Service is great. Met with potential buyers”',
    name: 'Rachel Clay',
  },
  {
    img: Assets.seller2,
    text: '“Selling my property was very easy and a good experience, Thank you Distress Sale "',
    name: 'Richard Davison',
  },
  {
    img: Assets.seller3,
    text: 'My property was sold in less than 5 hours"',
    name: 'Neil May',
  },
];

const HearFomOurSellers = () => {
  return (
    <div className="grid md:gap-6 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {SELLERS.map((step, index) => (
        <SellerCard key={index} step={step} />
      ))}
    </div>
  );
};

interface SellerCardProps {
  step: SellersType;
}

const SellerCard: React.FC<SellerCardProps> = ({ step }) => {
  return (
    <div className="w-full min-w-[80%] md:min-w-[100%] rounded-[15px] bg-white px-[39px] md:py-[30px] py-5 relative"
    style={{boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)"}}
    >
      <div className="absolute -bottom-7 bg-black/60 rounded-full right-0 ">
        <Image src={step.img} alt={`${step.name}`} className='object-cover rounded-full aspect-auto object-center ' width={60} height={60} />
      </div>
      <p className="text-[#344054] italic md:text-[1vw] text-[4vw] md:leading-[25px] leading-tight">{step.text}</p>
      <h2 className="text-[#101828] md:text-[1.3vw] text-[4.5vw] font-[700] mt-3 leading-tight">{step.name}</h2>
    </div>
  );
};

export default HearFomOurSellers;
