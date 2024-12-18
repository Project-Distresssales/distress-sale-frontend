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
  location: string;
  shortDesc: string;
  fullDesc: string;
  handleChange: any;
}

const Pfs: React.FC<any> = ({
  title,
  tourUrl,
  price,
  location,
  fullDesc,
  shortDesc,
  handleChange,
  currencyOptions,
  currency,
  amount,
  marketAmount,
  convertedAmount,
  dropdownOpen,
  setDropdownOpen,
  handleCurrencyChange,
  handleAmountChange,
  convertAmount,
  handleMarketAmountChange,
  convertedMarketAmount,
}) => {
  const propertyStatus = ['Vacant', 'Occupied'];
  const [isModal, setIsModal] = useState(false);
  const [isDocumentModal, setIsDocumentModal] = useState(false);
  const [documentImages, setDocumentImages] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  const modalHandlerDocument = () => {
    setIsDocumentModal(!isDocumentModal);
  };

  const [urls, setUrls] = useState([]);
  const [documentUrls, setDocumentUrls] = useState<any>([]);

  // Load URLs from localStorage when component mounts
  useEffect(() => {
    const updateUrls = () => {
      const savedUrls = localStorage.getItem('uploadedImageUrls');
      const savedDocumentUrls = localStorage.getItem('uploadedDocumentNames');
      
      if (savedUrls) setUrls(JSON.parse(savedUrls) || []);
      if (savedDocumentUrls) setDocumentUrls(JSON.parse(savedDocumentUrls) || []);
    };
  
    const intervalId = setInterval(updateUrls, 2000);
  
    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className=" flex flex-col mb-16">
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5 mb-4">
        <MyTextField
          id="title"
          name="title"
          label="Product Name"
          placeholder="Enter product name"
          value={title}
          onChange={handleChange}
          type="text"
          error={false}
        />
                <MyTextField
          id="location"
          name="location"
          label="Product Location"
          placeholder="Enter product location"
          value={location}
          onChange={handleChange}
          type="text"
          error={false}
        />
        <div>
          <h3 className="text-[3.5vw] sm:text-[14px] mb-[5px] font-[400] text-[#0A0A0B] leading-tight">
            <span className="capitalize">Price</span>
          </h3>
          <div className="flex items-center border border-[#E3E3E3] rounded-[8px] p-2">
            <div className="relative">
              <div  className="bg-gray-200 px-3 py-1 rounded-l-md">
                AED
              </div>
              {dropdownOpen && (
                <div className="absolute z-10 left-0 mt-1 bg-white border rounded shadow-lg">
                  {currencyOptions.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => handleCurrencyChange(curr)}
                      className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                    >
                      {curr.code}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="flex-1 px-3 py-2 outline-none"
              placeholder="Enter amount"
            />
            <span className="ml-3">
              {convertedAmount}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-[3.5vw] sm:text-[14px] mb-[5px] font-[400] text-[#0A0A0B] leading-tight">
            <span className="capitalize">Open Market Price</span>
          </h3>
          <div className="flex items-center border border-[#E3E3E3] rounded-[8px] p-2">
            <div className="relative">
            <div  className="bg-gray-200 px-3 py-1 rounded-l-md">
                AED
              </div>
              {dropdownOpen && (
                <div className="absolute z-10 left-0 mt-1 bg-white border rounded shadow-lg">
                  {currencyOptions.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => handleCurrencyChange(curr)}
                      className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                    >
                      {curr.code}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              value={marketAmount}
              onChange={handleMarketAmountChange}
              className="flex-1 px-3 py-2 outline-none"
              placeholder="Enter amount"
            />
            <span className="ml-3">
              {convertedMarketAmount}
            </span>
          </div>
        </div>

        <MyTextField
          id="tourUrl"
          name="tourUrl"
          label="Video url / 360 Tour url"
          placeholder="Insert a video URL"
          value={tourUrl}
          onChange={handleChange}
          type="text"
          error={false}
        />
        <MyTextField
          id="shortDesc"
          name="shortDesc"
          label="Product Short Description"
          placeholder="Enter product short description"
          value={shortDesc}
          onChange={handleChange}
          type="text"
          error={false}
          maxLength={50}
        />

        {/* Product Image */}
        <div>
          <div onClick={modalHandler} className="">
            <h3 className="text-[3.5vw] sm:text-[14px] font-[400] mb-[3px] text-[#0A0A0B]">Product Images</h3>
            <div className=" rounded-[12px] w-full border border-dashed h-[150px] border-[#5A5555] bg-[#FAFAFA] flex justify-center items-center flex-col">
              <p>Browse Or Desktop</p>
            </div>
          </div>

          {/* Display uploaded images */}
          <div className="flex flex-wrap gap-2 mx-auto mt-2">
            {urls.map((url) => (
              <div className="relative" key={url}>
                <img className="w-[70px] h-[70px] rounded-[8px] object-cover" src={url} alt={`Uploaded Image`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Document */}
        <div>
          <div onClick={modalHandlerDocument} className="">
            <h3 className="text-[3.5vw] sm:text-[14px] font-[400] mb-[3px] text-[#0A0A0B]">Product Documents</h3>
            <div className=" rounded-[12px] w-full border border-dashed h-[150px] border-[#5A5555] bg-[#FAFAFA] flex justify-center items-center flex-col">
              <p>Browse Or Desktop</p>
            </div>
          </div>

          {/* Display uploaded doc */}
          <div className="flex flex-wrap gap-2 mx-auto mt-2">
            {documentUrls.map((url, i) => (
              <div key={i} className='border rounded-full p-2 flex justify-center items-center'>
                <p className='leading-none font-[500] text-[14px]'>{url}</p>
              </div>
              // <div className="relative" key={url}>
              //   <img className="w-[70px] h-[70px] rounded-[12px] object-cover" src={url} alt={`Uploaded Doc`} />
              // </div>
            ))}
          </div>
        </div>
      </div>
      <MyTextField
          id="fullDesc"
          name="fullDesc"
          label="Product Description"
          placeholder="Enter product location"
          value={fullDesc}
          onChange={handleChange}
          type="text"
          error={false}
          multiline
          rows={4}
        />

      {/* <div className="mt-5">
        <MyTextField
          id="fullDesc"
          name="fullDesc"
          label="Product Description"
          placeholder="Enter product location"
          value={fullDesc}
          onChange={(e: { target: { value: any } }) => handleChange('fullDesc', e.target.value)}
          type="text"
          error={false}
          multiline
          rows={4}
        />
      </div> */}

      {/* Upload Photos */}
      {/* <div className="flex md:flex-row flex-col md:space-x-7 space-y-5 md:space-y-0 justify-center my-16">
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
      </div> */}

      {/* Display uploaded images */}
      {/* <div className="grid grid-cols-3 gap-2">
        {urls.map((imageUrl, index) => (
          <img
            className="w-[120px] h-[120px] object-cover"
            key={index}
            src={imageUrl}
            alt={`Uploaded Image ${index + 1}`}
          />
        ))}
      </div> */}

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
