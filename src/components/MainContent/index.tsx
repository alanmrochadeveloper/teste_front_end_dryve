import { Container } from '@material-ui/core'
import React from 'react'
import Footer from '../Footer';

interface MainContentProps {
  children: any
}
const MainContent: React.FC<MainContentProps> = ({
  children,
}: MainContentProps) => {
  return (
    <>
      <Container maxWidth="lg" style={{ minHeight: '970px' }}>
        {children}
        <Footer />
      </Container>
    </>
  )
}
export default MainContent
