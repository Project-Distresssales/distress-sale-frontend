import Link from 'next/link';
import React from 'react'

export default function Safety() {
    const safetyMeasure = [
        {
            title: 'Inaccurate Information',
            text: 'If the information provided in your ad is incorrect or misleading, it will not be approved for publication.',
        },
        {
            title: 'Violates Terms of Use',
            text: 'If your ad contains content that violates our terms of use, such as offensive language, hate speech, or illegal activities, it will be rejected.',
        },
        {
            title: 'Incomplete Details',
            text: 'Ads with insufficient information or missing key details about the product or service will not be published.',
        },
        {
            title: 'Duplicated Content',
            text: 'Duplicate ads or content that has already been posted on the platform may not be approved.',
        },
        {
            title: 'Spam or Over-Promotion',
            text: 'Ads that are overly promotional, spammy, or repetitive will not be published.',
        },
        {
            title: 'Violates Copyright',
            text: 'If your ad contains copyrighted material without proper authorization or violates intellectual property rights, it will be rejected.',
        },
        {
            title: 'Restricted Content',
            text: 'Ads for products or services that are prohibited or restricted on our platform will not be approved.',
        },
        {
            title: 'Misleading Pricing',
            text: 'If your ad misrepresents the pricing of a product or service, it will not be published.',
        },
        {
            title: 'Unsafe or Inappropriate Content',
            text: 'Ads that promote unsafe activities, adult content, or any content deemed inappropriate will be rejected.',
        },
        {
            title: 'Unverified Claims',
            text: 'If your ad makes unsupported claims or promises that cannot be verified, it will not be approved.',
        },
        {
            title: 'Low Quality Imagery',
            text: 'Ads with poor-quality images that do not meet our visual standards will not go live.',
        },
        {
            title: 'Irrelevant Content',
            text: `If your ad is not relevant to the platform or the category you've selected, it will not be published.`,
        },
    ];

    return (
        <div className="h-auto pt-[60px] pb-[250px]">
            <div className="w-[600px] flex justify-center items-center mx-auto">
                <div>
                    <div className="text-center space-y-3">
                        <h1 className="text-[#101828] text-[24px] font-[700]">Prioritize Safety</h1>
                        <p className="text-[#667085] text-[16px] font-[500]">We thoroughly review all Ads to ensure the safety and satisfaction of our Users.</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-[#667085] text-[16px] font-[500]">Your advertisement <span className="text-[#101828]">will not</span> be published if it falls under these categories:</p>
                        <ul className="mt-7 mb-10 space-y-7">
                            {safetyMeasure?.map((item, index) => (
                                <li className="text-[14px] font-[500]" key={index}>{index + 1}. {item.title}: <span className="text-[#667085]">{item.text}</span></li>
                            ))}
                        </ul>
                        <p className="text-[#667085] text-[16px] font-[500]">To access additional details, please refer to our <span className="text-[#415EFF] hover:underline underline-offset-4"><Link href=''>Terms and Conditions.</Link></span></p>
                        <button onClick={undefined} className="rounded-[5px] py-[10px] bg-[#415EFF] text-white w-full mt-20">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}