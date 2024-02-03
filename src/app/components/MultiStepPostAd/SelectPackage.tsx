"use client"
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useRequest from '@/services/request/request.service';
import React, { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TickSvg } from '../Icons/Icons';

interface PackageCardProps {
  tier: string;
  title: string;
  icon: ReactNode;
  bannerText: ReactNode;
  benefits: any;
  color: string;
  bgColor?: any;
  handleBenefitClick: any;
  handleContinueClick: () => void;
}

const SelectPackage = () => {
  const { isLoading, makeRequest } = useRequest();
  const [packages, setPackages] = useState<any[]>([]);
  const [selectedBenefits, setSelectedBenefits] = useState(Array(packages.length).fill(null));

  const handleBenefitClick = (packageIndex, benefitIndex) => {
    const updatedSelectedBenefits = [...selectedBenefits];
    updatedSelectedBenefits[packageIndex] = benefitIndex;
    setSelectedBenefits(updatedSelectedBenefits);
  };

  const handleContinueClick = (packageId) => {
    const selectedBenefit = selectedBenefits[packageId];

    if (selectedBenefit !== null) {
      console.log(`Selected Benefit ID for Package ${packageId}: ${selectedBenefit}`);
    } else {
      toast.error('Please select a benefit before continuing.');
    }
  };

  const handleGetPackages = async () => {
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: "GET",
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
    <div className="flex flex-wrap lg:flex-nowrap justify-between w-full gap-8">
      {packages?.map((item, i) => (
        <PackageCard
          key={i}
          color={item?.name === 'Basic' ? '#D0D5DD' : item?.name === 'Super' ? '#F9C590' : '#7CC8C7'}
          bgColor={item?.name === 'Super' && '#FFF9F4'}
          tier={item?.name}
          title={`AED ${item?.amount} + VAT`}
          icon={<TickSvg color={item?.name === 'Basic' ? '#667085' : item?.name === 'Super' ? '#F9C590' : '#7CC8C7'} />}
          handleBenefitClick={(benefitIndex) => handleBenefitClick(item?._id, benefitIndex)}
          handleContinueClick={() => handleContinueClick(item?._id)}
          bannerText={item?.name === 'Basic' ? (
            <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
              <p className="text-xl font-[700] leading-tight">Free</p>
              <p className="text-[12px] font-[500] leading-tight">For</p>
              <p className="text-[14px] font-[700] leading-tight">{item?.activeFor} Days</p>
            </div>
          ) : item?.name === 'Super' ? (
            <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
              <p className="text-[12px] font-[700]">Get</p>
              <p className="text-xl font-[500]">20X</p>
              <p className="text-sm font-[700]">more Offer</p>
            </div>
          ) : (
            <div className="absolute mb-6 ml-4 mx-auto text-center text-[#101828]">
              <p className="text-[12px] font-[700]">Get</p>
              <p className="text-xl font-[500]">50X</p>
              <p className="text-sm font-[700]">more Offer</p>
            </div>
          )}
          benefits={item?.name === 'Basic' ? (
            [
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Free & Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                  </p>
                ),
              },
              { text: <p className="font-light text-sm text-[#667085] ">{item?.numOfAds} Active Basic Free Ads </p> },
            ]
          ) : item?.name === 'Super' ? (
            [
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Up to <span className="font-bold text-black ">{item?.numOfVideos} Videos</span> only
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Featured for <span className="font-bold text-black ">5 Days</span>
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Refresh every <span className="font-bold text-black ">15 Days</span>
                  </p>
                ),
              },
            ]
          ) : (
            [
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Active for <span className="font-bold text-black ">{item?.activeFor} Days</span>
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Up to <span className="font-bold text-black ">{item?.numOfPhotos} Photos</span> only
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Up to <span className="font-bold text-black ">{item?.numOfVideos} Videos</span> only
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Featured for <span className="font-bold text-black ">15 Days</span>
                  </p>
                ),
              },
              {
                text: (
                  <p className="font-light text-sm text-[#667085] ">
                    Refresh every <span className="font-bold text-black ">10 Days</span>
                  </p>
                ),
              },
            ]
          )}
        />
      ))}
    </div>
  );
};

const PackageCard: React.FC<PackageCardProps> = ({ tier, title, bannerText, icon, benefits, color, bgColor, handleBenefitClick, handleContinueClick }) => {

  return (
    <div
      className="w-full relative h-fit shadow-lg shadow-black/30 rounded-xl"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${color}`,
      }}
    >
      {/* Banner Area */}
      <div className="absolute -top-[33px] right-5 ">
        <div className="relative flex justify-center items-center ">
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
            className="text-[#101828] text-xl font-bold"
            style={{
              color: color,
            }}
          >
            {tier}
          </h2>
          <h2 className="text-[#101828] text-xl text-center font-bold">{title}</h2>
        </div>
        <div className="flex flex-col gap-4 mt-7 w-full">
          <ul className="list-none flex flex-col gap-4  ">
            {benefits.map((benefit, index) => (
              <li className=" flex items-center gap-3" onClick={handleBenefitClick} key={index}>
                {icon} {benefit.text}
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`w-full py-2.5 mt-36 px-7 text-black  `}
          style={{
            backgroundColor: color,
          }}
          type="button"
          onClick={handleContinueClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectPackage;
