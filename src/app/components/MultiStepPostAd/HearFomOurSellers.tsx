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
    <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
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
    <div className=" rounded-2xl relative text-sm bg-white max-w-[389px] w-full  shadow-2xl  flex flex-col gap-4 px-8 py-7 shadow-black/20 border border-white  ">
      <div className="absolute -bottom-7 bg-black/60 rounded-full right-0 ">
        <Image src={step.img} alt={`${step.name}`} className='object-cover rounded-full aspect-auto object-center ' width={60} height={60} />
      </div>
      <p className=" italic  text-[#344054] font-medium   ">{step.text}</p>
      <h2 className=" text-distressGrey900 font-bold  ">{step.name}</h2>
    </div>
  );
};

export default HearFomOurSellers;
