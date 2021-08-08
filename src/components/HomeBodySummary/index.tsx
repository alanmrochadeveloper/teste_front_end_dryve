import React, { memo } from 'react'
import styled from 'styled-components'
import HomeExtraInformation from '../HomeExtraInformation'
import LastRatingsCarList from '../LastRatingsCarList'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
interface HomeBodySummaryProps {}
const HomeBodySummary: React.FC<HomeBodySummaryProps> = () => {
  return (
    <>
      <Wrapper>
        <LastRatingsCarList />
        <HomeExtraInformation />
      </Wrapper>
    </>
  )
}
export default memo(HomeBodySummary)
