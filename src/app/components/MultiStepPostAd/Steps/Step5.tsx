import React, { useState, FC, InputHTMLAttributes } from 'react';
import StepperControl from '../StepperControl';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

const features = [
  { id: 1, label: 'Security' },
  { id: 2, label: 'Study' },
  { id: 3, label: 'Gym' },
  { id: 4, label: 'Spa' },
  { id: 5, label: 'Balcony' },
  { id: 6, label: 'Built in Wardrobes' },
  { id: 7, label: 'Walk-in Closet' },
  { id: 8, label: 'Barbecue Area' },
  { id: 9, label: 'Garden' },
  { id: 10, label: 'Laundry Room' },
  { id: 11, label: 'CCTV Security' },
  { id: 12, label: 'Kids Play Area' },
  { id: 13, label: 'View of Landmark' },
  { id: 14, label: 'Lobby' },
  { id: 15, label: 'Double Glazed Windows' },
  { id: 16, label: 'Service Elevators' },
  { id: 17, label: 'Electricity Backup' },
  { id: 18, label: 'Jacuzzi' },
  { id: 19, label: 'Reception/Waiting Room' },
  { id: 20, label: 'Covered Parking' },
  { id: 21, label: 'Study' },
];

interface Step5Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step5: FC<Step5Props> = ({ handleClick, currentStep, steps }) => {
  const breadcrumbs = [
    <Link className="hover:underline text-[#415EFF] " key="1" color="inherit" href="#">
      Property for Sale
    </Link>,
    <Link className="hover:underline text-[#415EFF] " key="2" color="inherit" href="#">
      Residential for Sale
    </Link>,
    <p className=" font-medium text-black " key="3">
      Apartment for Sale
    </p>,
  ];
  return (
    <div className=" flex flex-col gap-16">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold">Ad Details</h2>
        <p className="font-medium text-[#667085] ">
          {' '}
          Provide as much accurate details and pictures as possible, and set the right price!
        </p>
      </div>
      <Breadcrumbs className="" separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <div className="flex flex-col gap-6">
        {/* First Row */}
        <div className=" grid grid-cols-2 gap-6  w-full ">
          <fieldset className="w-full flex items-center gap-6">
            <label className="font-medium whitespace-nowrap w-[169px] ">Apartment Information</label>
            <TextField label="Title" />
          </fieldset>
          <fieldset className="w-full justify-end flex items-center gap-6">
            <label className="font-medium whitespace-nowrap w-[114px] text-right ">Price</label>
            <TextField label="What is the Asking Price" />
          </fieldset>
        </div>
        {/* Second Row */}
        <div className=" grid grid-cols-2 gap-6  w-full">
          <fieldset className="w-full flex items-center gap-6">
            <div className="flex flex-col gap-4">
              <label className="font-medium whitespace-nowrap !w-[169px] ">360 Tour URL</label>
              <div className="text-white">.</div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <TextField inputType="url" label="Insert URL" />
              <p className="text-xs">
                <Link href="#" className="text-[#415EFF] hover:underline">
                  Learn more
                </Link>
                &#160; about our accepted 360 Tour
              </p>
            </div>
          </fieldset>
          <fieldset className="w-full justify-end flex items-center gap-6">
            <label className="font-medium whitespace-nowrap w-[114px] text-right ">Size</label>
            <TextField label="What is the Size of the apartment?" />
          </fieldset>
        </div>
      </div>
      {/* Upload Photos */}
      <label
        className=" border cursor-pointer self-center border-[#415EFF] rounded-md gap-2 text-sm font-medium text-[#415EFF]  py-3 max-w-[403px] relative w-full text-center flex items-center justify-center z-20 "
        htmlFor="image_uploads"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path
            d="M9.05447 11.833C10.389 11.833 11.4708 10.7137 11.4708 9.33301C11.4708 7.9523 10.389 6.83301 9.05447 6.83301C7.71999 6.83301 6.63818 7.9523 6.63818 9.33301C6.63818 10.7137 7.71999 11.833 9.05447 11.833Z"
            stroke="#415EFF"
          />
          <path
            d="M7.26463 16H10.844C13.3577 16 14.615 16 15.5179 15.3875C15.9075 15.1234 16.243 14.7824 16.5053 14.3842C17.1086 13.4675 17.1086 12.19 17.1086 9.63671C17.1086 7.08254 17.1086 5.80587 16.5053 4.88921C16.243 4.49096 15.9075 4.15004 15.5179 3.88587C14.938 3.49171 14.2115 3.35087 13.0992 3.30087C12.5684 3.30087 12.1117 2.89254 12.0078 2.36337C11.9284 1.97576 11.7221 1.6284 11.4238 1.38C11.1254 1.13159 10.7533 0.997379 10.3704 1.00004H7.73823C6.94246 1.00004 6.25704 1.57087 6.10079 2.36337C5.99689 2.89254 5.54021 3.30087 5.00943 3.30087C3.89794 3.35087 3.17144 3.49254 2.59072 3.88587C2.20139 4.15009 1.86614 4.49102 1.60407 4.88921C1 5.80587 1 7.08254 1 9.63671C1 12.19 1 13.4667 1.60327 14.3842C1.86423 14.7809 2.19929 15.1217 2.59072 15.3875C3.49361 16 4.75089 16 7.26463 16Z"
            stroke="#415EFF"
            strokeWidth="1.25"
          />
          <path d="M14.6854 6.83301H13.8867" stroke="#415EFF" stroke-width="1.25" stroke-linecap="round" />
        </svg>
        Add Gallery
        <input
          type="file"
          id="image_uploads"
          className=" absolute cursor-pointer -z-0 opacity-0 "
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          multiple
        />{' '}
      </label>

      {/* 4th Row */}
      <div className=" grid grid-cols-2 gap-6  w-full ">
        <fieldset className="w-full flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[169px] ">Closing Fee</label>
          <TextField label="What's the Closing Fee?" />
        </fieldset>
        <fieldset className="w-full justify-end flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[114px] text-right ">Bedroom</label>
          <TextField label="How many Bedrooms are available" />
        </fieldset>
      </div>

      {/* 5th Row */}
      <div className=" grid grid-cols-2 gap-6  w-full ">
        <fieldset className="w-full flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[169px]">Bathroom</label>
          <TextField label="How many Bathrooms are available" />
        </fieldset>
        <fieldset className="w-full justify-end flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[114px] text-right ">Ready By</label>
          <input
            type="date"
            name="readyBy"
            id="readyBy"
            className="max-w-[403px] w-full appearance-none rounded-md border border-[#EAECF0] px-5 py-3 text-sm focus:border-distressBlue focus:outline-none focus:ring-0"
            min={new Date().toISOString().split('T')[0]}
          />
        </fieldset>
      </div>

      {/* 6th Row */}
      <div className=" grid grid-cols-2 gap-6  w-full ">
        <fieldset className="w-full flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[169px] ">Property Reference ID</label>
          <TextField label="Insert Reference ID" />
        </fieldset>
        <fieldset className="w-full justify-end flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[114px] text-right">Community Fee</label>
          <TextField label="What is the Community Fee?" />
        </fieldset>
      </div>

      {/* 7th Row */}
      <div className=" grid grid-cols-2 gap-6  w-full ">
        <fieldset className="w-full flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[169px] ">Occupation Status</label>
          <TextField label="Is this Property Vacant or Occupied?" />
        </fieldset>
      </div>

      {/* 8th Row Text-Area */}
      <div className="flex flex-col gap-6 w-full">
        <fieldset className="w-full flex items-center gap-6">
          <label className="font-medium whitespace-nowrap w-[169px] mr-6 opacity-0">Description</label>
          <textarea
            className=" min-h-[295px] resize-none w-full appearance-none rounded-md border border-[#EAECF0] px-5 py-3 text-sm focus:border-distressBlue  focus:outline-none focus:ring-0"
            placeholder="Describe your property"
          />
        </fieldset>
      </div>

      {/* Checkbox features */}
      <div>
        <CheckboxList features={features} />
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType?: 'text' | 'password' | 'email' | 'url'; // Added inputType prop
}

export const TextField: FC<TextFieldProps> = ({ label, inputType = 'text', ...inputProps }) => {
  return (
    <input
      type={inputType}
      className="max-w-[403px] w-full appearance-none rounded-md border border-[#EAECF0] px-5 py-3 text-sm focus:border-distressBlue focus:outline-none focus:ring-0"
      placeholder={`${label}`}
      {...inputProps}
    />
  );
};

interface Checkbox {
  id: number;
  label: string;
}

interface CheckboxListProps {
  features: Checkbox[];
}

const CheckboxList: FC<CheckboxListProps> = ({ features }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedFeatures.includes(id)) {
      // If the checkbox is already selected, remove it from the array
      setSelectedFeatures((prevSelected) => prevSelected.filter((feature) => feature !== id));
    } else {
      // If the checkbox is not selected, add it to the array
      setSelectedFeatures((prevSelected) => [...prevSelected, id]);
    }
  };

  return (
    <div className="w-full flex flex-row ">
      <label className="font-medium whitespace-nowrap w-[169px] mr-6 opacity-0">Description</label>
      <div className='grid grid-cols-5 gap-5  ' >
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4">
            <input
              type="checkbox"
              id={`feature-${feature.id}`}
              checked={selectedFeatures.includes(feature.id)}
              onChange={() => handleCheckboxChange(feature.id)}
            />
            <label htmlFor={`feature-${feature.id}`}>{feature.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step5;
