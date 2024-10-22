'use client';
import React, { FC, useEffect, useState } from 'react';
import MyTextField from '../../Fields/MyTextField';
import StepperControl from '../StepperControl';
import { MenuItem } from '@mui/material';

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

  const productCategory = ['Beach Towels'];


  const popularTags = [
    {
      title: 'Game',
      active: true,
    },
    {
      title: 'iPhone',
      active: false,
    },
    {
      title: 'TV',
      active: false,
    },
    {
      title: 'Asus Laptops',
      active: false,
    },
    {
      title: 'Macbook',
      active: false,
    },
    {
      title: 'SSD',
      active: false,
    },
    {
      title: 'Graphics Card',
      active: false,
    },
    {
      title: 'Microwave',
      active: false,
    },
    {
      title: 'Smart TV',
      active: false,
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-[24px] font-[700] text-[#00134D]">Product Category</h1>

      <div>
        <MyTextField
          id="productCategory"
          name="productCategory"
          label="Product Category"
          placeholder=""
          type="text"
          value={''}
          onChange={undefined}
          select
          required
        >
          {productCategory.map((category, i) => (
            <MenuItem key={i} value={category}>
              {category}
            </MenuItem>
          ))}
        </MyTextField>
      </div>

      <div className="mt-10 w-full">
        <p className="text-[18px] font-[400] text-[#0A0A0B]">Ad Specification</p>
        <div className="mt-2 grid w-full grid-cols-3 gap-x-5 gap-y-5">
          <MyTextField
            id="material"
            name="material"
            label="Material"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="ProductionTechnique"
            name="ProductionTechnique"
            label="Production Technique"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="productCategory"
            name="productCategory"
            label="Product Category"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
        </div>
      </div>

      <div className="mt-10 w-full">
        <p className="text-[18px] font-[400] text-[#0A0A0B]">Additional Information</p>
        <div className="mt-2 grid w-full grid-cols-3 gap-x-5 gap-y-5">
          <MyTextField
            id="title"
            name="title"
            label="Title"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
            required
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="landlordName"
            name="landlordName"
            label="Landlord Name"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
          />
          <MyTextField
            id="propertyStatus"
            name="propertyStatus"
            label="Property Status"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
            select
          >
            {productCategory.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            id="buildingName"
            name="building Name"
            label="Building Name"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
          />
          <MyTextField id="deed" name="deed" label="Deed" placeholder="" type="text" value={''} onChange={undefined} />
          <MyTextField
            id="neighborhood"
            name="neighborhood"
            label="Neighborhood"
            placeholder=""
            type="text"
            value={''}
            onChange={undefined}
          />
        </div>
      </div>

      <div className="mt-10 w-full">
        <p className="text-[18px] font-[400] text-[#0A0A0B]">Product Tags</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {popularTags.map((item, i) => (
            <div
              key={i}
              className="px-[8px] py-[4px] cursor-pointer rounded-full flex justify-center items-center border bg-slate-50"
            >
              <p className="leading-none text-[12px] font-[400]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 items-center justify-center mt-16">
        {/* <MyTextField
          id="description"
          name="description"
          label=""
          placeholder="e.g 10 Bedroom available in Dubai"
          value={shortDesc}
          onChange={handleDescriptionChange}
          maxLength={50}
          type="text"
          error={false}
        /> */}
        {/* <div className="md:text-sm text-[3.5vw] text-gray-500">{50 - shortDesc.length} characters remaining</div> */}
        {currentStep !== steps.length && (
          <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
        )}
      </div>
    </div>
  );
};

export default Step3;
