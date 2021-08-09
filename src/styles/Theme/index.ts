import { createTheme } from '@material-ui/core/styles'

const primaryMain = '#0065ff'
const secondaryMain = '#f3f7ff'
export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1260,
      xl: 1920,
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '14px',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 4,
        fontWeight: 500,
        '&$selected': {
          backgroundColor: secondaryMain,
        },
        '&&:hover': {
          backgroundColor: secondaryMain,
        },
        '&$selected:hover': {
          backgroundColor: secondaryMain,
        },
        '&$selected .MuiListItemIcon-root': {
          color: primaryMain,
          opacity: 1,
        },
        '&$selected .MuiTypography-root': {
          color: primaryMain,
          fontWeight: 600,
        },
      },
      button: {
        borderRadius: '4px',
      },
    },
    MuiDrawer: {
      paper: {
        paddingRight: '15px',
        paddingLeft: '15px',
      },
    },
    MuiContainer: {
      root: {
        minHeight: '970px',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)',
        // taking out default shadows from this project, for example, shadows from tables
      },
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: 'white',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '',
        },
      },
    },
    MuiTab: {
      textColorPrimary: {
        '&$selected': {
          color: '#6200ee',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'auto',
        },
        '*::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
      },
    },
  },
})
