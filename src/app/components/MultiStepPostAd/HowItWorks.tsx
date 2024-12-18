import Assets from '@/constants/assets.constant';
import Image from 'next/image';
import React from 'react';

interface HowItWorksStep {
  id: number;
  img: string; // Assuming the img property is a string representing the image source
  title: string;
  description: string;
}

const HOWITWORKSSTEPS: HowItWorksStep[] = [
  {
    id: 1,
    img: Assets.mousePointer,
    title: 'Select a Package',
    description: 'Choose a package that best suits your needs',
  },
  {
    id: 2,
    img: Assets.penPaper,
    title: 'Describe Ad',
    description: 'Input correct details for potential buyers to view',
  },
  {
    id: 3,
    img: Assets.blueFolder,
    title: 'Choose Ad Category',
    description: 'Choose the right category for your Ad',
  },
  {
    id: 4,
    img: Assets.handShareBrowser,
    title: 'Contact Details',
    description: 'Confirm your contact details to activate and post your ad',
  },
];

const HowItWorks = () => {
  return (
    <div className=" grid md:gap-16 gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
      {HOWITWORKSSTEPS.map((step, index) => (
        <HowItWorksCard key={step.id} step={step} />
      ))}
    </div>
  );
};

interface HowItWorksCardProps {
  step: HowItWorksStep;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step }) => {
  return (
    <div className="bg-white max-w-[286px] w-full rounded-xl shadow-2xl text-center flex flex-col gap-2 items-center justify-center px-10 py-8 shadow-black/20 border border-white ">
      <h3 className="md:text-sm text-[3.7vw] font-medium text-[#667085] ">Step {step.id}</h3>
      <Image src={step.img} alt={`Step ${step.id}`} width={50} height={50} />

      <h2 className="md:text-lg text-[5vw] font-bold text-distressGrey900 ">{step.title}</h2>
      <p className="md:text-sm text-[3.7vw] font-medium text-distressGrey500 ">{step.description}</p>
    </div>
  );
};

export default HowItWorks;
