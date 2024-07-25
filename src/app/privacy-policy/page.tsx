"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import useAppTheme from '../../hooks/theme.hook';
import { useAppSelector } from '../../store';
import { profileLogoutAction } from '../../store/profile.slice';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import Navbar from '../components/Navbar/Navbar';
import { FadeIn } from '../components/Transitions/Transitions';

const PrivacyPolicy = () => {
  const { isMobile } = useAppTheme();

  return (
    <FadeIn>
      {!isMobile ? (
        <>
          <Navbar />
          {/* <SubNavbar /> */}
        </>
      ) : (
        <>
          <MobileNavbar />
          {/* <SubNavbar /> */}
        </>
      )}

      <div className="w-full h-auto">
        {/* Main */}
        <div className="w-full h-auto sm:px-20 px-5 sm:pt-12 sm:pb-[200px]">
          <div className="w-full sm:h-[130px] h-[100px] bg-[#101828] rounded-[16px] flex flex-col justify-center items-center sm:px-14 px-7 py-7">
            <h1 className="text-[#fff] sm:text-[30px] text-[5vw] font-[600]">Data Protection And Privacy Policy</h1>
            <p className="text-white text-[16px] font-[500]">Effective Date – 1 June 2024</p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-10 mx-auto py-10">
            {/* Preamble */}
            <div className="sm:w-[600px] w-full text-[#384a62]">
              <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">DISTRESS SALES</h1>
              <p className="font-[500] text-[4vw] sm:text-[16px]">
                <span className="text-primaryColor font-[600]">DISTRESS SALES</span> respects your privacy
                and is committed to protecting your data.{' '}
              </p>
            </div>

            {/* Introduction */}
            <div className="sm:w-[600px] w-full text-[#384a62]">
              <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">POLICY</h1>
              <div className="space-y-5">
                <p className="font-[500] text-[4vw] sm:text-[15px] leading-normal">
                  This Acceptable Use Policy (the "Policy") sets out the rules that apply when you use,
                  or upload content to, the platform available at <span><Link target="_blank" className="text-primary hover:text-primary" href='https://distresssales.io'>www.distresssales.io</Link></span> and
                  through any Distress Sales mobile application available from time to time
                  (collectively, the "Platform"), make contact with other users of the Platform,
                  link to the Platform or interact with the Platform in any other way. It should be read alongside,
                  and forms part of, our Platform Terms of Use.
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="sm:w-[600px] w-full text-[#384a62]">
              <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">PROHIBITED USES</h1>
              <p className="font-[500] text-[4vw] sm:text-[16px] leading-normal">
                You may not use the Platform:
                <ul className="list-disc mt-3 font-[500] text-[14px] mx-5 space-y-1">
                  <li>If you are under the age of eighteen (18).</li>
                  <li>In any way that breaches applicable local, national or international law.</li>
                  <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
                  <li>To bully, insult, intimidate or humiliate any person.</li>
                  <li>To harm any person.</li>
                  <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our Content Standards; or to transmit any unsolicited or unauthorised advertising or promotional material, or any other form of similar solicitation <span className="text-primary">("spam").</span></li>
                </ul>
              </p>
            </div>

            {/* Information we collect */}
            <div className="sm:w-[600px] w-full text-[#384a62]">
              <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">CONTENT STANDARDS</h1>
              <div>
                <p className="font-[500] text-[4vw] sm:text-[15px] leading-normal">
                  These content standards apply to any and all material which you contribute to the Platform (your "User Content"). These content standards must be complied with in spirit as well as to the
                  letter. Distress Sales will determine, in its sole opinion, whether any User Content is in breach of these content standards.
                </p>
                <p className="font-[500] text-[4vw] sm:text-[16px] leading-normal">
                  Any User Content must:
                  <ul className="list-disc mt-3 font-[500] text-[14px] mx-5 space-y-1">
                    <li>Be accurate (where it states facts).</li>
                    <li>Contain opinions that are genuinely held (where relevant); and comply with the law applicable in any country from which it is posted and to which the Platform is targeted.</li>
                  </ul>
                </p>

                <p className="font-[500] text-[4vw] sm:text-[16px] leading-normal mt-5">
                  Any User Content must not:
                  <ul className="list-disc mt-3 font-[500] text-[14px] mx-5 space-y-1">
                    <li>Be likely to deceive any person.</li>
                    <li>Contain illegal content, or promote any illegal content or activity.</li>
                    <li>Be obscene, offensive, hateful or inflammatory.</li>
                    <li>Bully, insult, intimidate or humiliate any person.</li>
                    <li>Encourage, promote or provide instructions for deliberate self-harm.</li>
                    <li>Encourage or promote terrorism.</li>
                    <li>Promote sexually explicit material.</li>
                    <li>Include child sexual abuse material.</li>
                    <li>Incite violence or hatred against particular groups.</li>
                    <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
                    <li>Infringe any copyright, database right or trademark of any other person; include video content not legally permitted in any country from which it is posted and to which the Platform is targeted.</li>
                    <li>Breach any legal duty owed to a third-party, such as a contractual duty or a duty of confidence.</li>
                    <li>Be in contempt of court.</li>
                    <li>Invade another person's privacy.</li>
                    <li>Impersonate any person, or misrepresent your identity or affiliation with any person.</li>
                    <li>Give the impression that the User Content comes from, or is associated with or endorsed by, Distress Sales if this is not the case; or contain any external advertising, or promote any services or web links to other sites.</li>
                  </ul>
                </p>
              </div>

              <div className="mt-7">
                <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">PROHIBITED ITEMS</h1>
                <p className="font-[500] text-[4vw] sm:text-[16px] leading-normal">
                  The Platform allows you to advertise items and services to other users of the Platform. You must not advertise any item or service on the Platform which is included in our List of Prohibited Items.
                </p>
              </div>

              <div className="mt-7">
                <h1 className="sm:text-[20px] text-[5.5vw] font-[700] mb-3">BREACH OF THIS POLICY</h1>
                <p className="font-[500] text-[4vw] sm:text-[16px] leading-normal">
                  If we consider that you are in breach of this Policy, we may take such action as we deem appropriate in our sole opinion. Failure to comply with this Policy constitutes a breach of our Platform Terms of Use which set out how you are permitted to use the Platform, and may result in us taking all or any of the following actions:
                </p>
                <ul className="list-disc mt-3 font-[500] text-[14px] mx-5 space-y-1">
                  <li>Issuance of a warning to you.</li>
                  <li>Immediate, temporary or permanent withdrawal of your right to use the Platform (including closure of your account, if you have).</li>
                  <li>Immediate, temporary or permanent removal of any User Content found to be in breach.</li>
                  <li>Legal proceedings against you for reimbursement of all costs resulting from your breach, or any further legal action against you; and/or disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-3 h-auto flex-col justify-center gap-7 overflow-hidden bg-gray-50 rounded-[12px] sm:p-12">
            <div
            onClick={() => window.open('/Distress Sales CarsVEHICLE INSPECTION TERMS AND CO_240712_121147 (4).pdf', '_blank')}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 policy-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto w-full sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#00134d] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#00134d] transition-all duration-300 group-hover:bg-[#2b385d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div
                  className="space-y-6 pt-5 text-base leading-7 font-medium text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>VEHICLE INSPECTION TERMS AND CONDITIONS</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <p className="text-[#00134d] transition-all duration-300 group-hover:text-white">Read More
                      &rarr;
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div
            onClick={() => window.open('/DISTRESS SALES PRIVACY POLICY.pdf', '_blank')}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 policy-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto w-full sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#00134d] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#00134d] transition-all duration-300 group-hover:bg-[#2b385d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div
                  className="space-y-6 pt-5 text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>WHAT DOES THIS PRIVACY POLICY COVER?</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <p className="text-[#00134d] transition-all duration-300 group-hover:text-white">Read More
                      &rarr;
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div
            onClick={() => window.open('/DISTRESS SALES TERMS OF USE JULY 2024.pdf', '_blank')}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 policy-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto w-full sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#00134d] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#00134d] transition-all duration-300 group-hover:bg-[#2b385d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div
                  className="space-y-6 pt-5 text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>BY USING THE PLATFORM, YOU ACCEPT THESE TERMS OF USE</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <p className="text-[#00134d] transition-all duration-300 group-hover:text-white">Read More
                      &rarr;
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div
            onClick={() => window.open('/DISTRESS SALES VEHICLE AUCTION TERMS & CONDITIONS_240712_121425 (1).pdf', '_blank')}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 policy-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto w-full sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#00134d] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#00134d] transition-all duration-300 group-hover:bg-[#2b385d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div
                  className="space-y-6 pt-5 text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>VEHICLE AUCTION TERMS & CONDITIONS</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <p className="text-[#00134d] transition-all duration-300 group-hover:text-white">Read More
                      &rarr;
                    </p>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </FadeIn>
  );
};

export default PrivacyPolicy;
