import React from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  TableCell,
  TableRow,
} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import styled from 'styled-components'

import hyundaiLogo from '../../assets/car_brand_logos/hyundai.png'
import chevroletLogo from '../../assets/car_brand_logos/chevrolet.png'
import jeep from '../../assets/car_brand_logos/jeep.png'
import volks from '../../assets/car_brand_logos/volkwagen.png'
import nissan from '../../assets/car_brand_logos/nissan.png'

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: white;
  margin: 10px;
  border: solid 1px #dfdfdf;
  border-radius: 4px;
  min-height: 384px;
  height: 384px;
  min-width: 280px;
  padding: 20px;
`
const Header = styled.div`
  font-size: 14px;

  font-weight: 500;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.71;

  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`

const TableWrapper = styled.div`
  margin-top: 14px;
`

const useStyles = makeStyles(() =>
  createStyles({
    tableCell: {
      padding: '14px 0px',
    },
    title: {
      textTransform: 'capitalize',
      padding: '0px 14px',
      fontSize: 14,
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.71,
      letterSpacing: 0.1,
      color: 'rgba(0,0,0,0.87)',
    },
  }),
)
interface BuyIntentionProps {}
const BuyIntention: React.FC<BuyIntentionProps> = () => {
  const classes = useStyles()

  return (
    <>
      <Wrapper>
        <Header>Top intenções de compra</Header>
        <TableWrapper>
          <TableContainer>
            <Table>
              <TableBody>
                {[
                  {
                    imgUrl: hyundaiLogo,
                    title: 'HB20',
                    quantity: 197,
                  },
                  {
                    imgUrl: chevroletLogo,
                    title: 'onix',
                    quantity: 183,
                  },
                  {
                    imgUrl: jeep,
                    title: 'renegate',
                    quantity: 125,
                  },
                  {
                    imgUrl: volks,
                    title: 't-Cross',
                    quantity: 109,
                  },
                  {
                    imgUrl: nissan,
                    title: 'kicks',
                    quantity: 86,
                  },
                ].map(({ imgUrl, title, quantity }) => (
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                      >
                        <Box display="flex">
                          <img
                            style={{ maxHeight: 36, maxWidth: 36 }}
                            src={imgUrl}
                            alt="logo"
                          />
                        </Box>
                        <Box className={classes.title}>{title}</Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="center">
                        <Box className={classes.title}> {quantity}</Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableWrapper>
      </Wrapper>
    </>
  )
}
export default BuyIntention
