"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import BlueCard from '../components/BlueCard/BlueCard';
import Testimonial from '../components/Testimonial/Testimonial';
import HeroDropDown from '../components/HeroDropDown/HeroDropDown';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useAppTheme from '@/hooks/theme.hook';
import Navbar from '../components/Navbar/Navbar';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import { FadeIn } from '../components/Transitions/Transitions';
import { algoliaClient } from '@/constants/api.constant';

export default function CarsForSale() {
    const { isMobile } = useAppTheme();

    // Searched categories
    const recommendedSearch = [
        {
            header: "Popular Cars in UAE",
            items: [
                {
                    text: 'Chevrolet',
                    link: '',
                },
                {
                    text: 'BMW',
                    link: '',
                },
                {
                    text: 'Ford Mustand',
                    link: '',
                },
                {
                    text: 'Nissan Patrol',
                    link: '',
                },
                {
                    text: 'Toyota HIlux',
                    link: '',
                },
            ]
        },
        {
            header: "Used Cars for Sale in UAE",
            items: [
                {
                    text: 'Used Dodge Charger 2022',
                    link: '',
                },
                {
                    text: 'Used Nissan Altima 2018',
                    link: '',
                },
                {
                    text: 'Used Chevrolet Captiva 2023',
                    link: '',
                },
                {
                    text: 'Used Car for Sale in Dubai',
                    link: '',
                },
                {
                    text: 'Used Car for Sale in Abu Dhabi',
                    link: '',
                },
            ]
        },
        {
            header: "Popular Car Brands",
            items: [
                {
                    text: 'Ford',
                    link: '',
                },
                {
                    text: 'Mitsubishi',
                    link: '',
                },
                {
                    text: 'Hyundai',
                    link: '',
                },
                {
                    text: 'Toyota',
                    link: '',
                },
                {
                    text: 'Nissan',
                    link: '',
                },
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Used Cars for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Car Models",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Motorbikes",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Car Accessories",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Car Parts",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Heavy Vehicles",
        }
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 1,550",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 850",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 3000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 20,000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 190,000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 30,000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
    ];


    // Blue card
    const blueCardData = [
        {
            title: "Cars for Sale",
            data: 60000,
        },
        {
            title: "Auto Accessories & Parts",
            data: 60000,
        },
        {
            title: "Car Models",
            data: 60000,
        },
        {
            title: "Vehicle Types",
            data: 60000,
        },
    ];


    // Testimonies
    const testimonies = [
        {
            image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "“Distress Sale has been my go-to platform for a while now, and I can't get enough of it. Buying and selling cars here is addictive! The variety and deals are unbeatable, and it's like a treasure hunt every time I log on. Planning my next car purchase has never been more thrilling!”",
            name: 'Rachel Gray'
        },
        {
            image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: `“Distress Sale has been a game-changer for me. The speed and excitement of the process keep me coming back every day. I've had countless successful deals, and it's become an essential part of my life. Thank you, Distress Sale, for making car buying so fast and enjoyable!"`,
            name: 'Richard Davison'
        },
        {
            image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: `"I've been hooked on Distress Sale and it's been an incredible journey. I've lost count of how many cars I've bought and sold through the platform. The excitement of planning and finding my next dream car keeps me logging on every day. Fast and fun – that's what Distress Sale is all about!"`,
            name: 'Nell May'
        },
    ]


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
  const categories = categoriesData['categories'] || [];


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
        <div>
            <div className="w-full h-auto pb-32">
                <div className="md:px-8 px-5">
                    <div className="w-full rounded-[15px] h-auto md:py-[96px] py-10 hero-image-bg-sale flex justify-center items-center">
                        <div className="h-auto text-center">
                            <div className="w-full">
                                <h1 className="md:text-[2.5vw] text-[4vw] text-white font-[700] md:leading-[50px]">Your one-stop marketplace for buying and <br /> selling high-quality vehicles.</h1>
                            </div>

                            {/* <div className="mt-20">
                            <HeroDropDown
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    handleTabClick={handleTabClick}
                                    defaultOptionState={activeTab === "rent" ? 'Rent' : 'Buy'}
                                    defaultOptionPropertyType="Residential"
                                    defaultOptionType="Bed & Baths"
                                    defaultOptionFeature="Area (sqft)"
                                    defaultOptionPrice="Price (AED)"
                                />
                            </div> */}
                        </div>
                    </div>

                    <div className="md:px-[80px] md:py-[100px] py-[70px]">
                        {/* Services card */}
                        <div className="flex space-x-3 overflow-x-auto">
                            {blueCardData.map((item, i) => (
                            <BlueCard key={i} item={item} />
                            ))}
                        </div>

                        {/* Popular property sales */}
                        <div className="mt-20 w-full">
                        <div>
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Sections</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {popularCategoryData?.map((product, i) => (
                                        <CategoryCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Featured Cars</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {featuredProperties?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            {/* Popular Search category */}
                            <div className="mt-24">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Recommended Searches</h1>
                                <div className="md:mt-14 grid md:grid-cols-3 grid-cols-1 gap-[20px]">
                                    {recommendedSearch?.map((category, i) => (
                                        <SearchCategory key={i} header={category.header} item={category.items} />
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="mt-24">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Testimonials</h1>
                                <div className="md:mt-14 flex space-x-5 overflow-x-auto bg-white">
                                    {testimonies?.map((testimony, i) => (
                                        <Testimonial key={i} testimony={testimony} />
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
