"use client"

import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FadeIn } from '../components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import Navbar from '../components/Navbar/Navbar';
import SubNavbar from '../components/Navbar/SubNavbar';
import MobileNavbar from '../components/Navbar/MovileNavbar';
import AltNavbar from '../components/Navbar/AltNavbar';
import NewNavbar from '../components/Navbar/NewNavbar';
import Footer from '../components/Footer/Footer';

export default function Faq() {
    const { isMobile } = useAppTheme();

    const faq = [
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

    return (
        <FadeIn>
             {!isMobile ? (
        <>
        <NewNavbar />
      </>
      ) : (
        <>
          <MobileNavbar />
        </>
      )}
            <div className="w-full h-auto pb-[200px] mt-10">
                <div className="md:px-8 px-5">
                    <h1 className='text-center font-[700] md:text-[32px] text-[5.5vw]'>Frequently Ask Question</h1>
                    <div className="mt-7 md:w-[600px] w-full mx-auto">
                        {faq.map((item, i) => (
                            <Accordion key={i}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{fontSize: !isMobile ? '15px' : '3.2vw', fontWeight: 500}}
                                >
                                    {item.header}
                                </AccordionSummary>
                                <AccordionDetails sx={{fontSize: !isMobile ? '15px' : '3.2vw', fontWeight: 500}}>
                                    {item.content}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </FadeIn>
    )
}
