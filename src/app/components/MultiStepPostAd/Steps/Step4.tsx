import React from 'react';
import StepperControl from '../StepperControl';
import { CategoryButton } from './Step2';

interface Step2Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const categories = [
  { text: 'Residential for Sale' },
  { text: 'Commercial for Sale' },
  { text: 'Land for Sale' },
  { text: 'Multiple Units for Sale' },
];

const Step4 = ({ handleClick, currentStep, steps }) => {
  return (
    <div className=" flex flex-col gap-16 ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold">Choose the right category for your Ad</h2>
        <p className="font-medium text-[#667085] ">Property for Sale</p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 gap-x-4 ">
        {categories.map((category, index) => (
          <CategoryButton key={index} text={category.text} />
        ))}
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

export default Step4;
