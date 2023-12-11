import React, { FC } from 'react';
import StepperControl from '../StepperControl';
import TextField from '../../Fields/TextField';

interface Step6Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step6: FC<Step6Props> = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold">Contact Details</h2>
        <p className="font-medium text-[#667085]">Provide your contact details</p>
      </div>

      {/* FORM */}
      <div className="max-w-[555px] w-full flex flex-col gap-10">
        <fieldset className="flex flex-col gap-5 w-full ">
          <label htmlFor="name" className="font-medium  ">
            Name
          </label>
          <TextField label="Enter you name" />
        </fieldset>
        <fieldset className="flex flex-col gap-5 w-full ">
          <label htmlFor="name" className="font-medium  ">
            Phone Number
          </label>
          <TextField label="Enter you phone number" />
        </fieldset>
      </div>


      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default Step6;
