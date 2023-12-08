import * as React from 'react';

export default function ProductPage() {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="bg-gray-200 min-h-[1px] w-full" />
      <div className="self-center flex w-full max-w-[1216px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-start justify-between gap-1.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-blue-600 text-sm font-bold leading-7 tracking-normal self-stretch whitespace-nowrap">
            Back to Search
          </div>
          <div className="text-blue-600 text-sm leading-7 tracking-normal self-stretch">Abu Dhabi</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71f6a1c9879ea8a9d368b26d5ff2e42e58b157bf42dc358eaeb6b9baa09b44dd?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
            className="aspect-square object-contain object-center w-2.5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="text-blue-600 text-sm leading-7 tracking-normal self-center my-auto">Villa</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71f6a1c9879ea8a9d368b26d5ff2e42e58b157bf42dc358eaeb6b9baa09b44dd?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
            className="aspect-square object-contain object-center w-2.5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-center whitespace-nowrap my-auto">
            Distress Sale - LUK-N5-9YH-99.0-MIL
          </div>
        </div>
        <div className="text-gray-900 text-sm leading-7 tracking-normal grow whitespace-nowrap">
          Date Uploaded: 31st July, 2023
        </div>
      </div>
      <div className="self-center w-full max-w-[1216px] mt-6 mb-32 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col px-5 max-md:max-w-full max-md:mt-8">
              <div className="flex-col overflow-hidden self-stretch relative flex min-h-[757px] w-full pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddb3ba0161fde1f5bfd571eb4bf45cff9dc243a06ce35937b4f1a42c1f7930c9?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative items-stretch bg-white flex w-[125px] max-w-full flex-col justify-center rounded-md">
                  <div className="justify-between items-stretch border border-[color:var(--grey-100,#EAECF0)] bg-white flex gap-4 px-4 py-1 rounded-xl border-solid">
                    <div className="text-gray-900 text-base leading-7 tracking-normal grow whitespace-nowrap">
                      Verified
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/577ff1e772d1f510079b7acceeddbbc4a21a534f812a9efd63d3daeb3010fad2?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="relative items-stretch bg-white flex w-[125px] max-w-full flex-col justify-center mt-[655px] rounded-md max-md:mt-10">
                  <div className="text-gray-900 text-base font-medium leading-7 tracking-normal whitespace-nowrap justify-center items-stretch border border-[color:var(--grey-100,#EAECF0)] bg-white px-2.5 py-1 rounded-xl border-solid">
                    Request Video
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-10 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                      <div className="text-gray-900 text-lg font-bold leading-8 tracking-normal self-stretch whitespace-nowrap max-md:max-w-full">
                        AED 3,190,000
                      </div>
                      <div className="text-slate-600 text-lg font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                        Shams Abu Dhabi, Al Reem Island
                      </div>
                      <div className="items-center flex gap-4 mt-4 self-start max-md:justify-center">
                        <div className="items-stretch self-stretch flex justify-between gap-4">
                          <div className="items-center flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcad89411b9c2f7003b73839163a073326e3c9ceabc2fedcaa1d3c0ad31a672?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                              className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                              6 Beds
                            </div>
                          </div>
                          <div className="items-center flex justify-between gap-1.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a18752a8748e4d53730d872469c4a7a8e5628c733fd6fe8a4ed2a4752ee58c60?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                              className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                              6 Baths
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-200 w-px shrink-0 h-5 my-auto" />
                        <div className="self-stretch flex justify-between gap-2.5 items-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5048073fa31236be306b7b79a8243425d2368bacc0bbc4d7a153c97b1319163d?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="text-slate-700 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            {' '}
                            4.896 sqft
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-900 text-lg font-medium leading-8 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                        Luxurious Standalone Villa - Single Row & Spacious Villa with Pool
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex items-stretch gap-2 max-md:mt-10">
                      <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6b21a6678bd5cd4c938099bbc37cdae7bc50d739381209178d8ed3ca46562f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                          Favorites
                        </div>
                      </div>
                      <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-5 py-2 rounded-xl border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/512ec4e2c1727e09c7f744a324918a09d06bff19a21a07f26cebe2ccbe80ef6e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                          Share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-900 text-justify text-base leading-7 tracking-normal self-stretch mt-10 max-md:max-w-full">
                Step into the world of luxury and contemporary elegance with this stunning 6-bedroom villa in Al Reem
                Island, Dubai. Located in a prime spot, this villa offers an exceptional living experience that goes
                beyond expectations. From upscale finishes to carefully designed interiors, every detail oozes
                sophistication.
              </div>
              <div className="text-gray-900 text-justify text-base leading-7 tracking-normal self-stretch mt-6 max-md:max-w-full">
                Upon entering this architectural gem, you'll be taken by its spaciousness and flawless design. The villa
                provides ample room for both relaxation and entertainment. The large living area seamlessly connects
                with the dining and kitchen spaces, creating a smooth flow that's perfect for gatherings or quality time
                with family.
              </div>
              <div className="text-gray-900 text-lg font-medium leading-8 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                Notable Features:
              </div>
              <div className="text-gray-900 text-justify text-base leading-7 tracking-normal self-stretch mt-4 max-md:max-w-full">
                <ul>
                  <li>6 Elegant Bedrooms</li>
                  <li>Master suite with a spacious private bathroom and terrace</li>
                  <li>5 Bathrooms</li>
                  <li>Private Garden</li>
                  <li>Spacious Living Area and Kitchen</li>
                  <li>Laundry Room</li>
                </ul>
              </div>
              <div className="text-gray-900 text-lg font-medium leading-8 tracking-normal self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                Amenities:
              </div>
              <div className="text-gray-900 text-justify text-base leading-7 tracking-normal self-stretch mt-4 max-md:max-w-full">
                <ul>
                  <li>Beautiful Green Parks</li>
                  <li>Premier Golf Course</li>
                  <li>Tennis Court</li>
                  <li>Swimming Pool</li>
                  <li>Variety of Dining, Shopping, and Entertainment Options</li>
                </ul>
              </div>
              <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Property Information
              </div>
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Type
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    For Sale
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Furnishing
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Unfurnished
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Purpose
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Villa
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    Verified On
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5">
                    <div className="text-slate-600 text-base font-bold leading-7 tracking-normal grow whitespace-nowrap">
                      9th August, 2023
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46239f463fc43dc87ac2291a642ba9182e9706a9c740ffc40d993915c9c0e9a8?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Reference No.
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Distress Sale - LUK-N5-9YH-99.0-MIL
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    Average Rent
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 px-0.5">
                    <div className="text-slate-600 text-base font-bold leading-7 tracking-normal grow whitespace-nowrap">
                      Not Available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46239f463fc43dc87ac2291a642ba9182e9706a9c740ffc40d993915c9c0e9a8?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Completion
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Ready
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Added On
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    31st July, 2023
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="items-stretch flex gap-2 mt-12 rounded-md self-start max-md:mt-10">
                <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal grow whitespace-nowrap">
                  Validated Information
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23cb5f1db1d67859716e7a71d5bb6aaf65a32f38bc60e0797c7e1add19748e0a?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 rounded-md max-md:max-w-full max-md:flex-wrap">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Developer
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Distress Sale - LUK-N5-9YH-99.0-MIL
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Plot Area
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    4,896
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Ownership
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    Freehold
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 rounded-md">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                    Built-Up Area
                  </div>
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                    4,300
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 self-stretch shrink-0 h-px mt-2 max-md:max-w-full" />
              <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Property History
              </div>
              <div className="items-stretch border border-[color:var(--grey-100,#EAECF0)] self-stretch flex flex-col mt-6 p-6 border-solid max-md:max-w-full max-md:px-5">
                <div className="items-stretch flex w-full justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="text-slate-600 text-base font-bold leading-7 tracking-normal grow whitespace-nowrap">
                    Date{' '}
                  </div>
                  <div className="items-stretch flex justify-between gap-5">
                    <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                      Transaction Type
                    </div>
                    <div className="text-slate-600 text-base font-bold leading-7 tracking-normal whitespace-nowrap">
                      Price
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 shrink-0 h-px mt-4 max-md:max-w-full" />
                <div className="items-stretch flex w-full justify-between gap-5 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="text-slate-600 text-base font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    31st July, 2023
                  </div>
                  <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                      Sale
                    </div>
                    <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                      AED 3,190,000
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 shrink-0 h-px mt-4 max-md:max-w-full" />
              </div>
              <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Features / Amenities
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-6 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="justify-center items-center bg-gray-200 flex basis-[0%] flex-col w-[174px] h-[174px] px-14 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce7c4f2a10ac0b2a2b9c3352e912febf62ad74177b7514213853d5922526b9c?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-1.5"
                  />
                  <div className="text-gray-900 text-base font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-2 mb-1.5">
                    Garden
                  </div>
                </div>
                <div className="justify-center items-center bg-gray-200 flex basis-[0%] flex-col w-[177px] h-[177px] px-14 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3dd5f5bb6b3fa6a7cba9fa034d1cb4a0478141559dc792312261285be939b0f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-1.5"
                  />
                  <div className="text-gray-900 text-base font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-2 mb-1.5">
                    Security
                  </div>
                </div>
                <div className="justify-center items-center bg-gray-200 flex grow basis-[0%] flex-col px-14 py-12 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90dd913a1504d783b17498bc20d765fc4be54960d6dfcb65c210ebad8dead2c4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-[1.17] object-contain object-center w-[35px] justify-center items-center overflow-hidden mt-1.5"
                  />
                  <div className="text-gray-900 text-base font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-2 mb-1.5">
                    Gym
                  </div>
                </div>
                <div className="justify-center items-center bg-gray-200 flex basis-[0%] flex-col w-[177px] h-[177px] px-14 rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed97b79335546a80bab93c57ad982341d2ee4b20c537fccd61ec6cf7c3bae85a?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full mt-1.5"
                  />
                  <div className="text-gray-900 text-base font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-2 mb-1.5">
                    Security
                  </div>
                </div>
                <div className="text-gray-900 text-base font-medium leading-7 tracking-normal justify-center items-center border-[color:var(--grey-100,#EAECF0)] w-[177px] h-[177px] px-12 py-3 rounded-md border-2 border-solid max-md:px-5">
                  +20 more amenities
                </div>
              </div>
              <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Market Intelligence Insight
              </div>
              <div className="text-slate-600 text-base font-medium leading-7 tracking-normal self-stretch mt-6 max-md:max-w-full">
                The open market price of the villa is calculated based on the current real estate market trends, recent
                sales data of similar properties in the area, and various factors that influence property prices. Please
                note that the exact open market price may vary, and it's recommended to conduct further research for
                accurate pricing.
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
                Market Insights for the Villa Listing
              </div>{' '}
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-4 pr-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                  <ul>
                    <li>Distress Sale Price: AED 3,190,000 </li>
                  </ul>
                </div>{' '}
                <div className="text-slate-600 text-base font-medium leading-7 tracking-normal grow shrink basis-auto">
                  <ul>
                    <li>Average Price: AED 3,750,000</li>
                  </ul>
                </div>{' '}
                <div className="text-slate-600 text-base font-medium leading-7 tracking-normal whitespace-nowrap">
                  <ul>
                    <li>Estimated Market Price: AED 3,750,000</li>
                  </ul>
                </div>
              </div>{' '}
              <div className="self-stretch flex items-center justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-gray-900 text-xl font-bold leading-8 tracking-normal grow whitespace-nowrap my-auto">
                  Price Comparison Chart
                </div>{' '}
                <div className="text-white text-center text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-stretch border border-[color:var(--primary-600,#6F85FF)] bg-indigo-400 self-stretch grow px-9 py-2 rounded-md border-solid max-md:px-5">
                  Compare Prices
                </div>
              </div>{' '}
              <div className="self-stretch flex justify-between gap-5 mt-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex basis-[0%] flex-col">
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    AED 3,190,000{' '}
                  </div>{' '}
                  <div className="text-slate-600 text-xs font-medium leading-6 tracking-normal whitespace-nowrap mt-11 self-end max-md:mt-10">
                    AED
                  </div>
                </div>{' '}
                <div className="self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa26759cb214a3709e9db098c45f1a92c6852611dde1f75b951c5f34a9e9c2d?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-[3.11] object-contain object-center w-[584px] stroke-[3px] stroke-blue-600 overflow-hidden self-center max-w-full"
                  />{' '}
                  <div className="bg-gray-300 self-stretch shrink-0 h-px max-md:max-w-full" />{' '}
                  <div className="bg-gray-300 self-stretch shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10" />{' '}
                  <div className="self-stretch flex w-full items-stretch justify-between gap-5 mx-5 pr-20 max-md:flex-wrap max-md:mr-2.5 max-md:pr-5">
                    <div className="flex basis-[0%] flex-col items-center">
                      <div className="bg-gray-300 w-px shrink-0 h-2" />{' '}
                      <div className="text-gray-900 text-sm leading-7 tracking-normal self-stretch whitespace-nowrap">
                        Distress Sale
                      </div>
                    </div>{' '}
                    <div className="flex grow basis-[0%] flex-col items-center">
                      <div className="flex w-[212px] max-w-full items-stretch justify-between gap-5">
                        <div className="bg-gray-300 shrink-0 h-2 flex-1" />{' '}
                        <div className="bg-gray-300 shrink-0 h-2 flex-1" />
                      </div>{' '}
                      <div className="self-stretch flex items-stretch justify-between gap-5">
                        <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap">
                          Average Price
                        </div>{' '}
                        <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap">
                          Estimated Market Price
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className="text-gray-900 text-3xl font-bold leading-10 tracking-normal self-stretch whitespace-nowrap mt-20 max-md:max-w-full max-md:mt-10">
                Recommended for you
              </div>{' '}
              <div className="self-stretch mt-6 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch shadow-xl bg-white flex w-full grow flex-col mx-auto px-4 py-2.5 rounded-xl max-md:mt-4">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a36afa90b9dad5579f01590afaec9d2ba1f1ce010df357bb24b9acbb0e06ddb?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                        className="aspect-[1.61] object-contain object-center w-full overflow-hidden"
                      />{' '}
                      <div className="items-stretch flex justify-between gap-2 mt-1 rounded-md">
                        <div className="text-gray-900 text-lg font-bold leading-8 tracking-normal w-[255px]">
                          AED 190,000
                        </div>{' '}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9ea30ddf9a3d855bc64020c097865ffcae2730d828cfd99f3cf2324c79133e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>{' '}
                      <div className="text-slate-600 text-lg font-medium leading-8 tracking-normal whitespace-nowrap mt-2">
                        Shams Abu Dhabi, Al Reem Island
                      </div>{' '}
                      <div className="items-start flex gap-2.5 mt-2 pr-14 max-md:pr-5">
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcad89411b9c2f7003b73839163a073326e3c9ceabc2fedcaa1d3c0ad31a672?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="bg-gray-200 self-center w-px shrink-0 h-[18px] my-auto" />{' '}
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57456ceca47a70b1c1f8f9d5f14791101e7bb36ec9b464ff9664a1785bc4c9c5?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap items-stretch self-stretch grow justify-center pl-2.5">
                          Area: 4.896 sqft
                        </div>
                      </div>{' '}
                      <div className="text-gray-900 text-sm font-medium leading-7 tracking-normal whitespace-nowrap">
                        Elegance Tower
                      </div>
                    </div>
                  </div>{' '}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch shadow-xl bg-white flex w-full grow flex-col mx-auto px-4 py-2.5 rounded-xl max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.6149068322981366] w-full pl-2.5 pr-20 py-3 items-start max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac49da5b5a58c3592e5f602363477c62e5be612c487cdb9f9f67d2b1d0ce458?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />{' '}
                        <div className="relative items-stretch bg-white flex w-36 max-w-full flex-col justify-center rounded-3xl">
                          <div className="justify-between items-stretch border border-[color:var(--grey-100,#EAECF0)] bg-white flex gap-2 pl-2 pr-7 py-1 rounded-xl border-solid max-md:pr-5">
                            <div className="text-gray-900 text-sm leading-7 tracking-normal grow whitespace-nowrap">
                              Verified
                            </div>{' '}
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d284bc98c0d98c330fcd791640790c25ddd958a3bb3f71d42678a694bf00893?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                              className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                          </div>
                        </div>{' '}
                        <div className="relative justify-center items-start self-center flex w-[47px] max-w-full gap-1 mt-24 max-md:mt-10">
                          <div className="flex shrink-0 h-[7px] flex-col flex-1 rounded-[50%]" />{' '}
                          <div className="flex shrink-0 h-[5px] flex-col flex-1 rounded-[50%]" />{' '}
                          <div className="flex shrink-0 h-[5px] flex-col flex-1 rounded-[50%]" />{' '}
                          <div className="flex shrink-0 h-[5px] flex-col flex-1 rounded-[50%]" />{' '}
                          <div className="flex shrink-0 h-[5px] flex-col flex-1 rounded-[50%]" />{' '}
                          <div className="flex shrink-0 h-[5px] flex-col flex-1 rounded-[50%]" />
                        </div>
                      </div>{' '}
                      <div className="items-stretch flex justify-between gap-2 mt-1 rounded-md">
                        <div className="text-gray-900 text-lg font-bold leading-8 tracking-normal w-[255px]">
                          AED 190,000
                        </div>{' '}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9ea30ddf9a3d855bc64020c097865ffcae2730d828cfd99f3cf2324c79133e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>{' '}
                      <div className="text-slate-600 text-lg font-medium leading-8 tracking-normal whitespace-nowrap mt-2">
                        Shams Abu Dhabi, Al Reem Island
                      </div>{' '}
                      <div className="items-start flex gap-2.5 mt-2 pr-14 max-md:pr-5">
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcad89411b9c2f7003b73839163a073326e3c9ceabc2fedcaa1d3c0ad31a672?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="bg-gray-200 self-center w-px shrink-0 h-[18px] my-auto" />{' '}
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ca712b4fd31ef02a2bde76b08b5314f6206257306be2be904b2442f0d21133?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap items-stretch self-stretch grow justify-center pl-2.5">
                          Area: 4.896 sqft
                        </div>
                      </div>{' '}
                      <div className="text-gray-900 text-sm font-medium leading-7 tracking-normal whitespace-nowrap">
                        Elegance Tower
                      </div>
                    </div>
                  </div>{' '}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center shadow-xl bg-white flex w-full grow flex-col mx-auto pl-4 py-2.5 rounded-xl items-start max-md:mt-4">
                      <div className="flex items-stretch gap-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/def578e291aaed93962c1e9ab686891dbd1286e2c4d9b4a45647030e21836d6f?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-[1.61] object-contain object-center w-full overflow-hidden grow basis-[0%]"
                        />{' '}
                        <div className="items-center shadow-lg bg-white flex aspect-square flex-col justify-center w-10 h-10 mt-32 px-2.5 rounded-3xl self-start max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/439d76d65d054fb899107f9031e326328254d288d85393b61611a4315606f4ba?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                          />
                        </div>
                      </div>{' '}
                      <div className="items-stretch flex gap-2 mt-1 px-px rounded-md">
                        <div className="text-gray-900 text-lg font-bold leading-8 tracking-normal w-[255px]">
                          AED 190,000
                        </div>{' '}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9ea30ddf9a3d855bc64020c097865ffcae2730d828cfd99f3cf2324c79133e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                          className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </div>{' '}
                      <div className="text-slate-600 text-lg font-medium leading-8 tracking-normal whitespace-nowrap mt-2">
                        Shams Abu Dhabi, Al Reem Island
                      </div>{' '}
                      <div className="items-start flex w-full gap-2.5 mt-2 pr-20 max-md:pr-5">
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcad89411b9c2f7003b73839163a073326e3c9ceabc2fedcaa1d3c0ad31a672?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="bg-gray-200 self-center w-px shrink-0 h-[18px] my-auto" />{' '}
                        <div className="items-center self-stretch flex justify-between gap-1.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f13e70c8fab8d5490becfde2cde79413142992713bb52420aab829291fd360?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
                          />{' '}
                          <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                            6
                          </div>
                        </div>{' '}
                        <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap items-stretch self-stretch grow justify-center pl-2.5">
                          Area: 4.896 sqft
                        </div>
                      </div>{' '}
                      <div className="text-gray-900 text-sm font-medium leading-7 tracking-normal whitespace-nowrap">
                        Elegance Tower
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch px-5 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86fc0ed9da71a5405f51871cac9b033ee1ee6505057808a9867725ec4664ca26?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                className="aspect-[1.15] object-contain object-center w-full items-center overflow-hidden"
              />{' '}
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2c25f4618b6a29beecbf88d8ef7fc7c2a6b5dee9be5c9e8b270c55c784ba6b4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                className="aspect-[1.15] object-contain object-center w-full overflow-hidden mt-3"
              />{' '}
              <div className="flex-col justify-end overflow-hidden relative flex aspect-[1.1510204081632653] w-full mt-3 pl-16 pr-5 pt-12 pb-4 items-end max-md:pl-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5d60ae793780604316658ec5d9f263d7980d3d691c0007525213c2442ba26ab?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{' '}
                <div className="relative items-center bg-gray-900 bg-opacity-50 flex w-[75px] max-w-full gap-2.5 mt-36 px-4 py-1 rounded-xl max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/590b25187d84c3e51635b790bb2d68a8b782e84ad6d4a4bca7a302a94f0553a7?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1 my-auto"
                  />{' '}
                  <div className="text-white text-sm font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    12
                  </div>
                </div>
              </div>{' '}
              <div className="justify-center items-stretch shadow-xl bg-white flex w-full flex-col mt-10 p-4 rounded-md">
                <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-2.5 px-20 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee54635ee2f8e975a2910d3e58faa61c6a2b14753a23d6a8e037f4dd173e52c4?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-blue-600 text-center text-base font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Call
                  </div>
                </div>{' '}
                <div className="justify-between items-center border border-[color:var(--warning-100,#FFDDCF)] bg-rose-200 flex gap-2.5 mt-2.5 px-20 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44a6d41d94ffad42d0f580c4c8fb46340e94108b1bd0302634351b174f5c0ed?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-orange-900 text-center text-base font-medium leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Email
                  </div>
                </div>{' '}
                <div className="justify-center items-center border border-[color:var(--success-100,#EAFFF2)] bg-emerald-50 flex flex-col mt-2.5 px-16 py-2 rounded-lg border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2c20fca0706c32ee819c86190b530bdda8bd5914c87751e11437e59cf6a1cc?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-[1.05] object-contain object-center w-[21px] justify-center items-center overflow-hidden max-w-full"
                  />
                </div>{' '}
                <div className="bg-gray-200 shrink-0 h-px mt-6" />{' '}
                <div className="items-stretch flex justify-between gap-2 mt-6 rounded-md">
                  <div className="text-gray-900 text-sm font-medium leading-7 tracking-normal w-[242px]">
                    View other properties
                  </div>{' '}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af7a0ea9e54ba93e78ae4dd0940ff5349a1fba13c808a603f2cab5964d073c25?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                    className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Useful Links
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Properties for Sale in UAE
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Apartment for Sale in Dubai
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                5 Bedroom Villa for Sale in UAE
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                8 Bedroom Villa for Sale in Fujairah
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Properties for Sale in Abu Dhabi
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Near Shams Abu Dhabi
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                Sycamore Villas
              </div>{' '}
              <div className="text-slate-800 text-base font-bold leading-7 tracking-normal underline whitespace-nowrap mt-8">
                Nearby Areas with Villa
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
                Dubai Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="text-slate-600 text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2.5">
                UAE Villas
              </div>{' '}
              <div className="justify-between items-center border border-[color:var(--primary-100,#D6DDFF)] bg-violet-200 flex gap-4 mt-8 px-12 py-2 rounded-xl border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/512ec4e2c1727e09c7f744a324918a09d06bff19a21a07f26cebe2ccbe80ef6e?apiKey=e18e06edddf74ddfbd2e9594d51fef98&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                />{' '}
                <div className="text-blue-600 text-center text-base font-bold leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                  Report this property
                </div>
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-8 pt-72 pb-56 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-6 pt-72 pb-60 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>{' '}
              <div className="text-gray-900 text-base font-bold leading-7 tracking-normal whitespace-nowrap justify-center items-center shadow-xl bg-white mt-6 pt-96 pb-80 px-16 rounded-md max-md:px-5 max-md:py-10">
                ADS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
