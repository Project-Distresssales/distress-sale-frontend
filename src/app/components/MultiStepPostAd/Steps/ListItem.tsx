import React from 'react';
import StepperControl from '../StepperControl';

const ListItem = ({ handleClick, currentStep, steps }) => {
  return (
    <div>
      List Item
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

export default ListItem;
