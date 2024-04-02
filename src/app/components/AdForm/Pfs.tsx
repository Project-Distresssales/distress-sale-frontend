import { MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState, FC, InputHTMLAttributes, ChangeEvent, useEffect } from 'react';
import MyTextField from '../Fields/MyTextField';
import UploadModal from '../Modals/UploadModal';
import DocumentUploadModal from '../Modals/DocumentUploadModal';

interface PfsProps {
  title: string;
  tourUrl: string;
  price: number | any;
  openMarketPrice: number | any;
  closingFee: number | any;
  communityFee: number | any;
  bedroom: number | any;
  bathroom: number | any;
  size: string;
  readyDate: string;
  referenceId: string;
  occupancyStatus: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  handleChange: any;
}

const Pfs: React.FC<PfsProps> = ({
  title,
  tourUrl,
  price,
  openMarketPrice,
  closingFee,
  communityFee,
  bedroom,
  bathroom,
  size,
  readyDate,
  referenceId,
  occupancyStatus,
  location,
  fullDesc,
  handleChange,
}) => {
  const propertyStatus = ['Vacant', 'Occupied'];
  const [isModal, setIsModal] = useState(false);
  const [isDocumentModal, setIsDocumentModal] = useState(false);
  const [documentImages, setDocumentImages] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  const modalHandlerDocument = () => {
    setIsDocumentModal(!isDocumentModal);
  };

  return (
    <div className=" flex flex-col">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <h2 className="md:text-2xl text-[5vw] font-bold">Ad Details</h2>
        <p className="font-medium text-[#667085] md:text-[16px] text-[3.5vw] text-center">
          Provide as much accurate details and pictures as possible, and set the right price!
        </p>
      </div>
      {/* <Breadcrumbs className="" separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs> */}

      <div className="flex flex-col gap-5 mt-7">
        {/* First Row */}
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6  w-full ">
          <div className="w-full">
            <MyTextField
              id="title"
              name="title"
              label="Apartment Information"
              placeholder="Insert Property Title"
              value={title}
              onChange={(e: { target: { value: any } }) => handleChange('title', e.target.value)}
              type="text"
              error={false}
            />
          </div>
          <div className="w-full">
            {/* <p className="font-medium">360 Tour URL</p> */}
            <div className="w-full">
              <MyTextField
                id="url"
                name="url"
                label="360 Tour URL"
                placeholder="Insert a Video URL"
                value={tourUrl}
                onChange={(e: { target: { value: any } }) => handleChange('tourUrl', e.target.value)}
                type="url"
                error={false}
              />
              {/* <p className="text-xs">
                <Link href="#" className="text-[#415EFF] hover:underline">
                  Learn more
                </Link>
                &#160; about our accepted 360 Tour
              </p> */}
            </div>
          </div>
          
        </div>
        {/* Second Row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  w-full">
        <div className="w-full">
            {/* <p className="font-medium">Price</p> */}
            <MyTextField
              id="price"
              name="price"
              label="Price"
              placeholder="What is the Asking Price"
              value={price}
              onChange={(e: { target: { value: number } }) => handleChange('price', e.target.value)}
              type="number"
              error={false}
            />
          </div>
          <div className="w-full flex items-center gap-6">
            {/* <picture className="font-medium">Property Reference ID</picture> */}
            <MyTextField
              id="openMarketPrice"
              name="openMarketPrice"
              label="Open market price"
              placeholder="What is the Open Market Price"
              value={openMarketPrice}
              onChange={(e: { target: { value: any } }) => handleChange('openMarketPrice', e.target.value)}
              type="number"
              error={false}
            />
          </div>
        </div>
      </div>
      {/* Upload Photos */}

      <div className="flex md:flex-row flex-col md:space-x-7 space-y-5 md:space-y-0 justify-center my-16">
        <div
          onClick={modalHandler}
          className="border border-dashed cursor-pointer self-center border-[#415EFF] rounded-md gap-2 text-sm font-medium text-[#415EFF]  py-3 max-w-[403px] relative w-full text-center flex items-center justify-center"
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
          Upload Property Images
        </div>
        <div
          onClick={modalHandlerDocument}
          className="border border-dashed cursor-pointer self-center border-[#415EFF] rounded-md gap-2 text-sm font-medium text-[#415EFF]  py-3 max-w-[403px] relative w-full text-center flex items-center justify-center"
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
          Upload Property Documents
        </div>
      </div>

      {/* Display uploaded images */}
      <div className="grid grid-cols-3 gap-2">
        {urls.map((imageUrl, index) => (
          <img
            className="w-[120px] h-[120px] object-cover"
            key={index}
            src={imageUrl}
            alt={`Uploaded Image ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {/* 4th Row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  w-full">
          <div className="w-full flex items-center gap-6">
            <MyTextField
              id="bathroom"
              name="bathroom"
              label="Bathroom"
              placeholder="How many Bathrooms are available"
              value={bathroom}
              onChange={(e: { target: { value: number } }) => handleChange('bathroom', e.target.value)}
              type="number"
              error={false}
            />
          </div>
          <div className="w-full flex items-center gap-6">
            <MyTextField
              id="bedroom"
              name="bedroom"
              label="Bedroom"
              placeholder="How many Bedrooms are available"
              value={bedroom}
              onChange={(e: { target: { value: number } }) => handleChange('bedroom', e.target.value)}
              type="number"
              error={false}
            />
          </div>
        </div>

        {/* 5th Row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  w-full">
        <div className="w-full flex items-center gap-6">
            <MyTextField
              id="closingFee"
              name="closingFee"
              label="Closing Fee"
              placeholder="What's the Closing Fee?"
              value={closingFee}
              onChange={(e: { target: { value: number } }) => handleChange('closingFee', e.target.value)}
              type="number"
              error={false}
            />
          </div>
          <div className="w-full flex items-center gap-6">
            {/* <p className="font-medium">Community Fee</p> */}
            <MyTextField
              id="communityFee"
              name="communityFee"
              label="Community Fee"
              placeholder="What is the Community Fee?"
              value={communityFee}
              onChange={(e: { target: { value: any } }) => handleChange('communityFee', e.target.value)}
              type="text"
              error={false}
            />
          </div>
        </div>

        {/* 6th Row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  w-full">
        <div className="w-full">
            <MyTextField
              id="size"
              name="size"
              label="Size"
              placeholder="What is the Size of the property in (Sqft)?"
              value={size}
              onChange={(e: { target: { value: any } }) => handleChange('size', e.target.value)}
              type="text"
              error={false}
            />
          </div>
          <div className="w-full flex items-center gap-6">
            <MyTextField
              id="readyOn"
              name="readyOn"
              label="Ready On"
              placeholder=""
              value={readyDate}
              onChange={(e: { target: { value: any } }) => handleChange('readyDate', e.target.value)}
              type="date"
              error={false}
              // min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* 7th Row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  w-full">
          <div className="w-full flex items-center gap-6">
            {/* <p className="font-medium">Occupation Status</p> */}
            <MyTextField
              id="occupancyStatus"
              name="occupancyStatus"
              label="Occupation Status"
              placeholder="Is this Property Vacant or Occupied?"
              type="text"
              error={false}
              value={occupancyStatus}
              onChange={(e: { target: { value: any } }) => handleChange('occupancyStatus', e.target.value)}
              select
            >
              {propertyStatus.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </MyTextField>
          </div>
          <div className="w-full flex items-center gap-6">
            {/* <p className="font-medium">Property Location</p> */}
            <MyTextField
              id="location"
              name="location"
              label="Property Location"
              placeholder="Where is your property located at?"
              value={location}
              onChange={(e: { target: { value: any } }) => handleChange('location', e.target.value)}
              type="text"
              error={false}
            />
          </div>
        </div>

        {/* 8th Row Text-Area */}
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full flex items-center gap-6">
            {/* <p className="font-medium">Description</p> */}
            <MyTextField
              id="fullDesc"
              name="fullDesc"
              label="Description"
              placeholder="Describe your property in full"
              value={fullDesc}
              onChange={(e: { target: { value: any } }) => handleChange('fullDesc', e.target.value)}
              type="text"
              error={false}
              multiple
            />
          </div>
        </div>
      </div>

      <UploadModal showmodal={isModal} setIsModal={setIsModal} />
      <DocumentUploadModal showmodal={isDocumentModal} setIsModal={setIsDocumentModal} />

      {/* Checkbox features */}
      {/* <div>
      <CheckboxList features={features} />
    </div> */}
    </div>
  );
};

export default Pfs;
