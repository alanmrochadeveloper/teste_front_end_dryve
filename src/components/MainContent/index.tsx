import { Container } from '@material-ui/core'
import React from 'react'

interface MainContentProps {
  children: any
}
const MainContent: React.FC<MainContentProps> = ({
  children,
}: MainContentProps) => {
  return (
    <>
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}
export default MainContent
