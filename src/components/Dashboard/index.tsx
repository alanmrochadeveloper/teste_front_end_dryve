import React from 'react'
import clsx from 'clsx'
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { ReactComponent as VectorTriangle } from '../../assets/ic-vector-triangle.svg'
import { ReactComponent as VectorTriangleSelected } from '../../assets/ic-vector-triangle-selected.svg'
import { ReactComponent as Logo } from '../../assets/dryve-logo.svg'
import profilePicture from '../../assets/profile_picture4.jpg'
import MainContent from '../MainContent'
import { sideButtons } from '../../mock/DynamicItems/SideNavButtons'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'

let drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 28,
      marginLeft: '-1rem',
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 8,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      backgroundColor: '#f3f4f6',
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    backOffice: {
      padding: 5,
      color: '#a5abb7',
      textTransform: 'uppercase',
      fontSize: '8px',
      letterSpacing: 'normal',
      fontWeight: 500,
      width: '59px',
    },
    icons: {
      opacity: 0.55,
    },
    profilePicture: {
      padding: 2,
      maxWidth: 50,
      height: 50,
      borderRadius: '50%',
      border: `solid 2px ${theme.palette.primary.main}`,
    },
    profileInformation: {
      justifyContent: 'flex-end',
    },
    profileListItem: {
      paddingLeft: 0,
      '&&:hover': {
        backgroundColor: 'transparent',
      },
    },
    profileName: {
      display: 'flex',
      fontSize: '14px',
      fontWeight: 500,
    },
    logout: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 10,
      fontWeight: 500,
      flexWrap: 'nowrap',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      color: 'rgba(0, 0, 0, 0.87)',
      opacity: 0.5,
      objectFit: 'contain',
      lineHeight: 1,
      height: 10,
      '&&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        opacity: 1,
      },
    },
    powerIcon: {
      width: 11,

      height: 11,

      objectFit: 'contain',
    },
    powerIconContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logoutWord: {
      width: 29,

      height: 10,
      fontSize: 10,
      margin: '5px 5px',
    },
  }),
)
interface DashboardProps {
  children: any
}
const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()
  const [path, setPath] = React.useState<string>('')
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const iconPicker = (iconValue: string) => {
    switch (iconValue) {
      case 'house':
        return <HomeIcon />
      case 'person':
        return <PersonIcon />
      case 'vehicles':
        return <DriveEtaIcon />
      case 'triangle':
        return <VectorTriangle />
      case 'wallet':
        return <AccountBalanceWalletIcon />
      default:
    }
  }

  React.useEffect(() => {
    setPath(history.location.pathname)
  }, [history.location.pathname])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            style={{ width: '100%', minHeight: 70 }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="left"
              style={{ width: '100%' }}
            >
              <Logo display="flex" />
              <Box display="flex" className={classes.backOffice}>
                backoffice
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              style={{ minWidth: 62 }}
            >
              <SearchIcon style={{ opacity: 0.3, cursor: 'pointer' }} />
              <NotificationsIcon
                style={{ color: '#0065ff', opacity: 0.3, cursor: 'pointer' }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ marginLeft: `${!open ? '-1rem !important' : ''}` }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List style={{ width: '100%' }}>
          <ListItem key={'first'} className={classes.profileListItem}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              style={{ width: '100%' }}
            >
              <Box display="flex" alignItems="left">
                <img
                  className={classes.profilePicture}
                  src={profilePicture}
                  alt="profile"
                  style={{
                    marginLeft: `${open ? '0rem' : '0.5rem'}`,
                    marginRight: 10,
                  }}
                />
              </Box>
              <Box
                className={classes.profileInformation}
                style={{
                  display: `${open ? 'flex' : 'none'}`,
                  flexDirection: 'column',
                }}
              >
                <Box className={classes.profileName}>Vinicius Malara</Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.logout}
                >
                  <Box
                    // className={classes.powerIconContainer}
                    component="span"
                  >
                    <PowerSettingsNewIcon className={classes.powerIcon} />
                  </Box>
                  <Box className={classes.logoutWord} component="span">
                    sair
                  </Box>
                </Box>
              </Box>
            </Box>
          </ListItem>
          {sideButtons.map(({ text, url, icon }) => (
            <ListItem
              style={{
                backgroundColor: `${!open ? 'transparent' : ''} `,
                marginLeft: `${!open ? '0.3rem' : '0rem'}`,
              }}
              selected={url === path}
              disabled={icon === 'wallet'}
              button={open as any} // material ui got an issue open to solve this forced cast
              key={text}
              onClick={() => {
                history.push(`${url}`)
              }}
            >
              <ListItemIcon
                className={`${
                  icon === 'triangle' ? 'triangle-icon' : classes.icons
                }`}
              >
                {icon === 'triangle' && url === path ? (
                  <VectorTriangleSelected />
                ) : (
                  iconPicker(icon)
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainContent>{children}</MainContent>
        
      </main>
    </div>
  )
}
export default Dashboard
