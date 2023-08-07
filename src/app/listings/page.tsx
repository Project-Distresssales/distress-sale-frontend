import React from 'react'
import ProductCard from '../components/Card/ProductCard';
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter';
import SearchCategory from '../components/SearchCategory/SearchCategory';
import Footer from '../Footer/Footer';
import ServiceCard2 from '../components/ServiceCard2/ServiceCard2';
import BlueCard from '../components/BlueCard/BlueCard';
import SearchOnly from '../components/SearchOnly/SearchOnly';

export default function PropertyForSale() {
    // Searched categories
    const popularSearch = [
        {
            header: "Businesses for Sale",
            items: [
                {
                    text: 'Restaurant for Sale',
                    link: '',
                },
                {
                    text: 'Technology Startups for Sale',
                    link: '',
                },
                {
                    text: 'Salon & Spas for Sale',
                    link: '',
                },
                {
                    text: 'Other Businesses for Sale in UAE',
                    link: '',
                },
            ]
        },
        {
            header: "Furnitures for Sale",
            items: [
                {
                    text: 'Office Furniture & Equipment for Sale',
                    link: '',
                },
                {
                    text: 'Home Furniture',
                    link: '',
                },
                {
                    text: 'Wardrobes',
                    link: '',
                },
                {
                    text: 'Dressing Table',
                    link: '',
                },
            ]
        },
        {
            header: "Tickets & Vouchers  for Sale",
            items: [
                {
                    text: 'Events & Concerts Tickets',
                    link: '',
                },
                {
                    text: 'Spa Vouchers',
                    link: '',
                },
                {
                    text: 'Travel Vouchers',
                    link: '',
                },
            ]
        }
    ];

    // Popular Categories
    const popularCategoryData = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/03ab/7229/0602a44a9c7734fd79f3f3bdeaa00801?Expires=1691971200&Signature=U9mucWXAOcYZPYT5GEnKOBLea8a0Vo9YCc-yJy5rcnjoqSHnKYI1gOkfilEqChEDAHKHIIpzp6kWY9Zm-4xdCdNGAP5CFcGJpHILsjuDWieJIe9qAotjjiNXdpL1dWM2f00Myrt5RR3XXbPFaDlkkwDXvr3TfUnfRpgDG71ZB2IE7du1BKAuvBtqdBN4dIRWCpLUejQ4RazUIPnyrnFF7clxUfA2yes~yXYFyGh3Z196BKeO7rJiR1x4~n0HgRsdap0yyqTaquoUgyJQL80jxxZqRMU1aQ3wTRRMC7g-KKym3gORBIEm6sBRicgcp2~RsLQ22eCsrswab8YrxmW1cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Furnitures",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/bddb/8bfc/d72e19c8613c7e43d42a6ecf6055dc05?Expires=1691971200&Signature=F~6Jia31TwibrSP5fD7BwijCDCjaCH56Nr9HOS4pGSkJa5Yg206cBWB20lR~RH9NhjhWEhKhNteu1vXwdjikMD-5uOYwjGCWlOUCIRnOrXNzVeQBcrcrmLuaMuYIrq-2b~vX~NlEryOPGjWBIit6hbPLCjaDJpD72ksi1Q4VUMMh9NB~vWRAiwDaq0VxggI2K5nSxed2VfbmuVWbx30BCuZ7z4cFEzXk1gn-Ncii526M-4rbKz0Gawpx-gt1bbMTh~TUhG5BhhCuRZ4Sff8lxe5sP7aB-n-yFjEK4n5tXWeX2hg8COZ5aP4F8aoiFXQhlbHMnV06lLSZOTwhGOfy2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Computer & Networking",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/5f57/097e/c2a78b4c6fbb39971ecf0fc17e870eb2?Expires=1691971200&Signature=PxaCje2dCQkeUWtdVyWR1gIaFxRA2pYNde2zXSvNkvO6F6iM0X9PEN2Sm2k8tKMd6qGVgQKysgK9J-OWCV~PWDirrk0dqng64n6hvOFBv9KiCuHY86oa0~Rp1Zck5GbfZQ1vcnyRG~-JZGr78Qo0dL~yl9VC~RPSug5bW0GeYrsFWz1QMC4j1jJI~lA1m73503QzJzE8GbolCQXRX5NC76loBIt8rgRR0lyir00McwqVGRvsRX7kdxr~vnoG~Y3MWW2wW5xBgtliBoKmbnLHCGyI5lDlxUDwXUTBHGwrUzgBRV~51nTcZnIKcA7-TD~g1kKyT8c2UCLfR2Q-boCgsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Businesses for Sale",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/3724/7864/1893399c782b209fc1518f962d99bdeb?Expires=1691971200&Signature=ctxVGjIeMq3ubGqiwu0kvoAOdArECeg13AqCVze~88K6IcIFKqja3yQ0dp20XpIFXmvxn3-kii3ch08ffrCYS5FMFh~igOFwIpBpk4dcsy~u~fvudLjQS94GSLHpxdBTHzRM~rbxrcGkxOJZBtMarOSMLEuamg-a4Uujxj7JvNpY0wCk~Tbr4lQIvkdiwkPSkHkjZDYbwvLhBYA3lFrc-OIgZ8nd-6n-x84DztwE5kCVM2pbVhLbQHnwypFqUIGeGpybB3cOhLsj8pqyx9HE-j0BjNNA0jsE~vUmIae02gaDGmMiz2xiEjt4aW6dqhAdqXjn3ZarheA1anpSga6YxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Books",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/8ec0/dc05/de8efff8f0a936fab78ab9710708eb0a?Expires=1691971200&Signature=NB8wJJTA4UoionrMIDtvdgsGmUnhDFQg4vmdTWe6uWRf~RmWd3A~SilXYjvaUoujsw6lfBOVc-Rczwvng0VkVNadvrkXkhMHbMMGQF03fqmt47~bshavDATB1qyK-zGqyRq7Biimfe6R2QauUtk-MFS9i1gaPkSIBHtNI92ZOGQQSn6ktdZwPopbzCKNQKpBzvaxvT2UXHJDhHXisr1BZJej6GxutTtRb~HkgS73cErSrq46INcIC1ZGHo1USbmmJff~6AwygvK5U9mJdROcQxC1LxZZPrIi6IwevuQKpeHvA9gJ7pXyAp3~8Jyb4pDOft~UcIG1ckOsWDdbWAg3pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Home Appliances",
            description: "",
            feature: "",
            location: ""
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/d661/85f4/617f4223f5cd95f462d55ee408ea018d?Expires=1691971200&Signature=V~o0W-gtegHm3W4Rf0zmOIdaIPF0BBFhEsLAf0VV2ERMSsBE3VfVXv4nVLxW7eHXme8jxU9A~BG048L0VsRqLOBllj559hszZs7W1CSfV49r424iA-iRAD1tAWb4f-Gj9qV3yNuJhtt6winZH63K2ea8bYC-6W1FCBi41qJVGGVvMaUnipnD1NZ3Tdu0SVcjH0SYW3prf2ACUcqBF3ad1WFHVJnliIYFeDVKyp7rSF0VNkupiPUp2Gpmf8ebRPXlFLRSCX2IWby2cEkY-fz-kD0E6YyhNRs2Nh6~6pN-qgG8BzWtCp7ZBW4xDUfvJigUTRhPhNmNTPEc5P6Ger-G4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "Baby Items",
            description: "",
            feature: "",
            location: ""
        }
    ];


    // Featured Properties
    const featuredProperties = [
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/0c45/a4b5/2f0bbfb53a2736a76c65aaa400424b83?Expires=1691971200&Signature=HKhfMXb20G9noT7IR~AARkrmxsqFIPiM2QXkzDqtYoyUmGl-VwkoUVexvd66oLAoW8Q~9lgWrsDS3qiQHHoucdLBVdxp1XiVaZLZQtVfU66GYdNYyOloALZgemsstdS0KSIrHAY4yzNuicwxxlmNvVmUDOFg2-gPC3O2CyBIimu4IxoJC0uD4B5Up28FYp8oQ2~4hpmGj58VHk0I8uErouit-iXVetlcDCiLvulZUyx98h77xVfLCgLRBMBcSkvMo5MB9qAGCxcHtP3pv3QomyxM2~XS2lh7kdAAC1KtZ7-LcnCRvtoEgFkIOoRpvN-ITFcsx43zQTdlSKnSOE7o6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 1,550",
            description: "Hp Core i7, 15.6” Screen,  1 TB Storage",
            feature: "Laptop Computers  •  Hp",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/7644/83e5/a149ae96bad6678b90aee05b7f6d0116?Expires=1691971200&Signature=XU-6qK5KvpjFNVkXpYWSWrpWqDkBB5Ol2n-A-RFsCkX8FzvH0JAk-e1X5cqxkCPa~-oA6lQ3rP2SIiPlszlYhyIwJEQFfhl0p6qZeOzEBqmqM8FXYT81Vhk~tsmqYqZjvapgCUUxrHhG3iHRNeQ0ksn3oS5pR10Nx~EV8s00aHkBe9R1kLNoKCyZTSsAFa~UkY~ChDR6ZIG7VHepYGw22Rd5zPXw0KdmLrfPyBJf6ic3PYw-D6WsjwmWTjY5FOGiPCewLqxbCFZ6b3HVHUOMtanporRfRyd2DzwMsw2fCRTyOoZ~-1fWmq-imWf0sKr2tvfsfyq1W1te96Y~kpT5RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 850",
            description: "Unisex Footwear",
            feature: "Sport Shoes",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/8742/570f/9df5febb20194672bf59b2bc760041c3?Expires=1691971200&Signature=e0XypYey00pg5FLZ~Kf6IIS-zyqjGaRnTuCz2VGIXtmU0OSKTzf7aBc64mlX-QYbxOo98vouoHH1v3U1VuDibGEdljFu34~UBvWZ69N4Rm8J2MVcOVQmpKH8xJqBkyh-DSJf-IX-eoaGN6ZEllLviQwlKYfpa5BDn65ieiFU2LQXrZu76Z8CNvZFaKtJRkAblhVUnDWDWMIpfhLELAsm-DmWu~aCNZGNi8ou9CD7-zpbAkHcxrRMwXzZIWmGqeBM-BF7n8aa3eunG5aiEJesn6xQ0PUX3L-B7P4DLqoprcloCtmuWyqx1ZldSE83i-nAabqkptOQVQLzWHeUu0OIuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 3000",
            description: "Wardrobe",
            feature: "Home Accessories",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/bd79/e93d/e745e518e37200ce4492db129e1391ca?Expires=1691971200&Signature=hc47jMsccbxvqxUDTd5I0lkRL6f3BCheBOIYj1tkW25dzLud0dGByabkkp-P3ZuOvU-UKdi44NdTxqHBa67JCfyzdMJb9jn4r-kQMVBeoCS9FOkE0DEv28CsQOnzfnrAw7eMSoIYJ00LksThA0PEnnoididFj8ZdKa3K6d9QBQsoh0yv-8~5eG9q5y3qU0~CPZ5UgtYPoQKvnk~Jfzsf8BFv-~PRVRLKO~ngOtxb3Kso4Cjn-vb7FXNvC9IWetzFyovM-EHeetuwhrOxvHVb1Ude04z19rcxJZ4FtWuzbIcbXFd7M~T7Fy7EtLC~u19irX0Xx5z8i3c3I8H92FEByQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 20,000",
            description: "Gold Bracelets",
            feature: "Women Jewelries",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/fcbd/5c19/31cb6fd48c8b0d5860ba755f24aade87?Expires=1691971200&Signature=kDWRTTGPAxeG5ppArZdAdncSOJv8WDpY3SRrTUAhYdFDSpWea-3YlOiGGPbi4euBpw80T1-8p2kTxlGR~ml7h6r-OLntdS-Zq4xdKx6gGpgkDiULeDbffG-qDzbexYZcm7psQAd5euB7x0JP9bAPlAWhOKx6nk0plmiCJmlO9DEsTAq68ZQzSirP6MBCWuEpbLxlHnOvIl8Lb6M-tZXJipSnQ3LQLYW9KuLSbE-3BZMy0QKsMr~hKMyniNa2K7nwP8ZohC-eQR34RzTDJvfTB7VnzaO8fOQXOhZMpuabVnRqfDb3GTTf-A9RzcvfhI14vKZLO3fbjQ7UHUlMMadtJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Movie Tickets",
            feature: "Tickets",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/3c25/bee5/1955e146c6abb44d7ff90ecc88176e04?Expires=1691971200&Signature=nbomWzEa8r7nVRzV1Sf8qou~6cn3TriHyGpgjAK7SBe7mVxpUaK6ii8~xK3feu~MxkqRmzMyXoW4Hpph8iN06OGzgoPoavMcZzNvI2s6f1IlXLYAvDTazBkoV8yWFlVl7plask0q64hnHmjegl78~w3uBl1qXhVOosWY1n8msYEx2EMDnQNPdAR6RypJt5uVqKD~5L9cWdcbiylOroBRhYT3E0wG7KNRwp7H48eh6cV4O~tqXd3NbURrARJ6qCb~Qo8ymFulCx6ZHNL5S2PZSR-ie7bPIaPvAuCRmEZdW3M2XFxMQWExhlXWlyuM4SPLFUlSOszV9lH5ClnZ~rU44g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 30,000",
            description: "Camera Lenses",
            feature: "Camera Accessories",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/226b/b61d/0794123d3e25d1cd895c73144fef1f14?Expires=1691971200&Signature=O6J1cbtK4FKyrbglQ0ySUtc3otIWFzAM7-ntPpxzRW7Iq8kHSfHKj2nlYF3mz5DC9jm~pVv5uBJgge2Cxizr8yO2a7cFhtjZuyTGYYyzDNHrJQP2Lcna4Lmh~21L8jBoOsFtvAxpCI1frVefPjqk0PmzsV9gLDoe2Tiafc8WoZoqKDvJgAngxl6FgCbpXSMKutHGM6Y9lmRpKvLh6vakullzCZFlyZm9dVG9yM6soyN~gYJjSq-AzVc7YZ2GoG9YXlVcgTCpaCUJg6E3xKcCk3QQ8wZrfDxrB1zp8KIKYTCOXaBkwVZbWq-EKF~8UwxU2kDWk5Y3AVsC3ZVIpTG3lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 5,000",
            description: "Women Wears",
            feature: "Clothings",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/26ef/cad0/b74032feb78ff68fd0baf9ba3fff1c01?Expires=1691971200&Signature=OhmDhnMqi2DXLerdJQIkTIZzwTUz4lxvR4Gv87lN2cg8jAupTTo6WD9TwhPjP2MSTwe2fci~DlE2mDPIiXH2t2H3~LvZrgk70xbPrn~HLyyMTPhht2z0NGTHTZ6NCBOR2QKmRqCnqnjA9z5JZ-tBBjm2FyhCJyrPQvxCEIfGnNOlQjd4~LQamhmF1LT7lzss2GdXMQh8AVk9k1ya~qv38DUaHKM1ufQTIzTsYiIpszhIBLVy92QO4h4AXQbMm5UegO~7nd3d2Rak7Z1Vzq~AAzHnc3CYqxTYW8VKx~HL6c~ZzK0KiuugJCsx5MFbzzuiO6fys65IDjrKj9pWgYYTwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 190,000",
            description: "Wristwatch",
            feature: "Accessories",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/7f62/8de1/2314ae9a93a43c5b09975af7fc3797ba?Expires=1691971200&Signature=KE2G31DTNzQ4apPPdNAupGrBWfnynBtgUjs27jDlDf03Qoc~T~b-r5zjA2zlcVPHbH-IRSgTYpTqbYmiL8XYhvCiGdPlqRXi-1m0fNLr9QwrmqSjXuiZz6CWVSXFi05z4kWJctG0KJYrLUW9-z0F3Caphe-~uyAYs7KrQMxJ9bGChlnYFqZxqgL0Z~rei9LvPJN9ykfEKpnldejDkRA3OWEY-A7v5PY6Q3TgM0Dyy0~nVYWiBpORmIAI1ieKBW~v9ESjy6ltJliHoYD7CHNbQlMv9hTvpvXKsEGmHly0FmEhXh9Ydm-jZU-N1~81mxCidoBTB3phVozkPRdGEpKW4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            header: "AED 100,000",
            description: "Office Workspace",
            feature: "Office aaccessories",
            location: "Shams Abu Dhabi, Al Reem Island"
        },
    ];

    // Blue card
    const blueCardData = [
        {
            title: "Businesses for Sale",
            data: 60000,
        },
        {
            title: "Furniture & Home Appliamces",
            data: 60000,
        },
        {
            title: "Electronics",
            data: 60000,
        },
        {
            title: "Computers & Networking",
            data: 60000,
        },
        {
            title: "Accessories",
            data: 60000,
        },
    ];


    return (
        <div>
            <div className="w-full h-auto pb-32">
                <div className="px-8">
                    <div className="w-full rounded-[15px] h-auto py-[96px] hero-image-bg-sale flex justify-center items-center">
                        <div className="h-auto text-center">
                            <div className="w-full">
                                <h1 className="sm:text-[2.5vw] text-white font-[700] sm:leading-[50px]">Your Go-To Destination for Incredible <br /> Savings on a Variety of Products</h1>
                            </div>

                            <div className="mt-20">
                                <SearchOnly />
                            </div>
                        </div>
                    </div>

                    <div className="px-[80px] py-[100px]">
                        {/* Services card */}
                        <div className="flex space-x-3">
                            {blueCardData.map((item, i) => (
                                <BlueCard key={i} item={item} />
                            ))}
                        </div>

                        {/* Popular property sales */}
                        <div className="mt-20 w-full">
                            <div>
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Popular Categories</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {popularCategoryData?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Featured Listings</h1>
                                <div className='grid grid-cols-3 gap-[20px] mt-14'>
                                    {featuredProperties?.map((product, i) => (
                                        <ProductCard key={i} product={product} />
                                    ))}
                                </div>
                            </div>

                            {/* Popular Search category */}
                            <div className="mt-24">
                                <h1 className="text-[#101828] text-[2vw] font-[700]">Recommended Searches</h1>
                                <div className="mt-14 flex justify-between">
                                    {popularSearch?.map((category, i) => (
                                        <SearchCategory key={i} header={category.header} item={category.items} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
