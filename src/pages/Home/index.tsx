import React from 'react'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import DashboardWrapper from '../../components/DashboardWrapper'
import HomeHeaderSummary from '../../components/HomeHeaderSummary'
import Box from '@material-ui/core/Box'
import HomeBodySummary from '../../components/HomeBodySummary'

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <DashboardWrapper>
        <Box display="flex" flexWrap="wrap">
          <HomeHeaderSummary
            header="avaliações hoje"
            isPositive={true}
            porcentage={36}
            value={'29'}
            when="desde ontem"
            Icon={<DriveEtaIcon />}
          />
          <HomeHeaderSummary
            header="carros publicados"
            isPositive={true}
            porcentage={4}
            value={'397'}
            when="este mês"
            Icon={<ImportantDevicesIcon />}
          />
          <HomeHeaderSummary
            header="ticked médio do estoque"
            isPositive={false}
            porcentage={6}
            value={'R$ 42.567'}
            when="este mês"
            Icon={<AttachMoneyIcon />}
          />
        </Box>

        <HomeBodySummary />
      </DashboardWrapper>
    </>
  )
}
export default Home
