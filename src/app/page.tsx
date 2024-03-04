"use client"

import React, { useEffect, useState } from 'react'
import Assets from '@/constants/assets.constant'
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter'
import ServiceCard from './components/ServiceCard/ServiceCard'
import SearchCategory from './components/SearchCategory/SearchCategory'
import VerifyUserBadge from './components/VerifyUserBadge/VerifyUserBadge'
import ProductCard from './components/Card/ProductCard'
import Footer from './components/Footer/Footer'
import useAppTheme from '@/hooks/theme.hook'
import MobileNavbar from './components/Navbar/MovileNavbar'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/Navbar/SubNavbar'
import { FadeIn } from './components/Transitions/Transitions'
import { algoliaClient } from '@/constants/api.constant'

export default function Home() {
  const { isMobile } = useAppTheme();
  const services = [
    {
      header: "Listings",
      text: "Distress Sales allows users post classified ads. You can buy, sell, and advertise properties and products with ease.",
      buttonText: "Check Market Insights",
      iconPath: Assets.listingWhite
    },
    {
      header: "Market Insights",
      text: "Gain valuable market insights by exploring accurate market prices, ensuring informed decision-making and the best deals.",
      buttonText: "Post Ad",
      iconPath: Assets.insightWhite
    },
    {
      header: "Diverse Categories",
      text: "There are wide variety of categories to choose from, offering an extensive selection of exclusive deals to explore.",
      buttonText: "Explore",
      iconPath: Assets.categoryWhite
    },
  ]

  // Searched categories
  const popularCategories = [
    {
      header: "Properties for Sale in UAE",
      items: [
        {
          text: 'Apartment for Sale',
          link: '',
        },
        {
          text: 'Land for Sale',
          link: '',
        },
        {
          text: 'VIlla for Sale',
          link: '',
        },
        {
          text: 'Penthouse for Sale',
          link: '',
        },
        {
          text: 'Residential Plot for Sale',
          link: '',
        },
      ]
    },
    {
      header: "Cars in Dubai",
      items: [
        {
          text: 'Used Cars in Dubai',
          link: '',
        },
        {
          text: 'Motorcycles',
          link: '',
        },
        {
          text: 'Toyota',
          link: '',
        },
        {
          text: 'Nissan Patrol',
          link: '',
        },
        {
          text: 'Chevrolet',
          link: '',
        },
      ]
    },
    {
      header: "Villas in Abu Dhabi",
      items: [
        {
          text: 'Saadiyat Island',
          link: '',
        },
        {
          text: 'Al Reef',
          link: '',
        },
        {
          text: 'Khalifa City',
          link: '',
        },
        {
          text: 'MBZ City',
          link: '',
        },
        {
          text: 'Al Raha Gardens',
          link: '',
        },
      ]
    }
  ];


  // Searched categories 2
  const popularCategories2 = [
    {
      header: "Business for Sale in UAE",
      items: [
        {
          text: 'Restaurants',
          link: '',
        },
        {
          text: 'Salon',
          link: '',
        },
        {
          text: 'Technology Startups',
          link: '',
        },
        {
          text: 'Spas',
          link: '',
        },
        {
          text: 'Health & Fitness',
          link: '',
        },
      ]
    },
    {
      header: "Home Appliances",
      items: [
        {
          text: 'Hair Conditioners',
          link: '',
        },
        {
          text: 'Refrigerators',
          link: '',
        },
        {
          text: 'Vacuum Cleaner',
          link: '',
        },
        {
          text: 'Washing Machine',
          link: '',
        },
        {
          text: 'Ovens',
          link: '',
        },
      ]
    },
    {
      header: "Others",
      items: [
        {
          text: 'Furnitures',
          link: '',
        },
        {
          text: 'Tickets & Vouchers',
          link: '',
        },
        {
          text: 'Collectibles',
          link: '',
        },
        {
          text: 'Baby Items',
          link: '',
        },
        {
          text: 'Sports',
          link: '',
        },
      ]
    }
  ];



  // Agolia Search Result
  const [query, setQuery] = useState<string | any>('');
  const [results, setResults] = useState<any>([]);
  const [fetchResults, setFetchResults] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const data = ['Automobile', 'Commercial', 'Property for Sale', 'Property for Rent'].map(
    item => ({ label: item, value: item })
  );


  // Get All Page Data or ads
  const handleSearch = async (indexName) => {
    try {
      const hitsPerPage = 1000;
      const algoliaIndex = algoliaClient.initIndex(indexName);
      const { hits } = await algoliaIndex.search('', { // Empty query
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
      <div className="overflow-x-hidden">
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
            <div className="w-full md:rounded-[15px] rounded-[10px] h-auto md:py-[96px] py-10 hero-image-bg flex justify-center items-center">
              <div className="h-auto text-center">
                <div className="w-full">
                  <h1 className="md:text-[2.5vw] text-[4vw] text-white font-[700] md:leading-[50px]">The Ultimate Affordable Marketplace <br /> for Buying, Renting & Selling</h1>
                  <p className='text-white md:text-[1.3vw] text-[3vw] font-[700] mt-8'>Explore the Best Deals: Discover, Connect, Transact</p>
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
                      {results && results?.map((item, i) => (
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
                <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular Search Categories</h1>
                <div className="md:mt-14 mt-7 md:flex md:justify-between grid grid-cols-2 gap-x-5 gap-y-10">
                  {popularCategories?.map((category, i) => (
                    <SearchCategory key={i} header={category.header} item={category.items} />
                  ))}
                </div>
                <div className="border-[0.2px] my-14 w-full border-[#EAECF0]" />
                <div className="md:flex md:justify-between grid grid-cols-2 gap-x-5 gap-y-10">
                  {popularCategories2?.map((category, i) => (
                    <SearchCategory key={i} header={category.header} item={category.items} />
                  ))}
                </div>
              </div>

              {/* Verification */}
              <div className="mt-20">
                <VerifyUserBadge />
              </div>

              {/* Popular property sales */}
              <div className="mt-20 w-full">
                <div>
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Property for Sale</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {propertyForSale?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Used Cars for Sale</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {automobile?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>

                {/* <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Listings</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {automobile.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div> */}

                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Property for Rent</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {propertyForRent?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <h1 className="text-[#101828] md:text-[2vw] text-[4.5vw] font-[700]">Popular in Commercial</h1>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-7'>
                    {commercial?.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
