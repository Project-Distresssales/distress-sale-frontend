import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCircularProgress: {
      defaultProps: {
        size: 20,
        thickness: 9,
      },
      styleOverrides: {
        root: {
          color: '#415eff',
        },
      },
    },
  },
});
