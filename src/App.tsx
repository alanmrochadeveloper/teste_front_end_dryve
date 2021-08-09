import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Customer from './pages/Customer'
import Vehicles from './pages/Vehicles'
import Triangle from './pages/Triangle'
import Wallet from './pages/Wallet'
import CreateCustomer from './pages/CreateCustomer';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clientes" component={Customer} />
            <Route exact path="/veiculos" component={Vehicles} />
            <Route exact path="/triangulacao" component={Triangle} />
            <Route exact path="/financeiro" component={Wallet} />
            <Route exact path="/clientes/:action" component={CreateCustomer} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
