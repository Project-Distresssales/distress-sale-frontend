"use client"
import useMediaQuery from '@mui/material/useMediaQuery';


const useAppTheme = (): {
  isMobile: boolean;
  isTab: boolean;
  isMiniDesktop: boolean;
  // themeMode: ThemeState;
} => {
  const isMobile = useMediaQuery('(max-width:550px)');
  const isTab = useMediaQuery('(max-width: 800px)');
  const isMiniDesktop = useMediaQuery('(max-width: 1000px)');

  return {
    isMobile,
    isTab,
    isMiniDesktop,
    // themeMode,
  };
};

export default useAppTheme;
