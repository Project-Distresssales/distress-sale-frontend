import React, { ReactNode } from 'react';
import StepperControl from '../StepperControl';
import { TickSvg } from '../../Icons/Icons';
import SelectPackage from '../SelectPackage';
import HowItWorks from '../HowItWorks';
import HearFomOurSellers from '../HearFomOurSellers';
import FAQ from '../../FAQ/FAQ';

interface Step1Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step1: React.FC<Step1Props> = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex flex-col gap-24 w-full">
      {/* Select Package */}
      <div className="flex flex-col gap-16 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Select Package for your Ad</h2>
        <SelectPackage />
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
      <div className="flex flex-col gap-16 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">How it Works?</h2>
        {/* How it Works */}
        <div>
          <HowItWorks />
        </div>
      </div>
      {/* Hear from our Sellers */}
      <div className="flex flex-col gap-16 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Hear from our Sellers</h2>
        <HearFomOurSellers />
      </div>
        {/* FAQ */}
      <div className="flex flex-col gap-16 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Frequently Asked Questions</h2>
        <FAQ />
      </div>
    </div>
  );
};

export default Step1;
