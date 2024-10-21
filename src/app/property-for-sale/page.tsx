'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import HeroDropDown from '../components/HeroDropDown/HeroDropDown';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import Navbar from '../components/Navbar/Navbar';
import { algoliaClient } from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';
import AltNavbar from '../components/Navbar/AltNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import { Checkbox, FormControlLabel, Radio } from '@mui/material';

export default function PropertyForSale() {
  const { isMobile } = useAppTheme();
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
          <AltNavbar />
          <SubNavbar />
        </>
      ) : (
        <>
          {/* <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} /> */}
          <AltNavbar />
        </>
      )}

      <div className="px-16 pb-32">
        <div className="rounded-[12px] w-full flex">
          <div className="rounded-l-[12px] w-full p-7 h-[215px] bg-[#FDF1D7]">
            <h1 className="text-[#0A0A0B] text-[18px] font-[700] leading-tight">Looking to Sell Your Apartment?</h1>
            <p className="text-[#0A0A0B] font-[400] text-[16px] mt-2">
              Create an advertisement to effectively reach a wider audience and establish connections with potential
              buyers.
            </p>
            <button className="bg-[#00134D] rounded-[8px] px-20 py-[16px] text-white leading-none mt-7 text-[14px] font-[400]">
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
        <h1 className='text-[28px] font-[700] text-[#00134D] mt-10'>Property for Sale</h1>
        <div className="flex gap-10">
          <div className="flex flex-col mt-5 divide-y w-[300px]">
            {/* Filter */}
            <div className="pb-3">
              <p className="text-[#0A0A0B] text-[16px] font-[600]">Property Type</p>
              <div className="mt-2">
                {propertyType.map((item, i) => (
                  <div key={i} className="">
                    <FormControlLabel
                      value={item.title}
                      control={<Radio size="small" />}
                      label={item.title}
                      sx={{
                        '.MuiFormControlLabel-label': {
                          fontSize: '14px', // Custom font size for the label
                          fontWeight: '400', // Custom font weight
                          color: '#5A5555', // Custom text color
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#0A0A0B] text-[16px] font-[600]">Purpose</p>
              <div className="mt-2">
                {purpose.map((item, i) => (
                  <div key={i} className="">
                    <FormControlLabel
                      value={item.title}
                      control={<Radio size="small" />}
                      label={item.title}
                      sx={{
                        '.MuiFormControlLabel-label': {
                          fontSize: '14px', // Custom font size for the label
                          fontWeight: '400', // Custom font weight
                          color: '#5A5555', // Custom text color
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#0A0A0B] text-[16px] font-[600]">Price Range</p>
              <div className="mt-2">
                {priceRange.map((item, i) => (
                  <div key={i} className="">
                    <FormControlLabel
                      value={item.title}
                      control={<Radio size="small" />}
                      label={item.title}
                      sx={{
                        '.MuiFormControlLabel-label': {
                          fontSize: '14px', // Custom font size for the label
                          fontWeight: '400', // Custom font weight
                          color: '#5A5555', // Custom text color
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#0A0A0B] text-[16px] font-[600]">Popular Locations</p>
              <div className="mt-2 grid grid-cols-2">
                {popularLocations.map((item, i) => (
                  <div key={i} className="">
                    <FormControlLabel
                      value={item.title}
                      control={<Checkbox size="small" />}
                      label={item.title}
                      sx={{
                        '.MuiFormControlLabel-label': {
                          fontSize: '14px', // Custom font size for the label
                          fontWeight: '400', // Custom font weight
                          color: '#5A5555', // Custom text color
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#0A0A0B] text-[16px] font-[600]">Popular Tag</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {popularTags.map((item, i) => (
                  <div
                    key={i}
                    className="px-[8px] py-[4px] cursor-pointer rounded-full flex justify-center items-center border bg-slate-50"
                  >
                    <p className="leading-none text-[12px] font-[400]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filtered Products */}
          <div className="grid grid-cols-2 gap-7 py-10">
            {featuredProperties?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* <div>
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

      {/* Popular property sales *
              <div className="md:mt-20 w-full">
                <div>
                  <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Sections</h1>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5">
                    {popularCategoryData?.map((product, i) => (
                      <CategoryCard key={i} product={product} />
                    ))}
                  </div>
                </div>

                {/* <div className="mt-16">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Featured Properties</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {featuredProperties?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div> */}

      {/* Popular Search category *
                {/* <div className="mt-24">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Recommended Searches</h1>
                                <div className="md:mt-14 grid md:grid-cols-3 grid-cols-1 gap-[20px]">
                                    {recommendedSearch?.map((category, i) => (
                                        <SearchCategory key={i} header={category.header} item={category.items} />
                                    ))}
                                </div>
                            </div> *
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </FadeIn>
  );
}
