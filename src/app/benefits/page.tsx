"use client"

import React from 'react'
import { FadeIn } from '../components/Transitions/Transitions';
import useAppTheme from '@/hooks/theme.hook';
import Navbar from '../components/Navbar/Navbar';
import MobileNavbar from '../components/Navbar/MovileNavbar';

export default function Benefits() {
    const { isMobile } = useAppTheme();

    const benefits = [
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Urgent Cash Needs',
            content: 'Sell your assets in 48 hours, turning possessions into immediate cash flow for your urgent needs.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Quick Asset Liquidation',
            content: 'Need fast liquidity? Our platform ensures your assets are sold within two days, hassle-free.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Emergency Financial Relief',
            content: 'Facing financial emergencies? Sell any valuable quickly, ensuring you meet those unexpected needs.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Investment Opportunities',
            content: 'Snag below-market deals on properties and jewels, perfect for expanding your investment portfolio fast.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Debt Resolution',
            content: 'Quickly alleviate debt by selling assets within 48 hours, offering you a fresh financial start.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Relocation Sales',
            content: 'Relocating soon? Quickly convert your assets to cash, making your move smoother and financially stress-free.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Fast Profit Realization',
            content: 'For quick sellers, our platform represents a fast track to turning assets into profitable ventures.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Cash for New Ventures',
            content: 'Unlock cash tied in assets within 48 hours, fueling your next business venture or personal goal.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Bargain Hunting',
            content: 'Discover and secure bargains on high-value items, satiating your appetite for deals without compromising quality.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Diversifying Investments',
            content: "Quickly sell off single-category assets to diversify your portfolio, reducing risk and increasing potential returns. Immediate cash for travel - Fund your dream vacation by quickly converting assets to cash, making adventure plans a reality."
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Budget-Friendly Acquisitions',
            content: "Acquire properties and luxury items at prices that don't break the bank, saving significantly."
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Emergency Funds Access',
            content: 'In urgent need of funds? Sell any valuable within 48 hours to cover unexpected expenses.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Asset Diversification',
            content: 'Achieve asset diversification by purchasing undervalued assets, mitigating investment risks.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Quick Profit Opportunities',
            content: 'Seize quick profit by buying and reselling assets at a markup, with minimal wait time. nancial crisis management - Manage financial crises by rapidly converting assets into cash, providing immediate relief.'
        },
        {
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            header: 'Opportunistic Buying',
            content: "Take advantage of opportunistic buying moments for assets at low prices, boosting your portfolio's value"
        },
    ];

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
            <div className="w-full h-auto pb-[200px] pt-20">
                <div className="md:px-[90px] px-5">
                    <h1 className='text-center font-[700] md:text-[26px] text-[5vw] text-secondary'>Benefits Of Using Distress<span className="text-primary">Sale</span></h1>
                    <div className="mt-7 grid md:grid-cols-4 grid-cols-1 gap-7">
                        {benefits.map((item, i) => (
                            <div key={i} className="relative flex flex-col text-gray-700 bg-white benefit-card-shadow  rounded-xl w-full">
                                <div className="p-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-12 h-12 mb-4 text-gray-900">
                                        <path fill-rule="evenodd"
                                            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                            clip-rule="evenodd"></path>
                                        <path
                                            d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                                        </path>
                                    </svg>
                                    <h5 className="block mb-2 md:text-[18px] text-[5vw] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.header}
                                    </h5>
                                    <p className="block font-[400] md:text-base text-[3.2vw] antialiased leading-relaxed text-inherit">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
