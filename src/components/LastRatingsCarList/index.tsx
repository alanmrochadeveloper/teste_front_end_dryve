import {
  createStyles,
  ListItem,
  makeStyles,
  TextField,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { ArrowRight } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import CustomTable from '../CustomTable'

const Main = styled.div`
  display: flex;
  flex-grow: 1.7;
  flex-direction: column;
  min-width: 500px;
  height: 640px;
  background-color: white;
  margin: 10px;
  border: solid 1px #dfdfdf;
  border-radius: 4px;
`
const FooterWrapper = styled.div`
  display: flex;
  min-height: 37px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 26.5px;
`
const ShowAllText = styled.div`
  color: #0065ff;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
`

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      minHeight: 52,
      padding: '0px 20px',
    },
    headerText: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 14,

      fontWeight: 500,

      fontStretch: 'normal',

      fontStyle: 'normal',

      lineHeight: 1.71,

      letterSpacing: 0.1,
      border: 'solid 0px transparent',
    },
    showAll: {
      cursor: 'pointer',
    },
  }),
)

interface LastRatingsCarListProps {}
const LastRatingsCarList: React.FC<LastRatingsCarListProps> = () => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <>
      <Main>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.header}
        >
          <Box className={classes.headerText}>Últimas avaliações</Box>
          <Box>
            <TextField
              variant="standard"
              select
              defaultValue="Hoje"
              inputProps={{
                className: classes.headerText,
              }}
              InputProps={{ disableUnderline: true }}
            >
              <ListItem value="Hoje">Hoje</ListItem>
              <ListItem value="Ontem">Ontem</ListItem>
              <ListItem value="Semana passada">Semana passada</ListItem>
            </TextField>
          </Box>
        </Box>
        <CustomTable />
        <FooterWrapper>
          <Box display="flex" className={classes.showAll}>
            <ShowAllText
              onClick={() => {
                history.push('/veiculos')
              }}
            >
              Ver tudo
            </ShowAllText>
            <ArrowRight color="primary" />
          </Box>
        </FooterWrapper>
      </Main>
    </>
  )
}
export default LastRatingsCarList
