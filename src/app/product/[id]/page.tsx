'use client';

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
import AltNavbar from '@/app/components/Navbar/AltNavbar';
import NewNavbar from '@/app/components/Navbar/NewNavbar';
import { ButtonBase, IconButton } from '@mui/material';

export default function ProductPage() {
  const { id } = useParams();
  const { isMobile } = useAppTheme();
  const [product, setProduct] = useState<any>([]);
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    {
      key: 'description',
      label: 'Description',
      borderRadius: '6px',
    },
    {
      key: 'additional-information',
      label: 'Additional information',
      borderRadius: '6px',
    },
    {
      key: 'specification',
      label: 'Specification',
      borderRadius: '6px',
    },
    {
      key: 'review',
      label: 'Review',
      borderRadius: '6px',
    },
  ];

  const handleTabClick = (key: React.SetStateAction<string>) => {
    setActiveTab(key);
  };

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
      textColor: '#415EFF',
    },
    {
      icon: Assets.sms,
      title: 'Email',
      link: `mailto:${product?.ownerContact?.email}`,
      bgColor: '#FFDDCF',
      textColor: '#7A2E0E',
    },
    {
      icon: Assets.whatsapp,
      title: 'Whatsapp',
      link: `https://wa.me/${product?.ownerContact?.whatsAppNumber}`,
      bgColor: '#EAFFF2',
      textColor: '',
    },
  ];

  const features = [
    {
      title: 'Brand',
      data: 'Apple',
    },
    {
      title: 'Category',
      data: 'Electronics',
    },
    {
      title: 'Condition',
      data: 'Fairly',
    },
    {
      title: 'Availability',
      data: 'In Stock',
    },
  ];


  const descriptionFeatures = [
    {
      title: 'Free 1 Year Warranty',
      icon: ''
    },
    {
      title: 'Free Shipping & Fasted Delivery',
      icon: ''
    },
    {
      title: '100% Money-back guarantee',
      icon: ''
    },
    {
      title: '24/7 Customer support',
      icon: ''
    },
    {
      title: 'Secure payment method',
      icon: ''
    },
  ]

  return (
    <FadeIn>
      {!isMobile ? (
        <>
          <NewNavbar />
          <AltNavbar />
        </>
      ) : (
        <>
          {/* <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} /> */}
          <AltNavbar />
        </>
      )}

<>
          <div className="w-full h-auto p-10">
            <div className="flex h-auto gap-16">
              <div className="">
                <div className="h-[400px] rounded-[12px] bg-[#FDF1D7] min-w-[450px]"></div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="rounded-[12px] bg-[#FDF1D7] w-full h-[90px]"></div>
                  <div className="rounded-[12px] bg-[#FDF1D7] w-full h-[90px]"></div>
                  <div className="rounded-[12px] bg-[#FDF1D7] w-full h-[90px]"></div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[24px] text-[#191C1F] font-[400]">
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
                </p>
                <div className="grid grid-cols-2 gap-x-14 gap-y-1 mt-5">
                  {features.map((feature, i) => (
                    <p className="text-[14px] font-[400] text-gray-400 leading-none" key={i}>
                      {feature.title}: <span className="text-black">{feature.data}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-5">
                  <div className="flex gap-3 items-center">
                    <h1 className="text-[#00134D] text-[24px] font-[700] leading-tight">AED190,000.00</h1>
                    <div className="bg-[#F8C85E] py-[5px] px-[10px] rounded-[2px] flex justify-center items-center">
                      <p className="leading-none text-[#191C1F] text-[14px] font-[500]">20% OFF</p>
                    </div>
                  </div>
                  <p className="text-[#9F9C9C] text-[14px] font-[400]">Market Price: 260,000.00</p>
                </div>
                <p className="mt-7 text-[16px] font-[400] text-[#191C1F] w-[400px]">
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) Space Gray
                </p>
                <button className="bg-[#00134D] rounded-[12px] w-full py-[16px] text-white leading-none mt-10 text-[14px] font-[400]">
                  Request call back
                </button>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex gap-1 justify-center items-center">
                    <IconButton>
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.5 17.25C10.5 17.25 1.125 12 1.125 5.62501C1.125 4.49803 1.51546 3.40585 2.22996 2.53431C2.94445 1.66277 3.93884 1.0657 5.04393 0.844677C6.14903 0.623658 7.29657 0.792346 8.29131 1.32204C9.28605 1.85174 10.0665 2.70972 10.5 3.75001C10.9335 2.70972 11.7139 1.85174 12.7087 1.32204C13.7034 0.792346 14.851 0.623658 15.9561 0.844677C17.0612 1.0657 18.0555 1.66277 18.77 2.53431C19.4845 3.40585 19.875 4.49803 19.875 5.62501C19.875 12 10.5 17.25 10.5 17.25Z"
                          stroke="#475156"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    <p className="text-[14px] font-[400] text-[#475156] leading-none">Add to Wishlist</p>
                  </div>

                  <div className="flex gap-1 justify-center items-center">
                    <p className="text-[14px] font-[400] text-[#475156] leading-none">Share product:</p>
                    <div className="flex items-center">
                      <IconButton>
                        <img src="/icons/facebook.svg" width={15} height={15} />
                      </IconButton>
                      <IconButton>
                        <img src="/icons/x.svg" width={15} height={15} />
                      </IconButton>
                      <IconButton>
                        <img src="/icons/instagram.svg" width={15} height={15} />
                      </IconButton>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border border-[#E3E3E3] rounded-[8px] w-full h-auto p-5">
                  <p className="text-[14px] font-[400] text-[#0A0A0B]">100% Guarantee Safe Checkout</p>
                  <img src="/icons/payment-method.svg" className="mt-3" />
                </div>
              </div>
            </div>

            {/* Tab */}
            <div className="text-[14px] mx-auto flex items-center justify-center gap-1 bg-[#FBFBFC] w-fit rounded-[6px] mt-20">
              {tabs.map((tab, index) => (
                <ButtonBase key={index} onClick={() => handleTabClick(tab.key)} className="rounded-[6px]">
                  <div
                    className={`py-2 px-3 cursor-pointer transform transition duration-500 ease-in-out`}
                    style={{
                      backgroundColor: activeTab === tab.key ? '#F0F2F5' : '#FBFBFC',
                      color: activeTab === tab.key ? '#0F1625' : '#687588',
                      borderRadius: tab.borderRadius,
                      fontWeight: activeTab === tab.key ? '500' : '500',
                      // border:
                      //   activeTab === tab.key
                      //     ? "0.5px solid #E4E8EC"
                      //     : "0.5px solid transparent",
                    }}
                  >
                    <p className="leading-none">{tab.label}</p>
                  </div>
                </ButtonBase>
              ))}
            </div>

            {/* Tab Content */}
            <div className='mt-7 flex justify-between gap-32 divide-x'>
              <div>
                <p className='text-[16px] font-[600] text-[#0A0A0B]'>Description</p>
                <p className='text-[14px] font-[400] text-[#726C6C]'>
                The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
                Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
                </p>
              </div>
              <div className='min-w-[300px] h-auto pl-7'>
              <p className='text-[16px] font-[600] text-[#0A0A0B]'>Features</p>
              <div className='mt-3 space-y-3'>
                {descriptionFeatures.map((feature, i) => (
                  <div key={i} className='flex gap-3 items-center'>
                    <img src={feature.icon} width={20} height={20} />
                    <p className='text-[14px] font-[400] text-[#0A0A0B] leading-none'>{feature.title}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Related Product */}
            <div className='mt-16'>
              <h1 className='text-[#0A0A0B] text-[24px] font-[600]'>Related Product</h1>
            </div>
          </div>

          {/* <div className="bg-white flex flex-col items-stretch pb-12 md:px-8 w-full">

            <div className="w-full mb-32 md:max-w-full max-md:mb-10 flex">
              <div className="flex flex-col md:w-full">
                <div className="flex grow flex-col px-5 max-md:max-w-full max-md:mt-8">
                  <div className="flex-col overflow-hidden self-stretch relative rounded-[12px] flex md:h-[520px] h-[300px] w-full pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:pr-5 relative">
                    <div className="top-5 left-5 absolute z-10">
                      <VerifiedBadge
                        text={product && product?.verified ? 'Verified' : 'Unverified'}
                        icon={Assets.verify}
                        isVerified={product?.verified}
                      />
                    </div>
                    <div className="top-5 right-5 absolute z-10">
                      <ShareProduct
                        handleShareOpen={handleShareOpen}
                        handleShareClose={handleShareClose}
                        openShare={openShare}
                        title="Share"
                        icon={Assets.share}
                      />
                    </div>
                    <img
                      loading="lazy"
                      src={selectedImage}
                      className="absolute h-full w-full object-cover object-center inset-0 rounded-[12px]"
                    />
                  </div>

                  <div className="flex md:flex-row flex-col justify-between items-center md:items-start">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product &&
                        product?.imageURLs &&
                        product?.imageURLs.map((imageURL, index) => (
                          <img
                            key={index}
                            src={imageURL}
                            alt={`Thumbnail ${index + 1}`}
                            className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-[8px] border-2 border-distressBlue"
                            onClick={() => handleThumbnailClick(imageURL)}
                          />
                        ))}
                    </div>
                    {/* Buttons *
                    <div className="flex space-x-3 mt-10 md:mt-2">
                      {ownersContact.map((item, i) => (
                        <button
                          key={i}
                          className={`bg-[${item.bgColor}] rounded-[8px] py-3 flex items-center justify-center space-x-2.5 px-7`}
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

                  
                  {/* Pricing and Details *
                  <div className="mt-7">
                    <h1 className="text-primary md:text-[25px] text-[5.5vw] font-[700]">
                      {currencyFormatter(product?.price, 'AED')}
                    </h1>
                    <div className="flex items-center space-x-2 text-[#344054] md:text-[14px] text-[3.5vw] mt-2 font-[500]">
                      <p>4 Beds</p>
                      <span>•</span>
                      <p>5 Baths</p>
                      <span>•</span>
                      <p>5 Sqft</p>
                    </div>
                    <p className="text-[#344054] mt-2 md:text-sm text-[3.2vw] font-[500] leading-tight whitespace-nowrap">
                      {product?.location}
                    </p>
                  </div>

                  <div className="md:w-[700px] mt-10">
                    <p className="text-gray-900 text-justify md:text-base text-[3.5vw] leading-7 tracking-normal md:max-w-full">
                      {product?.fullDescription}
                    </p>

                    <div className="bg-gray-200 self-stretch shrink-0 h-px my-7 max-md:max-w-full" />

                    {/* Property Info *
                    <div className="text-gray-900 md:text-3xl text-[5vw] font-bold  whitespace-nowrap mt-14 max-md:max-w-full md:mt-10">
                      Property Information
                    </div>
                    <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="items-stretch flex justify-between gap-2 rounded-md">
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                          {product?.propertyType}
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2 rounded-md">
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                          Purpose:
                        </div>
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                          {product?.purpose}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
                    <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="items-stretch flex justify-between gap-2 rounded-md">
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal whitespace-nowrap">
                          Open Market price:
                        </div>
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal whitespace-nowrap">
                        {currencyFormatter(product?.closingFee, 'AED')}
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2 rounded-md">
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal grow whitespace-nowrap">
                          Closing Fee:
                        </div>
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal grow whitespace-nowrap">
                          {currencyFormatter(product?.closingFee, 'AED')}
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
                          {sliceText(15, product?.posterID)}
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2 rounded-md">
                        <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-medium leading-7 tracking-normal grow whitespace-nowrap">
                          Verified On:
                        </div>
                        <div className="items-stretch flex justify-between gap-2.5">
                          <div className="text-slate-600 md:text-[15px] text-[3.5vw] font-bold leading-7 tracking-normal grow whitespace-nowrap">
                            {product && product.updatedAt ? format(new Date(product.updatedAt), "do MMMM',' yyyy") : ''}
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
                            <div
                              key={i}
                              className="justify-center items-center bg-gray-200 flex flex-col w-full h-[150px] px-10 rounded-md max-md:px-5"
                            >
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce7c4f2a10ac0b2a2b9c3352e912febf62ad74177b7514213853d5922526b9c?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                                className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-1.5"
                              />
                              <div className="text-gray-900 md:text-base text-[3.5vw] font-medium leading-7">
                                {item?.name}
                              </div>
                            </div>;
                          })}
                        </div>
                      </>
                    )}
                  </div>

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
          </div> */}
        </>

      {/* {!isLoading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <Image src={Assets.paymentProcessing} alt="" width={100} height={100} />
        </div>
      ) : (
        
      )} */}
    </FadeIn>
  );
}
