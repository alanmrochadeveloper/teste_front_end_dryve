import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Box } from '@material-ui/core'
import { carRows, ICar } from '../../mock/carList'

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 650,
    },
    tableRow: {
      minHeight: 100,
      maxHeight: 100,
    },
    innerTableCell: {
      display: 'flex',
      maxHeight: 60,
      margin: '3.5px 0px',
    },
    tableHeaderTitle: {
      fontSize: '10px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.6,
      letterSpacing: '1.5px',
      color: 'rgba(0,0,0,0.43)',
      textTransform: 'uppercase',
    },
    imageContainer: {},
    carImage: {
      maxHeight: 60,
      maxWidth: 80,
      margin: '0px 10px',
    },
    carTitle: {
      color: '#1e2c4c',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    carInfo: {
      color: '#768095',
      textTransform: 'uppercase',
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 0.33,
    },
    minPrice: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      color: '#a5abb7',
    },
    pedingPriceText: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#768095',
    },
    pendingPrice: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#a5abb7',
    },
    customBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 176,
      height: 26,
      borderRadius: 13,
      backgroundColor: '#f3f7ff',
    },
  }),
)

interface CustomTableProps {}

const CustomTable: React.FC<CustomTableProps> = () => {
  const classes = useStyles()
  const [cars, setCars] = React.useState<ICar[]>([])

  const convertNumberToCurrency = (numberValue: number) => {
    return numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  React.useEffect(() => {
    setCars(carRows)
    return () => {
      setCars([])
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderTitle}>
              Dados do veículo
            </TableCell>
            <TableCell className={classes.tableHeaderTitle}>valor</TableCell>
            <TableCell className={classes.tableHeaderTitle} align="left">
              status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                <Box className={classes.innerTableCell}>
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.imageContainer}
                  >
                    <img
                      className={classes.carImage}
                      src={row.imgUrl}
                      alt="carro"
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box className={classes.carTitle}>{row.title}</Box>
                    <Box className={classes.carInfo}>{row.model}</Box>
                    <Box display="flex" className={classes.carInfo}>
                      <Box>{row.year}</Box>&nbsp;-&nbsp;<Box>{row.fuel}</Box>
                    </Box>
                    <Box display="flex" className={classes.carInfo}>
                      <Box>{row.transmission}</Box>&nbsp;-&nbsp;
                      <Box>{row.km}&nbsp;km</Box>
                    </Box>
                  </Box>
                </Box>
                {/* {row.name} */}
              </TableCell>
              <TableCell align="left">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                  style={{ minHeight: 58 }}
                >
                  <Box display="flex" flexDirection="column">
                    <Box className={classes.carInfo}>anúncio</Box>{' '}
                    <Box className={classes.carTitle} style={{ fontSize: 13 }}>
                      {convertNumberToCurrency(row.announcePrice)}
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Box className={classes.carInfo}>mínimo aceito</Box>
                    <Box className={classes.minPrice}>
                      {convertNumberToCurrency(row.minPrice)}
                    </Box>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box display="flex">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-around"
                    style={{
                      minHeight: 60,
                    }}
                  >
                    <Box className={classes.customBadge}>
                      <Box className={classes.pedingPriceText}>
                        Aguardando precificação
                      </Box>
                    </Box>
                    <Box className={classes.pendingPrice}>
                      18/04/2020 às 14:35
                    </Box>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable
