import React from 'react'
import styled from 'styled-components'
import BuyIntention from './buy-intention.component'
import Price from './prices.component'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 640px;
`
interface HomeExtraInformationProps {}
const HomeExtraInformation: React.FC<HomeExtraInformationProps> = () => {
  return (
    <>
      <Main>
        <BuyIntention />
        <Price />
      </Main>
    </>
  )
}
export default HomeExtraInformation
