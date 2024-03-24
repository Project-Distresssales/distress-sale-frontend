"use client"

import React, { useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import HeroDropDown from '../components/HeroDropDown/HeroDropDown';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useAppTheme from '@/hooks/theme.hook';
import { FadeIn } from '../components/Transitions/Transitions';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import Navbar from '../components/Navbar/Navbar';

export default function Commercial() {
    const { isMobile } = useAppTheme();
    
    // Searched categories
    const recommendedSearch = [
        {
            header: "Shops",
            items: [
                {
                    text: 'Shops for Sale in Abu Dhabi',
                    link: '',
                },
                {
                    text: 'Shops for Sale in Dubai',
                    link: '',
                },
                {
                    text: 'Shops for Rent in Fujairah',
                    link: '',
                },
                {
                    text: 'Shops for Sale in UAQ',
                    link: '',
                },
            ]
        },
        {
            header: "Showrooms",
            items: [
                {
                    text: 'Showrooms for Rent in UAE',
                    link: '',
                },
                {
                    text: 'Showrooms for Sale in UAE',
                    link: '',
                },
            ]
        },
        {
            header: "Warehouse in Abu Dhabi",
            items: [
                {
                    text: 'Warehouse for Sale',
                    link: '',
                },
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Warehouse for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Showroom for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Shop for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Studio for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Factory for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Office for Sale",
        }
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
                    <div className="w-full rounded-[15px] h-auto md:py-[96px] py-10 hero-image-bg-sale flex justify-center items-center">
                        <div className="h-auto text-center">
                            <div className="w-full">
                                <h1 className="md:text-[2.5vw] text-[4vw] text-white font-[700] md:leading-[50px]">Buy or Rent Properties with Distress Sales</h1>
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
                        {/* Services */}
                        {/* <div className="">
                            <ServiceCard2 />
                        </div> */}

                        {/* Popular property sales */}
                        <div className="mt-20 w-full">
                            <div>
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Categories</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {popularCategoryData?.map((product, i) => (
                                        <CategoryCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Featured Properties</h1>
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

                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
