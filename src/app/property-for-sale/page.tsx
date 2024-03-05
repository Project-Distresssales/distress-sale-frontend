"use client"

import React, { useEffect, useState } from 'react'
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


export default function PropertyForSale() {
    const { isMobile } = useAppTheme();
    // Searched categories
    const recommendedSearch = [
        {
            header: "Apartment for Sale",
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
            ]
        },
        {
            header: "Hotel Apartment for Sale",
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
            ]
        },
        {
            header: "Villa for Sale",
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
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/f39b/1c9d/aa4c9cbe2b53535572cd23fcd06f561c?Expires=1691971200&Signature=OL2dugPSiEXCT75~qvVMtE3Q~AuFE0zcUQoloQGo2kXfRghDLDJUwiSuUhEW5Ja1rqeMGRqiTfGdn1C2CHt~Uhj1c2fk3JG~cGj6JqnhrygOm5NGgk-w~Ad5BTdbFBmV5cn0K7F~o2Mpujm8w6JQaK5mt8YtYA4QkB3ImJmS3bRH7xGjKHThYhrObt0BNDMbRL4gOK2cwvs4tsUzUTazlqJEft5FHtWzX2~XiuAzvfVHkEXuNSu6SZcc7Sh59LW~ze1lphi9sFrjkaEcTx52-CqqFEh01B7CJA1GBPwAvGy1cZO4eXfeMF7db661lCDW9FToq4iCx0JtNKS4wHeClw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Property for Sale",
        },
        {
            imagePath: "https://superiorrental.ae/wp-content/uploads/2023/12/A730107.jpg",
            header: "Automobile",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/7ca6/9e0e/085c87ab82fbcc9bb2cdf84d93bfefed?Expires=1691971200&Signature=TenK8DoKSmWzaLEdSdVgdkoIj88~5CFQ0tmnZJecXr9qxNUPUIEs-puH0Law9VS0o9SY2JjCYxyXU-CfkKDnWeNEDJ6nOZvMSyEvHYKmX~p9CjsoghgMx2UMi2SFP5x8K2Kne8IOUQdu~hlNRzhtheZACL90TmeDGbWiXgBrM49J2dHLXTQeTIZd580coWAE~LX9DFSjh1pXjtsVaJGDmc2kMLgWwifGsOm23ZBvpKjZHCk1YfsW5wgzA6x72vpfP9cwzm4jdDIZpLqKPjubQKzVlh1QieexxyfXO4c2~7n5VHyA1ERJ2GF--AR~LfR3eCVovEI-114w-5mMshWrsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Property for Rent",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/212f/032c/e0106e378d0593de182ac6f3c575395b?Expires=1691971200&Signature=i-HUMR~3q2S8qFC-ECPfmTXPSJrPQ2daYZ6DojsFq413xGbmXvQkgFjQ5YQ1HMv6RMiluV8KX1rR-GRjvbM8MfZTlKNf-1~1djSHWyLpmP-jonrkOXDh4V8uJT9azbH-82NEXys0KkC2jNIVSKZubycANcWnRuDD-6qd9EMmQkosI3iKzIM~PfTG8cSueBvkQARfmHjmq2KkWKxYbUkkQZF9EJceB3SKb0fjnNKbNi1abYYWSUDtpbbldmWv8ZlddiCGfLFa3bh0gUwXy~avWMqFp9R5usolLxCOW1hqxPSkbR3SLXX7oNyA~JrkKw~zPtU1ZD1yDg~dG0OwEAG8jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Listings",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/4b03/9e8f/bccdbd40bbfc3f7921c73fdd955a0d23?Expires=1691971200&Signature=qWpvQ~1DbdNI0IUrnwtP7C-3SrrFKrlrg2vbmJuqYmVQBSLVWsr9Svb79NNTPol0jzwiamabeM6lEdWQsK~7KW9n6~xI8Uwr7Dkja5WAm5nAH7U8ijbrgS3BDIcLcSEA7gtNyO745MgTJx7N3AC7FqE2CQ5nnc84Fs1FMvyEQr8gzDqQYn8UuBi5n~7XDQAt0wTj5XQKy0uFZyt8tjsliqhViNTp3qqA-rSFiwM3hnsmc6kIuItCueHKaSJUGh8nH70qMt9BBDaIVjusd5xI6OIPBH79VcM5qWeimDZJHVkCjVPqazN3s6~-DAoa4DAT84Z~RxJtzXxyBSOu5ZLSNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Commercial",
        },
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/80ff/1c99/5cff561d073dea46d32c17510d8b3d7d?Expires=1691971200&Signature=XmPt61S4s1bRqZKly2AcIgIeaxj3auSC6emfacsV24x~wV7ltPs24O6ZaE0rErOm7zqtFB9GFVlX5kund2zhq3AtuZ6uHikHiy8~ePx3s8pYGHoA7KlVPzRUIP4o54qbQCfNHx6BRv7GerstPe91nZp51MaRbJ8RWe7FX4rkaMhtrOSiH9jsJjcOpir8F6RY9qZCxzXoVzctQI5-VtUHRwFasifuipkeFkNtHbjp2xf9X5k2HLL-xZKGnxSWXaGcRwcqa-yhiyBJUN8VQs~h5UdrAd68-UWOiXjJ5DLdL1OPddHqxtuBDGKDoaFpN8pT1DKJOM7~16ugf1QTvVTWcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Full Commercial Building with Offices & Showrooms",
            feature: "13,650 Sqft",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/ba39/ff28/9b845e64eaed2709e7ae345695887e03?Expires=1691971200&Signature=PBTLZWVxkNVNB8kQNFI6wJMqRNY-vFBinbE9ooKSEzNnejrYCNq-HWGOdm6yX24htQdD7I-PyaisJVtKoapQLWLiepz6d8Nwvj5eUm3NdGW71rQtXEdwwgohlHY31hG-V55kYoosjfMJ~YSLu6itGb3brSlnN2dTeFGNnMFo8YDxgFtmt8MhmvS1gD3W1cpK9Qmx03r~I0JcUxMG73Bn9g6hzp4V8iW5TyKdIeBtgm3kgE95cibQi~FOxEBPchWQ0OG9ri58JwzyW80pkDCMF1AyQbR5Vvpt5Vmrw7FQS4O5sRMgXOQWqHbK3YduUeXKa3LndCFhoXJdFOQ5tQOYnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
     const [activeTab, setActiveTab] = useState<string>('buy');

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
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Sections</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
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
   </FadeIn>
    )
}
