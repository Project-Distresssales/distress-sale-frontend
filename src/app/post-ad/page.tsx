'use client';
import React, { useEffect, useState } from 'react';
import Stepper from '../components/MultiStepPostAd/Stepper';
import { UseContextProvider } from '@/providers/StepperContext ';
import Step1 from '../components/MultiStepPostAd/Steps/Step1';
import Step3 from '../components/MultiStepPostAd/Steps/Step3';
import Step4 from '../components/MultiStepPostAd/Steps/Step4';
import Step5 from '../components/MultiStepPostAd/Steps/Step5';
import { FadeIn, FadeInFromRight } from '../components/Transitions/Transitions';
import useRequest from '@/services/request/request.service';
import { catchAsync } from '@/helpers/api.helper';
import API from '@/constants/api.constant';
import { toast } from 'react-toastify';
import useAppTheme from '@/hooks/theme.hook';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import AltNavbar from '../components/Navbar/AltNavbar';
import useGlobalState from '@/hooks/globalstate.hook';
import { useRouter } from 'next/navigation';
import LoginModal from '../components/Auth/Login/Login';
import SignupModal from '../components/Auth/SIgnup/Signup';

const PostAd = () => {
  const { isLoading, makeRequest } = useRequest();
  const [currentStep, setCurrentStep] = useState(1);
  const [packages, setPackages] = useState<any[]>([]);
  const { isMobile } = useAppTheme();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { logout, isAuthenticated, profile } = useGlobalState();
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const router = useRouter();

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

  const steps = ['Select Package', 'Product Information', ' Product Category', 'Contact Details'];

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
            <Step5 handleClick={handleClick} currentStep={currentStep} steps={steps} />
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
      // case 5:
      //   return (
      //     <FadeInFromRight>
      //       <Step5 handleClick={handleClick} currentStep={currentStep} steps={steps} />
      //     </FadeInFromRight>
      //   );
      // case 6:
      //   return (
      //     <FadeInFromRight>
      //       <Step6 handleClick={handleClick} currentStep={currentStep} steps={steps} />
      //     </FadeInFromRight>
      //   );
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // Login Modal
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
    setSideBar(false);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
    setSideBar(false);
  };

  // Register Modal
  const handleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
    setSideBar(false);
  };

  const handleRegisterModalClose = () => {
    setOpenRegisterModal(false);
  };

  const handleRegisterModalOpen = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
    setSideBar(false);
  };

  // Forgot Password Modal
  const handleForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };


  return (
    <FadeIn>
       {!isMobile ? (
        <>
          <NewNavbar />
          {/* <AltNavbar /> */}
          {/* <div className="mt-5">
            <SubNavbar />
          </div> */}
        </>
      ) : (
        <>
          <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* <SubNavbar /> */}

          {/* Drop Down */}
          {sideBar && (
            <FadeIn>
              <div className="md:hidden block w-[60%] h-auto bg-white shadow text-center rounded-[12px] absolute right-5 z-20 space-y-3 p-5 top-16">
                {!isAuthenticated && (
                  <>
                    <div onClick={handleLoginModal} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                      Sign In
                    </div>
                    <div
                      onClick={handleRegisterModal}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      Sign Up
                    </div>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <div onClick={() => router.push('/')} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                      Home
                    </div>
                    <div onClick={() => router.push('/profile')} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                     Get Verified
                    </div>
                    <div onClick={() => router.push('/profile')} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                      My Ads
                    </div>
                    <div onClick={() => router.push('/profile')} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                      Account Settings
                    </div>
                    <div
                      onClick={logout}
                      className="rounded-[8px] bg-[#FCEEEF] p-4 text-[4.5vw] font-[500] text-[#BA242E]"
                    >
                      Logout
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          )}
        </>
      )}
      <div className="flex flex-col items-stretch px-5 py-14 pb-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-6  w-full justify-center items-center">
          <h2 className="md:text-2xl text-[5.5vw] font-bold  ">Post Ad</h2>
          <p className="font-medium text-[#667085] md:text-[16px] text-[4vw]">Post an ad in just 4 simple steps</p>
        </div>
        <div className="pb-2 w-full mx-auto ">
          {/* Stepper */}
          <div className="horizontal mx-auto mt-5">
            <div className="mb-10">
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

       {/* Auth Signup  */}
       <SignupModal
        open={openRegisterModal}
        onClose={handleRegisterModalClose}
        handleLoginModalOpen={handleLoginModalOpen}
        next={() => {
          handleVerificationModalOpen();
        }}
      />

      {/* Auth Login Modal */}
      <LoginModal
        open={openLoginModal}
        onClose={handleLoginModalClose}
        handleForgotPasswordModal={handleForgotPasswordModal}
        handleRegisterModalOpen={handleRegisterModalOpen}
      />
    </FadeIn>
  );
};

export default PostAd;
