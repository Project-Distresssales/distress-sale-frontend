"use client"

import React, { useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../components/Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import HeroDropDown from '../components/HeroDropDown/HeroDropDown';
import CategoryCard from '../components/CategoryCard/CategoryCard';

export default function Commercial() {
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
            imagePath: "https://s3-alpha-sig.figma.com/img/2366/4fe9/aa7915f115d1a24daf00f89b5a592ce5?Expires=1691971200&Signature=WzPwtPyti1N3-9FI4P2b-euOeOqHfBhQS4oqC2szcPo6tuveqx40e0ZyJbVcQ4xA6xbXa3wWiaXPsPaqYDJioeZ~Mt9~KSp5Y-8DCl6kUxqJVJl6iJwgGfyniBocmFJmA1iNTpVvVbWnoBn~Gh8efJ0pBYus0OWhewbhiEI-JqbjVSd2CfS5ubqSKL1OQ9t85ZzBtPsYV~kC5o5VZws0z7rIO6wBGnWY3LQWN5UAQhi4WTNQAC0G8rdH6xfdV7S6ozlhBpWjOJkbaPHGK2OusSG-38GRgUSDkX~fPUl3IM5rp7SvpPysZwH9M3sKfYbFfydC6QnHXWSEVnIrb1PyRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Warehouse for Sale",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/7361/0319/878c2d43d0be29430432503f083ff4e8?Expires=1691971200&Signature=MqbMJ1yt44EeaB9xagqLog-cMlElu0W0fFoO5wfqM7OLnYeBvMrUvRdtlAUJ1GwuEZ3B0NAmCMZ6~qvEuAW8q~UzwJArE1P~8re~gg5-E11tbYgjU9vGXhdi5c0FkVJaBJDRIU3-OsMmrSxWzmorauB-U73gfpngMuzU15TlFEN5V-~o8Zt9CfR6OwV0xftD7PEHWP3cXU80qwWeY74OiEZv3xx-~Jpi3vdGVW5YUWZAo5lXx6hVDIqYBAOFekhGDBI-o4H4Z776j0xaiiv6osjLi0aKz5VDLwdCR5nqDYN9aHWY8RjWbS8mxP9kqhIF~Isp676Z3g1nYWQjK-ezXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Showroom for Sale",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/4062/a426/eda54879348ff780e9b5a6ea9689d439?Expires=1691971200&Signature=gOEBi9YuvGenstcfNlMloF-zm8oEhtrz-G5rosNazhG-H57E3DgZvlZdNJk9e8NfuGg2~M~-CBgkBY1v7bj7HK1EeWpL-rIoyJs-XgmUgVDnPIa-X3I0BEbq9hCkGbeAG53LWAtDSXSqCp60u0PPA404L5NquHwx6fuWlLWuKx~xGFQPJY5BnAZ5IpY1IVN0kiOnHsIztvwt4pDZSD77eQkiw5wvAdGh~lKfdM1woOBwj~8HuKXVm1gfCA7ZdQoesszvY62gxrEOuUUOEBljypEtupa2BePdcJXBqkIM8pQoX4CC9FHE1wbT-tiZwcI42UjY-h2EPYe8p5dGUF1BAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Shop for Sale",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/19a0/7d7c/0f124b32020863a5736fbd03bbf0b836?Expires=1691971200&Signature=ZuwbfCkjaPI4GNpp2PmVu6eMmbYBpdSjybxdNwawmiGVTl~mciZtoTWt7ljOxR0I4WF3s3dBo600HYUdQx7IGAm9OEpjj1etbXZtbvQCqUEUWM39yLbUZ1vY~zAgHZlv06rXgi5k7FgAB~4N4UlmSljtxHhSlgbTa3MCYuPK58BzprJQhL~vySgXQ18YdfS98ELOzdxoGi5EM-3p0HBC8QTD5Yux6mffXlaEL7A3Pt6Y9vKC-F-9aCB65TyAmRnBAB3YmYTJQbIoO1KvKoVjarz39m0JnEmlW6WSZW6SamuLItSk1VMpvXB6Nk-kFBRBsdF1twYRczXlgco4KvwDgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Studio for Sale",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/e48a/7f07/0fac0dfad3a5f036fb3c2ad11014e55f?Expires=1691971200&Signature=nNVpDtKSm3y5QKioyz1z5Uc1NLUlYV8KFgeiXDSopaZwt69Ogq-LRmIzPjtYzUQRLZKLuO1M13sqjwDg8wUneupph25jhtJ9SQaPzyjClIYdtDir2zZogM-UizAhWGCFZO1vvJwfTzj6N6257PL5PRgqX3IwcdABKeHmEsocM44bsEP3CPF~fgKvSKRhD2naTlXxfZqUUkSslV6gk12MSOkYusWHlsd2UlQXLpQn0IC6ygk43P7m2M6qpSZNb4YMV755udTWw9QRm6f89t5vwMxuVxSOcd6pCmgQiTq5SGdQeoK5FJxKu9WKZBl7HRPTCCWKg0QTWEia1u~vOn4YBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Factory for Sale",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/0378/a098/567cd754018e0b6db8cfd85bb64342f3?Expires=1691971200&Signature=c1xYsFbsy1lunQklCXum9owQeyPg5DSRC-Cy~UhQ0tQHU2AOBmPwV0lBS-t7-dnXMQrvQ8Kg-9avi~hu9UHzUSN~xoyqCrpB0YVWGqMKWSKxmHhSzEWSUHH6ChfolWeWH3iUpJKsJ0DOrzns1eGU67OPsd69NJAblea4oAYqx5ndbB6~LeM6AHML~3Z0Ejp7B-i8KpEvX7OUfjxno3QokoDNpPUZcbBuU0RPUnGKVUb7pBC-2c3p97tZHvOEKp37Z-B5~RWK9OC10ZSnH3H-sRXUQJKFEnYe~su-l9CX5dxMTGWLzQLjI9Xw6tqNTa-3jEykqNcLmR27mOogJ5Oycg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Office for Sale",
        }
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/4c9e/8aae/3efb163c3ca7afec33e976166352289f?Expires=1691971200&Signature=LIYwCICl3GvaLGwk6m0N6w~KCHTbVtHhrY1SNEmAG8YC1LxI1oWtkZvS34recBnIpo5TIISKDLvM5VeNRdQbkcn~Su2TqB2OI9NN9NTJ0lthQIDYU3MUdhkN~rKiPOOw9Fylb7mhqjlnl5GQFJWBNN66wqs4VpIvXBa1Ej1K0KJFn9yxXprciCtgxaRJmjgUq5wKi5bVCFLTSk-6OwD9ETUknbwF6U7pDffVaeai5W2nFSGPbqagczer3WNlXCwRrzEGhbuMsJZ47hRxTyyyDL3RJUocwehbVm6zG7Rj~kjvzsYzeHRS8YU0b1UOoAV0Eh12x8idE8pyKyugRmWsgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Full Commercial Building with Offices & Showrooms",
            feature: "13,650 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/8c6c/84df/3e2cccf630f055bfa05c49363f1253d7?Expires=1691971200&Signature=FxXSqD9KuJoRRYtGjKQb8P3s1LvoEgNiK0O04fpQNZJRrACRLdRqbhGzFvnKIqh3pOMlep79d3ptEAnJzeenQq3B0ZaVqkEsAXF2UDUQ5Ii8BYjcOAHIggoYUFo7LtaaHQc9D-5NJE4fwaI53GGS2aACrw7GqkQlD0eA0LmGwkcrTUOV4AxZ0w1WNBuKyPw~XSaoWJD0dyGWejgu~4ezY60lAYdRUqAdMUHFOvw34rK6zPS1-tNmNOtX0gqtj8qm~XQ3OWljo7FbJalYTtqN~jHg4v891R2Dsgm9a8gZakPSeA5NRfM84JpktCZp3nq2Msysu5MO7Y1fyKBnjLuylA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "10,000 Sq ft Open Yard Factory + Labor Accommodation",
            feature: "500 KW Power",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/6acc/e143/171d5294d1c0f74f9fb6311f07c3ae64?Expires=1691971200&Signature=fEYOmn-uMKfaTtz2CRT9HcLF4B5I5jKLoXhKmUlxJLmfXuXR79v4AcsEIe1gNxA23nJIHZlKyfcG2lSEDWbwXRJNLIwLdPyS1d9I52C4d5qSwZLcEpwQPCs5n8kPew5~fAy-Gt3hCSHbzYJ9t38EnhRq3N4xIt0ezeB9jlquAcRy3j-NsBW3F1q8I23lYOZA4VQ5eMKiaHS5v6yW4aJakIoLHsBDgEfY6j3u2VgCSb5l8eeqMjuGTgwtlcB66sHjHF-oZc0WehzVHxQbeMVDw2U5wJ1LvoWo0eJMwdqQkbFtUgZbjZOt88zawIYCncxPfTwzd1ZERbDt9hOH~JJyyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Fully Furnished Spacious Office with All Amenities",
            feature: "250 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/151a/b8a9/666b7ed4966d445deed45b3302b7fc86?Expires=1691971200&Signature=TKJHDsd8WzJmGRja7AS1OGNo9Dglr2t4IIsT3BA0jf5Jp-rf0ffVQ8UgRrz2iMeelT3co7s8t1a20BdpE9ikBGVv47Puq5vCpSlo3BvCjqHS3gILVr5CGSITDDGzB6VNaCZdwIlowG8PImw0z6LMlzjrP69a-0RKFQQURn1y3jW1d8XWIGi9IJdVLLFcGzQzKMrmnWKtIpyxgsC4QuokpEFzkkjMF15~bSRAQOiNiFhUq7e9WTq5vvimOHQqU8X1jFstGzMd7P5VWoSM0R~OLWBOHJNRafvce1BeEdo0-qiQowUgKeoWRRyafSdyaTUstakBQ8Kj-omeHZvVZ9ygLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Full Commercial Building with Offices & Showrooms",
            feature: "13,650 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/efaa/ed4d/15ed61cb9088373c1b0e81030c1b883d?Expires=1691971200&Signature=qvPqWKXI~FXqWqfFNS0qtXtQ4I7jVty1rIE-ImUeORdeXM6MT7lqbF4dUz3JqdW-aykwddplx--ASke~WWqWzmAk5nZmdM0DsWdaQ~4iUg0HYmho00I~Ufdxex3vm8HwVL9HGSfmS823PW8WA1tC3LhZZ3ScotT0OcvCXSqOVBNZ7adLcNWtfR6G-nI619lWf436W5rdOXSrW0SY~YjcRs08murfFftrkGNbd~h2GhtG141u9Oc2apBY4pgxP~K-toYTkM5aew8qzf4TOZ4BY5wcGl6zLJqWcWWPiHMfHXEYQ0l91AwCDXg1~hXdULXVnMCe~lTJ2el4kLIFpf5mAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "10,000 Sq ft Open Yard Factory + Labor Accommodation",
            feature: "500 KW Power",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/0d24/71a1/0405a0b5657b8001b77cc1fdb7307c28?Expires=1691971200&Signature=bV88vJ3WB2-i1TAoGFgP8Wlvsy6mJ4TDrUz~lvv75L3IQsIIz3phqwH6o08jG-jbNP67PdvYF3YxWan0BfhLqhGmzn~AJHZrC5vwC2M0Ziz1LzV8tPxXoFly-im2eOEwPZ-wgiQWrLLyqVHuii1gw92A0GZFPeguA9l3LUbA9gCM5LQYI2T6~D~U6lc43ss7FIAF96iqNdKjU5133G3P8-uL20d3OZ4zxnzS3sWKRs0HtAAXQ7iSSA1w8DBqD8JbgVuVtByv1ZPm3Dr64h6yWG8goiWFddX8F0KZ-rx9xiNy-fmq8CQQ2Ihw2kOnbKlZYr42LA55cwH6K~~0Ay8L0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
        <div>
            <div className="w-full h-auto pb-32">
                <div className="px-8">
                    <div className="w-full rounded-[15px] h-auto py-[96px] hero-image-bg-sale flex justify-center items-center">
                        <div className="h-auto text-center">
                            <div className="w-full">
                                <h1 className="sm:text-[2.5vw] text-white font-[700] sm:leading-[50px]">Buy or Rent Properties with Distress Sales</h1>
                            </div>

                            <div className="mt-20">
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
                            </div>
                        </div>
                    </div>

                    <div className="px-[80px] py-[100px]">
                        {/* Services */}
                        <div className="">
                            <ServiceCard2 />
                        </div>

                        {/* Popular property sales */}
                        <div className="mt-20 w-full">
                            <div>
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Categories</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {popularCategoryData?.map((product, i) => (
                                        <CategoryCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Featured Properties</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {featuredProperties?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            {/* Popular Search category */}
                            <div className="mt-24">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Recommended Searches</h1>
                                <div className="mt-14 flex justify-between">
                                    {recommendedSearch?.map((category, i) => (
                                        <SearchCategory key={i} header={category.header} item={category.items} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
