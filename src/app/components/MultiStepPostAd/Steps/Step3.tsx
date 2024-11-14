'use client';
import React, { FC, useEffect, useState } from 'react';
import MyTextField from '../../Fields/MyTextField';
import StepperControl from '../StepperControl';
import { MenuItem } from '@mui/material';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import { toast } from 'react-toastify';

interface Step3Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}

const Step3: FC<Step3Props> = ({ handleClick, currentStep, steps }) => {
  const [baseCategory, setBaseCategory] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(null);
  const [formValues, setFormValues] = useState({});
  const [shortDesc, setShortDesc] = useState<string>('');
  const { isLoading, makeRequest } = useRequest();
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

  const handleGetBaseCat = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: 'GET',
          url: API.getBaseCategory,
        });

        const { message, data } = res.data;
        setBaseCategory(data);
      },
      (error: any) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      }
    );
  };

  useEffect(() => {
    handleGetBaseCat();

    // Load saved selections from localStorage (if any)
    const savedCategory = localStorage.getItem('selectedBaseCategory');
    const savedSubCategory = localStorage.getItem('selectedSubCategory');
    if (savedCategory) {
      const category = JSON.parse(savedCategory);
      setSelectedCategory(category);
      setSubCategories(category.subCategories || []);
    }
    if (savedSubCategory) {
      setSelectedSubCategory(JSON.parse(savedSubCategory));
    }
  }, []);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const category = baseCategory.find((cat) => cat.name === categoryName);
    setSelectedCategory(category);
    setSubCategories(category?.subCategories || []);
    setSelectedSubCategory(null); // Reset subcategory when base category changes

    // Save selected base category to localStorage
    localStorage.setItem('selectedBaseCategory', JSON.stringify(category));
  };

  const handleSubCategoryChange = (event) => {
    const subCategoryName = event.target.value;
    const subCategory = subCategories.find((sub) => sub.name === subCategoryName);
    setSelectedSubCategory(subCategory);

    // Save selected subcategory to localStorage
    localStorage.setItem('selectedSubCategory', JSON.stringify(subCategory));
  };

  // Handle form field change and save to localStorage
  const handleFieldChange = (fieldName, value) => {
    // Update form values state
    const updatedFormValues = {
      ...formValues,
      [fieldName]: value,
    };
    setFormValues(updatedFormValues);

    // Save form values to localStorage
    localStorage.setItem('formValues', JSON.stringify(updatedFormValues));
  };

  return (
    <div className="w-full">
      <h1 className="text-[24px] font-[700] text-[#00134D]">Product Category</h1>

      <div className="flex gap-5">
        <MyTextField
          id="productCategory"
          name="productCategory"
          label="Product Category"
          placeholder=""
          type="text"
          value={selectedCategory?.name || ''}
          onChange={handleCategoryChange}
          select
          required
        >
          {baseCategory.map((category, i) => (
            <MenuItem key={i} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </MyTextField>

        {subCategories.length > 0 && (
          <MyTextField
            id="subCategory"
            name="subCategory"
            label="Subcategory"
            placeholder=""
            type="text"
            value={selectedSubCategory?.name || ''}
            onChange={handleSubCategoryChange}
            select
            required
            fullWidth
          >
            {subCategories.map((subCategory) => (
              <MenuItem key={subCategory._id} value={subCategory.name}>
                {subCategory.name}
              </MenuItem>
            ))}
          </MyTextField>
        )}
      </div>

      <div className="mt-10 w-full">
        <p className="text-[18px] font-[400] text-[#0A0A0B]">Ad Specification</p>
        <div className="mt-5">
          {/* Render Form Fields Based on Selected Subcategory's formData */}
          {selectedSubCategory && selectedSubCategory.formData.length > 0 && (
            <form className='grid w-full grid-cols-3 gap-5'>
              {selectedSubCategory.formData.map((field) => (
                <MyTextField
                  key={field.fieldName}
                  id={field.fieldName}
                  name={field.fieldName}
                  label={field.displayText}
                  placeholder=""
                  type={field.fieldDataType === 'string' ? 'text' : field.fieldDataType}
                  required={field.required}
                  value={formValues[field.fieldName] || ''}
                  onChange={(e) => handleFieldChange(field.fieldName, e.target.value)}
                />
              ))}
            </form>
          )}

          {/* Display message if no form fields are available */}
          {selectedSubCategory && selectedSubCategory.formData.length === 0 && (
            <p>No form fields available for this subcategory.</p>
          )}
        </div>
      </div>

      {/* <div className="mt-10 w-full">
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
      </div> */}

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
