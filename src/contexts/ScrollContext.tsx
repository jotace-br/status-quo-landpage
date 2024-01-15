import { ReactNode, RefObject, createContext, useContext, useRef } from 'react';

interface ScrollContextType {
  coursesRef: RefObject<HTMLElement> | undefined;
  aboutUsRef: RefObject<HTMLElement> | undefined;
  labsRef: RefObject<HTMLElement> | undefined;
  handleClick: (refToScroll: RefObject<HTMLElement | null> | undefined) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollContextProviderProps {
  children: ReactNode;
}

const ScrollContextProvider = ({ children }: ScrollContextProviderProps) => {
  const coursesRef = useRef<HTMLElement | null>(null);
  const aboutUsRef = useRef<HTMLElement | null>(null);
  const labsRef = useRef<HTMLElement | null>(null);

  const handleClick = (
    refToScroll: RefObject<HTMLElement | null> | undefined
  ) => {
    refToScroll?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  const contextValue = {
    coursesRef: coursesRef || { current: null },
    aboutUsRef: aboutUsRef || { current: null },
    labsRef: labsRef || { current: null },
    handleClick,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

const useScrollContext = () => {
  const coursesRef = useRef<HTMLElement | null>(null);
  const aboutUsRef = useRef<HTMLElement | null>(null);
  const labsRef = useRef<HTMLElement | null>(null);

  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    // Handle the case where the context value is null
    return {
      coursesRef,
      aboutUsRef,
      labsRef,
      handleClick: () => {},
    };
  }

  return scrollContext;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ScrollContext, ScrollContextProvider, useScrollContext };
