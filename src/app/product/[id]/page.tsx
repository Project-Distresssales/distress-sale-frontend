'use client';

import MobileNavbar from '@/app/components/Navbar/MovileNavbar';
import Navbar from '@/app/components/Navbar/Navbar';
import SubNavbar from '@/app/components/Navbar/SubNavbar';
import API, { algoliaClient } from '@/constants/api.constant';
import { currencyFormatter, sliceText } from '@/helpers';
import useAppTheme from '@/hooks/theme.hook';
import useRequest from '@/services/request/request.service';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FadeIn } from '@/app/components/Transitions/Transitions';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import VerifiedBadge from '@/app/components/VerifiedBadge/VerifiedBadge';
import ShareProduct from '@/app/components/ShareProduct/ShareProduct';
import { InfinitySpin, RotatingTriangles } from 'react-loader-spinner';
import AltNavbar from '@/app/components/Navbar/AltNavbar';
import NewNavbar from '@/app/components/Navbar/NewNavbar';
import { ButtonBase, IconButton, Skeleton } from '@mui/material';
import ProductCard from '@/app/components/Card/ProductCard';
import { AppModal } from '@/app/components/Modals/Modals';
import toast from 'react-hot-toast';
import { IoCopyOutline } from 'react-icons/io5';
import ProductSkeleton from '@/app/components/ProductSkeleton/ProductSkeleton';
import useGlobalState from '@/hooks/globalstate.hook';
import Footer from '@/app/components/Footer/Footer';

export default function ProductPage() {
  const { id } = useParams();
  const { isMobile } = useAppTheme();
  const [product, setProduct] = useState<any>([]);
  const [activeTab, setActiveTab] = useState('description');
  const [fetchResults, setFetchResults] = useState<any>([]);
  const [callModal, setCallModal] = useState(false);
  const [catErrorCode, setCatErrorCode] = useState<any>(null);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { logout, isAuthenticated, profile } = useGlobalState();
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const router = useRouter();

  const tabs = [
    {
      key: 'description',
      label: 'Description',
      borderRadius: '6px',
    },
    // {
    //   key: 'additional-information',
    //   label: 'Additional information',
    //   borderRadius: '6px',
    // },
    // {
    //   key: 'specification',
    //   label: 'Specification',
    //   borderRadius: '6px',
    // },
    // {
    //   key: 'review',
    //   label: 'Review',
    //   borderRadius: '6px',
    // },
  ];

  const handleTabClick = (key: React.SetStateAction<string>) => {
    setActiveTab(key);
  };

  const { isLoading, makeRequest } = useRequest();

  const [openShare, setOpenShare] = useState(false);
  const handleShareOpen = () => {
    setOpenShare(!openShare);
  };

  const handleShareClose = () => {
    setOpenShare(false);
  };

  useEffect(() => {
    id && getProductDetails();
  }, [id]);

  const getProductDetails = async () => {
    try {
      if (!id) return; // Check if id is set

      const res = await makeRequest({
        method: 'GET',
        url: API.getProduct + `/${id}`,
      });

      const { data }: any = res.data;

      setProduct(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  // Image Thumbnail
  const [selectedImage, setSelectedImage] = useState<string>('');

  // Set the selected image when the component mounts
  useEffect(() => {
    if (product && product.imageURLs && product.imageURLs.length > 0) {
      setSelectedImage(product.imageURLs[0]);
    }
  }, [product]);

  const handleThumbnailClick = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const features = [
    {
      title: 'Type',
      data: product?.type,
    },
    {
      title: 'Purpose',
      data: product?.purpose,
    },
    {
      title: 'Size',
      data: product?.size,
    },
    {
      title: 'Status',
      data: product?.status,
    },
  ];

  const descriptionFeatures = [
    {
      title: 'Free 1 Year Warranty',
      icon: '',
    },
    {
      title: 'Free Shipping & Fasted Delivery',
      icon: '',
    },
    {
      title: '100% Money-back guarantee',
      icon: '',
    },
    {
      title: '24/7 Customer support',
      icon: '',
    },
    {
      title: 'Secure payment method',
      icon: '',
    },
  ];

  // Get All Page Data or ads
  const handleSearch = async (indexName) => {
    try {
      const hitsPerPage = 100;
      const algoliaIndex = algoliaClient.initIndex(indexName);
      const { hits } = await algoliaIndex.search('', {
        // Empty query
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
  // const categories = categoriesData['categories'] || [];

  const contactButtons = [
    {
      title: 'Call',
      icon: '/icons/call.svg',
      color: '#415EFF',
      bgColor: '#D6DDFF',
      action: () => (window.location.href = `tel:${product?.contact?.phoneNumber}`),
    },
    {
      title: 'Email',
      icon: '/icons/sms.svg',
      color: '#7A2E0E',
      bgColor: '#FFDDCF',
      action: () => (window.location.href = `mailto:${product?.contact?.email}`),
    },
    {
      title: 'Whatsapp',
      icon: '/icons/whatsapp.svg',
      color: '#1DAD18',
      bgColor: '#EAFFF2',
      action: () => window.open(`https://wa.me/${product?.contact?.whatsAppNumber}`, '_blank'),
    },
  ];

  const calculateDiscountPercentage = (openMarketPrice, price) => {
    if (!openMarketPrice || !price) return 0; // Handle cases where values might be undefined
    const discount = ((openMarketPrice - price) / openMarketPrice) * 100;
    return Math.round(discount); // Round to nearest integer
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `Distress Sale - ${product?.publicID}`;

    // Copy the text to the clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success('Text copied to clipboard!');
      })
      .catch((error) => {
        toast.error('Failed to copy text.');
      });
  };

  const productLink = `https://distresssales.io/product/${product?._id}`;

  // Sweet message to include in social media share
  const sweetMessage = `Check out this amazing product: ${product?.name} on Distress Sale! Don't miss out!`;

  // Function to copy the product link to the clipboard
  const handleCopyProduct = () => {
    navigator.clipboard
      .writeText(productLink)
      .then(() => {
        toast.success('Product link copied to clipboard!');
      })
      .catch((error) => {
        toast.error('Failed to copy product link.');
        console.error('Failed to copy text: ', error);
      });
  };

  // Function to share on Facebook
  const handleShareFacebook = () => {
    const message = encodeURIComponent(sweetMessage);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${productLink}&quote=${message}`, '_blank');
  };

  // Function to share on Twitter with a sweet message
  const handleShareTwitter = () => {
    const message = encodeURIComponent(sweetMessage);
    window.open(`https://x.com/intent/tweet?url=${productLink}&text=${message}`, '_blank');
  };

  const { makeRequest: makeGetAdsRequest, isLoading: isLoadingGetAds } = useRequest();
  const [ads, setAds] = useState([]);

  const getAds = async () => {
    makeGetAdsRequest({
      url: API.search,
      method: 'POST',
      data: {
        searchBy: product?.type,
        keyword: '',
        recordsPerPage: 0,
        pageNo: 0,
      },
    })
      .then((res) => {
        const { status, data, message, code }: any = res?.data;
        setAds(data);
      })
      .catch((error: any) => {
        // toast.error(error?.response?.data?.message);
        setCatErrorCode(error?.response?.data?.code);
        console.error('Error in fetching ads:', error);
      });
  };

  useEffect(() => {
    getAds();
  }, []);

  // Login Modal
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
    setSideBar(false);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
    setSideBar(false);
  };

  // Register Modal
  const handleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
    setSideBar(false);
  };

  const handleRegisterModalClose = () => {
    setOpenRegisterModal(false);
  };

  const handleRegisterModalOpen = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
    setSideBar(false);
  };

  // Forgot Password Modal
  const handleForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  return (
    <FadeIn>
      {!isMobile ? (
        <>
          <NewNavbar />
          {/* <AltNavbar /> */}
          {/* <div className="mt-5">
            <SubNavbar />
          </div> */}
        </>
      ) : (
        <>
          <MobileNavbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* <SubNavbar /> */}

          {/* Drop Down */}
          {sideBar && (
            <FadeIn>
              <div className="md:hidden block w-[60%] h-auto bg-white shadow text-center rounded-[12px] absolute right-5 z-20 space-y-3 p-5 top-16">
                {!isAuthenticated && (
                  <>
                    <div onClick={handleLoginModal} className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]">
                      Sign In
                    </div>
                    <div
                      onClick={handleRegisterModal}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      Sign Up
                    </div>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <div
                      onClick={() => router.push('/')}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      Home
                    </div>
                    <div
                      onClick={() => router.push('/profile')}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      Get Verified
                    </div>
                    <div
                      onClick={() => router.push('/profile')}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      My Ads
                    </div>
                    <div
                      onClick={() => router.push('/profile')}
                      className="rounded-[8px] bg-[#f7f7f7] p-4 text-[4.5vw] font-[500]"
                    >
                      Account Settings
                    </div>
                    <div
                      onClick={logout}
                      className="rounded-[8px] bg-[#FCEEEF] p-4 text-[4.5vw] font-[500] text-[#BA242E]"
                    >
                      Logout
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          )}
        </>
      )}
      <>
        <div className="w-full h-auto sm:p-10 p-5 mt-5 pb-24">
          <div className="flex sm:flex-row flex-col h-auto sm:gap-16 gap-10">
            <div className="">
              {isLoading ? (
                <Skeleton variant="rectangular" animation="wave" className="sm:h-[400px] h-[250px] rounded-[12px] sm:min-w-[450px] w-full" />
              ) : (
                <div className="sm:h-[400px] h-[250px] rounded-[12px] sm:min-w-[450px] w-full">
                  <img
                    src={selectedImage}
                    className="h-full w-full object-cover object-center inset-0 rounded-[12px]"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-[8px]"
                    />
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-[8px]"
                    />
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-[8px]"
                    />
                  </>
                ) : (
                  <>
                    {product &&
                      product?.imageURLs &&
                      product?.imageURLs.map((imageURL, index) => (
                        <img
                          key={index}
                          src={imageURL}
                          alt={`Thumbnail ${index + 1}`}
                          className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-[8px] border-2 border-[#F8C85E] object-cover"
                          onClick={() => handleThumbnailClick(imageURL)}
                        />
                      ))}
                  </>
                )}
              </div>
            </div>
            <div className="w-full">
              {isLoading ? (
                <Skeleton variant="text" className="w-[200px]" sx={{ fontSize: '2rem' }} />
              ) : (
                <p className="sm:text-[24px] text-[6vw] text-[#191C1F] sm:font-[400] font-medium">{product?.name}</p>
              )}
              <div className="grid grid-cols-2 gap-x-14 gap-y-1 mt-5">
                {isLoading ? (
                  <>
                    <Skeleton variant="text" className="sm:w-[200px] w-full" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" className="sm:w-[200px] w-full" sx={{ fontSize: '1rem' }} />
                  </>
                ) : (
                  <>
                    {features
                      .filter((feature) => feature.data) // Only include features with non-empty data
                      .map((feature, i) => (
                        <p className="sm:text-[14px] text-[3.5vw] font-[400] text-gray-400 leading-none" key={i}>
                          {feature.title}: <span className="text-black">{feature.data}</span>
                        </p>
                      ))}
                  </>
                )}
              </div>
              <div className="mt-5">
                {isLoading ? (
                  <Skeleton variant="text" className="w-[200px]" sx={{ fontSize: '1.5rem' }} />
                ) : (
                  <div className="flex gap-3 items-center">
                    <h1 className="text-[#00134D] sm:text-[24px] text-[7vw] font-[700] leading-tight">
                      {' '}
                      {currencyFormatter(product?.price, 'AED')}
                    </h1>
                    <div className="bg-[#F8C85E] py-[5px] px-[10px] rounded-[2px] flex justify-center items-center">
                      <p className="leading-none text-[#191C1F] sm:text-[14px] text-[3.5vw] font-[500]">
                        {calculateDiscountPercentage(product?.openMarketPrice, product?.price)}% OFF
                      </p>
                    </div>
                  </div>
                )}
                {isLoading ? (
                  <Skeleton variant="text" className="w-[150px]" sx={{ fontSize: '0.7rem' }} />
                ) : (
                  <p className="text-[#9F9C9C] sm:text-[14px] text-[3.5vw] font-[400]">
                    Market Price: {currencyFormatter(product?.openMarketPrice, 'AED')}
                  </p>
                )}
              </div>
              {isLoading ? (
                <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '3rem' }} />
              ) : (
                <p className="mt-7 sm:text-[16px] text-[4vw] font-[400] text-[#191C1F] w-[400px]">{product?.shortDescription}</p>
              )}
              {isLoading ? (
                <Skeleton variant="rectangular" animation="wave" className="w-full h-[40px] rounded-[8px] mt-10" />
              ) : (
                <button
                  onClick={() => setCallModal(true)}
                  className="bg-[#00134D] rounded-[12px] w-full py-[16px] text-white leading-none mt-10 sm:text-[14px] text-[4vw] font-[400]"
                >
                  Request call back
                </button>
              )}

              <div className="flex items-center justify-between mt-5">
                {/* <div className="flex gap-1 justify-center items-center">
                    <IconButton>
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.5 17.25C10.5 17.25 1.125 12 1.125 5.62501C1.125 4.49803 1.51546 3.40585 2.22996 2.53431C2.94445 1.66277 3.93884 1.0657 5.04393 0.844677C6.14903 0.623658 7.29657 0.792346 8.29131 1.32204C9.28605 1.85174 10.0665 2.70972 10.5 3.75001C10.9335 2.70972 11.7139 1.85174 12.7087 1.32204C13.7034 0.792346 14.851 0.623658 15.9561 0.844677C17.0612 1.0657 18.0555 1.66277 18.77 2.53431C19.4845 3.40585 19.875 4.49803 19.875 5.62501C19.875 12 10.5 17.25 10.5 17.25Z"
                          stroke="#475156"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    <p className="text-[14px] font-[400] text-[#475156] leading-none">Add to Wishlist</p>
                  </div> */}

                {isLoading ? (
                  <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1.5rem' }} />
                ) : (
                  <div className="flex gap-1 justify-center items-center">
                    <p className="sm:text-[14px] text-[3.5vw] font-[400] text-[#475156] leading-none">Share product:</p>
                    <div className="flex items-center">
                      {/* Copy Link Button */}
                      <IconButton onClick={handleCopyProduct}>
                        <IoCopyOutline size={20} />
                      </IconButton>

                      {/* Facebook Share Button */}
                      <IconButton onClick={handleShareFacebook}>
                        <img src="/icons/facebook.svg" width={18} height={18} alt="Facebook" />
                      </IconButton>

                      {/* Twitter Share Button */}
                      <IconButton onClick={handleShareTwitter}>
                        <img src="/icons/x.svg" width={18} height={18} alt="Twitter" />
                      </IconButton>

                      {/* Instagram Share Button */}
                      <IconButton onClick={handleCopyProduct}>
                        <img src="/icons/instagram.svg" width={18} height={18} alt="Instagram" />
                      </IconButton>
                    </div>
                  </div>
                )}
              </div>

              {isLoading ? (
                <Skeleton variant="rectangular" animation="wave" className="w-full h-[100px] rounded-[8px] mt-5" />
              ) : (
                <div className="mt-5 border border-[#E3E3E3] rounded-[8px] w-full h-auto p-5">
                  <p className="sm:text-[14px] text-[3.5vw] font-[400] text-[#0A0A0B]">100% Guarantee Safe Checkout</p>
                  <img src="/icons/payment-method.svg" className="mt-3" />
                </div>
              )}
            </div>
          </div>

          {/* Tab */}
          <div className="sm:text-[14px] text-[3.5vw] mx-auto flex items-center justify-start gap-1 bg-[#FBFBFC] w-full rounded-[6px] mt-20">
            {tabs.map((tab, index) => (
              <ButtonBase key={index} onClick={() => handleTabClick(tab.key)} className="rounded-[6px]">
                <div
                  className={`py-2 px-3 cursor-pointer transform transition duration-500 ease-in-out`}
                  style={{
                    backgroundColor: activeTab === tab.key ? '#F0F2F5' : '#FBFBFC',
                    color: activeTab === tab.key ? '#0F1625' : '#687588',
                    borderRadius: tab.borderRadius,
                    fontWeight: activeTab === tab.key ? '500' : '500',
                    // border:
                    //   activeTab === tab.key
                    //     ? "0.5px solid #E4E8EC"
                    //     : "0.5px solid transparent",
                  }}
                >
                  <p className="leading-none">{tab.label}</p>
                </div>
              </ButtonBase>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-7 px-2">
            <div>
              {/* <p className="text-[16px] font-[600] text-[#0A0A0B]">Description</p> */}
              {isLoading ? (
                <>
                  <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="text" className="w-[250px]" sx={{ fontSize: '1rem' }} />
                </>
              ) : (
                <p className="sm:text-[14px] text-[3.5vw] font-[400] text-[#726C6C]">{product?.fullDescription}</p>
              )}
            </div>
            {/* <div className="min-w-[300px] h-auto pl-7">
              <p className="text-[16px] font-[600] text-[#0A0A0B]">Features</p>
              <div className="mt-3 space-y-3">
                {descriptionFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <img src={feature.icon} width={20} height={20} />
                    <p className="text-[14px] font-[400] text-[#0A0A0B] leading-none">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Related Product */}
          <div className="mt-16">
            <h1 className="text-[#0A0A0B] sm:text-[24px] text-[5.5vw] font-[600]">Related Product</h1>
            {catErrorCode === 400 ? (
              <div className="w-full h-[200px] flex justify-center items-center">
                <p className="text-[#726C6C] font-[400] text-[16px] leading-tight">No related products found.</p>
              </div>
            ) : (
              <div className="mt-5">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mt-10 mt-5">
                  {isLoading ? (
                    <ProductSkeleton />
                  ) : (
                    <>
                      {ads?.map((product, i) => (
                        <ProductCard key={i} product={product} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        <AppModal
          open={callModal}
          handleClose={() => setCallModal(false)}
          style={{
            backgroundColor: '#fff',
            padding: !isMobile ? '30px' : '20px',
            position: 'relative',
            height: 'auto',
            width: !isMobile ? '660px' : '90%',
            minWidth: !isMobile ? '660px' : '90%',
          }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="sm:text-[32px] text-[6vw] font-[700] text-[#0A0A0B] poppins-font leading-none">Request Call Back</h1>
            <p className="text-[#726C6C] font-[400] sm:text-[16px] text-[4vw] text-center leading-none mt-2">
              Book a session with our agents to buy this item.
            </p>
            <img src="/icons/calling.svg" width={200} height={50} className="mt-5" />
            <p className="mt-2 sm:w-[350px] w-full text-center sm:text-[16px] text-[4vw] font-[400] text-[#0A0A0B] leading-tight poppins-font">
              Book a session with us and reference the item{' '}
              <span className="font-[700] cursor-pointer" onClick={handleCopy}>
                Distress Sale - {product?.publicID}
              </span>{' '}
              when contacting us.
            </p>
            {/* <button
              className="bg-[#00134D] flex items-center gap-3 rounded-[12px] w-full py-[16px] text-white leading-none mt-7 justify-center text-[16px] font-[600]"
              // onClick={() => {
              //   const contactName = product?.contact?.name?.replace(/\s+/g, '-').toLowerCase();
              //   window.open(`https://calendly.com/${contactName}/event`, '_blank');
              // }}
            >
              <img src="/icons/calendly.svg" width={35} height={35} alt="Calendly Icon" />
              <span>Book call on Calendly</span>
            </button> */}

            {/* <div className="my-7 w-full flex items-center">
              <div className="w-full border border-[#EAECF0]" />
              <p className="leading-none px-7 text-[14px] font-[#9F9C9C] text-[#9F9C9C]">OR</p>
              <div className="w-full border border-[#EAECF0]" />
            </div> */}

            <div className="flex gap-2 w-full mt-7">
              {contactButtons.map((contact, i) => (
                <button
                  key={i}
                  style={{ backgroundColor: contact.bgColor }}
                  className="justify-center items-center flex gap-1.5 w-full py-3 rounded-lg"
                  onClick={contact.action}
                >
                  <img src={contact.icon} width={20} height={20} alt={`${contact.title} icon`} />
                  <p style={{ color: contact.color }} className="leading-none text-center sm:text-base text-[3.2vw] font-medium">
                    {contact.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </AppModal>
      </>

      <Footer />
    </FadeIn>
  );
}
