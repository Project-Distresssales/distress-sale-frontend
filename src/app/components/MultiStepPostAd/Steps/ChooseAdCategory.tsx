import React from 'react'
import StepperControl from '../StepperControl'

const ChooseAdCategory = ({ handleClick, currentStep, steps }) => {
  return (
    <div>ChooseAdCategory
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  )
}

export default ChooseAdCategory