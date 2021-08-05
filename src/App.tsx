import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import DashboardWrapper from './components/DashboardWrapper'
import { theme } from './styles/Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DashboardWrapper>Teste</DashboardWrapper>
      </ThemeProvider>
    </div>
  )
}

export default App
