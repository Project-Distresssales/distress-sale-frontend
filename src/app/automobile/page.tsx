'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Card/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useAppTheme from '@/hooks/theme.hook';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import { algoliaClient } from '@/constants/api.constant';
import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import AltNavbar from '../components/Navbar/AltNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import Footer from '../components/Footer/Footer';
import FilterProduct from '../components/FilterProduct/FilterProduct';
import { useRouter } from 'next/navigation';

export default function CarsForSale() {
  const { isMobile } = useAppTheme();
  const router = useRouter();

  

  // Popular Categories
  const popularCategoryData = [
    {
      imagePath: '/images/car-1.jpeg',
      header: 'Used Cars for Sale',
    },
    {
      imagePath: '/images/car-2.jpeg',
      header: 'Car Models',
    },
    {
      imagePath: '/images/car-3.jpeg',
      header: 'Motorbikes',
    },
    {
      imagePath: '/images/car-4.jpeg',
      header: 'Car Accessories',
    },
    {
      imagePath: '/images/car-5.jpeg',
      header: 'Car Parts',
    },
    {
      imagePath: '/images/car-6.jpeg',
      header: 'Heavy Vehicles',
    },
  ];

  // Featured Properties
  const featuredProperties = [
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 3000',
      description: 'Used Chevrolet Camaro Coupe ZL1 2021',
      feature: 'Automatic •  40,000 Km',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 20,000',
      description: 'Used Chevrolet Camaro Coupe ZL1 2021',
      feature: 'Automatic •  40,000 Km',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 190,000',
      description: 'Used Chevrolet Camaro Coupe ZL1 2021',
      feature: 'Automatic •  40,000 Km',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      header: 'AED 30,000',
      description: 'Used Chevrolet Camaro Coupe ZL1 2021',
      feature: 'Automatic •  40,000 Km',
      location: 'Shams Abu Dhabi, Al Reem Island',
    },
  ];

  // Blue card
  const blueCardData = [
    {
      title: 'Cars',
      data: 0,
    },
    {
      title: 'Number Plates',
      data: 0,
    },
    {
      title: 'Auto Accessories & Parts',
      data: 0,
    },
    {
      title: 'Motorcycles',
      data: 0,
    },
    {
      title: 'Boats',
      data: 0,
    },
    {
      title: 'Heavy Vehicles',
      data: 0,
    },
  ];

  // Testimonies
  const testimonies = [
    {
      image:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:
        'I found myself in need of a quick car sale due to a sudden move for work. SwiftCarDeals made it so easy. Their online system was user-friendly, and within hours of submitting my information, I had an offer. The next day, they picked up my car and handed me a check. The whole experience was efficient and stress-free, exactly what I needed during a hectic time. Highly recommend for anyone needing to sell fast.',
      name: 'Rachel Gray',
    },
    {
      image:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: `“Distress Sale has been a game-changer for me. The speed and excitement of the process keep me coming back every day. I've had countless successful deals, and it's become an essential part of my life. Thank you, Distress Sale, for making car buying so fast and enjoyable!"`,
      name: 'Richard Davison',
    },
    {
      image:
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: `"I've been hooked on Distress Sale and it's been an incredible journey. I've lost count of how many cars I've bought and sold through the platform. The excitement of planning and finding my next dream car keeps me logging on every day. Fast and fun – that's what Distress Sale is all about!"`,
      name: 'Nell May',
    },
  ];

  // Tab switcher
  const [activeTab, setActiveTab] = useState('buy');

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

  const propertyType = [
    {
      title: 'Apartments for Sale',
      active: true,
    },
    {
      title: 'Commercial Building for Sale',
      active: false,
    },
    {
      title: 'Multiple Units for Sale',
      active: false,
    },
    {
      title: 'Land for Sale',
      active: false,
    },
    {
      title: 'Residential Building for Sale',
      active: false,
    },
    {
      title: 'Townhouse for Sale',
      active: false,
    },
  ];

  const purpose = [
    {
      title: 'Buy',
      active: true,
    },
    {
      title: 'Sell',
      active: true,
    },
  ];

  const priceRange = [
    {
      title: 'All Price',
      active: true,
    },
    {
      title: 'Under AED20',
      active: false,
    },
    {
      title: 'AED100 to AED300',
      active: false,
    },
    {
      title: 'AED300 to AED500',
      active: false,
    },
    {
      title: 'AED500 to AED1,000',
      active: false,
    },
    {
      title: 'AED1,000 to AED10,000',
      active: false,
    },
  ];

  const popularLocations = [
    {
      title: 'Dubai',
      active: true,
    },
    {
      title: 'Abu Dhabi',
      active: false,
    },
    {
      title: 'Al Ain',
      active: false,
    },
    {
      title: 'Ajman',
      active: false,
    },
    {
      title: 'Sharjah',
      active: false,
    },
    {
      title: 'Fujairah',
      active: false,
    },
    {
      title: 'Umm Al Quwain',
      active: false,
    },
    {
      title: 'Ras Al Khaimah',
      active: false,
    },
  ];

  const popularTags = [
    {
      title: 'Game',
      active: true,
    },
    {
      title: 'iPhone',
      active: false,
    },
    {
      title: 'TV',
      active: false,
    },
    {
      title: 'Asus Laptops',
      active: false,
    },
    {
      title: 'Macbook',
      active: false,
    },
    {
      title: 'SSD',
      active: false,
    },
    {
      title: 'Graphics Card',
      active: false,
    },
    {
      title: 'Microwave',
      active: false,
    },
    {
      title: 'Smart TV',
      active: false,
    },
  ];

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
            <h1 className="text-[#0A0A0B] text-[18px] font-[700] leading-tight">Looking to Buy or Rent a car?</h1>
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
        <h1 className="text-[28px] font-[700] text-[#00134D] mt-10">Featured cars</h1>
        <div className="flex gap-10">
          {/* <div className="mt-5">
            <FilterProduct />
          </div> */}

          {/* Filtered Products */}
          {automobile.length > 0 ? (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mt-10 mt-5">
              {automobile?.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          ) : (
            <div className="w-full h-[300px] flex justify-center items-center">
              <p className="text-[18px] text-gray-400 font-[500]">No Product Found!</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </FadeIn>
  );
}
