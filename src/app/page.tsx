import React from 'react'
import Assets from '@/constants/assets.constant'
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter'
import ServiceCard from './components/ServiceCard/ServiceCard'
import SearchCategory from './components/SearchCategory/SearchCategory'
import VerifyUserBadge from './components/VerifyUserBadge/VerifyUserBadge'
import ProductCard from './components/Card/ProductCard'
import Footer from './components/Footer/Footer'

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

  // Searched categories
  const popularCategories = [
    {
      header: "Properties for Sale in UAE",
      items: [
        {
          text: 'Apartment for Sale',
          link: '',
        },
        {
          text: 'Land for Sale',
          link: '',
        },
        {
          text: 'VIlla for Sale',
          link: '',
        },
        {
          text: 'Penthouse for Sale',
          link: '',
        },
        {
          text: 'Residential Plot for Sale',
          link: '',
        },
      ]
    },
    {
      header: "Cars in Dubai",
      items: [
        {
          text: 'Used Cars in Dubai',
          link: '',
        },
        {
          text: 'Motorcycles',
          link: '',
        },
        {
          text: 'Toyota',
          link: '',
        },
        {
          text: 'Nissan Patrol',
          link: '',
        },
        {
          text: 'Chevrolet',
          link: '',
        },
      ]
    },
    {
      header: "Villas in Abu Dhabi",
      items: [
        {
          text: 'Saadiyat Island',
          link: '',
        },
        {
          text: 'Al Reef',
          link: '',
        },
        {
          text: 'Khalifa City',
          link: '',
        },
        {
          text: 'MBZ City',
          link: '',
        },
        {
          text: 'Al Raha Gardens',
          link: '',
        },
      ]
    }
  ];


  // Searched categories 2
  const popularCategories2 = [
    {
      header: "Business for Sale in UAE",
      items: [
        {
          text: 'Restaurants',
          link: '',
        },
        {
          text: 'Salon',
          link: '',
        },
        {
          text: 'Technology Startups',
          link: '',
        },
        {
          text: 'Spas',
          link: '',
        },
        {
          text: 'Health & Fitness',
          link: '',
        },
      ]
    },
    {
      header: "Home Appliances",
      items: [
        {
          text: 'Hair Conditioners',
          link: '',
        },
        {
          text: 'Refrigerators',
          link: '',
        },
        {
          text: 'Vacuum Cleaner',
          link: '',
        },
        {
          text: 'Washing Machine',
          link: '',
        },
        {
          text: 'Ovens',
          link: '',
        },
      ]
    },
    {
      header: "Others",
      items: [
        {
          text: 'Furnitures',
          link: '',
        },
        {
          text: 'Tickets & Vouchers',
          link: '',
        },
        {
          text: 'Collectibles',
          link: '',
        },
        {
          text: 'Baby Items',
          link: '',
        },
        {
          text: 'Sports',
          link: '',
        },
      ]
    }
  ];


  // Popular Properties
  const popularProperties = [
    {
      imagePath: "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Fully Furnished Apartment with a Serene Pool and Expansive Compound",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Elegant 3 Bedroom Apartment with Exquisite Interiors",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/3890170/pexels-photo-3890170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Fully Furnished Apartment, An Ideal home for Family",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    }
  ];


  // Popular Used cars
  const popularUsedCars = [
    {
      imagePath: "https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Used Chevrolet Camaro Coupe ZL1 2021",
      feature: "Automatic • 40,000 Km",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Used Nissan Patrol 5.6L LE Titanium 2023",
      feature: "Automatic •  0 Km",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Used Toyota Corolla 2019",
      feature: "Automatic •  116,721 Km",
      location: "Shams Abu Dhabi, Al Reem Island"
    }
  ];



  // Popular Listings
  const popularListings = [
    {
      imagePath: "https://images.pexels.com/photos/8092368/pexels-photo-8092368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "MacBook Pro 15 - i9, 512 GB",
      feature: "Excellent Condition",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/2697608/pexels-photo-2697608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Vintage Jewelry - Bracelet & Earrings",
      feature: "Flawless",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Well-Furnished Restaurant - Café Shop Unit",
      feature: "Business",
      location: "Shams Abu Dhabi, Al Reem Island"
    }
  ];

  // Popular Property for rent
  const popularRentProperties = [
    {
      imagePath: "https://images.pexels.com/photos/6850547/pexels-photo-6850547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Spacious Studio - Fully Furnished - Ready to move",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Hotel Apartment - Burj & Fountain View - High Floor",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    },
    {
      imagePath: "https://images.pexels.com/photos/7534294/pexels-photo-7534294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      header: "AED 190,000",
      description: "Fully Furnished Apartment - Spacious - Ready to move in",
      feature: "4 Beds • 5 Baths",
      location: "Shams Abu Dhabi, Al Reem Island"
    }
  ];


    // PopularCommercials
    const popularCommercials = [
      {
        imagePath: "https://images.pexels.com/photos/210726/pexels-photo-210726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        header: "AED 190,000",
        description: "Full Commercial Building with Offices & Showrooms",
        feature: "13,650 Sqft",
        location: "Shams Abu Dhabi, Al Reem Island"
      },
      {
        imagePath: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        header: "AED 190,000",
        description: "10,000 Sq ft Open Yard Factory + Labor Accommodation",
        feature: "500 KW Power",
        location: "Shams Abu Dhabi, Al Reem Island"
      },
      {
        imagePath: "https://images.pexels.com/photos/3182778/pexels-photo-3182778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        header: "AED 190,000",
        description: "Fully Furnished Spacious Office with All Amenities",
        feature: "250 Sqft",
        location: "Shams Abu Dhabi, Al Reem Island"
      }
    ];



  return (
    <div>
      <div className="w-full h-auto pb-32">
      <div className="px-8">
        <div className="w-full rounded-[15px] h-auto py-[96px] hero-image-bg flex justify-center items-center">
          <div className="h-auto text-center">
            <div className="w-full">
              <h1 className="sm:text-[2.5vw] text-white font-[700] sm:leading-[50px]">The Ultimate Affordable Marketplace <br /> for Buying, Renting & Selling</h1>
              <p className='text-white text-[1.3vw] font-[700] mt-8'>Explore the Best Deals: Discover, Connect, Transact</p>
            </div>

            <div className="mt-20">
              <SearchAndFilter />
            </div>
          </div>
        </div>

        <div className="px-[80px] py-[100px]">
          {/* Services */}
          <div className="grid grid-cols-3 gap-[30px] mt-16">
            {services?.map((service: any, i) => (
              <ServiceCard
                key={i}
                header={service.header}
                text={service.text}
                buttonText={service.buttonText}
                icon={service.iconPath}
              />
            ))}
          </div>

          {/* Popular Search category */}
          <div className="mt-24">
            <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Search Categories</h1>
            <div className="mt-14 flex justify-between">
              {popularCategories?.map((category, i) => (
                <SearchCategory key={i} header={category.header} item={category.items} />
              ))}
            </div>
            <div className="border-[0.2px] my-14 w-full border-[#EAECF0]" />
            <div className="flex justify-between">
              {popularCategories2?.map((category, i) => (
                <SearchCategory key={i} header={category.header} item={category.items} />
              ))}
            </div>
          </div>

          {/* Verification */}
          <div className="mt-20">
            <VerifyUserBadge />
          </div>

          {/* Popular property sales */}
          <div className="mt-20 w-full">
            <div>
              <h1 className="text-[#101828] text-[2vw] font-[700]">Popular in Property for Sale</h1>
              <div className='grid grid-cols-3 gap-[20px] mt-14'>
                {popularProperties?.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h1 className="text-[#101828] text-[2vw] font-[700]">Popular in Used Cars for Sale</h1>
              <div className='grid grid-cols-3 gap-[20px] mt-14'>
                {popularUsedCars?.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h1 className="text-[#101828] text-[2vw] font-[700]">Popular in Listings</h1>
              <div className='grid grid-cols-3 gap-[20px] mt-14'>
                {popularListings.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h1 className="text-[#101828] text-[2vw] font-[700]">Popular in Property for Rent</h1>
              <div className='grid grid-cols-3 gap-[20px] mt-14'>
                {popularRentProperties?.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h1 className="text-[#101828] text-[2vw] font-[700]">Popular in Commercial</h1>
              <div className='grid grid-cols-3 gap-[20px] mt-14'>
                {popularCommercials?.map((product, i) => (
                  <ProductCard key={i} product={product} />
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
