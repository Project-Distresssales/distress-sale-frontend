'use client';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import React, { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TickSvg } from '../Icons/Icons';
import { InfinitySpin } from 'react-loader-spinner';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

interface PackageCardProps {
  tier: string;
  title: string;
  icon: ReactNode;
  bannerText: ReactNode;
  benefits: any;
  color: string;
  bgColor?: any;
  handleContinueClick: () => void;
  selectedPackageId: any;
  packageId;
}

const SelectPackage = () => {
  const { isLoading, makeRequest } = useRequest();
  const [packages, setPackages] = useState<any[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the selectedPackageId from localStorage on component mount
    const storedPackageId = localStorage.getItem('selectedPackageId');
    if (storedPackageId) {
      setSelectedPackageId(storedPackageId);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleContinueClick = (packageId) => {
    if (packageId !== null) {
      // Update state and store in localStorage
      setSelectedPackageId(packageId);
      localStorage.setItem('selectedPackageId', packageId);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };

  const handleGetPackages = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: 'GET',
          url: API.packages,
        });

        const { message, data } = res.data;
        setPackages(data);
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
    handleGetPackages();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[300px]">
          {/* <InfinitySpin
            /* @ts-ignore *
            visible={true}
            width="200"
            color="#f4ad0e"
            ariaLabel="infinity-spin-loading"
          /> */}
          <Image src={Assets.paymentProcessing} alt="" width={100} height={100} />
        </div>
      ) : (
        <div className="flex flex-wrap lg:flex-nowrap justify-between w-full md:gap-8 gap-14">
          {packages?.map((item, i) => (
            <PackageCard
              key={i}
              color={item?.name === 'Basic' ? '#D0D5DD' : item?.name === 'Super' ? '#F9C590' : '#7CC8C7'}
              bgColor={item?.name === 'Super' && '#FFF9F4'}
              tier={item?.name}
              title={`${item?.amount && item?.amount?.toLocaleString()} ${item?.currencyCode}`}
              icon={
                <TickSvg color={item?.name === 'Basic' ? '#667085' : item?.name === 'Super' ? '#F9C590' : '#7CC8C7'} />
              }
              handleContinueClick={() => handleContinueClick(item?._id)}
              bannerText={
                item?.name === 'Basic' ? (
                  <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
                    <p className="md:text-xl text-[5vw] font-[700] leading-tight">Free</p>
                    <p className="md:text-[12px] text-[3.2vw] font-[500] leading-tight">For</p>
                    <p className="md:text-[14px] text-[3.5vw] font-[700] leading-tight">{item?.activeFor} Days</p>
                  </div>
                ) : item?.name === 'Super' ? (
                  <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
                    <p className="md:text-[12px] text-[3.2vw] font-[700]">Get</p>
                    <p className="md:text-xl text-[5vw] font-[500]">20X</p>
                    <p className="md:text-[14px] text-[3.5vw] font-[700]">more Offer</p>
                  </div>
                ) : (
                  <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
                    <p className="md:text-[12px] text-[3.2vw] font-[700]">Get</p>
                    <p className="md:text-xl text-[5vw] font-[500]">50X</p>
                    <p className="md:text-[14px] text-[3.5vw] font-[700]">more Offer</p>
                  </div>
                )
              }
              benefits={
                item?.name === 'Basic'
                  ? [
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Free & Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            {item?.numOfAds} Active Basic Free Ads{' '}
                          </p>
                        ),
                      },
                    ]
                  : item?.name === 'Super'
                  ? [
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Up to <span className="font-bold text-black ">{item?.numOfVideos} Videos</span> only
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Featured for <span className="font-bold text-black ">5 Days</span>
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Refresh every <span className="font-bold text-black ">15 Days</span>
                          </p>
                        ),
                      },
                    ]
                  : [
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Up to <span className="font-bold text-black ">{item?.numOfVideos} Videos</span> only
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Featured for <span className="font-bold text-black ">15 Days</span>
                          </p>
                        ),
                      },
                      {
                        text: (
                          <p className="font-light md:text-sm text-[3.5vw] text-[#667085] ">
                            Refresh every <span className="font-bold text-black ">10 Days</span>
                          </p>
                        ),
                      },
                    ]
              }
              selectedPackageId={selectedPackageId}
              packageId={item?._id}
            />
          ))}
        </div>
      )}
    </>
  );
};

const PackageCard: React.FC<PackageCardProps> = ({
  tier,
  title,
  bannerText,
  icon,
  benefits,
  color,
  bgColor,
  handleContinueClick,
  selectedPackageId,
  packageId,
}) => {
  return (
    <div
      className="w-full relative h-fit rounded-xl shadow cursor-pointer transform transition-all ease-in-out duration-300"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${selectedPackageId === packageId ? color : 'transparent'}`,
        // boxShadow: '0px 8px 50px -4px rgba(16, 24, 40, 0.01), 0px 20px 50px -4px rgba(16, 24, 40, 0.03), 1px -4px 50px 4px rgba(16, 24, 40, 0.01), 0px -10px 50px 4px rgba(0, 0, 0, 0.03)'
      }}
      onClick={handleContinueClick}
    >
      {/* Banner Area */}
      <div className="absolute -top-[33px] right-5 ">
        <div className="relative flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="101" height="98" viewBox="0 0 101 98" fill="none">
            <path
              d="M97 1H20.4453C19.3703 1 18.3775 1.57516 17.8428 2.5077L1 31.8807H15.7073C17.3642 31.8807 18.7073 33.2239 18.7073 34.8807V93.9165C18.7073 96.4039 21.5603 97.8108 23.5336 96.2966L57.1429 70.5069C58.2117 69.6867 59.6961 69.6797 60.7727 70.4896L95.1965 96.3863C97.1736 97.8737 100 96.4632 100 93.989V4C100 2.34315 98.6569 1 97 1Z"
              fill={color}
              stroke={color}
            />
          </svg>
          {/* Banner area text section */}
          {bannerText}
        </div>
      </div>
      <div className="flex   rounded-lg px-6 py-5  flex-col  w-full">
        <div className="flex flex-col gap-6  w-full">
          <h2
            className="text-[#101828] md:text-xl text-[5vw] font-bold"
            style={{
              color: color,
            }}
          >
            {tier}
          </h2>
          <h2 className="text-[#101828] md:text-xl text-[5.5vw] text-center font-bold">{title}</h2>
        </div>
        <div className="flex flex-col gap-4 mt-7 w-full">
          <ul className="list-none flex flex-col gap-4  ">
            {benefits.map((benefit, index) => (
              <li className=" flex items-center gap-3" key={index}>
                {icon} {benefit.text}
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`w-full py-2.5 mt-36 px-7 rounded-[5px] font-[700] text-white transform transition-all ease-in-out duration-300`}
          style={{
            backgroundColor: color,
            boxShadow: '0px 10px 15px -3px rgba(16, 24, 40, 0.10), 0px 4px 6px -4px rgba(16, 24, 40, 0.10)',
          }}
          type="button"
          onClick={handleContinueClick}
        >
          {selectedPackageId === packageId ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default SelectPackage;
