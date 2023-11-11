import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';

export default function Home() {

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


    // Features / Amenities
    const features = [
        {
            icon: Assets.garden,
            title: "Kitchen"
        },
        {
            icon: Assets.garden,
            title: "Kitchen"
        },
        {
            icon: Assets.garden,
            title: "Kitchen"
        },
        {
            icon: Assets.garden,
            title: "Kitchen"
        },
    ]


    return (
        <div>
            <div className="w-full h-auto pb-32">
                <div className="w-full px-[80px] py-10">
                    <div className="flex space-x-5">
                        <div className=" w-full">
                            <p className="text-[#101828] font-[400] text-[1vw]"><span className="font-[500]">For Sale:</span> Apartment</p>
                            <div className="mt-7 w-full flex space-x-7 h-[500px]">
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/ae9a/367c/bbac565897d7eda9f08ff2cc909d864b?Expires=1693180800&Signature=BHQn6VNT2Wl9pPtJ7cAa4vJMZaVrMRyyzOc2Flafp6p8Me6zFlzOoeqjdPfAOu1LtTd6jY8peV66~SAUs5-gixPnqh~ExKr-JLqZC0TziTV8U~OkuGsFn~h~dg2BWxErVmXAO52jtGacojBYAwIt-E5QjOpsFnEoVYIVG~jGvVuYHpGrMp52j-gmrvhiDM9Vbfsei3yh6ac7Li0cSJuxbrYLjH~lqdGrUfcqHybpesMD4ncKrS-5culBgB7yyhrITRU09nNaPCV0cEyxxFOUnz-uLVQKy0twzujuRyl0vgGvM8XFVNyQCwpB3s957NPrIizryp9sH~NKmgFIh1g~dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
                                />
                                {/* <div className='h-[700px] rounded-[10px] w-[600px]'>
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/ae9a/367c/bbac565897d7eda9f08ff2cc909d864b?Expires=1693180800&Signature=BHQn6VNT2Wl9pPtJ7cAa4vJMZaVrMRyyzOc2Flafp6p8Me6zFlzOoeqjdPfAOu1LtTd6jY8peV66~SAUs5-gixPnqh~ExKr-JLqZC0TziTV8U~OkuGsFn~h~dg2BWxErVmXAO52jtGacojBYAwIt-E5QjOpsFnEoVYIVG~jGvVuYHpGrMp52j-gmrvhiDM9Vbfsei3yh6ac7Li0cSJuxbrYLjH~lqdGrUfcqHybpesMD4ncKrS-5culBgB7yyhrITRU09nNaPCV0cEyxxFOUnz-uLVQKy0twzujuRyl0vgGvM8XFVNyQCwpB3s957NPrIizryp9sH~NKmgFIh1g~dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                alt=""
                                width={1000}
                                height={1000}
                                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <div className='w-[280px] h-[245px] rounded-[10px]'>
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/ae9a/367c/bbac565897d7eda9f08ff2cc909d864b?Expires=1693180800&Signature=BHQn6VNT2Wl9pPtJ7cAa4vJMZaVrMRyyzOc2Flafp6p8Me6zFlzOoeqjdPfAOu1LtTd6jY8peV66~SAUs5-gixPnqh~ExKr-JLqZC0TziTV8U~OkuGsFn~h~dg2BWxErVmXAO52jtGacojBYAwIt-E5QjOpsFnEoVYIVG~jGvVuYHpGrMp52j-gmrvhiDM9Vbfsei3yh6ac7Li0cSJuxbrYLjH~lqdGrUfcqHybpesMD4ncKrS-5culBgB7yyhrITRU09nNaPCV0cEyxxFOUnz-uLVQKy0twzujuRyl0vgGvM8XFVNyQCwpB3s957NPrIizryp9sH~NKmgFIh1g~dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
                                />
                            </div>
                            <div className='w-[280px] h-[245px] rounded-[10px]'>
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/ae9a/367c/bbac565897d7eda9f08ff2cc909d864b?Expires=1693180800&Signature=BHQn6VNT2Wl9pPtJ7cAa4vJMZaVrMRyyzOc2Flafp6p8Me6zFlzOoeqjdPfAOu1LtTd6jY8peV66~SAUs5-gixPnqh~ExKr-JLqZC0TziTV8U~OkuGsFn~h~dg2BWxErVmXAO52jtGacojBYAwIt-E5QjOpsFnEoVYIVG~jGvVuYHpGrMp52j-gmrvhiDM9Vbfsei3yh6ac7Li0cSJuxbrYLjH~lqdGrUfcqHybpesMD4ncKrS-5culBgB7yyhrITRU09nNaPCV0cEyxxFOUnz-uLVQKy0twzujuRyl0vgGvM8XFVNyQCwpB3s957NPrIizryp9sH~NKmgFIh1g~dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
                                />
                            </div>
                            <div className='w-[280px] h-[245px] rounded-[10px]'>
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/ae9a/367c/bbac565897d7eda9f08ff2cc909d864b?Expires=1693180800&Signature=BHQn6VNT2Wl9pPtJ7cAa4vJMZaVrMRyyzOc2Flafp6p8Me6zFlzOoeqjdPfAOu1LtTd6jY8peV66~SAUs5-gixPnqh~ExKr-JLqZC0TziTV8U~OkuGsFn~h~dg2BWxErVmXAO52jtGacojBYAwIt-E5QjOpsFnEoVYIVG~jGvVuYHpGrMp52j-gmrvhiDM9Vbfsei3yh6ac7Li0cSJuxbrYLjH~lqdGrUfcqHybpesMD4ncKrS-5culBgB7yyhrITRU09nNaPCV0cEyxxFOUnz-uLVQKy0twzujuRyl0vgGvM8XFVNyQCwpB3s957NPrIizryp9sH~NKmgFIh1g~dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
                                />
                            </div>
                        </div> */}
                            </div>

                            <div className="mt-7 w-full">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[#101828] font-[700] text-[2.2vw]"><span className='uppercase font-[700] text-[1.4vw]'>aed</span> 190,000</h1>
                                    {/* Buttons */}
                                    <div className="flex space-x-3">
                                        <button className='bg-[#D6DDFF] rounded-[8px] py-[8px] flex items-center justify-center space-x-2.5 px-[20px]'>
                                            <Image src={Assets.heartBlue} alt="" width={20} height={20} />
                                            <p className="text-[#415EFF] font-[500] text-[1.1vw]">Favorites</p>
                                        </button>
                                        <button className='bg-[#D6DDFF] rounded-[8px] py-[8px] flex items-center justify-center space-x-2.5 px-[20px]'>
                                            <Image src={Assets.share} alt="" width={20} height={20} />
                                            <p className="text-[#415EFF] font-[500] text-[1.1vw]">Share</p>
                                        </button>
                                    </div>
                                </div>

                                <p className="text-[#475467] font-[700] text-[1.3vw] mt-3">Shams Abu Dhabi, Al Reem Island</p>

                                <div className="flex items-center mt-3">
                                    <div className="flex items-center space-x-2">
                                        <Image src={Assets.bath} alt="" width={15} height={15} />
                                        <p className="text-[#344054] font-[700] text-[1vw]">6 Beds</p>
                                    </div>
                                    <div className="h-[16px] mx-3 border border-[#EAECF0]" />
                                    <div className="flex items-center space-x-2">
                                        <Image src={Assets.bed} alt="" width={15} height={15} />
                                        <p className="text-[#344054] font-[700] text-[1vw]">6 Baths</p>
                                    </div>
                                    <div className="h-[16px] mx-3 border border-[#EAECF0]" />
                                    <div className="flex items-center space-x-2">
                                        <Image src={Assets.bed} alt="" width={15} height={15} />
                                        <p className="text-[#101828] font-[700] text-[1vw]">4.896 sqft</p>
                                    </div>
                                </div>

                                <p className="text-[#475467] font-[700] text-[1.3vw] mt-3">Luxurious Standalone Villa - Single Row & Spacious Villa with Pool</p>

                                <div className="mt-10 space-y-7 w-full text-[#101828] font-[500] text-[1.1vw]">
                                    <p>Step into the world of luxury and contemporary elegance with this stunning 6-bedroom
                                        villa in Al Reem Island, Dubai. Located in a prime spot, this villa offers an exceptional
                                        living experience that goes beyond expectations. From upscale finishes to carefully designed
                                        interiors, every detail oozes sophistication.
                                    </p>
                                    <p>Upon entering this architectural gem, you'll be taken by its spaciousness and flawless design.
                                        The villa provides ample room for both relaxation and entertainment. The large living area
                                        seamlessly connects with the dining and kitchen spaces, creating a smooth flow that's perfect
                                        for gatherings or quality time with family.
                                    </p>
                                </div>

                                <div className="mt-7">
                                    <h1 className="text-[#101828] font-[500] text-[1.3vw]">Notable Features:</h1>
                                    <ul className="list-disc pl-5 text-[#101828] font-[500] text-[1.1vw] mt-3 space-y-1.5">
                                        <li>6 Elegant Bedrooms</li>
                                        <li>Master suite with a spacious private bathroom and terrace</li>
                                        <li>5 Bathrooms</li>
                                        <li>Private Garden</li>
                                        <li>Spacious Living Area and Kitchen</li>
                                        <li>Laundry Room</li>
                                    </ul>
                                </div>

                                <div className="mt-7">
                                    <h1 className="text-[#101828] font-[500] text-[1.3vw]">Amenities:</h1>
                                    <ul className="list-disc pl-5 text-[#101828] font-[500] text-[1.1vw] mt-3 space-y-1.5">
                                        <li>Beautiful Green Parks</li>
                                        <li>Premier Golf Course</li>
                                        <li>Tennis Court</li>
                                        <li>Swimming Pool</li>
                                        <li>Pool Variety of Dining, Shopping, and Entertainment Options</li>
                                    </ul>
                                </div>

                                {/* Property for sale */}
                                <div className="mt-10">
                                    <h1 className="text-[#101828] text-[1.8vw] font-[700]">Property Information</h1>
                                    <div className="mt-5">
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-[1.1vw] font-[700] text-left text-[#475467]">
                                                <thead className="text-[#475467] border-b">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Type
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            For Sale
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Furnishing
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Unfurnished
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            Purpose
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Villa
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Verified On
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            9th August, 2023
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            Reference No.
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Distress Sale - LUK-N5-9YH-99.0-MIL
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Average Rent
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Not Available
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            Completion
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Ready
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Added On
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            31st July, 2023
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>


                                {/* Validated Info */}
                                <div className="mt-10">
                                    <h1 className="text-[#101828] text-[1.8vw] font-[700]">Validated Information</h1>
                                    <div className="mt-5">
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-[1.1vw] font-[700] text-left text-[#475467]">
                                                {/* <thead className="text-[#475467] border-b">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Type
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            For Sale
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                        Furnishing
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                        Unfurnished
                                                        </th>
                                                    </tr>
                                                </thead> */}
                                                <tbody>
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            Developer
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Distress Sale - LUK-N5-9YH-99.0-MIL
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Plot Area
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4,896
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            Ownership
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Freehold
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            Built-Up Area
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            4,300
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                                {/* Property History */}
                                <div className="mt-10">
                                    <h1 className="text-[#101828] text-[1.8vw] font-[700]">Property History</h1>
                                    <div className="mt-5">
                                        <div className="relative overflow-x-auto border border-[#EAECF0] p-[24px]">
                                            <table className="w-full text-[1.1vw] font-[700] text-left text-[#475467]">
                                                <thead className="text-[#475467] border-b border-[#EAECF0]">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Date
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Transaction Type
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white">
                                                        <th scope="row" className="px-6 py-4 font-medium text-[#475467] whitespace-nowrap">
                                                            31st July, 2023
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Sale
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            AED 3,190,000
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                                 {/* Features / Amenities */}
                                <div className="mt-10">
                                    <h1 className="text-[#101828] text-[1.8vw] font-[700]">Features / Amenities</h1>
                                    <div className="mt-5 grid grid-cols-5 gap-3">
                                        {features.map((item, i) => (
                                            <div key={i} className="bg-[#EAECF0] w-full h-[150px] rounded-[5px] flex flex-col justify-center items-center space-y-2">
                                                <Image src={item.icon} alt="" width={30} height={30} />
                                                <p className="text-[#101828] text-[1.1vw] font-[500]">{item.title}</p>
                                            </div>
                                        ))}
                                        <div className="bg-[#fff] border-[#EAECF0] border w-full h-[150px] rounded-[5px] flex justify-center items-center space-y-2">
                                                <p className="text-[#101828] text-[1.1vw] font-[500]">+20 more amenities</p>
                                            </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="w-[300px] border border-[#8e37f8]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
