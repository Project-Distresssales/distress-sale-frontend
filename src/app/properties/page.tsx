import React from 'react'
import Image from 'next/image';
import Assets from '@/constants/assets.constant'
import LocationSearch from '../components/LocationSearch/LocationSearch';
import { AppButton, OutlinedButton } from '../components/Buttons/Buttons';
import TabSwitch from '../components/TabSwitch/TabSwitch';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import ApartmentCard from '../components/ApartmentCard/ApartmentCard';
import SearchCategory from '../components/SearchCategory/SearchCategory';

export default function Properties() {

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



    // Property Cards data
    const properties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/3439/9ab2/c59eaf6a3fe8e10320cf8bea74208689?Expires=1693180800&Signature=DAX1YoLj4DXO~rCmIoxc0t4c9-Dzb9XjiFpmtHtpB8SeG-kiFuvHe~0ONCyK-slROwDPCu48I6IUJcsIOsl5GCtTvmy0v72p0ndWY4B4odQgnqChpsD76A1uQre9szuyhqN4SDzjjFybW~gVQdJpXvyIrM5qa4Y3mEQZtYcPQ0FViNoIqsoJdjqfYhi7zHaPBaWlizzahBCKOAwD7hXccO6dgyEbCstQERNy2paOfEo2v8aT9mv5hCuyafIHNh2scuoOY1UDke-pWl4cjxJJQMzSe~j8O0xc6Qz4PDQPRz8hSPB7N1s4s9Gl7zX8lwrEM9nXbcZcBy~yyHDYI82VaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "Luxurious Standalone Villa - Single Row & Spacious Villa with Pool",
            location: "Shams Abu Dhabi, Al Reem Island",
            priceTag: 190000,
            type: "Villa",
            bedCount: 6,
            bathCount: 6,
            area: 4.898,
            callNumber: "+2349138667895",
            emailAddress: "godwinolele@gmail.com",
            whatsappNumber: "+2349138667895",
            info: "This property was last visited by the agent on August 9th.",
            propertyViewers: 100,
            pictureCount: 12,
            verified: true,
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/fa42/bce7/b44a541999e57b9c19d262b6952d64f6?Expires=1693180800&Signature=A661pN1EipSvnLM445rCe1KP9BfI2MbBFxGPnIRaOndSjyD~9ET2weP0dhC-AVc7X0WkakECzn2ygvlwTMYi7bkZkF9UhvDhsrNcDkHvO3sA6-CRuzuWi7GOcnyoaJ1DBCJw0Oe4~Pil5hMp9twmo5P~Ktwd7Zf9bTwleBjy7SGvxxbXFi6wLrADzAiMkNI7hj-x0pZIMM1ck2M0NOB9PYoQ6R~jHeqsW5DcvRuTgJ6aXhY85rMA1mpGR99AuoyGythjqtIanWYEqYjJ9WKH067n9RphSTMganDLbcZr5A9510X63I52-Qm6yzXgE3G6VhMBKMGW-pdY7IBXwIeOzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "Luxurious Standalone Villa - Single Row & Spacious Villa with Pool",
            location: "Shams Abu Dhabi, Al Reem Island",
            priceTag: 190000,
            type: "Villa",
            bedCount: 6,
            bathCount: 6,
            area: 4.898,
            callNumber: "+2349138667895",
            emailAddress: "godwinolele@gmail.com",
            whatsappNumber: "+2349138667895",
            info: "This property was last visited by the agent on August 9th.",
            propertyViewers: 100,
            pictureCount: 12,
            verified: false,
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/fa38/0f9d/8dc77b4610f0729f628ab0e0a45084f8?Expires=1693180800&Signature=h~7qcmJpKQ2dd2skkjxEURJz9bjM4NdvJ9A94NMkizpG4rVAtaM0e96n6lBFhGFH4gIXdBd4uCA~qdJdrqrmijpOWtmCsXlO7A~2yAmsIjawmuk5cYuHSdfEtOzAVxSYw6H1BxchVE2B9nVpAWMwENAZQdvcYBIwJTD4kFn4EVxTV2QQrTMHbYFqB74AwdJLdU6w2QLBJC9jdgXczZjONvVAgnn5sTJpUa5g4rztcBi5b1b3EaeJvMN1zihr~x7xRCbog-zwHm8WTQkS4o7pKxn0EFZ4isvCUqIUV-1khgTvcTKLuqn~VS0Enm8-l1Dyw30vohbFPgZ~tr7Eki8rsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "Luxurious Standalone Villa - Single Row & Spacious Villa with Pool",
            location: "Shams Abu Dhabi, Al Reem Island",
            priceTag: 190000,
            type: "Villa",
            bedCount: 6,
            bathCount: 6,
            area: 4.898,
            callNumber: "+2349138667895",
            emailAddress: "godwinolele@gmail.com",
            whatsappNumber: "+2349138667895",
            info: "This property was last visited by the agent on August 9th.",
            propertyViewers: 100,
            pictureCount: 12,
            verified: true,
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/f1f0/f881/0e5500a86abe48e27a1cc17d78081a3e?Expires=1693180800&Signature=qUMTvbKvHGVG0wGkKkokEDhBDC-5UQ4N14A1kDOoZfIT9QNARM0B5ODhmGIcHZ~tasqZk6cn776wdHrFPAHg3w1M75O1Zyy81n~RUg2tqWtpgLZIeCjDrkJzmLmWgkV0xVKLZqW7y4Q0wOF3q0YzK9GfBoGNZytGbXcwECnlTHpcyJoQER0D5QzUbkkDdz6RxxNf94qFmd2wqymMM-E9gqoqj5zBZ4KPgsRI5vqB0Ni3XaUqwzpUCso7qFbYwSU1e4g3Vo3LvloqrScRb4C4KyL~yrn2jlvM8uP9hHIYr1ibW6l3dUEJBo0o5jCGXbndYJfZZcPjv-EU2dLXdumSog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "Luxurious Standalone Villa - Single Row & Spacious Villa with Pool",
            location: "Shams Abu Dhabi, Al Reem Island",
            priceTag: 190000,
            type: "Villa",
            bedCount: 6,
            bathCount: 6,
            area: 4.898,
            callNumber: "+2349138667895",
            emailAddress: "godwinolele@gmail.com",
            whatsappNumber: "+2349138667895",
            info: "This property was last visited by the agent on August 9th.",
            propertyViewers: 100,
            pictureCount: 12,
            verified: false,
        },
    ]


    // Off Plan Apartment 
    const offPlanApartment = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/246c/5575/1dd0cadfbf89a022c9a9d07832a646d2?Expires=1693180800&Signature=qzSbmWmqBEhTZZXs1H8fWQt7BqqA1HugdSucob6aww4duqsrG-A50ZreL2v1xcW0dpV3c-QYOu1NUmJzncL9GInA4ZUnG~me1WDPRx2ZGFulbx6lrpcnVmkY3XJPEHSGVPcgwyNArs~kSWX~nEZCD-RovVhh590UJ8ZzphuYxCfjSKhWmsHGUYjkW2rGNOtRnSUJ6hSHGHl9BQQpJa0GJH9nyRHkssRRgyA3tY8gVCHS5V7m5-mPiU2UClBTdjQ2ZvXXGciXJwymGnUL05CZ9nOlLVYVj0gm7ovxryIGlJcQnXHoGKaV0vrHINN6KGPP9B9WmaGSN0BGW8CmOWFTyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/e6bb/0c06/569696ab536d0f4499630911c92e2661?Expires=1693180800&Signature=XDitKpyPwetf0md2o87VXNNA0MszHJKbuzUhjFV3vwPaJSRCTWNowC8jm175R-JqZk7zwmurMoXfSC7H9mdxSe3f8krAtmmhvMB0GIiu4WzsrL3N654gX6lx0l92HFIf1XpRzpV2Ze6mQMLClQe4U7Gg1IhSF48j7Ef~ul0G8Osyye6dTZhP6o5ITbAuSLSoDmlFJNDu04xgOH8xKFsSrLt91HO7QX3Y89Ot281M10u0oFzTZ6gZ1YVG32rzsIIuRUs8xk4nFs3YavW5kE3HD9ZgYVa1BGsGkMcgNAX31raW68xBhu-3byf6WrnPh8BkbYHzY569xxGKBQ~bTPL3yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/30d0/ff5e/2887517e0164a76c28cb5bc90246c0a5?Expires=1693180800&Signature=MvHk-XFOxlddH1BHgtQSPYp3Z-wueTiqf~UMfIocKBTVlZc4boT3EMzoSRYFs7w3~f6SXAZrjedSm4o78wKQOOH20rw1PVYTqy4tKP6rpxdyPyYvVDF1o7RyfCTll1QSVLyXONBFfgPp5imyvZn-YnUznNd-WH8qvrzrefmEV6CflQH0427czic-GakgJ~n8HF-Wokx7iRDIcFzc3weLqLFMY5lgMDRQ5MnI8TJ4grizMO3kBLtNzUYtkDjrJmj9oYD6Ddd5S~kyDPjpp~eeEl2a1NC4RzLPHHgtmsrfFXLOTRpSrzzB22htKyoWZt8W-9EN-01uxbiY3iTuv14z8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/116b/82be/6eec8a80836446268104706e6ac7c738?Expires=1693180800&Signature=HYKtVUT8a2ouo44KytwcP5hKuoUGrzjMalKNXRjFZTEG6ejAr2VekwAR~qREg6g5X733bWcMDySUU6U2rzpmKVaePVNG52ssQYXfDClIaGvKne6CahZ1zgNUXhRMyV4RLfUUpgDXyWlGwPwy6j0B5yTr08v71tE92GA45-y4jY9NTeafFSqOcTXIDEOHaz9A648Z70aGZspSZp-QRfkFKncflSz3M6hQHGiEMecJKlHaPGZWQiN3ee80hU7kluX5XByInHgCeOkxZ9srPn6HKoM4-TrPDNTEEnadt6IiiP9LEm0h1XnrYOpeoUDAxZDlhsDqpyg0p0Y7YmCM09nvLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
    ]


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



    return (
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
                            <AppButton text="Save Search" />
                        </div>
                    </div>

                    <div className="flex space-x-5 mt-3">
                        <OutlinedButton text="Check Verified Listings First" withIcon={true} />
                        <OutlinedButton text="Check Properties with Floor Plan First" withIcon={true} />
                    </div>
                </div>

                <div className="bg-[fff] w-full h-auto px-[80px] pt-10 pb-20">
                    <h1 className="text-[#101828] text-[1.7vw] font-[500]">Apartments for Sale in UAE</h1>
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
                    <div className="border border-[#EAECF0] rounded-[5px] px-5 py-[12px] mt-7 flex justify-between items-center">
                        <p className='font-[500] text-[1.1vw] text-[#475467]'>Dubai (2,700)</p>
                        <p className='font-[500] text-[1.1vw] text-[#475467]'>Ajman (2,700)</p>
                        <p className='font-[500] text-[1.1vw] text-[#475467]'>Abu Dhabi (2,700)</p>
                        <p className='font-[500] text-[1.1vw] text-[#475467]'>Abu Dhabi (2,700)</p>
                        <div className='font-[700] uppercase text-[1vw] text-[#415EFF] cursor-pointer'>View All Locations</div>
                    </div>

                    {/* Properties */}
                    <div className="mt-7 w-full space-y-7">
                        {properties.map((item: any, i: any) => (
                            <PropertyCard
                                key={i}
                                imagePath={item.imagePath}
                                name={item.name}
                                location={item.location}
                                priceTag={item.priceTag}
                                type={item.type}
                                bedCount={item.bedCount}
                                bathCount={item.bathCount}
                                area={item.area}
                                call={item.callNumber}
                                email={item.emailAddress}
                                whatsapp={item.whatsappNumber}
                                info={item.info}
                                viewerCount={item.propertyViewers}
                                pictureCount={item.pictureCount}
                                verified={item.verified}
                            />
                        ))}
                    </div>


                    {/* Off-Plan Apartments in UAE */}
                    <div className="p-[24px] bg-[#EAECF0] w-full h-auto mt-7 rounded-[10px]"
                        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3 items-center">
                                <Image src={Assets.building} alt="" width={20} height={20} />
                                <p className="text-[#101828] font-[700] text-[1.4vw]">Off-Plan Apartments in UAE</p>
                            </div>
                            <div>
                                <AppButton text="View More" />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-[20px] mt-7'>
                            {offPlanApartment?.map((item, i) => (
                                <ApartmentCard key={i} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Properties */}
                    <div className="mt-7 w-full space-y-7">
                        {properties.map((item: any, i: any) => (
                            <PropertyCard
                                key={i}
                                imagePath={item.imagePath}
                                name={item.name}
                                location={item.location}
                                priceTag={item.priceTag}
                                type={item.type}
                                bedCount={item.bedCount}
                                bathCount={item.bathCount}
                                area={item.area}
                                call={item.callNumber}
                                email={item.emailAddress}
                                whatsapp={item.whatsappNumber}
                                info={item.info}
                                viewerCount={item.propertyViewers}
                                pictureCount={item.pictureCount}
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
                                <AppButton text="Learn More" />
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


                    {/* Properties */}
                    <div className="mt-7 w-full space-y-7">
                        {properties.map((item: any, i: any) => (
                            <PropertyCard
                                key={i}
                                imagePath={item.imagePath}
                                name={item.name}
                                location={item.location}
                                priceTag={item.priceTag}
                                type={item.type}
                                bedCount={item.bedCount}
                                bathCount={item.bathCount}
                                area={item.area}
                                call={item.callNumber}
                                email={item.emailAddress}
                                whatsapp={item.whatsappNumber}
                                info={item.info}
                                viewerCount={item.propertyViewers}
                                pictureCount={item.pictureCount}
                                verified={item.verified}
                            />
                        ))}
                    </div>


                    {/* Popular Search category */}
                    <div className="mt-24">
                        <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Searches of Apartments for Sale in UAE</h1>
                        <div className="mt-14 flex justify-between">
                            {recommendedSearch?.map((category, i) => (
                                <SearchCategory key={i} header="" item={category.items} />
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
