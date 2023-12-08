'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface StepperContextProps {
  userData: string;
  setUserData: Dispatch<SetStateAction<string>>;
}

const StepperContext = createContext<StepperContextProps | null>(null);

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState('');

  return <StepperContext.Provider value={{ userData, setUserData }}>{children}</StepperContext.Provider>;
}

export function useStepperContext() {
  const contextValue = useContext(StepperContext);

  if (!contextValue) {
    throw new Error('useStepperContext must be used within a UseContextProvider');
  }

  return contextValue;
}
