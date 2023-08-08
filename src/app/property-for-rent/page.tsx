"use client"

import React, { useState } from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import HeroDropDown from '../HeroDropDown/HeroDropDown';

export default function PropertyForRent() {
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
            imagePath: "https://s3-alpha-sig.figma.com/img/4c9e/8aae/3efb163c3ca7afec33e976166352289f?Expires=1691971200&Signature=LIYwCICl3GvaLGwk6m0N6w~KCHTbVtHhrY1SNEmAG8YC1LxI1oWtkZvS34recBnIpo5TIISKDLvM5VeNRdQbkcn~Su2TqB2OI9NN9NTJ0lthQIDYU3MUdhkN~rKiPOOw9Fylb7mhqjlnl5GQFJWBNN66wqs4VpIvXBa1Ej1K0KJFn9yxXprciCtgxaRJmjgUq5wKi5bVCFLTSk-6OwD9ETUknbwF6U7pDffVaeai5W2nFSGPbqagczer3WNlXCwRrzEGhbuMsJZ47hRxTyyyDL3RJUocwehbVm6zG7Rj~kjvzsYzeHRS8YU0b1UOoAV0Eh12x8idE8pyKyugRmWsgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Apartment for Rent",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/8c6c/84df/3e2cccf630f055bfa05c49363f1253d7?Expires=1691971200&Signature=FxXSqD9KuJoRRYtGjKQb8P3s1LvoEgNiK0O04fpQNZJRrACRLdRqbhGzFvnKIqh3pOMlep79d3ptEAnJzeenQq3B0ZaVqkEsAXF2UDUQ5Ii8BYjcOAHIggoYUFo7LtaaHQc9D-5NJE4fwaI53GGS2aACrw7GqkQlD0eA0LmGwkcrTUOV4AxZ0w1WNBuKyPw~XSaoWJD0dyGWejgu~4ezY60lAYdRUqAdMUHFOvw34rK6zPS1-tNmNOtX0gqtj8qm~XQ3OWljo7FbJalYTtqN~jHg4v891R2Dsgm9a8gZakPSeA5NRfM84JpktCZp3nq2Msysu5MO7Y1fyKBnjLuylA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Rooms for Rent",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/b26f/1f21/97cd1da5de31b1db46652b3bc714168b?Expires=1691971200&Signature=XM3ZSJjQM4ZTuMikEF3DGHwAK8DeK~DJ9C-Tmbd8gKdeWZoBx2XMv81yiY1bn7xdZWlUPwXh2QYYPUK2NeAESVcRQekaH3aDbbPgCBuTkXnlRivfdjYCt8giOW2aPA9Oe5IhqO1B2aTrMZhzblsFEV9CjxSwSSjdUGVkmCJ3NvpNi9Po55YxEpQsKSWOVmnh~~VUDTcIQTTxOhor5D8-bUUYHCgFG34cgr6IQrHeNapFEy~O3eCXJXtS0Z83NnSwwIANeKSkqXAwmUuOno6gaU2bs0Ik6xvqf6vOO-YPDqSaH4kW7glok0~ug0E9OK50Dipdf8c-bU7DpOS9op708g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Villa for Rent",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/d6ff/3964/22bc849287e1d5faee6632e2fce6abae?Expires=1691971200&Signature=BQIzWDuiRbEEQiarZx-MvuWs2yxwulK8RALmFcZmaiKq1hEzfutWXy3VBsM1DjVZ2qq9b1cqTWxwHuu6QSXGFwuyJHhq27zRG-jXfRvLY2qxQ0uMqoeubEMOadfnwPhbkdBVNrZ4Yp-JgUhLGNlIbpj8yJproqh-tMaBWw31KufD~h1UtDQNoSJhzykBPsumxe65KZ~PfFLYmkzCTfz5DvlJmplhWZHrtki~-MdOpLlNLMhNVh~tgQweCghZ5GKQ0xt-SaX5hfgygw~OJa7fYUlWmEtqxW8rgR4~N9D1hG6YZe-wy8Rywm8VYbATLSu-hRzsZE9BRT0hv4HrgNoNhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Monthly Short Term for Rent",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/243a/9851/68de06a5ac4b2489abb11f970a35d50b?Expires=1691971200&Signature=VZ8oF764HfWwVhoJKzRD4z0KWagJboB6FRznCca15mwkmCKKUWI0IpXV2BIZGNWm-UVIpilOZW48tlj-6Jk-BZ072~HXC1zyZMHPOYlmdm0-1md-ZLigvKMVBSaJhC-Qg6oEQvDScWXZsVgXsmQHyPLe8BAc6spTMg6A0szXaQ-ZFpZiFjVmFPIHd5WTEtjrg9JwMa-esLJf4Bl~I1iIVBq75xTueZG130jJWwviZ~ygs-2AyZ5rHXCFiVwO97nQB8OHoUEMzqvN~OfG3Fn~eWZ92v9~~ClcppjZ0QKMFOu-ca1riYPpZzBJ6ZN12uIuTaFA6~v3owU8aNH7lHbDrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Daily Short Term for Rent",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/a535/e6d5/72c8cf83d8c19e7ce0c0388e2bac17a3?Expires=1691971200&Signature=i6F2KdGOjRYr4W4~gSLCJbD9EErgqnaSw4-okBiM6vbOp8pMtUAIek-A8Wuu4dL8P--voTImyTkC87hAdjy3jdAK3I~-suPOITcz4LBANO3t4he9hFkLqEDGVVZJ7uUE~8b36jNIPozAEpJzhXN6~cVfdU5CsLurpp1IINt8bxrEx5xc3m-mlsW3VcNpXvn3gvi802oNzdip6tkTlLAw0LOcEe3Mamss2DazHx2nNR4VJYYD4b1AV1demXYqWWqETk8lD-GA1qsBURWqcY604FiOJpstI0-DqO9EWfivuf1x~JInkb1G9-H8bq3L8tJlRC140Dg1NAIAOZ1ES2bH6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Commercial for Rent",
            description: "",
            feature: "",
            location: ""
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
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/1493/a780/7ba32b28220d870b7b36ab03db0c225a?Expires=1691971200&Signature=CwZMe8KghSilFRcX5qPT75LJY0JGEHkJRhGHDRDVAF8O22j~HLWm0xr3z93XUYwlesfZ7rp2VhZgyz3NtRsxB0Clw~pdN5n1EiLt35BNIWsmTDDqhRBPrWM2JWg~NS6HxDOXyR~V-uwQ40gkM4JEo0DGZ15CPGjBaVADmdzmbgr2JMa~buxzJKWOBZ-Nhwi3MaVpD9z~WtyaeUjj3xEYvJ1iecGFfXEteKDFRrkW13n0-j2Xs1s8KUJ2BQoKh--UX0wGbEoCB3YC0Y2bnClRDzBLfFLUZi8HUG0bOQhVnv4EMU3x2G7HF2D2rwGNVTlb-rcvqIL6AEC2imb7UsPxtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Full Commercial Building with Offices & Showrooms",
            feature: "13,650 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/1ff3/3d1a/8fde6087db19e94a153f00b80b8411ae?Expires=1691971200&Signature=VM9uiMLwFq2T~fVcNZHzL9T4LCw8ls-P7y9NU0sr2FEr7WVEvBUUo9pcMsKdLMQz8Vc0XjLUWkRXb4VwQS~Yc09BHVkgtjMu6~c-KC3w1tPRoZ~-loLflJgZimwVWb-KOripy1wsLugRktqQSeW-PeH15IQEHH-2ISzUx-VFqbLY56BCFay9MWpuyc-xBt~8TzRESJKZea~oS-QNFa85f-A0rQ06Tqy2SG7Kx8jYLAmcE60915c8o-nxBhbIbQn1n17yL9Ktoe2R6bFLSsuqVUHgra65gpcQCf7DabCY5CAc9sTnWeve90SSuQzdElUO4nmAMbQkweDLIeNQVIqX8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "10,000 Sq ft Open Yard Factory + Labor Accommodation",
            feature: "500 KW Power",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/47d9/e8aa/e5da3169061f9465b4854493c6a90b1c?Expires=1691971200&Signature=W2Rg021zE4UMaHAH2wNFpgZKc1~fbmbKAai1ebjqnbe4fQ2z6ND5IaqDLj8Dzy5b9gYEALdW00g3kFS5k58lVwBGnSR~n~TjC8DIu8aaM6u2djVftFH5pgOrmwx2XqeOibvwi2D4R1SJH9LzwmsZ8DlucL2CcqMszoXT-nFqfCeW9JhCM4LxpF1mjUYqqsFjKBN3GQNZNKS-W3kaYvH49ECJeLhH-SJEGRNlWDPthwzJ1eD0psOKv2NAwfQlCzYxEqvIwYlX8xb2pIo3dBEXKLMQo-sX7SqijvgqthZ-rwQmrE6gx5weNV-9M-wsjR0fbQSYw5ZAQz11KmSPDCEv3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
                                        <ProductCard key={i} product={product} />
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
