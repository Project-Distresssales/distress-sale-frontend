"use client"

import MobileNavbar from '@/app/components/Navbar/MovileNavbar';
import Navbar from '@/app/components/Navbar/Navbar';
import SubNavbar from '@/app/components/Navbar/SubNavbar';
import API from '@/constants/api.constant';
import { currencyFormatter, sliceText } from '@/helpers';
import useAppTheme from '@/hooks/theme.hook';
import useRequest from '@/services/request/request.service';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FadeIn } from '@/app/components/Transitions/Transitions';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import VerifiedBadge from '@/app/components/VerifiedBadge/VerifiedBadge';
import ShareProduct from '@/app/components/ShareProduct/ShareProduct';
import { InfinitySpin, RotatingTriangles } from 'react-loader-spinner';

export default function ProductPage() {
  const { id } = useParams();
  const { isMobile } = useAppTheme();
  const [product, setProduct] = useState<any>([]);

  const { isLoading, makeRequest } = useRequest();

  const [openShare, setOpenShare] = useState(false);
  const handleShareOpen = () => {
    setOpenShare(!openShare);
  };

  const handleShareClose = () => {
    setOpenShare(false);
  };

  useEffect(() => {
    id && getProductDetails();
  }, [id]);

  const getProductDetails = async () => {
    try {
      if (!id) return; // Check if id is set

      const res = await makeRequest({
        method: 'GET',
        url: API.getProduct + `/${id}`,
      });

      const { data }: any = res.data;
      console.log(data, 'DDD');

      setProduct(data);
    } catch (error: any) {
      const res: any = error?.response;
    }
  };


// Image Thumbnail
const [selectedImage, setSelectedImage] = useState<string>('');

// Set the selected image when the component mounts
useEffect(() => {
  if (product && product.imageURLs && product.imageURLs.length > 0) {
    setSelectedImage(product.imageURLs[0]);
  }
}, [product]);

const handleThumbnailClick = (imageURL: string) => {
  setSelectedImage(imageURL);
};

  // Contact
  const ownersContact = [
    {
      icon: Assets.call,
      title: 'Call',
      link: `tel:${product?.ownerContact?.phoneNumber}`,
      bgColor: '#D6DDFF',
      textColor: '#415EFF'
    },
    {
      icon: Assets.sms,
      title: 'Email',
      link: `mailto:${product?.ownerContact?.email}`,
      bgColor: '#FFDDCF',
      textColor: '#7A2E0E'
    },
    {
      icon: Assets.whatsapp,
      title: 'Whatsapp',
      link: `https://wa.me/${product?.ownerContact?.whatsAppNumber}`,
      bgColor: '#EAFFF2',
      textColor: ''
    },
  ];

  



  return (
    <FadeIn>
      {!isMobile ? (
        <>
          <Navbar />
          <SubNavbar />
        </>
      ) : (
        <>
          <MobileNavbar />
        </>
      )}
      
      {isLoading ? (
        <div className='w-full h-[500px] flex justify-center items-center'>
          {/* @ts-ignore */}
  <InfinitySpin
  visible={true}
  width="200"
  color="#6F85FF"
  ariaLabel="infinity-spin-loading"
  />
        </div>
      ) : (
        <>
        <div className="bg-white flex flex-col items-stretch pb-12 md:px-8 w-full">
        <div className="bg-gray-200 min-h-[1px] w-full" />

        <div className="flex w-full items-center justify-between px-7 mb-5 mt-7">
          <h1 className="text-distressBlue text-[22px] font-[700] leading-tight">{product && product?.name}</h1>
          <div className="text-gray-900 text-sm font-[500] leading-tight whitespace-nowrap">
            Date Uploaded: {product && product.createdAt ? format(new Date(product.createdAt), "do MMMM',' yyyy") : ''}
          </div>
        </div>


        <div className="w-full mb-32 md:max-w-full max-md:mb-10 flex">
          <div className="flex flex-col md:w-full">
            <div className="flex grow flex-col px-5 max-md:max-w-full max-md:mt-8">
              <div className="flex-col overflow-hidden self-stretch relative rounded-[12px] flex h-[520px] w-full pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:pr-5 relative">
                <div className="top-5 left-5 absolute z-10">
                  <VerifiedBadge text={product && product?.verified ? "Verified" : "Unverified"} icon={Assets.verify} isVerified={product?.verified} />
                </div>
                <div className="top-5 right-5 absolute z-10">
                  <ShareProduct 
                  handleShareOpen={handleShareOpen}
                  handleShareClose={handleShareClose}
                  openShare={openShare}
                  title='Share'
                  icon={Assets.share} 
                  />
                </div>
                <img
                  loading="lazy"
                  src={selectedImage}
                  className="absolute h-full w-full object-cover object-center inset-0 rounded-[12px]"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className='flex space-x-2 mt-2'>
                  {product && product?.imageURLs && product?.imageURLs.map((imageURL, index) => (
                    <img
                      key={index}
                      src={imageURL}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[100px] h-[100px] rounded-[12px] border-2 border-distressBlue"
                      onClick={() => handleThumbnailClick(imageURL)}
                    />
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex space-x-3">
                  {ownersContact.map((item, i) => (
                    <button key={i} className={`bg-[${item.bgColor}] rounded-[8px] py-3 flex items-center justify-center space-x-2.5 px-7`}
                      onClick={() => {
                        window.location.href = item.link;
                      }}
                    >
                      <Image src={item.icon} alt="" width={20} height={20} />
                      <span className={`text-[${item.textColor}] font-[500] text-[14px]`}>{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* <div className="flex items-stretch gap-2 mt-10">
                <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6b21a6678bd5cd4c938099bbc37cdae7bc50d739381209178d8ed3ca46562f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Favorites
                  </div>
                </div>
                <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/512ec4e2c1727e09c7f744a324918a09d06bff19a21a07f26cebe2ccbe80ef6e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Share
                  </div>
                </div>
              </div> */}

              {/* <div className="self-stretch mt-10 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-gray-900 text-lg font-bold leading-8 tracking-normal self-stretch whitespace-nowrap max-md:max-w-full">
                          AED 3,190,000
                        </div>
                        <div className="text-slate-600 text-lg font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                          Shams Abu Dhabi, Al Reem Island
                        </div>
                        <div className="items-center flex gap-4 mt-4 self-start max-md:justify-center">
                          <div className="items-stretch self-stretch flex justify-between gap-4">
                            <div className="items-center flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcad89411b9c2f7003b73839163a073326e3c9ceabc2fedcaa1d3c0ad31a672?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                                className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                              />
                              <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                                6 Beds
                              </div>
                            </div>
                            <div className="items-center flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a18752a8748e4d53730d872469c4a7a8e5628c733fd6fe8a4ed2a4752ee58c60?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                                className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                              />
                              <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                                6 Baths
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-200 w-px shrink-0 h-5 my-auto" />
                          <div className="self-stretch flex justify-between gap-2.5 items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5048073fa31236be306b7b79a8243425d2368bacc0bbc4d7a153c97b1319163d?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                              {' '}
                              4.896 sqft
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-900 text-lg font-medium leading-8 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                          Luxurious Standalone Villa - Single Row & Spacious Villa with Pool
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex items-stretch gap-2 max-md:mt-10">
                        <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6b21a6678bd5cd4c938099bbc37cdae7bc50d739381209178d8ed3ca46562f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            Favorites
                          </div>
                        </div>
                        <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/512ec4e2c1727e09c7f744a324918a09d06bff19a21a07f26cebe2ccbe80ef6e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            Share
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Pricing and Details */}
                <div className='mt-7'>
                <h1 className="text-[#415EFF] md:text-[25px] text-[4.7vw] font-[700]">
              {currencyFormatter(product?.price, 'AED')}
            </h1>
            <div className="flex items-center space-x-2 text-[#344054] md:text-[14px] text-[3vw] mt-2 font-[500]">
              <p>4 Beds</p>
              <span>•</span>
              <p>5 Baths</p>
              <span>•</span>
              <p>5 Sqft</p>
            </div>
            <p className='text-[#344054] mt-2 text-sm font-[500] leading-tight whitespace-nowrap'>{product?.location}</p>
                </div>

<div className='md:w-[600px] mt-10'>
<p className="text-gray-900 text-justify md:text-base text-[3.5vw] leading-7 tracking-normal md:max-w-full">
                {product?.fullDescription}
              </p>

              <div className="bg-gray-200 self-stretch shrink-0 h-px my-7 max-md:max-w-full" />

              {/* Property Info */}
              <div className="text-gray-900 md:text-3xl text-[5.5vw] font-bold  whitespace-nowrap mt-14 max-md:max-w-full md:mt-10">
                Property Information
              </div>
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Type:
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    {product?.adType}
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Furnishing:
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    Unfurnished
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Purpose:
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    Villa
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    Verified On:
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5">
                    <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal grow whitespace-nowrap">
                      {product && product.createdAt ? format(new Date(product.createdAt), "do MMMM',' yyyy") : ''}
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46239f463fc43dc87ac2291a642ba9182e9706a9c740ffc40d993915c9c0e9a8?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-2 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Reference No.
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    {sliceText(20, "Distress Sale - LUK-N5-9YH-99.0-MIL")}
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    Average Rent:
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 px-0.5">
                    <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal grow whitespace-nowrap">
                      Not Available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46239f463fc43dc87ac2291a642ba9182e9706a9c740ffc40d993915c9c0e9a8?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Completion:
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    Ready
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 rounded-md">
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                    Added On:
                  </div>
                  <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                    {product && product.createdAt ? format(new Date(product.createdAt), "do MMMM',' yyyy") : ''}
                  </div>
                </div>
              </div>

                        
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-10 max-md:max-w-full" />
             
             {product && product?.amenities?.length > 0 && (
              <>
              <div className="text-gray-900 md:text-3xl text-[5.5vw] font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Features / Amenities
              </div>
              <div className="md:flex grid grid-cols-2 gap-3.5 mt-6 md:max-w-full mmd:flex-wrap md:justify-center">
                {product?.amenities?.map((item, i) => {
                  <div key={i} className="justify-center items-center bg-gray-200 flex flex-col w-full h-[150px] px-10 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce7c4f2a10ac0b2a2b9c3352e912febf62ad74177b7514213853d5922526b9c?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-1.5"
                  />
                  <div className="text-gray-900 md:text-base text-[3.5vw] font-medium leading-7">
                    {item?.name}
                  </div>
                </div>
                })}
              </div>
              </>
             )}
</div>
              
             
              

              {/* <div className="text-gray-900 md:text-3xl text-[5vw] font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Market Intelligence Insight
              </div>
              <div className="text-slate-600 md:text-base text-[3.5vw] font-medium leading-7 tracking-normal self-stretch mt-6 max-md:max-w-full">
                The open market price of the villa is calculated based on the current real estate market trends, recent
                sales data of similar properties in the area, and various factors that influence property prices. Please
                note that the exact open market price may vary, and it's recommended to conduct further research for
                accurate pricing.
              </div>{' '}
              <div className="text-gray-900 md:text-lg text-[4.5vw] font-bold leading-7 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Market Insights for the Villa Listing
              </div>{' '}
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-4 pr-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-slate-600 md:text-base text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                  <ul>
                    <li>Distress Sale Price: AED 3,190,000 </li>
                  </ul>
                </div>{' '}
                <div className="text-slate-600 md:text-base text-[3.5vw] font-medium leading-7 tracking-normal grow shrink basis-auto">
                  <ul>
                    <li>Average Price: AED 3,750,000</li>
                  </ul>
                </div>{' '}
                <div className="text-slate-600 md:text-base text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                  <ul>
                    <li>Estimated Market Price: AED 3,750,000</li>
                  </ul>
                </div>
              </div>{' '} */}
              {/* <div className="self-stretch flex items-center justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-gray-900 text-xl font-bold leading-8 tracking-normal grow whitespace-nowrap my-auto">
                  Price Comparison Chart
                </div>{' '}
                <div className="text-white text-center md:text-base text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-stretch border border-[color:var(--primary-600,#6F85FF)] bg-indigo-400 self-stretch grow px-9 py-2 rounded-md border-solid max-md:px-5">
                  Compare Prices
                </div>
              </div>{' '}
              <div className="self-stretch flex justify-between gap-5 mt-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex basis-[0%] flex-col">
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal whitespace-nowrap mt-11 self-end max-md:mt-10">
                    AED
                  </div>
                </div>{' '}
                <div className="self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa26759cb214a3709e9db098c45f1a92c6852611dde1f75b951c5f34a9e9c2d?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-[3.11] object-contain object-center w-[584px] stroke-[3px] stroke-blue-600 overflow-hidden self-center max-w-full"
                  />{' '}
                  <div className="bg-gray-300 self-stretch shrink-0 h-px max-md:max-w-full" />{' '}
                  <div className="bg-gray-300 self-stretch shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10" />{' '}
                  <div className="self-stretch flex w-full items-stretch justify-between gap-5 mx-5 pr-20 max-md:flex-wrap max-md:mr-2.5 max-md:pr-5">
                    <div className="flex basis-[0%] flex-col items-center">
                      <div className="bg-gray-300 w-px shrink-0 h-2" />{' '}
                      <div className="text-gray-900 text-sm leading-7 tracking-normal self-stretch whitespace-nowrap">
                        Distress Sale
                      </div>
                    </div>{' '}
                    <div className="flex grow basis-[0%] flex-col items-center">
                      <div className="flex w-[212px] max-w-full items-stretch justify-between gap-5">
                        <div className="bg-gray-300 shrink-0 h-2 flex-1" />{' '}
                        <div className="bg-gray-300 shrink-0 h-2 flex-1" />
                      </div>{' '}
                      <div className="self-stretch flex items-stretch justify-between gap-5">
                        <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap">
                          Average Price
                        </div>{' '}
                        <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap">
                          Estimated Market Price
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '} */}
              {/* <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-20 max-md:max-w-full max-md:mt-10">
                Recommended for you
              </div>{' '} */}

            </div>
          </div>


          <div className="flex flex-col border ml-5 md:w-full max-md:ml-0 hidden">
            <div className="flex grow flex-col items-stretch px-5 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                className="aspect-[1.15] object-contain object-center w-full items-center overflow-hidden"
              />{' '}
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                className="aspect-[1.15] object-contain object-center w-full overflow-hidden mt-3"
              />{' '}
              <div className="flex-col justify-end overflow-hidden relative flex aspect-[1.1510204081632653] w-full mt-3 pl-16 pr-5 pt-12 pb-4 items-end max-md:pl-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{' '}
                <div className="relative items-center bg-gray-900 bg-opacity-50 flex w-[75px] max-w-full gap-2.5 mt-36 px-4 py-1 rounded-xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/590b25187d84c3e51635b790bb2d68a8b782e84ad6d4a4bca7a302a94f0553a7?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1 my-auto"
                  />{' '}
                  <div className="text-white text-sm font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    12
                  </div>
                </div>
              </div>{' '}
              <div className="justify-center items-stretch shadow-xl bg-white flex w-full flex-col mt-10 p-4 rounded-md">
                <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-20 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee54635ee2f8e975a2910d3e58faa61c6a2b14753a23d6a8e037f4dd173e52c4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-blue-600 text-center text-base font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Call
                  </div>
                </div>{' '}
                <div className="justify-between items-center border border-[color:var(--warning-100,#FFDDCF)] bg-rose-200 flex gap-2.5 mt-2.5 px-20 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44a6d41d94ffad42d0f580c4c8fb46340e94108b1bd0302634351b174f5c0ed?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-orange-900 text-center text-base font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Email
                  </div>
                </div>{' '}
                <div className="justify-center items-center border border-[color:var(--success-100,#EAFFF2)] bg-emerald-50 flex flex-col mt-2.5 px-16 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2c20fca0706c32ee819c86190b530bdda8bd5914c87751e11437e59cf6a1cc?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-[1.05] object-contain object-center w-[21px] justify-center items-center overflow-hidden max-w-full"
                  />
                </div>{' '}
                <div className="bg-gray-200 shrink-0 h-px mt-6" />{' '}
                <div className="items-stretch flex justify-between gap-2 mt-6 rounded-md">
                  <div className="text-gray-900 text-sm font-medium leading-7 tracking-normal w-[242px]">
                    View other properties
                  </div>{' '}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af7a0ea9e54ba93e78ae4dd0940ff5349a1fba13c808a603f2cab5964d073c25?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Useful Links
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Properties for Sale in UAE
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Apartment for Sale in Dubai
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                5 Bedroom Villa for Sale in UAE
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                8 Bedroom Villa for Sale in Fujairah
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Properties for Sale in Abu Dhabi
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Near Shams Abu Dhabi
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Nearby Areas with Villa
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Dubai Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-4 mt-8 px-12 py-2 rounded-xl border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/512ec4e2c1727e09c7f744a324918a09d06bff19a21a07f26cebe2ccbe80ef6e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                />{' '}
                <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                  Report this property
                </div>
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-8 pt-72 pb-56 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-6 pt-72 pb-60 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-6 pt-96 pb-80 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )}
    </FadeIn>
  );
}
