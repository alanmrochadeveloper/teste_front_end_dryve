import { Box } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
`
const CopyRights = styled.div`
  font-family: Roboto;
  display: flex;

  font-size: 14px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.57;

  letter-spacing: normal;

  color: #616161;
`
const Version = styled.div`
  display: flex;
  font-family: Roboto;

  font-size: 12px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.5;

  letter-spacing: normal;

  text-align: right;

  color: #6b6c6f;

  opacity: 0.5;
`

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box
        component="footer"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        style={{ padding: 10 }}
      >
        <Box style={{ padding: '10px 0px 0px 0px' }}>
          <hr style={{ opacity: 0.3 }} />
        </Box>
        <FooterRow>
          <CopyRights>{new Date().getFullYear()} © Dryve Tecnologia Ltda.</CopyRights>
          <Version>Versão 1.0.1</Version>
        </FooterRow>
      </Box>
    </>
  )
}
export default Footer
