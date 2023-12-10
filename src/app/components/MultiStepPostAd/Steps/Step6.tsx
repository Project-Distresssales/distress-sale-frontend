import React from 'react'
import StepperControl from '../StepperControl'

const Step6 = ({ handleClick, currentStep, steps }) => {
  return (
    <div>Step6
              <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />

    </div>
  )
}

export default Step6