"use client"
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import StepperControl from '../StepperControl';
import { CategoryButton } from './Step2';

interface Step2Props {
  handleClick: () => void;
  currentStep: number;
  steps: any[]; // Replace 'any[]' with the actual type for steps
}


const Step4 = ({ handleClick, currentStep, steps }) => {
  const { isLoading, makeRequest } = useRequest();
  const [altCategory, setAltCategory] = useState<any[]>([]);
  const [subCategory, setSubCategory] = useState<any[]>([]);
  const [selectedAltCategoryId, setSelectedAltCategoryId] = useState<string | null>(null);
  const [selectedAltCategoryName, setSelectedAltCategoryName] = useState<string>('');
  const [selectedOthersCategoryId, setSelectedOthersCategoryId] = useState<string | null>(null);
  const [selectedOthersCategoryName, setSelectedOthersCategoryName] = useState<string>('');
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string | null>(null);
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState<string>('');
  const [storedSectionName, setStoredSectionName] = useState<any>('');

  useEffect(() => {
    const storedAltCategoryId = localStorage.getItem('selectedAltCategoryId');
    const storedAltCategoryName = localStorage.getItem('selectedAltCategoryName');

    if (storedAltCategoryId && storedAltCategoryName) {
      setSelectedAltCategoryId(storedAltCategoryId);
      setSelectedAltCategoryName(storedAltCategoryName);
    }

    // Others Category
    const storedOthersCategoryId = localStorage.getItem('selectedOthersCategoryId');
    const storedOthersCategoryName = localStorage.getItem('selectedOthersCategoryName');

    if (storedOthersCategoryId && storedOthersCategoryName) {
      setSelectedOthersCategoryId(storedOthersCategoryId);
      setSelectedOthersCategoryName(storedOthersCategoryName);
    }
  }, []);

  const handleSelect = (altCategoryId, altCategoryName) => {
    if (altCategoryId !== null) {
      setSelectedAltCategoryId(altCategoryId);
      setSelectedAltCategoryName(altCategoryName);
      localStorage.setItem('selectedAltCategoryId', altCategoryId);
      localStorage.setItem('selectedAltCategoryName', altCategoryName);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };

  const handleOthersSelect = (othersCategoryId, othersCategoryName) => {
    if (othersCategoryId !== null) {
      setSelectedOthersCategoryId(othersCategoryId);
      setSelectedOthersCategoryName(othersCategoryName);
      localStorage.setItem('selectedOthersCategoryId', othersCategoryId);
      localStorage.setItem('selectedOthersCategoryName', othersCategoryName);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };


  const handleSubSelect = (subCategoryId, subCategoryName) => {
    if (subCategoryId !== null) {
      setSelectedSubCategoryId(subCategoryId);
      localStorage.setItem('selectedSubCategoryId', subCategoryId);
      localStorage.setItem('selectedSubCategoryName', subCategoryName);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };

  // Sub Category
  useEffect(() => {
    const storedSubCategoryId = localStorage.getItem('selectedSubCategoryId');
    const storedSubCategoryName = localStorage.getItem('selectedSubCategoryName');
    const storedSectionName = localStorage.getItem('selectedSectionName');
    if (storedSubCategoryId || storedSectionName) {
      setSelectedSubCategoryId(storedSubCategoryId);
      setStoredSectionName(storedSectionName);
    }
  }, []);



  const handleGetSections = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: "GET",
          url: API.sections,
        });

        const { message, data } = res.data;
        setAltCategory(data);
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

  const handleGetSubCat = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: "GET",
          url: API.categories,
        });

        const { message, data } = res.data;
        setSubCategory(data);
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
    handleGetSections();
    handleGetSubCat();
  }, []);

  // Go back to "Property for sale"
  const handleRemoveItem = () => {
    localStorage.removeItem('selectedAltCategoryId');
    localStorage.removeItem('selectedAltCategoryName');
    localStorage.removeItem('selectedSubCategoryId');
    localStorage.removeItem('selectedSubCategoryName');
    setSelectedAltCategoryId(null);
  };


  const propertyForSaleSection = altCategory.find(section => section?.name === 'Property for sale');
  const othersSection = altCategory.find(section => section?.name === 'Others');

  return (
    <div className=" flex flex-col gap-16 ">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className=" text-2xl font-bold">Choose the right category for your Ad</h2>
        <div className="flex items-center space-x-3">
          {storedSectionName === 'Others' ? (
            <p className="font-medium text-[#415EFF]">Others</p>
          ) : (
            <>
              <Breadcrumbs className="" separator={selectedAltCategoryId !== null && '›'} aria-label="breadcrumb">
                {[
                  <p className="font-medium text-[#415EFF] cursor-pointer hover:underline underline-offset-2" onClick={handleRemoveItem}>Property for Sale</p>,
                  <>
                    {selectedAltCategoryId !== null && (
                      <>
                        <p className="font-medium text-[#667085]">{selectedAltCategoryName}</p>
                      </>
                    )}
                  </>,
                ]}
              </Breadcrumbs>
            </>
          )}
        </div>
      </div>

      {storedSectionName === 'Others' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 gap-x-4">
          {othersSection?.categoryIDs?.map((category) => (
            <CategoryButton
              key={category?._id}
              text={category?.name}
              selected={selectedOthersCategoryId === category?._id}
              onClick={() => handleOthersSelect(category?._id, category?.name)}
            />
          ))}
        </div>
      ) : (
        <>
          {selectedAltCategoryId === null ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 gap-x-4">
              {propertyForSaleSection?.categoryIDs?.map((category) => (
                <CategoryButton
                  key={category?._id}
                  text={category?.name}
                  selected={selectedAltCategoryId === category?._id}
                  onClick={() => handleSelect(category?._id, category?.name)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 gap-x-4">
              {(() => {
                switch (selectedAltCategoryName) {
                  case "Residential for Sale":
                    return subCategory
                      ?.filter((subcategory) =>
                        [
                          "Apartment for Sale",
                          "Townhouse for Sale",
                          "Hotel Apartment",
                          "Residential Building",
                          "Residential Villa",
                          "Residential Floor",
                          "Penthouse",
                          "Short Term",
                          "Villa for Sale",
                        ].includes(subcategory?.name)
                      )
                      .map((subcategory) => (
                        <CategoryButton
                          key={subcategory?._id}
                          text={subcategory?.name}
                          selected={selectedSubCategoryId === subcategory?._id}
                          onClick={() => handleSubSelect(subcategory?._id, subcategory?.name)}
                        />
                      ));

                  case "Commercial for Sale":
                    return subCategory
                      ?.filter((subcategory) =>
                        [
                          "Office for Sale",
                          "Shop for Sale",
                          "Warehouse",
                          "Commercial Villa",
                          "Commercial Buildings",
                          "Commercial Floor",
                          "Factory",
                          "Showroom",
                          "Business for Sale",
                        ].includes(subcategory?.name)
                      )
                      .map((subcategory) => (
                        <CategoryButton
                          key={subcategory?._id}
                          text={subcategory?.name}
                          selected={selectedSubCategoryId === subcategory?._id}
                          onClick={() => handleSubSelect(subcategory?._id, subcategory?.name)}
                        />
                      ));

                  // Add more cases as needed for other conditions
                  default:
                    return <p className="text-center w-full">No categories to display</p>;
                }
              })()}
            </div>
          )}
        </>
      )}

      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

export default Step4;
