'use client';
import React, { useState } from 'react';
import SelectPackage from '../components/MultiStepPostAd/Steps/SelectPackage';
import ListItem from '../components/MultiStepPostAd/Steps/ListItem';
import DescribeAd from '../components/MultiStepPostAd/Steps/DescribeAd';
import ChooseAdCategory from '../components/MultiStepPostAd/Steps/ChooseAdCategory';
import AdDetails from '../components/MultiStepPostAd/Steps/AdDetails';
import ContactDetails from '../components/MultiStepPostAd/Steps/ContactDetails';
import Stepper from '../components/MultiStepPostAd/Stepper';
import { UseContextProvider } from '@/providers/StepperContext ';
import StepperControl from '../components/MultiStepPostAd/StepperControl';

const PostAd = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Select Package', 'List Item', 'Descruibe Ad', 'Choose Ad Category', 'Ad Details', 'Contact Details'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <SelectPackage />;
      case 2:
        return <ListItem />;
      case 3:
        return <DescribeAd />;
      case 4:
        return <ChooseAdCategory />;
      case 5:
        return <AdDetails />;
      case 6:
        return <ContactDetails />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="flex flex-col items-stretch px-5 py-14 pb-16 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold  ">Post Ad</h2>
        <p className="font-medium text-[#667085] ">Post an ad in just 6 simple steps</p>
      </div>
      <div className=" pb-2 w-full ">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
        )}
      </div>
    </div>
  );
};

export default PostAd;
