import React from 'react'
import StepperControl from '../StepperControl'

const Step4 = ({ handleClick, currentStep, steps }) => {
  return (
    <div>Step4
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  )
}

export default Step4