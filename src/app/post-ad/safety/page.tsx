'use client';
import { AppModal } from '@/app/components/Modals/Modals';
import AltNavbar from '@/app/components/Navbar/AltNavbar';
import MobileNavbar from '@/app/components/Navbar/MovileNavbar';
import Navbar from '@/app/components/Navbar/Navbar';
import NewNavbar from '@/app/components/Navbar/NewNavbar';
import SubNavbar from '@/app/components/Navbar/SubNavbar';
import { FadeIn } from '@/app/components/Transitions/Transitions';
import API from '@/constants/api.constant';
import { catchAsync } from '@/helpers/api.helper';
import useAppTheme from '@/hooks/theme.hook';
import useRequest from '@/services/request/request.service';
import { agreement, safetyMeasure } from '@/utils/data';
import { ButtonBase } from '@mui/material';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

export default function Safety() {
  const { isMobile } = useAppTheme();
  const { isLoading, makeRequest } = useRequest();
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [packageId, setPackageId] = useState<string>('');
  const [sectionId, setSectionId] = useState<string>('');
  const [sectionName, setSectionName] = useState<string>('');
  const [subCategory, setSubCategory] = useState<any>({});
  const [subCategoryName, setSubCategoryName] = useState<string>('');
  const [baseCategory, setBaseCategory] = useState<any>({});
  const [altCategoryName, setAltCategoryName] = useState<string>('');
  const [shortDesc, setShortDesc] = useState<string>('');
  const [bathroom, setBathroom] = useState<number>(0);
  const [bedroom, setBedroom] = useState<number>(0);
  const [closingFee, setClosingFee] = useState<number>(0);
  const [communityFee, setCommunityFee] = useState<number>(0);
  const [fullDesc, setFullDesc] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [occupancyStatus, setOccupancyStatus] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [openMarketPrice, setOpenMarketPrice] = useState<number>();
  const [readyDate, setReadyDate] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [size, setSize] = useState('');
  const [title, setTitle] = useState('');
  const [tourUrl, setTourUrl] = useState('');
  const [adImageUrl, setAdImageUrl] = useState<string[]>([]);
  const [adDocumentUrl, setAdDocumentUrl] = useState<string[]>([]);
  const [formValues, setFormValues] = useState({});

  // Get Stored Post Ad data from Local storage
  useEffect(() => {
    setName(localStorage.getItem('name') || '');
    setEmail(localStorage.getItem('email') || '');
    setPhoneNumber(localStorage.getItem('phoneNumber') || '');
    setPackageId(localStorage.getItem('selectedPackageId') || '');
    // setSubCategory(localStorage.getItem('selectedSubCategory') || {});
    // setBaseCategory(localStorage.getItem('selectedBaseCategory') || {});
    setShortDesc(localStorage.getItem('shortDesc') || '');
    const savedUrls = localStorage.getItem('uploadedImageUrls');
    const savedDocumentUrls = localStorage.getItem('uploadedDocumentUrls');
    if (savedUrls) {
      setAdImageUrl(JSON.parse(savedUrls));
    }
    if (savedDocumentUrls) {
      setAdDocumentUrl(JSON.parse(savedDocumentUrls));
    }

    const fetchDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('productInformation');

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFullDesc(parsedData.fullDesc || '');
        setShortDesc(parsedData.fullDesc || '');
        setLocation(parsedData.location || '');
        setPrice(parseFloat(parsedData.price || ''));
        setOpenMarketPrice(parseFloat(parsedData.openMarketPrice || ''));
        setTitle(parsedData.title || '');
        setTourUrl(parsedData.tourUrl || '');
      }

      const savedFormValues = localStorage.getItem('formValues');
      if (savedFormValues) {
        setFormValues(JSON.parse(savedFormValues));
      }

      const savedSubCategory = localStorage.getItem('selectedSubCategory');
      if (savedSubCategory) {
        setSubCategory(JSON.parse(savedSubCategory));
      }

      const savedBaseCategory = localStorage.getItem('selectedBaseCategory');
      if (savedBaseCategory) {
        setBaseCategory(JSON.parse(savedBaseCategory));
      }
    };

    fetchDataFromLocalStorage();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  console.log(baseCategory, 'baseCategory')

  // Check if all necessary data is available before constructing the body
  const isDataAvailable =
    title && price && openMarketPrice && name && email && phoneNumber && packageId && subCategory && baseCategory;
  const body = isDataAvailable
    ? {
        name: title,
        packageID: packageId,
        categoryIDs: [baseCategory?._id, subCategory?._id],
        shortDesc: shortDesc,
        fullDesc: fullDesc,
        location: location,
        price: price,
        openMarketPrice: openMarketPrice,
        imageURLs: adImageUrl,
        adDocuments: adDocumentUrl,
        view360URLs: [tourUrl],
        contact: {
          name,
          email,
          phoneNumber,
          whatsAppNumber: phoneNumber,
        },
        formValues,
      }
    : null;

  // Create Post Ad

  const createAd = async () => {
    try {
      const res = await makeRequest({
        method: 'POST',
        url: API.createAd,
        data: body,
      });

      const { status, data, message }: any = res.data;

      handleClose();
      toast.success(message, {
        duration: 5000,
        position: 'top-center',
      });

      // Open payment link in a new tab if available
      if (status && data?.paymentLink) {
        window.open(data?.paymentLink, '_blank');
      }

      // Clear localStorage data after success
      // clearLocalStorageData();
      // router.push('/');
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  // Rocket Key
  const handleCreatePost = () => {
    if (isAgreed) {
      createAd();
    } else {
      toast.error('Please agree to the terms before creating a post ad.');
    }
  };

  return (
    <FadeIn>
      {!isMobile ? (
        <>
          <NewNavbar />
          <AltNavbar />
          <SubNavbar />
        </>
      ) : (
        <>
          <MobileNavbar />
          <SubNavbar />
        </>
      )}
      <div className="h-auto pt-[60px] pb-[250px] mx:px-0 px-5">
        <div className="md:w-[600px] w-full flex justify-center items-center mx-auto">
          <div>
            <div className="text-center space-y-3">
              <h1 className="text-[#101828] md:text-[24px] text-[5vw] font-[700]">Prioritize Safety</h1>
              <p className="text-[#667085] md:text-[16px] text-[4vw] text-center font-[500]">
                We thoroughly review all Ads to ensure the safety and satisfaction of our Users.
              </p>
            </div>
            <div className="mt-16">
              <p className="text-[#667085] md:text-[16px] text-[4vw] font-[500]">
                Your advertisement <span className="text-[#101828]">will not</span> be published if it falls under these
                categories:
              </p>
              <ul className="mt-7 mb-10 space-y-7">
                {safetyMeasure?.map((item, index) => (
                  <li className="md:text-[14px] text-[3.5vw] font-[500]" key={index}>
                    {index + 1}. {item.title}: <span className="text-[#667085]">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#667085] md:text-[16px] text-[4vw] font-[500]">
                To access additional details, please refer to our{' '}
                <span className="hover:underline underline-offset-4">
                  <Link href="" className="text-[#33a665] hover:text-[#33a665]  ">
                    Terms and Conditions.
                  </Link>
                </span>
              </p>
              <button
                onClick={handleOpen}
                className="rounded-[8px] py-[15px] bg-secondary text-white w-full mt-20 font-[500]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indemnity Agreement Modal */}
      <AppModal
        open={open}
        handleClose={handleClose}
        style={{
          backgroundColor: '#fff',
          padding: isMobile ? '40px 20px 50px 20px' : '40px 50px 50px 50px',
          position: 'relative',
          height: '500px',
          width: isMobile ? '90%' : '700px',
          overflow: 'auto',
          /* Hide the scrollbar */
          scrollbarWidth: 'none' /* Firefox */,
          '-ms-overflow-style': 'none' /* IE and Edge */,
          '&::-webkit-scrollbar': {
            display: 'none' /* WebKit */,
          },
        }}
      >
        <div className="w-full">
          <ButtonBase onClick={handleClose} className="absolute right-2 top-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path
                d="M17.1934 27.8059L27.8059 17.1934"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.8059 27.8059L17.1934 17.1934"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ButtonBase>
          <div>
            <h1 className="text-[#101828] text-center md:text-[20px] text-[4.5vw] font-[700]">Indemnity Agreement</h1>
            <div className="mt-10">
              <p className="text-[#667085] text-[14px] font-[400]">
                To continue, please read this agreement carefully before agreeing. This Agreement is effective from the
                date of your acceptance.
              </p>
              <div className="mt-7 mb-10 space-y-7">
                {agreement?.map((item, index) => (
                  <div className="text-[14px] space-y-2" key={index}>
                    <p className="font-[500]">
                      {index + 1}. {item.title}
                    </p>
                    <p className="text-[#667085] font-[400]">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#667085] text-[14px] font-[400]">
                By clicking the "I Agree" button, you acknowledge that you have read, understood, and agree to be bound
                by the terms and conditions of this Indemnity Agreement.
              </p>
              <div className="mt-2">
                <label>
                  <input type="checkbox" className="option-input checkbox" onChange={handleCheckboxChange} />I agree
                </label>
              </div>
              <button
                onClick={handleCreatePost}
                className={`rounded-[8px] font-[500] py-[15px] bg-secondary transition-all duration-500 transform ease-in-out text-white w-full mt-20 ${
                  !isAgreed && 'cursor-not-allowed bg-[#B4B4B8]'
                }`}
                disabled={!isAgreed}
              >
                {!isLoading ? 'Create Post Ad' : 'Loading...'}
              </button>
            </div>
          </div>
        </div>
      </AppModal>
    </FadeIn>
  );
}
