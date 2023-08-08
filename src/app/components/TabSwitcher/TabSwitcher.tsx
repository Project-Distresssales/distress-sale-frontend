import React from 'react';

export default function TabSwitcher({ activeTab, handleTabClick }: any) {
  return (
    <div
      className="flex p-[7px] rounded-[5px] w-[20vw] mx-auto"
      style={{
        boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        background: "rgba(16, 24, 40, 0.80)"
      }}
    >
      <button
        className={`rounded-[5px] py-[12px] text-[1.1vw] w-full font-[500] text-${activeTab === 'buy' ? '#101828' : 'white'} ${activeTab === 'buy' ? 'bg-white' : 'bg-none'}`}
        onClick={() => handleTabClick('buy')}
      >
        Buy
      </button>
      <button
        className={`rounded-[5px] py-[12px] text-[1.1vw] w-full font-[500] text-${activeTab === 'rent' ? '#101828' : 'white'} ${activeTab === 'rent' ? 'bg-white' : 'bg-none'}`}
        onClick={() => handleTabClick('rent')}
      >
        Rent
      </button>
    </div>
  );
}
