import React from 'react';
import StepperControl from '../StepperControl';
import { TickSvg } from '../../Icons/Icons';

const SelectPackage = ({ handleClick, currentStep, steps }) => {
  const commonIcon = <TickSvg />; // Define your common icon here

  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Select Package for your Ad</h2>
        <div className="flex justify-between w-full gap-8">
          {/* Select Package */}
          <PackageCard
            color="#D0D5DD"
            tier="BASIC"
            title="Free"
            icon={<TickSvg color="#667085" />}
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
            tier="SUPER"
            title="AED 90 + VAT"
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
      </div>
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}

      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">How it Works?</h2>
        <div>{/* How it Works */}</div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Hear from our Sellers</h2>
        <div>{/* Hear from our Sellers */}</div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h2 className=" text-[#101828] text-2xl font-bold ">Frequently Asked Questions</h2>
        {/* FAQ */}
      </div>
    </div>
  );
};

const PackageCard = ({ tier, title, icon, benefits, color }) => {
  return (
    <div className="flex shadow-xl h-fit rounded-lg px-6 py-5  flex-col gap-4 w-full" style={{
        border: `1px solid ${color}`,
    }} >
      <div className="flex flex-col gap-4  w-full">
        <h2 className="text-[#101828] text-2xl font-bold" style={{
            color: color,
        }} >{tier}</h2>
        <h2 className="text-[#101828] text-2xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-col gap-4  w-full">
        <h2 className="text-[#101828] text-2xl font-bold">Benefits</h2>
        <ul className="list-none flex flex-col gap-4  ">
          {benefits.map((benefit, index) => (
            <li className=" flex items-center gap-3  " key={index}>
              {icon} {benefit.text}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full py-2.5 px-7 text-black  `}
        style={{
          backgroundColor: color,
        }}
        type="button"
      >
        Continue
      </button>
    </div>
  );
};

export default SelectPackage;
