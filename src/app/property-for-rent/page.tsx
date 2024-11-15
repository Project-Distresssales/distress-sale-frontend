'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Card/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useAppTheme from '@/hooks/theme.hook';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import { algoliaClient } from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';
import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import AltNavbar from '../components/Navbar/AltNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import Footer from '../components/Footer/Footer';
import { useRouter } from 'next/navigation';
import FilterProduct from '../components/FilterProduct/FilterProduct';

export default function PropertyForRent() {
  const { isMobile } = useAppTheme();
  const router = useRouter();

  // Searched categories
  const recommendedSearch = [
    {
      header: 'Apartment for Rent',
      items: [
        {
          text: 'Apartment for Rent in UAE',
          link: '',
        },
        {
          text: 'Apartment for Rent in Downtown Dubai',
          link: '',
        },
        {
          text: 'Apartment for Rent in Dubai Land',
          link: '',
        },
        {
          text: 'Apartment for Rent in Fujairah',
          link: '',
        },
        {
          text: 'Apartment for Rent in UAQ',
          link: '',
        },
      ],
    },
    {
      header: 'Rooms for Rent',
      items: [
        {
          text: 'Rent for Rent in Downtown Dubai',
          link: '',
        },
        {
          text: 'Rent for Rent in Jumeirah Village',
          link: '',
        },
        {
          text: 'Rent for Rent in Abu Dhabi',
          link: '',
        },
        {
          text: 'Rent for Rent in Dubai South',
          link: '',
        },
        {
          text: 'Rent for Rent in Al Furjan',
          link: '',
        },
      ],
    },
    {
      header: 'Villa for Rent',
      items: [
        {
          text: 'Villa for Rent in Palm Jumeirah',
          link: '',
        },
        {
          text: 'Villa for Rent in Dubai',
          link: '',
        },
        {
          text: 'Villa for Rent in Saadiyat Island',
          link: '',
        },
        {
          text: 'Villa for Rent in Jumeirah Park',
          link: '',
        },
        {
          text: 'Villa for Rent in Downtown Dubai',
          link: '',
        },
      ],
    },
  ];

  // Popular Categories
  const popularCategoryData = [
    {
      imagePath: Assets.apartmentFS,
      header: 'Apartment for Rent',
    },
    {
      imagePath: Assets.villaFS,
      header: 'Rooms for Rent',
    },
    {
      imagePath: Assets.commercialFS,
      header: 'Villa for Rent',
    },
    {
      imagePath: Assets.multiFS,
      header: 'Monthly Short Term for Rent',
    },
    {
      imagePath: Assets.landFS,
      header: 'Commercial for Rent',
    },
    {
      imagePath: Assets.multiFS,
      header: 'Daily Short Term for Rent',
    },
  ];

  // Featured Properties
  const featuredProperties = [
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 190,000',
      description: 'Full Commercial Building with Offices & Showrooms',
      feature: '13,650 Sqft',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 190,000',
      description: '10,000 Sq ft Open Yard Factory + Labor Accommodation',
      feature: '500 KW Power',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 190,000',
      description: 'Fully Furnished Spacious Office with All Amenities',
      feature: '250 Sqft',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
  ];

  // Tab switcher
  const [activeTab, setActiveTab] = useState('rent');

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
          {/* <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} /> */}
          <SubNavbar />
        </>
      )}

      <div className="px-16 pb-32 mt-3">
        <div className="rounded-[12px] w-full flex">
          <div className="rounded-l-[12px] w-full p-7 h-[215px] bg-[#FDF1D7]">
            <h1 className="text-[#0A0A0B] text-[18px] font-[700] leading-tight">Looking to Rent Your Apartment?</h1>
            <p className="text-[#0A0A0B] font-[400] text-[16px] mt-2">
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
          <div className="rounded-r-[12px] bg-green-200 w-full h-[215px]">
            <img src="/images/pfs.jpeg" className="w-full h-full object-cover rounded-r-[12px]" />
          </div>
        </div>

        {/* Popular Category */}
        <div className="sm:mt-10 w-full">
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
        <h1 className="text-[28px] font-[700] text-[#00134D] mt-10">Featured Properties</h1>
        <div className="flex gap-10">
          {/* <div className="mt-5">
            <FilterProduct />
          </div> */}

          {/* Filtered Products */}
          {propertyForRent.length > 0 ? (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mt-10 mt-5">
              {propertyForRent?.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          ) : (
            <div className="w-full h-[300px] flex justify-center items-center">
              <p className="text-[18px] text-gray-400 font-[500]">No Property Found!</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </FadeIn>
  );
}
