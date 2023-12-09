import React from 'react';
import StepperControl from '../StepperControl';

const SelectPackage = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Select Package for your Ad</h2>
        <div>{/* Select Package */}</div>
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}

      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">How it Works?</h2>
        <div>{/* How it Works */}</div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Hear from our Sellers</h2>
        <div>{/* Hear from our Sellers */}</div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Frequently Asked Questions</h2>
        {/* FAQ */}
      </div>
    </div>
  );
};

export default SelectPackage;
