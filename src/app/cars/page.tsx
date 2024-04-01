import Assets from "@/constants/assets.constant";
import ApartmentCard from "../components/ApartmentCard/ApartmentCard";
import { AppButton, OutlinedButton } from "../components/Buttons/Buttons";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import SearchCategory from "../components/SearchCategory/SearchCategory";
import Image from "next/image";


export default function Cars() {

    // Searched categories
    const recommendedSearch = [
        {
            header: "",
            items: [
                {
                    text: 'Brand New Cars for Sale',
                    link: '',
                },
                {
                    text: 'Cars for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Car for Sale',
                    link: '',
                },
            ]
        },
        {
            header: "",
            items: [
                {
                    text: 'Brand New Cars for Sale',
                    link: '',
                },
                {
                    text: 'Cars for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Car for Sale',
                    link: '',
                },
            ]
        },
        {
            header: "",
            items: [
                {
                    text: 'Brand New Cars for Sale',
                    link: '',
                },
                {
                    text: 'Cars for Sale in Al Furjan',
                    link: '',
                },
                {
                    text: 'Serviced Car for Sale',
                    link: '',
                },
            ]
        }
    ];



    // Property Cards data
    const properties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/baf0/37f0/68bd6a4ecdaac96a2a5414f5b41b20e7?Expires=1693180800&Signature=QJoARYfaf7CYQUjjB1BkiYEM-rAXpxSnrathRil~4v5EG7mZkQo6VAkNPR5t169iH22ZCbLEfILfrE5Cz-a6OiSRiG8SuMiVnhZTueesbWh3K5Muil5v439xWLmT2OOvuCDpiaFUETANFoQcN2dSnFFlxDLTFdefdjYstuTPms30-VtrB8X4ihd22r9GG-gKf5kdqN76EQUhJmBx-7X~WHOcziHWGYmIdUeh76BZXS8OYlaqY7GbXpPr12fzwf~oFzynQvxlrGcZQvE-mfAzVXjDAhxOJWwTeCyhxMfJfT8hJxmeItc1WshpSvCfwdrRmnPWe3TQjWwsWbmyu2IUWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            imagePath: "https://s3-alpha-sig.figma.com/img/69f7/5709/a4c16f8d7e332dfa9961f4d56149a900?Expires=1693180800&Signature=KcY8mY-Vl~IJ4H4wnq2g~M~0Sw7iVcGqcTPht-fcehFmzWQsqxpInOGEKI-cX4AJzz89udgnSXng5VDVXxDhjOrHE7v878LUFA4W8ZsI1LumLTqkKQfqb2GAGtkBYvZ0P1W~CWC~dbypO-o8h9D6-IOwvQ1CK6wMKkqmP0hSxLbaxg2KSjiGot4TjmbaX9Dhd9DAbl57zSNWuV4~XNEd1fCz~zYxaKj82D3c65g1RTA6ouCFiMaLmN5XuocPUeXgE4cf9xfCy6E-Gsg9kMMGf-VFFI~2IcyL3tlqKgFQW9tSukfXEZ6iVV1E0ZpKA316kYEQ4V80D2IVVTAT2DcaVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            imagePath: "https://s3-alpha-sig.figma.com/img/1763/a043/6aef8ea935fa313df87db9a15ac6688d?Expires=1693180800&Signature=MHRbe1Mw8khTSutTgyZSlLw8vuHyjFFKu75csKR133MGa8nmFJzcWnFovwX7KNeIEyzOirFuf8zN21RONCMOZ8kH~PoEoAqxhZmB7EUUfkJqKkn0NT2oGjAqwYk~AdgSg5ZYC9QIMRziLpxxyIYdXGu3SVrfyHt4ON6us2tRmf1gcAsHhB2G95NaGTk8q6JPcCDXKxFLSlBs7jV4ITH1Jzp6I7irXFcgYU~K5GWlTgXv5P~DeRY5bU1VeEmFh~KqSdoLJAJew-3W~Ct2iE-cipi2uz83aGK8LJfJr6HsuJh2AfrQ7PM9x1zhAt7bovINuzQdg0GDfq5Vb8GXk4ZWiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            imagePath: "https://s3-alpha-sig.figma.com/img/2026/803e/eb10d29471c3780a32cc48c7127b3b07?Expires=1693180800&Signature=NUScaGkV1kFY4QOzSHb4HugKgAZiuKXJf7da43mzT6d9scUtChAhEUB-OrIzrrgtb-1z2g9z0xlaDsxVlHdxamCDerbtav51fwl-fKmb1hRpau~bwwx4OwKh8Lm3FSM2qCSLoAo3lREcSsQH3M-LqA5ulws9WK29it4nV47f2HxsraSltWPJx8dXWASDL7b9IOP~FEtJgSGsEOiPtzDxPGNceTpjBQOjg08riDAypLo8pQatnO0CO1HWdDTTFDxdSRdn86B7hAdZSsGwDIjRKFDSojtVz3Yy6hfyKEGCwM7gUu2JLhwrfipjsx9mn8IRp0smyX-Y6Z7LfjiJQ0knBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            imagePath: "https://s3-alpha-sig.figma.com/img/a131/465a/8de51c4ecb38782414e5624599d2d6ce?Expires=1693180800&Signature=JWXOZ1oCgicEQVDODCxp5jcNNrXbezP2kUU5s3~1jhBlQpCtRAKfKPG1fBZV6NGsAU0jyVzLhMbKdDdBhr5vfq1aU26sCTfD9d2THYziNNvU4iSyBJYzdnuYIb~SscOPsQZUbPwOyXNAdSfO94gKbneawgwU6Z4XEzc6wJO4FDZLJGhi0mOYt4myoI5rlVs5PXwPtFlBZf5Q01-V4eBgP436p5YTb7VcokX6oPFJITmag2K1yxavKJnqbNFS6f~zO~wjXYadRXyCU0QjakIMMcRiZojKWLOZ07h3mIfa2nOQB9dRgbGv2a60QR6084c3fixI5YrxvoXp~A-5WSEqYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/6ad0/d3e7/0e712077babe8b458d5030b0c5c57ac6?Expires=1693180800&Signature=DkpUBNC9JR08LMpbiBkLfEKuH8vNAK3afq1AAUHxapeAnsoRYuEpWkqfAli72nQ5XMfMwstBgNJ5XidHUOawbJobHget-QHCpT8xEgF9kbFLRgDK-vbeJI243sp-u4uxWNmGdMo2TXTJ6ObSKs57zWSdU~yl44TRB5QUswxNB5CdidnDrAuwK9fO8TGYAwrqd7KXZ1~xVtZ-GQtIXL21N2bkuLKdPoK5xGy1zwwMYazU0sRai1L-YAc9Hc020lbuqX8UF5JW1eFPh4cBAvpuCnM2bzp6ipKfgsT3urlRWEp1aTrPwab7jOhQzqu7K1X41vgm1orzB33hH-Rfdz-Kcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/831d/384d/6cbf9e04a2c354d8c15f62ca8dd9f258?Expires=1693180800&Signature=CqBtAIQxYmWpcEGUPgy5K7juPHhHMP98-J7-LFUhhbWyvERHueXiL6Bd46rowDtdFxiiBFSYfQ2FnGud~KYQ2uvl47~eE2pZa~Jcbs1Hkt9MLOG7M44qB9DrYEN4RFLv7YMRqEQXzSfxeZpMrGDoX1~VsYi1SSQSj5Fd2vCw4dG3voxjuIYjgmSYgdM7kW3uEKDeECtET9B7viDPNyac83vN3fdjQ-Q-dz7bNbmfokbS~pAsl3I4xPwP32mnkDur8-op1~ho2DGecHS3GcxnJfwLeHRSrnyMwB96-CAa3JfZFSmlww3Jd-usf681kAoMfjJMXutO7XNlv2wGK11CpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/3fae/37bb/4e6e0fb4758332dc046e93d641172904?Expires=1693180800&Signature=ch3tp4uNMQz25f-OvhqZOTXrHNdS0ALaPPNWwxelWtmU6OPhwn3m4BvKAOh1wy7qoyNN6lVqijQYr~yVy8TlA4rv9crXWfK3jt6vTvVxdF62UJBvp-NtqRFO8Hl01Pc-iNHeDq~S4UahCSB6Mz4gTIBdvYGwjahYqVs7wtDO7FwOvrnZSOMAtz4S6KYZa472g3Ru1vInpzwWKghI1kxO7DIe3TKwD1e2Zm7uw30z5JTyZBbmMRe~frWkjskyn6o~zRNAq6d7EZXqQh7nT3SUCh9l47BNtN4-TFO-H5YAq5AIAdtd2~HzYx74cpeeaeUvb-xpn0UoopGHqItOt-np~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            priceTag: 190000,
            name: "Elegance Tower",
            bedCount: 6,
            area: 4.895
        },
    ]


    // Al Reem Residence
    const alReemResidence = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/e914/c412/a23d435b1fad48985dde37861b2c79d5?Expires=1693180800&Signature=UbjP74D3ncZRrw7x5nCdvP4UzWfEe7vWun942ppjx96gnkCYVcCtReXheogLLeqWor0~17c-Mtm~kWadMlKimNhoiEjhE2HvtIXdCr11efQiTivGBfpToFWaHXXIHrj9y~Fs50wBZ4H9clFaz2jofP-xw5CbMNdhXoHXPkd05xEgv0w3wQuIQclWSDFgdLAMXGNHhRWzkHubDlQDU93aK5E7Lfw9LXpscvGMEjiIx-vla4MOBll7hrYE3rlBd2cE79JifDigRzzCAXDvDqBpT7cXq-GOX83AvZgYSff9n~UqyrNqQq6jcOr8ry9lbnwC0ijjGrqDiclcUhxAWqf17A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/4d39/caff/f33e5458d1679706fa9a619c2b6902fd?Expires=1693180800&Signature=flkHbygdRBFSMTun2rD5FzJymeNuU1JmW0OeMLX-HMWKQo-pipwfiDahwaSKwj91crBHXjl~0n7D17yRo09Iyx491sgK1yiGDPl0OtGWwmYQQrp4ti1212g6z5wZ79YwEf4Xf0iPm1D-qi6zfMBbf~FzWFx7vkiALSZ89RHKG~lvfd6Cgq~d6XY~eRoCUtvgYC0jVU1rQeTULbazV7DNGTed6Oz7lzqJ0o3BNIOEO6~VonRxfQQ91Bn3rI4ez647vMBenVRGXNXbvSNv7d0Lha41QiKHe3P6sshczRS3DbRjd8I11bc2tk3vkPTP8rgmDXmll5PEpGu2lW2cW6cD5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/3d7d/4602/dc65ca67b6f9301eb296bafb98da6573?Expires=1693180800&Signature=JAqeZDT62QJrJO~qTJceWO0Qtw5iidWgin6lFYm-GmvV4x0YbXvgWxRSywE94Zq0Zm3pkV3ZF-AnMhDw7IWfslT-ITmee8kfPIzGyYdeeq3EeaizQ4ilaMpF0-taQmDZ52XqDSFa0fHbTkBiP8iAHM09osouKnJ3f2nzqe0SjbqHBuQ7KYmTtTdZ7kDeszckfU33xY4pHzpuGKT53UkGRKSqhP70RQYEYC8xItHZw1tx2hVII1b6dAiESpVsj-Cna62gRvx~hJzTZ2fw7yzOx0kGTdVVJZp93XUcb0c7AH9FogOn9qmiO~Fmbh9ciyZOEOPm0xKwlRZwj~DjsGeEEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
                    <h1 className="text-[#101828] text-[1.7vw] font-[500]">Cars for Sale in UAE</h1>
                    <div className="flex justify-between items-end">
                        <div className="flex items-center space-x-2 mt-7">
                            <p className="text-[#101828] font-[500] text-[1.1vw]">Showing 1 -12 of 20,000 Cars</p>
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
                        <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Searches of Cars for Sale in UAE</h1>
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
