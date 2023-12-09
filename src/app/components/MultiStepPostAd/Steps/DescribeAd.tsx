import React from 'react';
import StepperControl from '../StepperControl';

const DescribeAd = ({ handleClick, currentStep, steps }) => {
  return (
    <div>
        Describe Ad
        {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

export default DescribeAd;
