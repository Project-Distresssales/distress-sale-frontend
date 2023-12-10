'use client';
import React, { useState } from 'react';
import Stepper from '../components/MultiStepPostAd/Stepper';
import { UseContextProvider } from '@/providers/StepperContext ';
import Step1 from '../components/MultiStepPostAd/Steps/Step1';
import Step2 from '../components/MultiStepPostAd/Steps/Step2';
import Step3 from '../components/MultiStepPostAd/Steps/Step3';
import Step4 from '../components/MultiStepPostAd/Steps/Step4';
import Step5 from '../components/MultiStepPostAd/Steps/Step5';
import Step6 from '../components/MultiStepPostAd/Steps/Step6';

const PostAd = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Select Package', 'List Item', 'Descruibe Ad', 'Choose Ad Category', 'Ad Details', 'Contact Details'];

  const displayStep = ({ currentStep, handleClick, steps }) => {
    switch (currentStep) {
      case 1:
        return <Step1 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 2:
        return <Step2 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 3:
        return <Step3 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 4:
        return <Step4 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 5:
        return <Step5 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 6:
        return <Step6 handleClick={handleClick} currentStep={currentStep} steps={steps} />;
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
