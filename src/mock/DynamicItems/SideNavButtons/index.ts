import { SideNavButton } from '../../../types/interfaces/SideNavButtons'

export const sideButtons: SideNavButton[] = [
  {
    url: '/',
    text: 'Início',
    icon: 'house', // import HomeIcon from '@material-ui/icons/Home';
  },
  {
    url: '/clientes',
    text: 'Clientes',
    icon: 'person', // import PersonIcon from '@material-ui/icons/Person'
  },
  {
    url: '/veiculos',
    text: 'Veículos',
    icon: 'vehicles', // import DriveEtaIcon from '@material-ui/icons/DriveEta';
  },
  {
    url: '/triangulacao',
    text: 'Triangulação',
    icon: 'triangle', // assets/ic-vector-triangle.svg
  },
  {
    url: '/financeiro',
    text: 'Financeiro',
    icon: 'wallet', // import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
  },
]
