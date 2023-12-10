import React, { ReactNode } from 'react';
import { TickSvg } from '../Icons/Icons';

interface PackageCardProps {
  tier: string;
  title: string;
  icon: ReactNode;
  bannerText: ReactNode;
  benefits: { text: ReactNode }[];
  color: string;
  bgColor?: string;
}

const SelectPackage = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between w-full gap-8">
      <PackageCard
        color="#D0D5DD"
        tier="BASIC"
        title="Free"
        icon={<TickSvg color="#667085" />}
        bannerText={
          <div className="absolute mb-6 ml-4 mx-auto text-center text-white ">
            <p className="text-xl font-black ">FREE</p>
          </div>
        }
        benefits={[
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Active for <span className="font-bold text-black ">30 Days</span>
              </p>
            ),
          },
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Up to <span className="font-bold text-black ">5 Photos</span> only
              </p>
            ),
          },
          { text: <p className="font-light text-sm text-[#667085] ">3 Active Basic Free Ads </p> },
        ]}
      />

      <PackageCard
        color="#F9C590"
        bgColor="#FFF9F4"
        tier="SUPER"
        title="AED 90 + VAT"
        bannerText={
          <div className="absolute mb-6 ml-4 mx-auto text-center text-white ">
            <p className=" text-sm font-black  ">Get</p>
            <p className="text-xl font-black ">10X</p>
            <p className="text-sm font-black">more Offer</p>
          </div>
        }
        icon={<TickSvg color="#F9C590" />}
        benefits={[
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Active for <span className="font-bold text-black ">60 Days</span>
              </p>
            ),
          },
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Up to <span className="font-bold text-black ">10 Photos</span> only
              </p>
            ),
          },
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Up to <span className="font-bold text-black ">10 Videos</span> only
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
        ]}
      />

      <PackageCard
        color="#7CC8C7"
        tier="HYPER"
        title="AED 200 + VAT"
        icon={<TickSvg color="#7CC8C7" />}
        bannerText={
          <div className="absolute mb-6 ml-4 mx-auto text-center text-white ">
            <p className=" text-sm font-black  ">Get</p>
            <p className="text-xl font-black ">50X</p>
            <p className="text-sm font-black">more Offer</p>
          </div>
        }
        benefits={[
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Active for <span className="font-bold text-black ">180 Days</span>
              </p>
            ),
          },
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Up to <span className="font-bold text-black ">50 Photos</span> only
              </p>
            ),
          },
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Up to <span className="font-bold text-black ">50 Videos</span> only
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
          {
            text: (
              <p className="font-light text-sm text-[#667085] ">
                Active for <span className="font-bold text-black ">180 Days</span>
              </p>
            ),
          },
        ]}
      />
    </div>
  );
};

const PackageCard: React.FC<PackageCardProps> = ({ tier, title, bannerText, icon, benefits, color, bgColor }) => {
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
              <li className=" flex items-center gap-3  " key={index}>
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
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectPackage;
