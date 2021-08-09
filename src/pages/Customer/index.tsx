import * as React from 'react'
import { GridColDef, DataGrid } from '@material-ui/data-grid'
import faker from 'faker'
import DashboardWrapper from '../../components/DashboardWrapper'
import Loading from '../../components/Loading'
import { Box, Button, createStyles, makeStyles } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Header = styled.div`
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FilterAndSearch = styled.div`
  display: flex;
`

const AddButton = styled.div`
  display: flex;
`

const useStyles = makeStyles(() =>
  createStyles({
    headerText: {
      color: 'rgba(0,0,0, 0.5)',
      textTransform: 'uppercase',
      fontSize: 10,
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.6,
      letterSpacing: 1.5,
    },
    cellText: {
      fontSize: 14,
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.71,
      letterSpacing: 0.1,
    },
    cellStatusText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      color: '#0065ff',
      width: 80,
      height: 26,
      borderRadius: 13,
      backgroundColor: '#f3f7ff',
    },
    cellStatusTextLead: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      color: '#666666',
      width: 80,
      height: 26,
      borderRadius: 13,
      backgroundColor: '#f6f6f6',
    },
  }),
)

interface IUser {
  id: string
  name: string
  status: 'Cliente' | 'Lead'
  phone: string
  email: string
}

interface CustomerProps {}
const Customer: React.FC<CustomerProps> = () => {
  const perPageOptions = [10, 15, 50, 100]
  const [users, setUsers] = React.useState<IUser[]>([])
  const [pageSize, setPageSize] = React.useState<number>(perPageOptions[0])
  const [searchValue, setSearchValue] = React.useState<string>('')
  const classes = useStyles()
  const history = useHistory()

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      minWidth: 380,
      editable: true,
      resizable: true,
      headerClassName: classes.headerText,
      cellClassName: classes.cellText,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      editable: true,
      resizable: true,
      headerClassName: classes.headerText,
      renderCell: (params) => {
        let isLead = true
        if (params.value !== 'Lead') isLead = false
        return (
          <Box
            className={
              isLead ? classes.cellStatusTextLead : classes.cellStatusText
            }
          >
            {params.value}
          </Box>
        )
      },
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      minWidth: 190,
      editable: true,
      resizable: true,
      headerClassName: classes.headerText,
      cellClassName: classes.cellText,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'descrição',
      sortable: true,
      minWidth: 160,
      resizable: true,
      headerClassName: classes.headerText,
      cellClassName: classes.cellText,
    },
    {
      field: ' ',
      headerName: ' ',
      description: 'Editar e Deletar usuários',
      minWidth: 260,
      renderCell: (params) => {
        return (
          <Box
            display="flex"
            justifyContent="flex-end"
            style={{
              minWidth: '100%',
              minHeight: '100%',
            }}
          >
            <Box display="flex" alignItems="center">
              <MoreVertIcon style={{ opacity: 0.3, cursor: 'pointer' }} />
            </Box>
          </Box>
        )
      },
    },
  ]

  const generateUsers = (): IUser[] => {
    let users = []

    for (let i = 1; i <= 3456; i++) {
      let id = faker.datatype.uuid()
      let name = faker.name.firstName() + ' ' + faker.name.lastName()
      let phone = faker.phone.phoneNumber()
      let status: 'Cliente' | 'Lead' = faker.random.arrayElement([
        'Cliente',
        'Lead',
      ])
      let email = faker.internet.email()

      users.push({
        id: id,
        name: name,
        status: status,
        phone: phone,
        email: email,
      })
    }

    return users
  }

  const handlePageSizeChange = (value: number) => {
    setPageSize(value)
  }

  React.useEffect(() => {
    setUsers(generateUsers())
    return () => {
      setUsers([])
    }
  }, [])

  return (
    <>
      <DashboardWrapper>
        <Header>
          <FilterAndSearch>
            <Button
              startIcon={<FilterListIcon />}
              variant="outlined"
              style={{
                color: '#6200ee',
                backgroundColor: '#fff',
                border: 'solid 1px rgba(0, 0, 0, 0.2)',
                marginRight: 10,
              }}
            >
              filtrar
            </Button>
            <input
              type="search"
              placeholder="Buscar por nome..."
              value={searchValue}
              onChange={({ target }: any) => setSearchValue(target.value)}
              style={{
                borderRadius: 4,
                border: 'solid 1px rgba(0, 0, 0, 0.2',
                padding: '0px 5px',
                minWidth: 372,
              }}
            />
            <SearchIcon style={{ position: 'relative', left: -30, top: 5 }} />
          </FilterAndSearch>
          <AddButton>
            <Button
              style={{ backgroundColor: '#6200ee', color: 'white' }}
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                history.push('/clientes/adicionar')
              }}
            >
              ADICIONAR
            </Button>
          </AddButton>
        </Header>
        <div style={{ height: 760, width: '100%' }}>
          {users.length ? (
            <DataGrid
              style={{ backgroundColor: 'white' }}
              rowHeight={64}
              rows={users.filter((user) => user.name.includes(searchValue))}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
              rowsPerPageOptions={[10, 15, 50]}
              checkboxSelection
              disableSelectionOnClick
            />
          ) : (
            <Loading />
          )}
        </div>
      </DashboardWrapper>
    </>
  )
}
export default Customer
