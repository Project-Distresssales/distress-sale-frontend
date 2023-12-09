import React from 'react'
import StepperControl from '../StepperControl'

const ContactDetails = ({ handleClick, currentStep, steps }) => {
  return (
    <div>ContactDetails
              <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />

    </div>
  )
}

export default ContactDetails