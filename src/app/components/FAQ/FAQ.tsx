import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';

export const faq = [
  {
      header: 'Is it really possible to sell my asset within 48 hours?',
      content: 'Absolutely, our platform specializes in rapid sales, meeting your urgent financial needs swiftly.'
  },
  {
      header: "Aren't the assets sold here undervalued?",
      content: 'You secure fast liquidation for cash, often finding buyers willing to pay a fair price swiftly.'
  },
  {
      header: "How do I know I'm getting a good deal?",
      content: 'Our market place offers assets below market value, ensuring buyers and sellers get the best possible deals.'
  },
  {
      header: 'Can I trust the quality of assets purchased here?',
      content: 'Every asset is verified by us to ensure buyers invest in quality items, offering peace of mind.'
  },
  {
      header: "What if I can't find a buyer in 48 hours?",
      content: 'Our extensive network almost always guarantees a buyer within the timeframe, ensuring your assets move quickly.'
  },
  {
      header: 'Are there any hidden fees involved?',
      content: 'Our platform operates with full transparency, disclosing all fees upfront for a trustworthy transaction experience.'
  },
  {
      header: 'Is my personal information safe with your platform?',
      content: 'We prioritize privacy, using top security measures to protect your data and transaction details.'
  },
  {
      header: 'How much can I save buying assets here compared to the open market?',
      content: 'Buyers report significant savings, acquiring assets at prices well below market value, enhancing financial flexibility.'
  },
  {
      header: 'What if the asset I bought has issues?',
      content: 'We facilitate a transparent buying process, allowing for inspection and ensuring satisfaction with your purchase.'
  },
  {
      header: 'Why should I choose your platform over traditional methods?',
      content: 'Our marketplace offers unparalleled speed, unmatched deals, and a diverse portfolio, optimizing both buying and selling processes.'
  },
]

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col w-full gap-2">
      {faq.map((data, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <div className={` border-b-2 border-[#EAECF0]  `}>
                <Disclosure.Button
                  className={`
                  flex items-center  justify-between w-full pr-4 py-3 text-left space-x-5`}
                >
                  <span className="flex-1 flex items-center md:items-start  gap-2 font-medium md:text-sm text-[3.5vw] ">
                    {data.header}
                  </span>
                  <span className="flex justify-center items-center">
                    {open ? (
                      <ArrowUpIcon />
                    ) : (
                      //   <Icon className="text-[56px] xl:text-[38px] md:text-[15px] " icon="mingcute:down-line" />
                      <ArrowDownIcon />
                    )}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="md:leading-relaxed  px-4  flex flex-col py-3 text-sm ">
                  <p>{data.content} </p>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default FAQ;
