import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

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
    <div className="flex flex-col w-full gap-10">
      {FAQDATA.map((data, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <div className={`pb-2 border-b-2 border-[#EAECF0]  `}>
                <Disclosure.Button
                  className={`
                  flex items-center  justify-between w-full px-4 py-6 text-left`}
                >
                  <span className="flex-1 flex items-center md:items-start  gap-2 font-medium text-[32px] xl:text-[22px] md:text-sm ">
                    {data.title}
                  </span>
                  <span className="flex justify-center items-center">
                    {open ? (
                      <Icon className="text-[56px] xl:text-[38px] md:text-[15px] " icon="mingcute:up-line" />
                    ) : (
                      <Icon className="text-[56px] xl:text-[38px] md:text-[15px] " icon="mingcute:down-line" />
                    )}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="md:leading-relaxed  px-4  flex flex-col py-8 text-xl lg:text-lg md:text-sm ">
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
