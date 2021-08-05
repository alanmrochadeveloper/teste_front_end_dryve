import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0065ff',
    },
    secondary: {
      main: '#f3f4f6',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
})
