"use client"
import React, { FC, useEffect, useState } from 'react';
import MyTextField from '../../Fields/MyTextField';
import StepperControl from '../StepperControl';

interface Step3Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step3: FC<Step3Props> = ({ handleClick, currentStep, steps }) => {
  const [shortDesc, setShortDesc] = useState<string>('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 50) {
      setShortDesc(inputValue);
    }
  };

  // Effect to save shortDesc to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shortDesc', shortDesc);
  }, [shortDesc]);

  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold">Describe your Ad</h2>
        <p className="font-medium text-[#667085]">Make your description short, informative and attractive</p>
      </div>
      <div className="w-[500px] flex flex-col gap-8 items-center justify-center ">
        <MyTextField
          id='description'
          name='description'
          label=''
          placeholder='e.g 10 Bedroom available in Dubai'
          value={shortDesc}
          onChange={handleDescriptionChange}
          maxLength={50}
          type='text'
          error={false}
        />
        <div className="text-sm text-gray-500">
          {50 - shortDesc.length} characters remaining
        </div>
        {currentStep !== steps.length && (
          <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
        )}
      </div>
    </div>
  );
};

export default Step3;
