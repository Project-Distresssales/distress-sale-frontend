import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';

export const FAQDATA = [
  {
    title: 'How do I sell my property in UAE?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'How do I sell my property in UAE?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'How much does it cost to advertise my Property on Distress Sale?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'Do I need to create an account to sell my Property on Distress Sale?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'How do I update information on my Property for sale ad on Distress Sale?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'How long does it take to sell my Property in UAE?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'How will Distress Sale help me sell my Property?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
  {
    title: 'My Property is sold, how do I remove my ad from Distress Sale?',
    desc: 'lorem ipsum just a dummy text in the disclosure section ',
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col w-full gap-2">
      {FAQDATA.map((data, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <div className={` border-b-2 border-[#EAECF0]  `}>
                <Disclosure.Button
                  className={`
                  flex items-center  justify-between w-full pr-4 py-3 text-left space-x-5`}
                >
                  <span className="flex-1 flex items-center md:items-start  gap-2 font-medium md:text-sm text-[3.5vw] ">
                    {data.title}
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
                  <p>{data.desc} </p>
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
