import useGlobalState from '@/hooks/globalstate.hook';
import { ButtonBase, CircularProgress, ClickAwayListener, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SignupModal from '../Auth/SIgnup/Signup';
import LoginModal from '../Auth/Login/Login';
import API, { algoliaClient } from '@/constants/api.constant';
import { isEmpty } from '@/helpers';
import useAppTheme from '@/hooks/theme.hook';
import useRequest from '@/services/request/request.service';
import { VoidCallback } from '@/utils/types';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { IoReturnUpBack } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AppModal } from '../Modals/Modals';
import MyTextField from '../Fields/MyTextField';

// Define the type for search results
interface SearchResult {
  category: string;
  hits: Array<{
    objectID: string;
    _highlightResult?: object;
    _snippetResult?: object;
    _rankingInfo?: object;
    _distinctSeqID?: number;
  }>;
}

export default function NewNavbar() {
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean>(false);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
  const { profile: user, isAuthenticated, logout } = useGlobalState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notification, setNotification] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const router = useRouter();

  const options = [
    { title: 'My Profile', to: '/profile' },
    // { title: 'My Public Profile', to: '/profile' },
    { title: 'Get Verified', to: '/profile' },
    { title: 'My Ads', to: '/profile' },
    // { title: 'Favorites', to: '/profile' },
    // { title: 'Searches', to: '/profile' },
    { title: 'Account Settings', to: '/profile' },
    // { title: 'Sign Out', to: '#' },
  ];

  // Scroll Animation
  const [scrollStyle, setScrollStyle] = useState<boolean>(false);
  useEffect(() => {
    const changeNavbarStyle = () => {
      if (window.scrollY >= 150) {
        setScrollStyle(true);
      } else {
        setScrollStyle(false);
      }
    };
    window.addEventListener('scroll', changeNavbarStyle);
  }, []);

  // Auth Modal button
  const handleOpenSmallModal = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenuModal(!openMenuModal);
  };
  const handleCloseSmallModal = (option?: string) => {
    setAnchorEl(null);
    setOpenMenuModal(false);

    if (option == 'Sign Out') {
      logout();
    }
  };

  // Login Modal
  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
  };

  // Register Modal
  const handleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };
  const handleForgotPasswordModalClose = () => {
    setOpenForgotPasswordModal(false);
  };
  const handleRegisterModalClose = () => {
    setOpenRegisterModal(false);
  };

  const handleRegisterModalOpen = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  };

  // Forgot Password Modal
  const handleForgotPasswordModal = () => {
    // setOpenForgotPasswordModal(true);
    setOpenLoginModal(false);
  };

  // const handleForgotPasswordModalClose = () => {
  //   setOpenForgotPasswordModal(false);
  // };

  const handleForgotPasswordModalOpen = () => {
    setOpenLoginModal(false);
    // setOpenForgotPasswordModal(true);
  };

  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleVerificationModalOpen = () => {
    setVerificationModalOpen(true);
  };

  const handleVerificationModalOpenClose = () => {
    setVerificationModalOpen(false);
  };

  const navs = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About Us',
      href: '/',
    },
    {
      title: "FAQ's",
      href: '/',
    },
  ];

  const authModal = () =>
    openMenuModal && (
      <ClickAwayListener
        onClickAway={() => {
          handleCloseSmallModal();
        }}
      >
        <div
          className="flex items-center p-[7px] rounded-[5px] w-[15vw] mx-auto absolute top-11 z-50 bg-white border-[1px]"
          style={{
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
          }}
        >
          <button
            className="rounded-[5px] py-[10px] text-[1.1vw] w-full font-[500] text-[#101828]"
            onClick={handleLoginModal}
          >
            Log in
          </button>

          <svg
            width="1"
            // height="25"
            className="h-[30px]"
            viewBox="0 0 1 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="0.5" y1="25" x2="0.5" stroke="#EAECF0" />
          </svg>

          <button
            className="rounded-[5px] py-[10px] text-[1.1vw] w-full font-[500] text-[#101828]"
            onClick={handleRegisterModal}
          >
            Register
          </button>
        </div>
      </ClickAwayListener>
    );

  // Agolia Search Result
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [fetchResults, setFetchResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const data = ['General', 'Automobile', 'Property for Sale', 'Property for Rent'].map((item) => ({
    label: item,
    value: item,
  }));

  // Algolia search
  const handleSearch = async (indexName: string) => {
    try {
      const hitsPerPage = 100;
      const algoliaIndex = algoliaClient.initIndex(indexName);
      const { hits } = await algoliaIndex.search(query, { hitsPerPage });
      return { category: indexName, hits };
    } catch (error) {
      console.error(`Error searching Algolia for ${indexName}:`, error);
      return { category: indexName, hits: [] };
    }
  };

  useEffect(() => {
    const searchClients = async () => {
      if (query) {
        const categories = ['categories', 'automobile', 'commercial', 'property_for_sale_ads', 'property_for_rent_ads'];
        const searchPromises = categories.map((category) => handleSearch(category));

        try {
          const results = await Promise.all(searchPromises);
          setFetchResults(results);

          // Flatten the hits from all categories into a single array for dropdown display
          const allHits = results.flatMap((result) => result.hits);
          setResults(allHits);
        } catch (error) {
          console.error('Error in parallel search:', error);
        }
      } else {
        setResults([]);
      }
    };

    searchClients();
  }, [query]);

  // Organize search results
  const categoriesData = {};
  fetchResults.forEach(({ category, hits }) => {
    categoriesData[category] = hits || [];
  });

  // Dropdown results rendering
  const hasResults = results && results.length > 0;

  const handleItemClick = (item: any, type: string) => {
    console.log('Clicked item type:', type);
  
    // Map categories directly to routes
    const categoryRoutes: { [key: string]: string } = {
      'automobile': '/automobile',
      'Residential for Sale': '/property-for-sale',
      'Residential for Rent': '/property-for-rent',
      'commercial': '/commercial',
    };
  
    // First check: route based on category type
    if (categoryRoutes[type]) {
      router.push(categoryRoutes[type]);
      return;
    }
  
    // Second check: route based on item name contains
    const nameBasedRoutes: { [key: string]: string } = {
      'commercial': '/commercial',
      'car': '/automobile',
      'race': '/automobile',
      'truck': '/automobile',
      'player': '/other',
      'villa compound': '/commercial',
      'rent': '/property-for-rent',
      'sale': '/property-for-sale',
      'plumber': '/other',
      'penthouse': '/commercial',
      'motor': '/automobile',
      'parts': '/automobile',
    };
  
    // Loop through each keyword and check if it is in the item name
    for (const [keyword, route] of Object.entries(nameBasedRoutes)) {
      if (item.name.toLowerCase().includes(keyword)) {
        router.push(route);
        return;
      }
    }
  
    // Default route for unmatched categories or item names
    router.push('/others');
  };

  return (
    <>
      <nav className="flex items-center justify-between gap-5 px-4 py-2 bg-white">
        <Link href="/">
          <img src="/icons/distresssales-logo.svg" width={200} height={200} />
        </Link>

        <div className="flex items-center gap-10">
          {/* Search Bar */}
          <div className="relative mx-auto">
            {isAuthenticated && (
              <div className="relative flex items-center w-[350px] h-12 rounded-[10px] border border-gray-300 bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#00134D"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-4"
                  type="text"
                  id="search"
                  placeholder="Search anything..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            )}

            {/* Dropdown */}
            {query && (
              <div className="absolute top-14 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                {results.length > 0 ? (
                  results.map((result) => {
                    console.log('Rendering result:', result); // Log result structure here
                    return (
                      <div
                        key={result.objectID}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleItemClick(result, result.propertyType || '')}
                      >
                        {result.name || 'Unnamed result'}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-2 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-10 my-2">
              {/* <div className="flex items-center gap-7">
                <ButtonBase
                  sx={{
                    borderRadius: '100%',
                    '&:active': {
                      backgroundColor: '#FEF0F0', // Change to your desired color
                    },
                  }}
                >
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <img src="/icons/bell.svg" alt="Notification-bell" className="relative" width={20} height={20} />
                    {notification.length > 0 && (
                      <img src="/icons/red-dot.svg" className="absolute right-[10px] top-2" width={10} height={10} />
                    )}
                  </div>
                </ButtonBase>
                <ButtonBase
                  sx={{
                    borderRadius: '100%',
                    '&:active': {
                      backgroundColor: '#FEF0F0', // Change to your desired color
                    },
                  }}
                >
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <img src="/icons/fav.svg" alt="Favorite" className="relative" width={20} height={20} />
                    {favorite.length > 0 && (
                      <img src="/icons/red-dot.svg" className="absolute right-[10px] top-2" width={10} height={10} />
                    )}
                  </div>
                </ButtonBase>
              </div> */}
              <div
                className="border-[0.2px] border-[#B5B3B3] rounded-[20px] py-[8px] px-[8px] flex gap-3 items-center cursor-pointer"
                onClick={handleOpenSmallModal}
              >
                <div className="h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={
                      user?.profileImage ||
                      `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&rounded=true&size=128`
                    }
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-[#0A0A0B] leading-none">
                  {user?.firstName + ' ' + user?.lastName}
                </p>
                <svg
                  className={`transition duration-300 ${openMenuModal ? 'rotate-180' : ''}`}
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.45 9.90615L8.37499 5.83115C7.89374 5.3499 7.10624 5.3499 6.62499 5.83115L2.54999 9.90615"
                    stroke="#101828"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button
                onClick={() => router.push('/post-ad')}
                className="text-[#FAFAFA] bg-[#00134D] flex items-center px-7 py-3 text-sm font-[600] rounded-[12px] poppins-font gap-3"
              >
                <img src="/icons/add.svg" width={15} />
                <span>Post AD</span>
              </button>
            </div>
          ) : (
            <>
              <div className="flex md:hidden">
                <button id="hamburger">
                  <img
                    className="toggle block"
                    src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                    width="40"
                    height="40"
                  />
                  <img
                    className="toggle hidden"
                    src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                    width="40"
                    height="40"
                  />
                </button>
              </div>
              <div className="toggle hidden w-full md:w-auto md:flex gap-7 text-right text-bold mt-5 md:mt-0 md:border-none">
                {navs.map((nav, i) => (
                  <Link
                    key={i}
                    href={nav.href}
                    className="block md:inline-block md:border-none text-[#0A0A0B] hover:text-[#0A0A0B] poppins-font text-[16px] font-[400]"
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>

              <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
                <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
                  <button
                    onClick={handleRegisterModal}
                    className="text-[#FAFAFA] bg-[#00134D] inline-flex items-center justify-center px-7 py-3 border border-transparent text-sm font-[600] rounded-[12px]"
                  >
                    Register
                  </button>
                  <button
                    onClick={handleLoginModal}
                    className="text-[#00134D] text-sm font-[600] border border-[#00134D] rounded-[12px] px-7 py-3"
                  >
                    Login
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      <div className="flex items-center space-x-3 ml-5 cursor-pointer relative z-50">
        {isAuthenticated ? (
          <Menu id="city-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleCloseSmallModal()}>
            {options.map((city) => (
              <Link
                key={city.title}
                href={city.to}
                className="text-secondary hover:text-secondary no-underline hover:no-underline"
              >
                <MenuItem onClick={() => handleCloseSmallModal(city.title)}>
                  <div className="flex w-full gap-5 text-[14px] font-[500] underline-none">
                    {city.title}

                    {city.title === 'Get Verified' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.98334 10.0001L8.99167 12.0167L13.0167 7.9834"
                          stroke="#308652"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.95834 2.0416C9.53334 1.54993 10.475 1.54993 11.0583 2.0416L12.375 3.17493C12.625 3.3916 13.0917 3.5666 13.425 3.5666H14.8417C15.725 3.5666 16.45 4.2916 16.45 5.17493V6.5916C16.45 6.9166 16.625 7.3916 16.8417 7.6416L17.975 8.95827C18.4667 9.53327 18.4667 10.4749 17.975 11.0583L16.8417 12.3749C16.625 12.6249 16.45 13.0916 16.45 13.4249V14.8416C16.45 15.7249 15.725 16.4499 14.8417 16.4499H13.425C13.1 16.4499 12.625 16.6249 12.375 16.8416L11.0583 17.9749C10.4833 18.4666 9.54167 18.4666 8.95834 17.9749L7.64167 16.8416C7.39167 16.6249 6.925 16.4499 6.59167 16.4499H5.15C4.26667 16.4499 3.54167 15.7249 3.54167 14.8416V13.4166C3.54167 13.0916 3.36667 12.6249 3.15834 12.3749L2.03334 11.0499C1.55 10.4749 1.55 9.5416 2.03334 8.9666L3.15834 7.6416C3.36667 7.3916 3.54167 6.92494 3.54167 6.59994V5.1666C3.54167 4.28327 4.26667 3.55827 5.15 3.55827H6.59167C6.91667 3.55827 7.39167 3.38327 7.64167 3.1666L8.95834 2.0416Z"
                          stroke="#308652"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </MenuItem>
              </Link>
            ))}
            <div className="w-full py-2 px-4 flex justify-start items-center cursor-pointer hover:bg-red-50">
              <p className="text-red-500" onClick={logout}>
                Logout
              </p>
            </div>
          </Menu>
        ) : (
          authModal()
        )}
      </div>

      {/* Auth Signup  */}
      <SignupModal
        open={openRegisterModal}
        onClose={handleRegisterModalClose}
        handleLoginModalOpen={handleLoginModalOpen}
        next={() => {
          handleVerificationModalOpen();
        }}
      />

      {/* Auth Login Modal */}
      <LoginModal
        open={openLoginModal}
        onClose={handleLoginModalClose}
        handleForgotPasswordModal={handleForgotPasswordModal}
        handleRegisterModalOpen={handleRegisterModalOpen}
      />

      {/* Auth Forgot-Password Modal */}
      <ForgotPasswordModal
        open={openForgotPasswordModal}
        onClose={handleForgotPasswordModalClose}
        handleLoginModalOpen={handleLoginModalOpen}
      />

      {/* verify email */}
      <RegistrationCompleteModal open={verificationModalOpen} onClose={handleVerificationModalOpenClose} />
    </>
  );
}

const ForgotPasswordModal = ({
  open,
  onClose,
  handleLoginModalOpen,
}: {
  open: boolean;
  onClose: () => void;
  handleLoginModalOpen: VoidCallback;
}) => {
  const { isMobile } = useAppTheme();
  const { makeRequest, isLoading, data } = useRequest();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.requestResetPassword,
      data: values,
      method: 'POST',
    })
      .then((res) => {
        const { status, data, message }: any = res.data;
        toast.success(message);
        onClose();
        // next();
        // navigate(`/auth/verification?code=${data.code}`);
        // setOpenSnackBar(true);
        // setTimeout(() => {
        //   openSnackBar && navigate(`/auth/verification?code=${data.code}`);
        // }, 3000);
      })
      .catch((error: AxiosError) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else if (status === 400) {
          setErrors(data.data);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      });
  };

  const [form, setForm] = useState({
    email: '',
  });

  const { values, handleSubmit, handleChange, errors, setErrors, getFieldProps } = useFormik({
    initialValues: form,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  });

  const { email } = values;

  const iDisabled = isEmpty(email);

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: !isMobile ? '30px' : '20px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <IconButton
        onClick={() => {
          onClose();
          handleLoginModalOpen();
        }}
        className="absolute top-2 left-2"
      >
        <IoReturnUpBack style={{ fontSize: '20px', fontWeight: '700' }} />
      </IconButton>

      <div className="w-full">
        {/* <Image src={Assets.arrowRight} alt="" width={20} height={20} /> */}
        <div className="items-center">
          <div className="flex justify-center w-full">
            <h1 className="text-[#101828] font-[700] md:text-[22px] text-[5vw] text-center leading-tight">
              Forgot Password
            </h1>
          </div>
        </div>
        <form className="mt-7" onSubmit={handleSubmit}>
          <MyTextField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email address"
            {...getFieldProps('email')}
          />
          <div className="mt-10">
            <button
              className={`
      flex justify-center items-center rounded-[8px] py-3.5 text-white font-[500] 
    md:text-[16px] text-[3.2vw] bg-secondary w-full`}
              type="submit"
              disabled={iDisabled}
            >
              {isLoading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : 'Proceed'}
            </button>
          </div>
        </form>
      </div>
    </AppModal>
  );
};

const RegistrationCompleteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: '30px 20px 30px 20px',
        position: 'relative',
        height: 'auto',
        width: '400px',
      }}
    >
      <div className="w-full absolute right-0 top-0">
        <IconButton onClick={onClose}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.2267 19.7732L19.7733 12.2266"
              stroke="#101828"
              stroke-width="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.7733 19.7732L12.2267 12.2266"
              stroke="#101828"
              stroke-width="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </div>

      <div className="w-full space-y-4 flex flex-col justify-center items-center">
        <div>
          <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.5 45.8334C36.9584 45.8334 46.3334 36.4584 46.3334 25.0001C46.3334 13.5417 36.9584 4.16675 25.5 4.16675C14.0417 4.16675 4.66669 13.5417 4.66669 25.0001C4.66669 36.4584 14.0417 45.8334 25.5 45.8334Z"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6458 25.0001L22.5416 30.8959L34.3541 19.1042"
              stroke="#308652"
              stroke-width="4"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-[#101828] font-[700] text-[20px] text-center leading-tight">
          Email sent, Check your inbox!
        </h1>

        <p className="text-center text-[14px] font-[500] text-[#101828] px-7">
          Should the email address you provided, you will receive a link to Verify your Email
        </p>
      </div>
    </AppModal>
  );
};
