'use client';
import React, { useEffect, useState } from 'react';
import Stepper from '../components/MultiStepPostAd/Stepper';
import { UseContextProvider } from '@/providers/StepperContext ';
import Step1 from '../components/MultiStepPostAd/Steps/Step1';
import Step2 from '../components/MultiStepPostAd/Steps/Step2';
import Step3 from '../components/MultiStepPostAd/Steps/Step3';
import Step4 from '../components/MultiStepPostAd/Steps/Step4';
import Step5 from '../components/MultiStepPostAd/Steps/Step5';
import Step6 from '../components/MultiStepPostAd/Steps/Step6';
import { FadeIn, FadeInFromRight } from '../components/Transitions/Transitions';
import useRequest from '@/services/request/request.service';
import { catchAsync } from '@/helpers/api.helper';
import API from '@/constants/api.constant';
import { toast } from 'react-toastify';
import useAppTheme from '@/hooks/theme.hook';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import Navbar from '../components/Navbar/Navbar';
import SubNavbar from '../components/Navbar/SubNavbar';

const PostAd = () => {
  const { isLoading, makeRequest } = useRequest();
  const [currentStep, setCurrentStep] = useState(1);
  const [packages, setPackages] = useState<any[]>([]);
  const { isMobile } = useAppTheme();

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


  const steps = ['Select Package', 'List Item', 'Describe Ad', 'Choose Ad Category', 'Ad Details', 'Contact Details'];

  const displayStep = ({ currentStep, handleClick, steps }) => {
    switch (currentStep) {
      case 1:
        return (
          <FadeInFromRight>
            <Step1 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );
      case 2:
        return (
          <FadeInFromRight>
            <Step2 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );
      case 3:
        return (
          <FadeInFromRight>
            <Step3 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );

      case 4:
        return (
          <FadeInFromRight>
            <Step4 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );
      case 5:
        return (
          <FadeInFromRight>
            <Step5 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );
      case 6:
        return (
          <FadeInFromRight>
            <Step6 handleClick={handleClick} currentStep={currentStep} steps={steps} />
          </FadeInFromRight>
        );
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

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
          <SubNavbar />
        </>
      )}
      <div className="flex flex-col items-stretch px-5 py-14 pb-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-6  w-full justify-center items-center">
          <h2 className="md:text-2xl text-[5.5vw] font-bold  ">Post Ad</h2>
          <p className="font-medium text-[#667085] md:text-[16px] text-[4vw]">Post an ad in just 6 simple steps</p>
        </div>
        <div className="pb-2 w-full mx-auto ">
          {/* Stepper */}
          <div className="horizontal mx-auto mt-5">
            <div className="mb-20">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>

            <div className="my-10 py-10 ">
              <UseContextProvider>
                {displayStep({
                  currentStep,
                  handleClick,
                  steps,
                })}
              </UseContextProvider>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default PostAd;
