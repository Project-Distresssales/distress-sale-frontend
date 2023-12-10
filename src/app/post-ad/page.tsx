'use client';
import React, { useState } from 'react';
import ListItem from '../components/MultiStepPostAd/Steps/ListItem';
import DescribeAd from '../components/MultiStepPostAd/Steps/DescribeAd';
import ChooseAdCategory from '../components/MultiStepPostAd/Steps/ChooseAdCategory';
import AdDetails from '../components/MultiStepPostAd/Steps/AdDetails';
import ContactDetails from '../components/MultiStepPostAd/Steps/ContactDetails';
import Stepper from '../components/MultiStepPostAd/Stepper';
import { UseContextProvider } from '@/providers/StepperContext ';
import StepperControl from '../components/MultiStepPostAd/StepperControl';
import Step1 from '../components/MultiStepPostAd/Steps/Step1';

const PostAd = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Select Package', 'List Item', 'Descruibe Ad', 'Choose Ad Category', 'Ad Details', 'Contact Details'];

  const displayStep = ({ currentStep, handleClick, steps }) => {
    switch (currentStep) {
      case 1:
        return <Step1 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 2:
        return <ListItem handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 3:
        return <DescribeAd handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 4:
        return <ChooseAdCategory handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 5:
        return <AdDetails handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 6:
        return <ContactDetails handleClick={handleClick} currentStep={currentStep} steps={steps} />;
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
      <div className=" pb-2 w-full mx-auto ">
        {/* Stepper */}
        <div className="horizontal mx-auto mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">
            <UseContextProvider>
              {displayStep({
                currentStep,
                handleClick,
                steps,
              })}
            </UseContextProvider>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
