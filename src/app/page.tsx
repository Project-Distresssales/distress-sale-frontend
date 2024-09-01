'use client';

import React, { useEffect, useState } from 'react';
import Assets from '@/constants/assets.constant';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';
import ServiceCard from './components/ServiceCard/ServiceCard';
import SearchCategory from './components/SearchCategory/SearchCategory';
import ProductCard from './components/Card/ProductCard';
import useAppTheme from '@/hooks/theme.hook';
import MobileNavbar from './components/Navbar/MovileNavbar';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/Navbar/SubNavbar';
import { FadeIn } from './components/Transitions/Transitions';
import API, { algoliaClient } from '@/constants/api.constant';
import useGlobalState from '@/hooks/globalstate.hook';
import LoginModal from './components/Auth/Login/Login';
import SignupModal from './components/Auth/SIgnup/Signup';
import useRequest from '@/services/request/request.service';
import UnverifiedUserBadge from './components/Verification/UnverifiedUserBadge';
import VerifiedUserBadge from './components/Verification/VerifiedUserBadge';
import Image from 'next/image';
import NewNavbar from './components/Navbar/NewNavbar';
import AltNavbar from './components/Navbar/AltNavbar';

export default function Home() {
  const { isMobile } = useAppTheme();
  const { logout, isAuthenticated } = useGlobalState();
  const { makeRequest: makeUserRequest, isLoading: isLoadingUser } = useRequest();
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [userState, setUserState] = React.useState<any>([]);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);

  const services = [
    {
      header: '90 Days Return',
      text: 'If goods have problems, Lorem Ipsum is dummy text',
      iconPath: '/icons/truck-2.svg',
    },
    {
      header: 'Free Returns',
      text: 'For all orders over $50, Lorem Ipsum is dummy text',
      iconPath: '/icons/offer.svg',
    },
    {
      header: 'Secured payment',
      text: '100% secure payment, Lorem Ipsum is dummy text',
      iconPath: '/icons/payment.svg',
    },
    {
      header: 'Customer Support',
      text: '24x7 customer support, Lorem Ipsum is dummy text',
      iconPath: '/icons/support.svg',
    }
  ];

  // Searched categories
  const popularCategories = [
    {
      header: 'Property for Sale',
      items: [
        {
          text: 'Residential for Sale',
          path: '/property-for-sale/residential',
        },
        {
          text: 'Commercial',
          path: '/property-for-sale/commercial',
        },
        {
          text: 'Land',
          path: '',
        },
        {
          text: 'Multiple Units',
          path: '',
        },
      ],
    },
    {
      header: 'Property for Rent',
      items: [
        {
          text: 'Residential Units for Rent',
          path: '',
        },
        {
          text: 'Commercial',
          path: '',
        },
        {
          text: 'Room for Rent',
          path: '',
        },
        {
          text: 'Short Term',
          path: '',
        },
      ],
    },
    {
      header: 'Automobile',
      items: [
        {
          text: 'Cars',
          path: '',
        },
        {
          text: 'Motorcycles',
          path: '',
        },
        {
          text: 'Auto Accessories & Parts',
          path: '',
        },
        {
          text: 'Heavy Vehicles',
          path: '',
        },
      ],
    },
  ];

  // Agolia Search Result
  const [query, setQuery] = useState<string | any>('');
  const [results, setResults] = useState<any>([]);
  const [fetchResults, setFetchResults] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = ['General', 'Automobile', 'Property for Sale', 'Property for Rent'].map((item) => ({
    label: item,
    value: item,
  }));

  // Get All Page Data or ads
  const handleSearch = async (indexName) => {
    try {
      const hitsPerPage = 100;
      const algoliaIndex = algoliaClient.initIndex(indexName);
      const { hits } = await algoliaIndex.search('', {
        // Empty query
        hitsPerPage: hitsPerPage,
      });
      return { category: indexName, hits };
    } catch (error) {
      console.error(`Error searching Algolia for ${indexName}:`, error);
      return { category: indexName, hits: [] };
    }
  };

  useEffect(() => {
    const searchClients = async () => {
      const categories = ['categories', 'automobile', 'commercial', 'property_for_sale_ads', 'property_for_rent_ads'];
      const searchPromises = categories.map((category) => handleSearch(category));

      try {
        const results = await Promise.all(searchPromises);
        setFetchResults(results);
      } catch (error) {
        console.error('Error in parallel search:', error);
      }
    };

    searchClients();
  }, []);

  // Map specific properties outside of the component
  const categoriesData = {};

  fetchResults.forEach(({ category, hits }) => {
    categoriesData[category] = hits || [];
  });

  // Access individual arrays
  const propertyForSale = categoriesData['property_for_sale_ads'] || [];
  const propertyForRent = categoriesData['property_for_rent_ads'] || [];
  const automobile = categoriesData['automobile'] || [];
  const commercial = categoriesData['commercial'] || [];
  // const categories = categoriesData['categories'] || [];

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

  const handleForgotPasswordModalClose = () => {
    setOpenForgotPasswordModal(false);
  };

  const handleForgotPasswordModalOpen = () => {
    setOpenLoginModal(false);
    setOpenForgotPasswordModal(true);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  const handleVerificationModalOpenClose = () => {
    setVerificationModalOpen(false);
  };

  // Get user details
  const fetchUser = async () => {
    try {
      const res = await makeUserRequest({
        url: API.user,
        method: 'GET',
      });
      const { data } = res.data;
      setUserState(data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchUser();
  }, []);



  return (
    <FadeIn>

      {!isMobile ? (
        <>
          <NewNavbar />
          <AltNavbar />
          <SubNavbar />
        </>
      ) : (
        <>
          <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} />
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
                  <div
                    onClick={logout}
                    className="rounded-[8px] bg-[#FCEEEF] p-4 text-[4.5vw] font-[500] text-[#BA242E]"
                  >
                    Logout
                  </div>
                )}
              </div>
            </FadeIn>
          )}
          <SubNavbar />
        </>
      )}

      {/* Hero */}
      <section>
        <div className="mx-auto pl-24 pr-36 pb-14 lg:flex gap-5">
          <div className="text-center lg:text-left w-full mt-10">
            <h1 className="text-[#00134D] font-[700] text-[60px] leading-tight nunito">The Ultimate Affordable Marketplace for Buying, Renting & Selling
            </h1>
            <p className="text-[18px] font-normal text-[#898384] mt-2">Explore the Best Deals: Discover, Connect, Transact.</p>
            <button type="button" className="py-4 px-12 bg-secondary rounded-[12px] text-white mt-10">Explore</button>
          </div>
          <div className='relative'>
            <div className='bg-[#f2f5fe] w-[350px] h-full rounded-full'>
              <img src='/images/hero-new.png' className='w-full h-full bg-cover bg-no-repeat' />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className='px-32 -mt-[70px]'>
          <div className='w-full h-auto rounded-[22px] service-glass-bg grid grid-cols-4 divide-x py-10'>
            {services.map(({ header, text, iconPath }, index) => (
              <div key={index} className='w-full h-auto py-5 px-7 flex flex-col justify-center items-center text-center'>
                <div className='w-[40px] h-[40px] rounded-[12px] bg-[#D4DEFF] mb-5 flex justify-center items-center'>
                  <img src={iconPath} width={20} height={20} />
                </div>
                <h1 className='text-[#00134D] font-[600] text-[18px] leading-tight mb-2'>{header}</h1>
                <p className='text-[#898384] font-normal text-[16px] leading-tight'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
}
