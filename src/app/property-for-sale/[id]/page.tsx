"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Assets from '@/constants/assets.constant'
import ApartmentCard from '@/app/components/ApartmentCard/ApartmentCard';
import { AppButton, OutlinedButton } from '@/app/components/Buttons/Buttons';
import LocationSearch from '@/app/components/LocationSearch/LocationSearch';
import PropertyCard from '@/app/components/PropertyCard/PropertyCard';
import SearchCategory from '@/app/components/SearchCategory/SearchCategory';
import TabSwitch from '@/app/components/TabSwitch/TabSwitch';
import { FadeIn } from '@/app/components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import Navbar from '@/app/components/Navbar/Navbar';
import SubNavbar from '@/app/components/Navbar/SubNavbar';
import MobileNavbar from '@/app/components/Navbar/MovileNavbar';
import { usePathname, useRouter } from 'next/navigation';
import { algoliaClient } from '@/constants/api.constant';
import Link from 'next/link';


export default function Properties() {
    const { isMobile } = useAppTheme();
    const pathname = usePathname();
    const router = useRouter()

    // Agolia Search Result
    const [fetchResults, setFetchResults] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const data = ['General', 'Automobile', 'Property for Sale', 'Property for Rent'].map(
        item => ({ label: item, value: item })
    );


    // Get All Page Data or ads
    const handleSearch = async (indexName) => {
        try {
            const hitsPerPage = 100;
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

    // Searched categories
    const recommendedSearch = [
        {
            header: "",
            items: [
                {
                    text: 'Brand New Apartment for Sale',
                    link: '',
                },
                {
                    text: 'Hotel Apartment for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Apartment for Sale',
                    link: '',
                },
            ]
        },
        {
            header: "",
            items: [
                {
                    text: 'Brand New Apartment for Sale',
                    link: '',
                },
                {
                    text: 'Hotel Apartment for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Apartment for Sale',
                    link: '',
                },
            ]
        },
        {
            header: "",
            items: [
                {
                    text: 'Brand New Apartment for Sale',
                    link: '',
                },
                {
                    text: 'Hotel Apartment for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Apartment for Sale',
                    link: '',
                },
            ]
        }
    ];


    // Al Reem Residence
    const alReemResidence = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/cd9a/74ec/cc737b4dd6f238c6a8ad07ed8d40c056?Expires=1693180800&Signature=Oc9H0wY-fh1W9TNuMswT-JhdM0W6Ru0iivSGZMKaz8OWWgMrbL5SHmTr0y7kc7A9TpujdfP4cfqSZeJA2fdGoANK6hjH3qBZOz5JjSYfXFV7q-PvU9bbC5kaNgx-WpTr-xNfGNRtoQTOjhcrGmD8BOvLS43ldYKSQ9ab~VJJz~VE7tiMklUSQsC04~LZLh6Mwbkcf06dnNxwE5zGzCe2uCjPXSEVh40esKlAHL0z137I9w9UJkPbwpTFKUGjCGpeMf5OL4k7uHg1jsGTY1WMFW-HUsvt7DUeLxPqTOlFhMt1scVl4Rizuv4EFsB36W06FxGKcnsMF6821akZ7jVGwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/e445/a6e7/00d5208d197e06c63d3e9bbd1d2b7c16?Expires=1693180800&Signature=VFo7Tuqh~gecChOA4Cm4P-pmxdrZaxwcrEaHOZPUau-d7LXva4VQPOt9uKzuga9vFoNWevZ1I7oZa-Gk07EzU0svgOBAQ8xLEu1mCWNkojMdODXeVhoeFRard0FXAc-ZUEbnTr-m9sUnuFwYN-CSaWn4dotvszymMq0WGY~J6AJ4Jx6QBCjDE1g14z19VJ-ZEeKJO5icjbmJIHk4JOmbQUPotYz7QCi3f1CPmj5W0c0BTJq7vsXv96-mxoyVnaceXXcS-PDC-p9pPRFuIgYXqDyU9XkLrO6b7wqos4qdX1QjbmR8llPPgg4u4t0~z6EiOIgUU45AQfCIlLWcvNCssg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/c67a/7498/d0df58e242e14f320b1b6d0d8f7d1560?Expires=1693180800&Signature=PGku7583pgH2qIcprR-zJfsHGOGKjjReDyAYW17e45cjFM5natAks5NR4aTmd-2KnlIZWL3oe438BN9655W4EIIZ~b8l7dvCUPsZn2q-cTk4BOMjxzhbvshTnDgU3~ZMY~PbhbdPZQB7SnhJOW0--EXm~10JGNLazdYtvH6KS3-AdaN5tI9KYe0LUOYPaUiAbpqu3yC65VefXaWK0XnIKeRBmWW4LB16ueQ0xkvhwNOtOK-hAOm0ZTiIffBw~uq-4czld9qYsRZ9Pz-hD6KCx1VK-iZtOdUAiDA~Xksn7y6knNk05uCNZz4D9KCrzTM~UKcX7vqgX52212BZ6M8v0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
    ]


    // Page Title:
    let pageTitle: string = '';
    let properties: any[] = [];

    if (pathname.includes('residential')) {
        pageTitle = 'Properties for sale';
        properties = propertyForSale;
    } else if (pathname.includes('commercial')) {
        pageTitle = 'Commercial buildings for sale';
        properties = commercial;
    } else if (pathname.includes('land')) {
        pageTitle = 'Lands & plots for sale';
        properties = propertyForSale;
    } else if (pathname.includes('multiple-units')) {
        pageTitle = 'Multiple units for sale';
        properties = propertyForSale;
    }


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
                    <div className="h-auto w-full border border-[#EAECF0] px-[80px] py-5">

                        <div className='flex items-center space-x-3 w-full'>
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Buy
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                            <LocationSearch />
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Residential
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Bed & Baths
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Area (sqft)
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-2 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Price (AED)
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full">
                                <AppButton text="Search" />
                            </div>
                        </div>

                        <div className="flex space-x-5 mt-3">
                            <OutlinedButton text="Check Verified Listings First" withIcon={true} />
                            <OutlinedButton text="Check Properties with Floor Plan First" withIcon={true} />
                        </div>
                    </div>

                    <div className="bg-[fff] w-full h-auto px-[80px] pt-10 pb-20">
                        <h1 className="text-[#101828] text-[1.7vw] font-[500]">{pageTitle}</h1>
                        <div className="flex justify-between items-end">
                            <div className="flex items-center space-x-2 mt-7">
                                <p className="text-[#101828] font-[500] text-[1.1vw]">Completion Status:</p>
                                <div>
                                    <TabSwitch />
                                </div>
                            </div>
                            <div className="relative inline-block">
                                <div>
                                    <button type="button" className="flex border border-[#EAECF0] items-center w-full justify-between gap-x-10 rounded-md bg-white px-[16px] py-[12px] text-[1vw] font-[500]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        <div className="flex items-center space-x-2">
                                            <Image src={Assets.filter} alt="" width={20} height={20} />
                                            <p>Popular</p>
                                        </div>
                                        <Image src={Assets.dropDownArrow} alt="" width={12} height={12} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Locations */}
                        {/* <div className="border border-[#EAECF0] rounded-[5px] px-5 py-[12px] mt-7 flex justify-between items-center">
                            <p className='font-[500] text-[1.1vw] text-[#475467]'>Dubai (2,700)</p>
                            <p className='font-[500] text-[1.1vw] text-[#475467]'>Ajman (2,700)</p>
                            <p className='font-[500] text-[1.1vw] text-[#475467]'>Abu Dhabi (2,700)</p>
                            <p className='font-[500] text-[1.1vw] text-[#475467]'>Abu Dhabi (2,700)</p>
                            <div className='font-[700] uppercase text-[1vw] text-[#415EFF] cursor-pointer'>View All Locations</div>
                        </div> */}

                        {/* Properties */}
                        <div className="mt-7 w-full space-y-7">
                            {properties.map((item: any, i: any) => (
                                <PropertyCard
                                    key={i}
                                    imagePath={item.imageURLs[1]}
                                    name={item.name}
                                    location={item.location}
                                    priceTag={item.price}
                                    type={item.propertyType}
                                    bedCount={0}
                                    bathCount={0}
                                    area={item.size}
                                    call={item.ownerContact.phoneNumber}
                                    email={item.ownerContact.email}
                                    whatsapp={item.ownerContact.whatsAppNumber}
                                    info={item.shortDescription}
                                    viewerCount={0}
                                    pictureCount={0}
                                    verified={item.verified}
                                />
                            ))}
                        </div>


                        {/* Off-Plan Apartments in UAE */}
                        <div className="p-[24px] bg-[#EAECF0] w-full h-auto mt-7 rounded-[10px]"
                            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-[#101828] font-[700] text-[1.4vw]">Al Reem Residence</p>
                                </div>
                                <div>
                                    <Link
                                        href="https://alreem.sa"
                                        target="_blank"
                                        className='
                                          flex justify-center items-center rounded-[5px] font-[700] py-[6px] 
                                          md:px-[40px] px-[20px] text-white md:text-[16px] underline-offset-2 hover:text-white
                                           text-[3.2vw] button-background h-[37px]'
                                    >Learn More</Link>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-[10px] mt-7'>
                                {alReemResidence?.map((item, i) => (
                                    <div key={i} className='w-full h-[364px] rounded-[5px] aspect-ratio-container'>
                                        <Image
                                            src={item.imagePath}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5">
                                <h1 className="text-[#101828] font-[700] text-[1.4vw]">Ready to Move Apartments starting from AED 1.8m</h1>
                                <ul className="grid grid-cols-2 mt-7 text-[1vw] text-[#101828] font-[600] gap-x-[100px] gap-y-[15px] list-disc pl-6">
                                    <li><span className="font-[700]">Features:</span> Stylish, modern condo with open floor plan and upscale amenities.</li>
                                    <li><span className="font-[700]">Financing:</span> Up to 80% financing available.</li>
                                    <li><span className="font-[700]">Convenience:</span> Easy commuting due to proximity to metro.</li>
                                    <li><span className="font-[700]">Proximity:</span> Close to vibrant city center, shopping, and entertainment.</li>
                                </ul>
                            </div>
                        </div>


                        {/* Popular Search category */}
                        {/* <div className="mt-24">
                            <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Searches</h1>
                            <div className="mt-14 flex justify-between">
                                {recommendedSearch?.map((category, i) => (
                                    <SearchCategory key={i} header="" item={category.items} />
                                ))}
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
