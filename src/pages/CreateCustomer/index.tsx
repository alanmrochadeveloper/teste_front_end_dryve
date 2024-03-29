import React from 'react'
import DashboardWrapper from '../../components/DashboardWrapper'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CustomerData from '../../components/CustomerData'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    width: `calc(100% - 12px)`,
  },
}))

interface CreateCustomerProps {}
const CreateCustomer: React.FC<CreateCustomerProps> = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }
  return (
    <>
      <DashboardWrapper>
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
            <Tabs
              textColor="primary"
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#6200ee',
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.38)',
                },
                color: 'rgba(0, 0, 0, 0.38)',
              }}
            >
              <Tab label="dados do cliente" {...a11yProps(0)} />
              <Tab label="dados do veículo" {...a11yProps(1)} />
              <Tab label="intenção de compra" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <CustomerData />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <CustomerData />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <CustomerData />
            </TabPanel>
          </SwipeableViews>
        </div>
      </DashboardWrapper>
    </>
  )
}
export default CreateCustomer
