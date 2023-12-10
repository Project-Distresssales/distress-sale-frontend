import React from 'react';
import StepperControl from '../StepperControl';

const Step5 = ({ handleClick, currentStep, steps }) => {
  return (
    <div>
      Step5
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default Step5;
