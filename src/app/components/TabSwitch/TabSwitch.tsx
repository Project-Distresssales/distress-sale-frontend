"use client"

import React, { useState } from 'react'
import Tab from '../Tab/Tab';

export default function TabSwitch() {
     // Tab Switch
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className="rounded-[5px] p-[6px] border border-[#EAECF0]">
          <Tab title="All" tab={0} activeTab={activeTab} onHandle={() => handleTabClick(0)} />
          <Tab title="Completed" tab={1} activeTab={activeTab} onHandle={() => handleTabClick(1)} />
          <Tab title="Off Plan" tab={2} activeTab={activeTab} onHandle={() => handleTabClick(2)} />
    </div>
  )
}
