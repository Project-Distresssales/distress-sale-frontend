import React from 'react';
import StepperControl from '../StepperControl';

const AdDetails = ({ handleClick, currentStep, steps }) => {
  return (
    <div>
      AdDetails
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default AdDetails;
