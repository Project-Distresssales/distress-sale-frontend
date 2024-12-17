'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Card/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import API, { algoliaClient } from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';
import AltNavbar from '../components/Navbar/AltNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import { Checkbox, FormControlLabel, Radio, Slider, SliderThumb, styled } from '@mui/material';
import Footer from '../components/Footer/Footer';
import { useRouter } from 'next/navigation';
import FilterProduct from '../components/FilterProduct/FilterProduct';
import useRequest from '@/services/request/request.service';
import ProductSkeleton from '../components/ProductSkeleton/ProductSkeleton';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import useGlobalState from '@/hooks/globalstate.hook';
import LoginModal from '../components/Auth/Login/Login';
import SignupModal from '../components/Auth/SIgnup/Signup';

export default function PropertyForSale() {
  const { makeRequest, isLoading } = useRequest();
  const { isMobile } = useAppTheme();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { logout, isAuthenticated, profile } = useGlobalState();
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const router = useRouter();
  // Searched categories
  const recommendedSearch = [
    {
      header: 'Apartment for Sale',
      items: [
        {
          text: 'Apartment for Sale in UAE',
          link: '',
        },
        {
          text: 'Apartment for Sale in Downtown Dubai',
          link: '',
        },
        {
          text: 'Apartment for Sale in Dubai Land',
          link: '',
        },
        {
          text: 'Apartment for Sale in Fujairah',
          link: '',
        },
        {
          text: 'Apartment for Sale in UAQ',
          link: '',
        },
      ],
    },
    {
      header: 'Hotel Apartment for Sale',
      items: [
        {
          text: 'Hotel Apartment for Sale in Downtown Dubai',
          link: '',
        },
        {
          text: 'Hotel Apartment for Sale in Jumeirah Village',
          link: '',
        },
        {
          text: 'Hotel Apartment for Sale in Abu Dhabi',
          link: '',
        },
        {
          text: 'Hotel Apartment for Sale in Dubai South',
          link: '',
        },
        {
          text: 'Hotel Apartment for Sale in Al Furjan',
          link: '',
        },
      ],
    },
    {
      header: 'Villa for Sale',
      items: [
        {
          text: 'Villa for Sale in Palm Jumeirah',
          link: '',
        },
        {
          text: 'Villa for Sale in Dubai',
          link: '',
        },
        {
          text: 'Villa for Sale in Saadiyat Island',
          link: '',
        },
        {
          text: 'Villa for Sale in Jumeirah Park',
          link: '',
        },
        {
          text: 'Villa for Sale in Downtown Dubai',
          link: '',
        },
      ],
    },
  ];

  // Popular Categories
  const popularCategoryData = [
    {
      imagePath: Assets.apartmentFS,
      header: 'Apartment for Sale',
    },
    {
      imagePath: Assets.villaFS,
      header: 'Villa for Sale',
    },
    {
      imagePath: Assets.commercialFS,
      header: 'Commercial for Sale',
    },
    {
      imagePath: Assets.multiFS,
      header: 'Multiple Units for Sale',
    },
    {
      imagePath: Assets.landFS,
      header: 'Land for Sale',
    },
  ];

  // Featured Properties
  const featuredProperties = [
    {
      imagePath:
        'https://s3-alpha-sig.figma.com/img/151a/b8a9/666b7ed4966d445deed45b3302b7fc86?Expires=1691971200&Signature=TKJHDsd8WzJmGRja7AS1OGNo9Dglr2t4IIsT3BA0jf5Jp-rf0ffVQ8UgRrz2iMeelT3co7s8t1a20BdpE9ikBGVv47Puq5vCpSlo3BvCjqHS3gILVr5CGSITDDGzB6VNaCZdwIlowG8PImw0z6LMlzjrP69a-0RKFQQURn1y3jW1d8XWIGi9IJdVLLFcGzQzKMrmnWKtIpyxgsC4QuokpEFzkkjMF15~bSRAQOiNiFhUq7e9WTq5vvimOHQqU8X1jFstGzMd7P5VWoSM0R~OLWBOHJNRafvce1BeEdo0-qiQowUgKeoWRRyafSdyaTUstakBQ8Kj-omeHZvVZ9ygLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      header: 'AED 190,000',
      description: 'Full Commercial Building with Offices & Showrooms',
      feature: '13,650 Sqft',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://s3-alpha-sig.figma.com/img/efaa/ed4d/15ed61cb9088373c1b0e81030c1b883d?Expires=1691971200&Signature=qvPqWKXI~FXqWqfFNS0qtXtQ4I7jVty1rIE-ImUeORdeXM6MT7lqbF4dUz3JqdW-aykwddplx--ASke~WWqWzmAk5nZmdM0DsWdaQ~4iUg0HYmho00I~Ufdxex3vm8HwVL9HGSfmS823PW8WA1tC3LhZZ3ScotT0OcvCXSqOVBNZ7adLcNWtfR6G-nI619lWf436W5rdOXSrW0SY~YjcRs08murfFftrkGNbd~h2GhtG141u9Oc2apBY4pgxP~K-toYTkM5aew8qzf4TOZ4BY5wcGl6zLJqWcWWPiHMfHXEYQ0l91AwCDXg1~hXdULXVnMCe~lTJ2el4kLIFpf5mAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      header: 'AED 190,000',
      description: '10,000 Sq ft Open Yard Factory + Labor Accommodation',
      feature: '500 KW Power',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://s3-alpha-sig.figma.com/img/0d24/71a1/0405a0b5657b8001b77cc1fdb7307c28?Expires=1691971200&Signature=bV88vJ3WB2-i1TAoGFgP8Wlvsy6mJ4TDrUz~lvv75L3IQsIIz3phqwH6o08jG-jbNP67PdvYF3YxWan0BfhLqhGmzn~AJHZrC5vwC2M0Ziz1LzV8tPxXoFly-im2eOEwPZ-wgiQWrLLyqVHuii1gw92A0GZFPeguA9l3LUbA9gCM5LQYI2T6~D~U6lc43ss7FIAF96iqNdKjU5133G3P8-uL20d3OZ4zxnzS3sWKRs0HtAAXQ7iSSA1w8DBqD8JbgVuVtByv1ZPm3Dr64h6yWG8goiWFddX8F0KZ-rx9xiNy-fmq8CQQ2Ihw2kOnbKlZYr42LA55cwH6K~~0Ay8L0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      header: 'AED 190,000',
      description: 'Fully Furnished Spacious Office with All Amenities',
      feature: '250 Sqft',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://s3-alpha-sig.figma.com/img/1493/a780/7ba32b28220d870b7b36ab03db0c225a?Expires=1691971200&Signature=CwZMe8KghSilFRcX5qPT75LJY0JGEHkJRhGHDRDVAF8O22j~HLWm0xr3z93XUYwlesfZ7rp2VhZgyz3NtRsxB0Clw~pdN5n1EiLt35BNIWsmTDDqhRBPrWM2JWg~NS6HxDOXyR~V-uwQ40gkM4JEo0DGZ15CPGjBaVADmdzmbgr2JMa~buxzJKWOBZ-Nhwi3MaVpD9z~WtyaeUjj3xEYvJ1iecGFfXEteKDFRrkW13n0-j2Xs1s8KUJ2BQoKh--UX0wGbEoCB3YC0Y2bnClRDzBLfFLUZi8HUG0bOQhVnv4EMU3x2G7HF2D2rwGNVTlb-rcvqIL6AEC2imb7UsPxtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      header: 'AED 190,000',
      description: 'Full Commercial Building with Offices & Showrooms',
      feature: '13,650 Sqft',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
  ];

  // Tab switcher
  const [activeTab, setActiveTab] = useState<string>('buy');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

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

  const [catErrorCode, setCatErrorCode] = useState<any>(null);
  const [ads, setAds] = useState([]);

  const getAds = async () => {
    makeRequest({
      url: API.search,
      method: 'POST',
      data: {
        searchBy: 'property-for-sale',
        keyword: '',
        recordsPerPage: 0,
        pageNo: 0,
      },
    })
      .then((res) => {
        const { status, data, message }: any = res?.data;
        setAds(data);
      })
      .catch((error: any) => {
        // toast.error(error?.response?.data?.message);
        setCatErrorCode(error?.response?.data?.code);
      });
  };

  useEffect(() => {
    getAds();
  }, []);

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
          <div className="mt-5">
            <SubNavbar />
          </div>
        </>
      ) : (
        <>
          <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} />
          <SubNavbar />

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
        </>
      )}

      <div className="sm:px-16 px-5 pb-32 pt-5">
        <div className="rounded-[12px] w-full flex flex-col sm:flex-row">
          <div className="sm:rounded-l-[12px] rounded-t-[12px] w-full sm:p-7 p-5 h-[215px] bg-[#FDF1D7]">
            <h1 className="text-[#0A0A0B] sm:text-[18px] text-[4.5vw] font-[700] leading-tight">
              Looking to Sell Your Apartment?
            </h1>
            <p className="text-[#0A0A0B] font-[400] sm:text-[16px] text-[3.5vw] mt-2">
              Create an advertisement to effectively reach a wider audience and establish connections with potential
              buyers.
            </p>
            <button
              onClick={() => router.push('/post-ad')}
              className="bg-[#00134D] rounded-[8px] px-20 py-[16px] text-white leading-none mt-7 text-[14px] font-[400]"
            >
              Post Ad
            </button>
          </div>
          <div className="sm:rounded-r-[12px] rounded-b-[12px] sm:rounded-b-[0px] bg-green-200 w-full sm:h-[215px] h-[100px]">
            <img
              src="/images/sale.jpg"
              className="w-full h-full object-cover sm:rounded-r-[12px] rounded-b-[12px] sm:rounded-b-[0px]"
            />
          </div>
        </div>

        {/* Popular Category */}
        <div className="mt-10 w-full">
          <div>
            <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Categories</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] mt-5">
              {popularCategoryData?.map((product, i) => (
                <CategoryCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Product */}
        <h1 className="sm:text-[28px] text-[6vw] font-[700] text-[#00134D] mt-10">Property for Sale</h1>
        <div className="flex gap-10">
          {/* <div className="mt-5">
            <FilterProduct />
          </div> */}

          {/* Filtered Products */}
          {catErrorCode === 400 ? (
            <div className="w-full h-[200px] flex justify-center items-center">
              <p className="text-[#726C6C] font-[400] sm:text-[16px] text-[4vw] leading-tight">No products found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7 md:mt-10 mt-5">
              {isLoading ? (
                <ProductSkeleton />
              ) : (
                <>
                  {ads?.map((product, i) => (
                    <ProductCard key={i} product={product} />
                  ))}
                </>
              )}
            </div>
          )}
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

      <Footer />
    </FadeIn>
  );
}
