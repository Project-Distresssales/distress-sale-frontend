import React, { ReactNode, FC, useState } from 'react';
import StepperControl from '../StepperControl';
import { BusinessBagIcon, CarIcon, HouseIcon, TreeListIcon } from '../../Icons/Icons';

interface Step2Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const categories = [
  { text: 'Property for Sale', icon: <HouseIcon /> },
  { text: 'Car for Sale', icon: <CarIcon /> },
  { text: 'Listings', icon: <TreeListIcon /> },
  { text: 'Commercial', icon: <BusinessBagIcon /> },
];

const Step2: React.FC<Step2Props> = ({ handleClick, currentStep, steps }) => {
  const [selected, SetSelected] = useState('');
  const toogleSelected = (title: string) => title && SetSelected(title);

  return (
    <div className=" flex flex-col gap-16 ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold  ">Hello, what items do you have to list today?</h2>
        <p className="font-medium text-[#667085] ">Choose the category that best suits your ad</p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full ">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            text={category.text}
            icon={category.icon}
            selected={selected === category.text}
            onClick={() => toogleSelected(category.text)}
          />
        ))}
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

interface CategoryButtonProps {
  text: string;
  icon?: ReactNode;
  selected?: boolean;
  [key: string]: any;
}

export const CategoryButton: FC<CategoryButtonProps> = ({ text, icon, selected, ...others }) => {
  return (
    <button
      className={`px-4 w-fit py-2.5 shadow-lg rounded-lg ${
        selected ? 'bg-black/20' : ''
      } transition-all duration-500 hover:bg-black/20 border boorder-[#EAECF0] flex items-center gap-2.5 justify-self-center `}
      type="button"
      {...others}
    >
      {icon && <span className="">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Step2;
