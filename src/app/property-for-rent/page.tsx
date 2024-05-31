"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import HeroDropDown from '../components/HeroDropDown/HeroDropDown';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useAppTheme from '@/hooks/theme.hook';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import Navbar from '../components/Navbar/Navbar';
import { algoliaClient } from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';

export default function PropertyForRent() {
    const { isMobile } = useAppTheme();
    
    // Searched categories
    const recommendedSearch = [
        {
            header: "Apartment for Rent",
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
            ]
        },
        {
            header: "Rooms for Rent",
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
            ]
        },
        {
            header: "Villa for Rent",
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
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
          imagePath: Assets.apartmentFS,
          header: 'Apartment for Rent',
        },
        {
          imagePath: Assets.villaFS,
          header: 'Villa for Rent',
        },
        {
          imagePath: Assets.commercialFS,
          header: 'Rooms for Rent',
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
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 190,000",
            description: "Full Commercial Building with Offices & Showrooms",
            feature: "13,650 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 190,000",
            description: "10,000 Sq ft Open Yard Factory + Labor Accommodation",
            feature: "500 KW Power",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 190,000",
            description: "Fully Furnished Spacious Office with All Amenities",
            feature: "250 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
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
            <Navbar />
            <SubNavbar />
          </>
        ) : (
          <>
            <MobileNavbar />
            <SubNavbar />
          </>
        )}
            <div className="w-full h-auto pb-32">
                <div className="md:px-8 px-5">
                <div className="w-full rounded-[30px] h-auto md:py-[96px] py-10 hero-image-bg flex justify-center items-center px-5">
              <img
                src="https://w0.peakpx.com/wallpaper/338/365/HD-wallpaper-dubai-beautiful-city-ultra-architecture-city-modern-design-tower-buildings-glass-skyscrapers-steel-tall-contemporary.jpg"
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

                    <div className="md:px-[80px] py-[100px]">
                        {/* Services */}
                        {/* <div className="">
                            <ServiceCard2 />
                        </div> */}

                        {/* Popular property sales */}
                        <div className="md:mt-20 w-full">
                            <div>
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Categories</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {popularCategoryData?.map((product, i) => (
                                        <CategoryCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            {/* <div className="mt-16">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Featured Properties</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {featuredProperties?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div> */}

                            {/* Popular Search category */}
                            {/* <div className="mt-24">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Recommended Searches</h1>
                                <div className="md:mt-14 grid md:grid-cols-3 grid-cols-1 gap-[20px]">
                                    {recommendedSearch?.map((category, i) => (
                                        <SearchCategory key={i} header={category.header} item={category.items} />
                                    ))}
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
