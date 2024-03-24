"use client"
import React from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import BlueCard from '../components/BlueCard/BlueCard';
import SearchOnly from '../components/SearchOnly/SearchOnly';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { FadeIn } from '../components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import Navbar from '../components/Navbar/Navbar';

export default function PropertyForSale() {
    const { isMobile } = useAppTheme();
    
    // Searched categories
    const popularSearch = [
        {
            header: "Businesses for Sale",
            items: [
                {
                    text: 'Restaurant for Sale',
                    link: '',
                },
                {
                    text: 'Technology Startups for Sale',
                    link: '',
                },
                {
                    text: 'Salon & Spas for Sale',
                    link: '',
                },
                {
                    text: 'Other Businesses for Sale in UAE',
                    link: '',
                },
            ]
        },
        {
            header: "Furnitures for Sale",
            items: [
                {
                    text: 'Office Furniture & Equipment for Sale',
                    link: '',
                },
                {
                    text: 'Home Furniture',
                    link: '',
                },
                {
                    text: 'Wardrobes',
                    link: '',
                },
                {
                    text: 'Dressing Table',
                    link: '',
                },
            ]
        },
        {
            header: "Tickets & Vouchers  for Sale",
            items: [
                {
                    text: 'Events & Concerts Tickets',
                    link: '',
                },
                {
                    text: 'Spa Vouchers',
                    link: '',
                },
                {
                    text: 'Travel Vouchers',
                    link: '',
                },
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Furnitures",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Computer & Networking",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Businesses for Sale",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Books",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Home Appliances",
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "Baby Items",
        }
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 1,550",
            description: "Hp Core i7, 15.6” Screen,  1 TB Storage",
            feature: "Laptop Computers  •  Hp",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 850",
            description: "Unisex Footwear",
            feature: "Sport Shoes",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            header: "AED 3000",
            description: "Wardrobe",
            feature: "Home Accessories",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
    ];

    // Blue card
    const blueCardData = [
        {
            title: "Businesses for Sale",
            data: 60000,
        },
        {
            title: "Furniture & Home Appliamces",
            data: 60000,
        },
        {
            title: "Electronics",
            data: 60000,
        },
        {
            title: "Computers & Networking",
            data: 60000,
        },
        {
            title: "Accessories",
            data: 60000,
        },
    ];


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
                                <h1 className="md:text-[2.5vw] text-[4vw] text-white font-[700] md:leading-[50px]">Your Go-To Destination for Incredible <br /> Savings on a Variety of Products</h1>
                            </div>

                            <div className="mt-20">
                                <SearchOnly />
                            </div>
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
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Popular Categories</h1>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-14 mt-5'>
                                    {popularCategoryData?.map((product, i) => (
                                        <CategoryCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] md:text-[2vw] text-[5vw] font-[700]">Featured Listings</h1>
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
                                    {popularSearch?.map((category, i) => (
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
