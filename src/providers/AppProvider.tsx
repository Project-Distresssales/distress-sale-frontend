'use client';

import store from '@/store';
import { theme } from '@/utils/theme';
import { RFC } from '@/utils/types';
import { ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

function AppProvider({ children }: RFC) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {children}
        <Toaster />
      </Provider>
    </ThemeProvider>
  );
}

export default AppProvider;
