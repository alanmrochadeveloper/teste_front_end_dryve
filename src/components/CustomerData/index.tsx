import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Button, Theme } from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'space-between',
      maxWidth: 1200,
      maxHeight: 630,
      minHeight: 630,
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      maxWidth: 570,
      padding: '0px 8px',
    },
    rightContainer: {
      display: 'flex',
      flexGrow: 1,
      maxWidth: 570,
      padding: '0px 8px',
    },
    textField: { padding: 8 },
    textFieldAlone: { padding: 8, maxWidth: 276 },

    nameRow: { width: '100%' },
    firstName: {
      width: '100%',
    },
    lastName: {
      width: '100%',
    },
    emailRow: { width: '100%' },
    email: { width: '100%' },
    phoneRow: {},
    cepRow: {},
    flexRow: { display: 'flex', alignItems: 'center' },
    addPhone: {
      padding: 8,
      color: theme.palette.primary.main,
      fontWeight: 500,
      cursor: 'pointer',
    },
  }),
)

interface CustomerDataProps {}
const CustomerData: React.FC<CustomerDataProps> = () => {
  const variant = 'outlined'
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        style={{ maxHeight: 700, width: '100%' }}
      >
        <Box className={classes.container}>
          <Box className={classes.leftContainer}>
            <Box className={clsx(classes.nameRow, classes.flexRow)}>
              <Box className={clsx(classes.firstName, classes.textField)}>
                <TextField fullWidth label="Nome" variant={variant} />
              </Box>
              <Box className={clsx(classes.lastName, classes.textField)}>
                <TextField fullWidth label="Sobrenome" variant={variant} />
              </Box>
            </Box>
            <Box className={clsx(classes.emailRow, classes.flexRow)}>
              <Box className={clsx(classes.email, classes.textField)}>
                <TextField fullWidth label="E-mail" variant={variant} />
              </Box>
            </Box>
            <Box className={clsx(classes.phoneRow, classes.flexRow)}>
              <Box className={classes.textFieldAlone}>
                <TextField label="Telefone" fullWidth variant={variant} />
              </Box>
              <Box className={clsx(classes.textField, classes.addPhone)}>
                + adicionar outro
              </Box>
            </Box>
            <Box className={clsx(classes.cepRow, classes.flexRow)}>
              <Box className={classes.textFieldAlone}>
                <TextField variant={variant} label="CEP" />
              </Box>
            </Box>
            {/* diabled fields below */}

            <Box style={{ opacity: 0.5 }}>
              <Box className={clsx(classes.nameRow, classes.flexRow)}>
                <Box className={clsx(classes.firstName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Endereço"
                    variant={variant}
                    disabled
                  />
                </Box>
              </Box>
              <Box className={clsx(classes.nameRow, classes.flexRow)}>
                <Box className={clsx(classes.firstName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Número"
                    variant={variant}
                    disabled
                  />
                </Box>
                <Box className={clsx(classes.lastName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Complemento"
                    variant={variant}
                    disabled
                  />
                </Box>
              </Box>
              <Box className={clsx(classes.nameRow, classes.flexRow)}>
                <Box className={clsx(classes.firstName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Bairro"
                    variant={variant}
                    disabled
                  />
                </Box>
              </Box>
              <Box className={clsx(classes.nameRow, classes.flexRow)}>
                <Box className={clsx(classes.firstName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    variant={variant}
                    disabled
                  />
                </Box>
                <Box className={clsx(classes.lastName, classes.textField)}>
                  <TextField
                    fullWidth
                    label="Estado"
                    select
                    variant={variant}
                    disabled
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightContainer}></Box>
        </Box>
        {/* {footer} */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          style={{ minHeight: 66 }}
        >
          <Box style={{ width: '100%' }}>
            <hr />
          </Box>
          <Box display="flex">
            <Button
              style={{ padding: '0.4rem 3rem', backgroundColor: '#6200ee' }}
              color="primary"
              variant="contained"
            >
              salvar
            </Button>
            <Button
              color="primary"
              style={{
                padding: '0.4rem 3rem',
                marginLeft: 15,
                color: '#6200ee',
              }}
              onClick={() => {
                history.push('/clientes')
              }}
            >
              cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default CustomerData
