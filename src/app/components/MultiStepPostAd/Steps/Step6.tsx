import React, { FC, useEffect, useState } from 'react';
import StepperControl from '../StepperControl';
import TextField from '../../Fields/TextField';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import MyTextField from '../../Fields/MyTextField';

interface Step6Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step6: FC<Step6Props> = ({ handleClick, currentStep, steps }) => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    // Save to localStorage whenever name changes
    localStorage.setItem('name', newName);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Save to localStorage whenever email changes
    localStorage.setItem('email', newEmail);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    // Save to localStorage whenever phone number changes
    localStorage.setItem('phoneNumber', newPhoneNumber);
  };

  // Save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
  };

  useEffect(() => {
    // Load values from localStorage on component mount
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
  }, []);


  


  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className="md:text-2xl text-[5vw] font-bold">Contact Details</h2>
        <p className="font-medium text-[#667085] md:text-[16px] text-[3.5vw] text-center">Provide your contact details</p>
      </div>

      {/* FORM */}
      <form className="md:w-[555px] w-full flex flex-col space-y-12">
        <div className="md:space-y-7 space-y-2">
        <MyTextField
            id='name'
            name='name'
            label='Name'
            placeholder='Enter your name'
            value={name}
            onChange={handleNameChange}
            type='text'
          />
           <MyTextField
            id='email'
            name='email'
            label='Email Address'
            placeholder='Enter your email address'
            value={email}
            onChange={handleEmailChange}
            type='email'
          />
          <MyTextField
            id='phone'
            name='phone'
            label='Phone Number'
            placeholder='Enter your phone number'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type='tel'
          />
        </div>
      </form>


      <StepperControl
        handleClick={() => {
          saveToLocalStorage();
          router.push('/post-ad/safety')
        }}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
};

export default Step6;
