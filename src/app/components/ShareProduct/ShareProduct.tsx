import useAppTheme from '@/hooks/theme.hook';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AppModal } from '../Modals/Modals';
import MyTextField from '../Fields/MyTextField';
import axios from 'axios';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, FacebookShareCount, InstapaperIcon, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappShareButton, XIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import ShareButton from '../ShareButton/ShareButton';

export default function ShareProduct({icon, title, handleShareClose, handleShareOpen, openShare}) {
  const { isMobile } = useAppTheme();
  const [productUrl, setProductUrl] = useState(window.location.href);
  const [isCopied, setIsCopied] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  const BITLY_TOKEN = 'b666a170281bf1e87a4f4f6dd4ca62efdadbcf08'
const BITLY_GUID = 'Bo41dWhwGdD'

  useEffect(() => {
    const shortenUrl = async () => {
      try {
        const response = await axios.post(
          'https://api-ssl.bitly.com/v4/shorten',
          {
            long_url: productUrl,
            domain: "bit.ly",
            group_guid: `${BITLY_GUID}`,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${BITLY_TOKEN}`,
            },
          }
        );

        if (response.status === 200) {
          setShortenedUrl(response.data.link);
        } else {
          throw new Error('Failed to shorten URL');
        }
      } catch (error) {
        console.error('Error shortening URL:', error);
      }
    };

    shortenUrl(); // Call the function on component mount
  }, []);
  const handleCopyClick = () => {
    const urlToCopy = shortenedUrl || productUrl;
    navigator.clipboard.writeText(urlToCopy);
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };


  return (
    <>
    <div className='bg-white px-[16px] py-[5px] rounded-[20px] flex space-x-3 items-center cursor-pointer' onClick={handleShareOpen}>
        <p className='text-[#101828] font-[500] md:text-[15px] text-[3.2vw]'>{title}</p>
        <Image src={icon} alt="" width={20} height={20} />
    </div>

    <AppModal
      open={openShare}
      handleClose={handleShareClose}
      style={{
        backgroundColor: '#fff',
        padding: !isMobile ? '40px 30px 30px 30px' : '20px 20px 30px 20px',
        position: 'relative',
        height: 'auto',
        overflowY: 'auto',
        width: !isMobile ? '600px' : '90%',
      }}
    >

      <div className="flex flex-wrap justify-between gap-5 w-full">
      <ShareButton platform="whatsapp" url={shortenedUrl} hashtag={undefined} quote={undefined} />
<ShareButton platform="telegram" url={shortenedUrl} hashtag={undefined} quote={undefined} />
<ShareButton platform="facebook" url={shortenedUrl} quote="Check out this product!" hashtag={undefined} />
<ShareButton platform="twitter" url={shortenedUrl} hashtag="product" quote={undefined} />
<ShareButton platform="linkedin" url={shortenedUrl} hashtag={undefined} quote={undefined} />
<ShareButton platform="email" url={shortenedUrl} hashtag="product" quote={undefined} />
      </div>
    <div className="flex items-center space-x-2 min-w-full">
      <MyTextField
        id='product'
        name='product'
        label=''
        placeholder='Product URL'
        value={shortenedUrl || productUrl}
        onChange={undefined}
        type='text'
        error={false}
        readOnly
      />
      <button
        className="rounded-[8px] min-h-full px-7 py-3 md:text-[15px] text-[3.5vw] font-[500] text-white bg-distressBlue"
        onClick={handleCopyClick}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
    </AppModal>
    </>
  )
}
