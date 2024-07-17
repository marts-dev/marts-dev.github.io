"use client";

import React, { createContext, useContext, useState } from 'react'
import { SectionName } from '@/lib/types';

type ActiveSectionContextProps = {
  children: React.ReactNode
}
type ActiveSectionCoontextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionCoontextType | null>(null);

export default function ActiveSectionContextProvider({
  children
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] =  useState(0);

  return (<ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}>
    {children}
  </ActiveSectionContext.Provider>);
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if(context === null){
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}