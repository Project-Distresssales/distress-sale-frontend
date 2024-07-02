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
      header: 'Listings',
      text: 'Distress Sales allows users post classified ads. You can buy, sell, and advertise properties and products with ease.',
      buttonText: 'Check Market Insights',
      iconPath: Assets.listingWhite,
    },
    {
      header: 'Market Insights',
      text: 'Gain valuable market insights by exploring accurate market prices, ensuring informed decision-making and the best deals.',
      buttonText: 'Post Ad',
      iconPath: Assets.insightWhite,
    },
    {
      header: 'Diverse Categories',
      text: 'There are wide variety of categories to choose from, offering an extensive selection of exclusive deals to explore.',
      buttonText: 'Explore',
      iconPath: Assets.categoryWhite,
    },
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
          <Navbar />
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
      <div className="w-full h-auto pb-32">
        <div className="md:px-8 px-5">
          <div className="w-full rounded-[30px] h-auto md:py-[96px] py-10 hero-image-bg flex justify-center items-center px-5">
            <img
              src='https://thumbs.wbm.im/pw/small/bf59350a1ef942353cea5b17691045b1.jpg'
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
            />

            <div className="h-auto text-center z-10">
              <div className="w-full">
                {!isMobile ? (
                  <h1 className="md:text-[2.5vw] text-[4vw] text-white font-[700] md:leading-[50px]">
                    The Ultimate Affordable Marketplace <br /> for Buying, Renting & Selling
                  </h1>
                ) : (
                  <h1 className="text-[4.5vw] text-white font-[700] leading-tight">
                    The Ultimate Affordable Marketplace for Buying, Renting & Selling
                  </h1>
                )}
                <p className="text-white md:text-[1.3vw] text-[3.5vw] w-[80%] md:w-full mx-auto font-[700] mt-8">
                  Explore the Best Deals: Discover, Connect, Transact
                </p>
              </div>

              <div className="md:mt-20 mt-10 relative">
                <SearchAndFilter
                  setSearchResult={setResults}
                  setQuery={setQuery}
                  query={query}
                  data={data}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                {query.length > 0 && (
                  <div
                    className="z-20 mt-2 w-full rounded-[8px] h-[300px] overflow-auto bg-white absolute"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                  >
                    {results &&
                      results?.map((item, i) => (
                        <div key={i} className="w-full h-[50px] border-b flex justify-between items-center px-5">
                          <div className="space-y-1">
                            <p className="font-[500] md:text-[16px]">{item.name}</p>
                          </div>
                        </div>
                      ))}

                    {!results && (
                      <div className="flex justify-center items-center">
                        <p className="">No Search Result Found...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:px-[80px] md:py-[100px] px-0 py-10">
            {/* Services */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-[50px] mt-16">
              {services?.map((service: any, i) => (
                <ServiceCard
                  key={i}
                  header={service.header}
                  text={service.text}
                  buttonText={service.buttonText}
                  icon={service.iconPath}
                />
              ))}
            </div>

            {/* Popular Search category */}
            <div className="mt-24">
              <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular Categories</h1>
              <div className="md:mt-14 mt-7 md:flex md:justify-between grid grid-cols-2 gap-x-5 gap-y-10">
                {popularCategories?.map((category, i) => (
                  <SearchCategory key={i} header={category.header} item={category.items} />
                ))}
              </div>
              {/* <div className="border-[0.2px] my-14 w-full border-[#EAECF0]" />
                <div className="md:flex md:justify-between grid grid-cols-2 gap-x-5 gap-y-10">
                  {popularCategories2?.map((category, i) => (
                    <SearchCategory key={i} header={category.header} item={category.items} />
                  ))}
                </div> */}
            </div>

            {/* Verification */}
            <div className="mt-20">
              {userState && userState?.verified ? <VerifiedUserBadge /> : <UnverifiedUserBadge />}
            </div>

            {/* Popular property sales */}
            <div className="mt-20 w-full">
              {propertyForSale?.length > 0 && (
                <div>
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Property for Sale</h1>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7">
                    {propertyForSale?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {automobile?.length > 0 && (
                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">
                    Popular in Used Cars for Sale
                  </h1>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7">
                    {automobile?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {/* <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Listings</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {automobile.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div> */}

              {propertyForRent?.length > 0 && (
                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Property for Rent</h1>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7">
                    {propertyForRent?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {commercial?.length > 0 && (
                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Commercial</h1>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7">
                    {commercial?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <section className="bg-gray-100 rounded-[16px] mt-24">
              <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div className="max-w-lg">
                    <h2 className="text-[5.5vw] font-extrabold text-gray-900 md:text-4xl">About Us</h2>
                    <p className="mt-4 text-gray-600 md:text-lg text-[3.5vw]">An online market place where people who need to quickly sell their properties, cars, businesses, Jewelries and other assets within 48 hours finds buyers who are looking for opportunities to buy properties, cars, businesses, Jewelries and other assets at a
                      very cheap price that is below the open market prices.</p>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </section>
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
}
