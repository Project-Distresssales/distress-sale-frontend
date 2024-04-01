import React from 'react';
import { WhatsappShareButton, TelegramShareButton, FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

const ShareButton = ({ url, platform, hashtag, quote }) => {
  const getEncodedUrl = (url) => encodeURIComponent(url);

  const handleShareButtonClick = () => {
    // Add custom logic here if needed
  };

  switch (platform) {
    case 'whatsapp':
      return (
        <WhatsappShareButton url={url} onClick={handleShareButtonClick}>
          <SocialIcon url={`https://api.whatsapp.com/send?text=${getEncodedUrl(url)}`} />
        </WhatsappShareButton>
      );
    case 'telegram':
      return (
        <TelegramShareButton url={url} onClick={handleShareButtonClick}>
          <SocialIcon url={`https://telegram.me/share/url?url=${getEncodedUrl(url)}`} />
        </TelegramShareButton>
      );
    case 'facebook':
      return (
        <FacebookShareButton url={url} onClick={handleShareButtonClick}>
          <SocialIcon url={`https://www.facebook.com/sharer/sharer.php?u=${getEncodedUrl(url)}`} />
        </FacebookShareButton>
      );
    case 'twitter':
      return (
        <TwitterShareButton url={url} hashtags={[hashtag]} onClick={handleShareButtonClick}>
          <SocialIcon url={`https://twitter.com/intent/tweet?url=${getEncodedUrl(url)}`} />
        </TwitterShareButton>
      );
    case 'linkedin':
      return (
        <LinkedinShareButton url={url} onClick={handleShareButtonClick}>
          <SocialIcon url={`https://www.linkedin.com/sharing/share-offsite/?url=${getEncodedUrl(url)}`} />
        </LinkedinShareButton>
      );
    case 'email':
      return (
        <EmailShareButton url={url} subject={hashtag} body={url} onClick={handleShareButtonClick}>
          <SocialIcon url={`mailto:?subject=${getEncodedUrl(hashtag)}&body=${getEncodedUrl(url)}`} />
        </EmailShareButton>
      );
    default:
      return null;
  }
};

export default ShareButton;
