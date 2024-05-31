"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { AppButton } from '../Buttons/Buttons'
import { algoliaClient } from '@/constants/api.constant';
import { SelectPicker } from 'rsuite';

export default function SearchAndFilter({ setSearchResult, setQuery, query, data, selectedCategory, setSelectedCategory }: any) {
  const handleSearch = async () => {
    if (query.trim() === '') {
      setSearchResult([]);
      return;
    }

    try {
      const hitsPerPage = 100;
      let algoliaIndex;

      // Set the Algolia index based on the selected category
      switch (selectedCategory) {
        case 'Automobile':
          algoliaIndex = algoliaClient.initIndex('automobile');
          break;
        // case 'Commercial':
        //   algoliaIndex = algoliaClient.initIndex('commercial');
        //   break;
        case 'Property for Sale':
          algoliaIndex = algoliaClient.initIndex('property_for_sale_ads');
          break;
        case 'Property for Rent':
          algoliaIndex = algoliaClient.initIndex('property_for_rent_ads');
          break;
        default:
          algoliaIndex = algoliaClient.initIndex('categories');
          break;
      }

      const { hits } = await algoliaIndex.search(query, {
        hitsPerPage: hitsPerPage,
      });

      setSearchResult(hits);
    } catch (error) {
      console.error('Error searching Algolia:', error);
    }
  };


  const handleCategoryChange = (value) => {
    setSelectedCategory(value);

    // Set placeholder text based on the selected category
    switch (value) {
      case 'Automobile':
        setQuery(''); // Clear the query when category changes
        break;
      // case 'Commercial':
      //   setQuery(''); // Clear the query when category changes
      //   break;
      case 'Property for Sale':
        setQuery('');
        break;
      case 'Property for Rent':
        setQuery('');
        break;
      default:
        setQuery('');
        break;
    }
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="w-full flex relative items-center px-2 py-4 md:space-x-4 bg-white rounded-full"
      style={{ boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)" }}>
      <div className="flex bg-none md:pl-4 pl-2 w-full space-x-2 rounded-lg">
        <Image src={Assets.searchNormal} alt="" width={18} height={18} />
        <input
          className="bg-none w-full py-2 outline-none text-[#475467] font-[500] md:text-[16px] text-[3.5vw]"
          type="text"
          placeholder={`Search ${selectedCategory || 'general'}...`}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch();
          }}
        />
      </div>
      <div className="flex items-center absolute right-2">
        {/* <div className="">
          <SelectPicker
            data={data}
            searchable={false}
            style={{ width: 140 }}
            placeholder="General"
            onChange={handleCategoryChange}
          />
        </div> */}
        <div>
        <button
            className={`
      flex justify-center items-center rounded-full py-3.5 md:px-7 px-5 text-white font-[500] 
    md:text-[16px] text-[3.2vw] bg-secondary w-full`}
onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
