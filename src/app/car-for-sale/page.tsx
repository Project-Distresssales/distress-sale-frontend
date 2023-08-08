"use client"

import React, { useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import BlueCard from '../components/BlueCard/BlueCard';
import Testimonial from '../components/Testimonial/Testimonial';
import HeroDropDown from '../HeroDropDown/HeroDropDown';

export default function CarsForSale() {
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
            imagePath: "https://s3-alpha-sig.figma.com/img/20de/4b5b/9eb992acd64c51f752d97bd47a5b5ab6?Expires=1691971200&Signature=JbLYtJXNTDWF0W~Znc~ZtaXnN~VKYH6ONjre~HdCZVf3r6uG2PTVz7IeOyk-EikbZ4BHxZwojk6JAvXEHbHNWkhA4WvD-rZOEB4qQLouxWPvccn-Q26WsnmCoGfwgBCkXYBMBGdtummKJGR8PH~YEFVnV4vLjnBUxFf7F-~9owsdpd~oxCzk3wEZGNivOqc6aq0rxrzXucNXl5eY7-yBaQ5En6FG7qbDTwkqsbfDfru-gSo0IXr1j~m3~-6PCKktGYZPAee1vGw4kDNcmivLWelxDUPAJJFDBCLXVLGKm6gY3H52UcxIJw42cdi5vczH5ix~Vw4JZdLbqjFk0YxztA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Used Cars for Sale",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/71bb/38f7/6a32086b0c5ad257c4630c85a502fc6a?Expires=1691971200&Signature=cj7TtOUpsXISZGUBCBFi6HW0JTVwHLNpzJvR2L58ndLpEeUlIE2ZtAor4w8jQdU-DNtwkCwGlpqV0f6nr0P2uEJO6ot5misv3L~MAuydAD~JICXBJlr0gtIlYn8ileVILP~CJyRNwVFleaUPbImuiChUz8rOl6Kdcr0Rn8XP~mff1BysMOcawHfRAaPPLD7OvQ3hzPrDAdsusih~94IMvPTM9f6sJX0owtjpQyChKPJlCWPWhbsjHYFoTp9gMuwBE9joqP8fjwyCUfygQx1UJPrfLfyeJWdEj~clMEl82GEdmE3yJx7QNcVgg9kYP5NJ5OONRXF3fr~cAERdU3yPcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Car Models",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/c4aa/ca5d/3bf652bf945be50c4876304df83bc3ce?Expires=1691971200&Signature=nm~PDYe01GVkliPyMZ786b~MEqha82SPLEKlSVEIAJIi12cT3MTU2MACLGWZsKluTnHD2yguBeazDLJJZ3jR5zs~syjmwVWiWJozMwm~NV~ZtGmV1ssyHzqNS7cWCaDTX6UtJPFp1QXSQJ93Y76JF5GhDtSD8Somf3znlByeogpJhyNI~nfWyIy~vUHHg0qK5CvEHDfRaxIp8nKzaYF136UYlNRIBjsAoopdc58IUID~eKwWV0PdEmfvHy0p2reiwacK9sH33cv14d-eE-0t2bKV~8AXDZ7R9ReXOz-HMufhiobyLRXIw~Q-JSwXn1DIwg6rAuxWQ6OCT8M3uPtwZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Motorbikes",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/793d/499a/51d4e57b828a871dc9ef34340df10d87?Expires=1691971200&Signature=mxUUuE~0fA7CbvdXtT3APTkyqzbk5k8uTM1RlDtALRnMO8147t9xda9I4z-Uy9WWvpuQgGdufekGOfI9u-Env1RB77Lf9EGYPMY3iGtJB0gEznJjPkQIwbCRO9FOsSvX6amFnr0EKJ-TvIqjePU9PqPaQvnFUCEnPnsEMSQ66xqxoBVgHtoh0NRbxskCPBIOdyb8~Wwgi5JerQh3RDMBRp65j5XjX9a~BZ7H80cUlO5zSYUbulrWEDJYmLOUlwXvmwNfjxLaS5rt8MCLsDfYRrK7v9WtI~7Nr4JmaMq747YRbXUCHxyqntmS9xjSuQ1Xm-vqGBneIyjjcEym~FbzgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Car Accessories",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/286b/9d18/2b0bc48ca9d3103f161ab2733fa82adb?Expires=1691971200&Signature=A1mbvluyBBfNxGVAYe1uDnSFZwL9K6Sg8E7Je5DPxgVMCTGWs4~xLcLpHSnKaobBbwlQrf6PQoimWRKmxKBEPyoM6XBci1mMTszIUISiSK~zMv0Hj-NJy3Mf5fHhBTlTRyk3p2GnOr0u81Vmf45ln--ttf0F8aViTNlPTOPUKNgzm5ksqrhBMIib9R55VYqv1cu9Dg5Mf~X~T7q5xtgV3Qgy13FGZBhrUU3hY4ntUffPnEfFJ9WJBa3eBlSQsburR5cBD-ID35XjOjTp-r8ciLjJODjD-TvseKZ5rEzwzdw3j-UiDoF2YgHWQxjq07yfR8GDosPv4IZ2ZA7T04aR5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Car Parts",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/d8d8/420e/caceded2d13da22f3f74c1b02382a489?Expires=1691971200&Signature=q7Ydh1eHzORo68wyjT7i6UqjdJgqMNBJEmBkd6jxi3xkCzAUBmIX9Slz78ue8OXz1EIUDw1INIAHDzKQkmVsQhGTNylQLnN07~TqWecl48zV5iENX3TWfBVumrMCv3q4UTdQ6uW2QgeAaDdRRKMVVTEzYhDlqcTGWYlCT1YHK0NwcrgoQ2WfkGM~8p4XnZ6UUyPDlzDyGNaDzZ8WdhnzXFYUWMFUXz6SjrBdFlfKfvdhVBKBhDZNYCLcfLkvWskTlCHzthW4DRac8MQmRTn6fEbrKP06WMcHYqGN2-LqZM0BI4kXf04U77frlmDn8mCLfI4HmGBOr-qQBTgvk9KggA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Heavy Vehicles",
            description: "",
            feature: "",
            location: ""
        }
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/b09c/312e/1b5c01f9dbdae37083c116ec6d5ae60d?Expires=1691971200&Signature=E2vTkjm5uOYpJOIWME8EWPKBZMWpoTLb3VVugsFhKjARYQfJZmbfsy9UjBl0X40vQqqvz1g8HqjR9SE3thk0AuwCXSd8CJe3uRmT04znJXLIxVv5H2WNOMlWa-FW1KrVkQ4sIGydNw~HbkfDzCunpmcHT-5YatFTr9N8qnR5bG6UNfS-0KwcLR2ZQlthtGyt31pMRPR3E8ErZpeBmdC8kotgUffFuV1mj~eOJLax50j0DDXXUX8ZPCR4R2i-gi1KaV7CihhxDeTQ0o66dSlYraJ4XDLblDLHwSBcyS2yQ0-GaWKfBwxPlOAJyVG9LWoZj9M13~tOKisupq9bDlODaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 1,550",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/c528/502e/f69a6e8b02de5e6ff0174b92c7b7cf62?Expires=1691971200&Signature=nMJePGUKVfvGcLYhdS3mikj~E1AA~5hxUOuJ2haZm73CJoT41hns8TKpv7W9lERosvCUrjLaJ8LDjwe6LClw1Mg7hCcI5zDxlC0C4hCrOeewXYtWEN4mt3xssiL8xzNImLKiCEjjaM3caS9OacdlUNDwh6SlniWfEclyB7ibNdQFPNiQDifCAk~Y1pAWu~79GguThhwEoNZQG05fCqI5wcvAGe0qHFqZ~NIq52bFCM4cT70U1b3IhSGfUiA-D0YbCFhBIXtUNXWEw6PqPgVZCz4qUq9wg2m-Vuq1Afb01T9Ha~fWVzYCGJacvRVeZK2QbHNqPWUBNPxtWz67rsXk9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 850",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/0b2b/3ef5/39be1a58ba170ef07fb3461fc0d430b1?Expires=1691971200&Signature=pr6GOoYbleWYGHnnlXlBaiE774-Y5UgTSx2uOT8fTt5EtA3-I84XOp-9cpK7nJIL5IZJvzOlTqBjWdtdoEnE~MbiwEvyjNC1qzvYM-BHn6Q56LXCOPY5~rSwK-eGKJy7J3iLsw5CSYZtN3zG0I7imXI7sM3bqKuXwFW1LUBzfnKnBobed9OzXym6E7Pe9KM6CCqMZ4WnlYXMFZAyEZzCxENwjiJLCb6lzrigBbtLGW3R0VSM0B2IMG4M~v2A5boui5JGQxJ6AjMfsFMp69IgWbOA3VeLMJPue4RT4Z4DjfgnoOxXR5TkesBPp2kzRL8AyMmiAVxWdev7FWpIi22nAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 3000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/dca6/6ab6/dfae01a3a8c073cb0cc969a251a7b57a?Expires=1691971200&Signature=D2r0ddyqA7FssyT8HEMZDUAjlAUUifY9SXfk7nW0~Wb3jLZxp6hgCV~cVhkjAYo4NU432BUr~E2Rt2bvAYMazS1hLHrf1Z7Mp9pI9LRb8iB560dEzHPc2UqY6o~ZOb9UdLR~pDZk7cwYWlv~hkUYVovGcMNW3mLgFZlNgTs7yyFHbuyy3Nj5IrxvLPDQMUBOEtvmsl2VYxvbP37qnBW9vPz7yOk~qqUaVLwaa-Mb-Odd7IX4SkYG-4xhDaQcPGmGxnXc1x8UhhOH7jFiyzc0V2Yrj-pT47drRdOj9Skimywsa3RaDWM85izhcySvEDSAam-qqdBBorYLipiaytCb3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 20,000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/ae6d/6f1e/968b45e88dbab7ad4d78f4cf0fc13f14?Expires=1691971200&Signature=UuVr7KRZM1g39jS6CWOhI~mJaOFLmeeA8nE021f8uRZtvhzdz153ytfL-nhNZSB4tFexEkJfcYMxYW~Rwux8ON42t7zbAF014gSPca5XkUcQKuBK03e9bgW59MbkQ54vpy29ALD1ilV-3KOa9QTtd5f-MNV2AilZX8SQ2m8qBEr9wzmk-r546-u4Wgv1J9HzkUsYQPUG~XXjHm3agYRpFF-DsSWwi8KALLgCQ9PoiwxxchQ380XiV~2CGUf8JbjNAiYyDyxODSTN6Pj1V-UPywmci793nu2x4y-y-SX3NcRb5zWwSsoB-lyBlad4kSPfwXX1LGh9dJLjhnHA1DIZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Used Chevrolet Camaro Coupe ZL1 2021",
            feature: "Automatic •  40,000 Km",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/ae6d/6f1e/968b45e88dbab7ad4d78f4cf0fc13f14?Expires=1691971200&Signature=UuVr7KRZM1g39jS6CWOhI~mJaOFLmeeA8nE021f8uRZtvhzdz153ytfL-nhNZSB4tFexEkJfcYMxYW~Rwux8ON42t7zbAF014gSPca5XkUcQKuBK03e9bgW59MbkQ54vpy29ALD1ilV-3KOa9QTtd5f-MNV2AilZX8SQ2m8qBEr9wzmk-r546-u4Wgv1J9HzkUsYQPUG~XXjHm3agYRpFF-DsSWwi8KALLgCQ9PoiwxxchQ380XiV~2CGUf8JbjNAiYyDyxODSTN6Pj1V-UPywmci793nu2x4y-y-SX3NcRb5zWwSsoB-lyBlad4kSPfwXX1LGh9dJLjhnHA1DIZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            image: "https://s3-alpha-sig.figma.com/img/59ca/ddab/10ffa886e754cdc4bef99ffe883b1527?Expires=1691971200&Signature=RsDJGCH3qTwUByx4LD4B~KbBPLQ1L6JmdPhpDHVaDVtmINa3veZifqhUjsjp1xPOOVhsA1nbzz4C-KinfasyxBEwuAh4ykHl8qFGjag4s7km3zoEQMbfJkos71UMk-OYHvpkZtmOY~suvVTXhSnFiCxh~OWyuSUJwfEsxJ2lX~nSI-9R8zVTUlbJpvaLV~qksi6WqI4bkzNyoeidk1dll78PVnqfzzON-SvGKSN12MJ5bCUYRfjvscQnddnLpI37WWhzOZZFY7IwXM9dWT0JSQZAW3cH9ef5ocqb9OQORFzZrUL2XFTufcHnjMT~lcb-Ix3tC6gnf48KMOgNcVAEEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: "“Distress Sale has been my go-to platform for a while now, and I can't get enough of it. Buying and selling cars here is addictive! The variety and deals are unbeatable, and it's like a treasure hunt every time I log on. Planning my next car purchase has never been more thrilling!”",
            name: 'Rachel Gray'
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/3056/a906/58130edc35ae3fffebd77e8d6d52a057?Expires=1691971200&Signature=fm9KSYyU6VTFrL1giIbIfcyJHfaT1CHPzvIVKNp7kzBH~lyzIiLTCLJ0zcBi3Vu3df7-~hd9A9O3dXRKWMWdqtOyRvXzPqWwxG8N4IfCK1kqYxs8P30GCdZiAPe62CHYCiSfoArck6muaRAcnma9HwtVt~iYWHWGP7pOEKtON~B1xxFclVzt79UI6KoxxRWkCWb4cyI~sKtvDVa3ph6-bV4O2xJWd3q1-SrwDHFBtmEfO6OJYXSULtNUTC6D60x6hJvfXjqneNOs1joV4HxQLz8sU9982kfnAupNzDMMxLSZSlDySGPjtKCAL8hAbT06EyfTXkot5C5yjUGGiQzw4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: `“Distress Sale has been a game-changer for me. The speed and excitement of the process keep me coming back every day. I've had countless successful deals, and it's become an essential part of my life. Thank you, Distress Sale, for making car buying so fast and enjoyable!"`,
            name: 'Richard Davison'
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/aff4/37a2/2fbb15678f6443be03f15b5010137dcb?Expires=1691971200&Signature=epH5c8encGjTnLbvpyOH1d9IazUP67CXLdSdGkjBjCR0lendwT5cYi9q1szoHpr-m~iOEk8O2VQeTLMAfzUNqk52K0M~vOVzGgCRnTaqqeUOTQJhUt3iOV1NBkJlqHOnsC1x9I5LTppKmwy9NKs~DLMUuVflZRQk7cIQt3st-gI5zvVg-HmvZ5UyAMygSEX4Jlhxyl4UQls6wkQfliEbAJ9rgP5ZQfPFEXzGPGlTYR2w~y~nG9uROzF6ecVcfZsJnGFnQr7f7IjsnCecxTI~-Tb5-FZlRC3tFRN06DNCBNM8yfO957JkbNqvtHymnywh4ObVIKz8aFASdizhaHwY9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: `"I've been hooked on Distress Sale and it's been an incredible journey. I've lost count of how many cars I've bought and sold through the platform. The excitement of planning and finding my next dream car keeps me logging on every day. Fast and fun – that's what Distress Sale is all about!"`,
            name: 'Nell May'
        },
    ]


    // Tab switcher
    const [activeTab, setActiveTab] = useState('buy');

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
                                <h1 className="sm:text-[2.5vw] text-white font-[700] sm:leading-[50px]">Your one-stop marketplace for buying and <br /> selling high-quality vehicles.</h1>
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
                        {/* Services card */}
                        <div className="flex space-x-3">
                            {blueCardData.map((item, i) => (
                            <BlueCard key={i} item={item} />
                            ))}
                        </div>

                        {/* Popular property sales */}
                        <div className="mt-20 w-full">
                            <div>
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Categories</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {popularCategoryData?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Featured Cars</h1>
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

                            {/* Testimonials */}
                            <div className="mt-24">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Testimonials</h1>
                                <div className="mt-14 flex space-x-3">
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
    )
}
