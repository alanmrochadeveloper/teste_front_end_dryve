import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { createStyles, makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { theme } from '../../styles/Theme'

const SummaryContainer = styled.div`
  min-width: 384px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 10px;
  padding: 15px 20px 15px 20px;
  display: flex;
  flex-grow: 1;
  border: solid 1px #dfdfdf;
  border-radius: 4px;
`
const When = styled.div`
  width: 69px;

  height: 16px;

  opacity: 0.5;

  font-family: Inter;

  font-size: 11px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.45;

  letter-spacing: normal;
`

const HeaderContainer = styled.div`
  opacity: 0.5;

  font-size: 10px;

  font-weight: 500;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.6;

  letter-spacing: 1.5px;
  text-transform: uppercase;
`

const ValueContainer = styled.div`
  font-size: 36px;
`

interface HomeHeaderSummaryProps {
  header: string
  value: string
  Icon?: any
  when: string
  porcentage: number
  isPositive: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.common.white, //teste
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    value: {
      fontSize: 36,
    },
  }),
)
const HomeHeaderSummary: React.FC<HomeHeaderSummaryProps> = ({
  header,
  value,
  Icon = null,
  when = 'este mês',
  porcentage = 0,
  isPositive = true,
}) => {
  const classes = useStyles()
  return (
    <>
      <SummaryContainer>
        <Box display="flex" alignItems="flex-start" flexDirection="column">
          <Box>
            <HeaderContainer>{header}</HeaderContainer>
          </Box>
          <Box>
            <ValueContainer>{value}</ValueContainer>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ minHeight: '25%' }}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              {isPositive ? (
                <ArrowDropUpIcon color="primary" />
              ) : (
                <ArrowDropDownIcon htmlColor="tomato" />
              )}
            </Box>
            <Box display="flex">
              <Box
                style={{
                  color: `${isPositive ? '#6200ee' : 'tomato'}`,
                  fontSize: 12,
                }}
              >
                {porcentage}%
              </Box>
            </Box>
            <Box>
              <When style={{ width: '100%', fontSize: 11 }}>
                &nbsp;
                {when}
              </When>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box
            style={{
              height: 56,
              width: 56,
              backgroundColor: '#f3f7ff',
              border: `solid 16px #f3f7ff`,
              borderRadius: '50%',
              color: theme.palette.primary.main,
            }}
          >
            {Icon}
          </Box>
        </Box>
      </SummaryContainer>
    </>
  )
}
export default HomeHeaderSummary
