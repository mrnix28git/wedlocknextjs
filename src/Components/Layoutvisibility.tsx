// components/LayoutVisibilityContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutVisibilityContextType {
  isLayoutVisible: boolean;
  setLayoutVisible: (visible: boolean) => void;
}

const LayoutVisibilityContext = createContext<LayoutVisibilityContextType | undefined>(undefined);

export const LayoutVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isLayoutVisible, setLayoutVisible] = useState(true);

  return (
    <LayoutVisibilityContext.Provider value={{ isLayoutVisible, setLayoutVisible }}>
      {children}
    </LayoutVisibilityContext.Provider>
  );
};

export const useLayoutVisibility = (): LayoutVisibilityContextType => {
  const context = useContext(LayoutVisibilityContext);
  if (!context) {
    throw new Error('useLayoutVisibility must be used within a LayoutVisibilityProvider');
  }
  return context;
};
