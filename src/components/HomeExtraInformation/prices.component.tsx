import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import HelpIcon from '@material-ui/icons/Help'
import Box from '@material-ui/core/Box'

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: white;
  margin: 10px;
  margin-top: 20px;
  border: solid 1px #dfdfdf;
  border-radius: 4px;
  min-width: 280px;
  /* width: 100%; */
  height: 226px;
  min-height: 226px;
`

const Header = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: left;
  padding: 10px 20px 0px 20px;
`
const HText = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`

const Body = styled.div`
  display: flex;
  flex-grow: 3;
  align-items: center;
  justify-content: center;
`

const Chart = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
  /* max-width: 180px; */
`

const Label = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  max-height: 78px;
  min-height: 78px;
`
const Avg = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: left;
`

const BulletPoint = styled.div`
  border-radius: 50%;
  min-height: 8px;
  max-height: 8px;
  min-width: 8px;
  max-width: 8px;
`
const LabelText = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
  padding: 0px 8px;
`

const Percentage = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #a5abb7;
`

interface PriceProps {}
const Price: React.FC<PriceProps> = () => {
  const donutOptions = {
    responsive: true,
    cutout: 54,
    maintainAspectRatio: true,
    redraw: true,
  }
  const data = {
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#1070ca', '#ec4c47', '#f7d154'],
        borderWidth: 0,
      },
    ],
  }
  return (
    <>
      <Wrapper>
        <Header>
          <HText>Preços - Dryve x KBB</HText>
          <Box title="Gráfico">
            <HelpIcon
              style={{
                height: 14,
                width: 14,
                color: 'rgba(0,0,0,0.2)',
                margin: '0px 6px',
              }}
            />
          </Box>
        </Header>
        <Body>
          <Chart>
            <Doughnut
              data={data}
              options={donutOptions}
              style={{
                maxHeight: 140,
                maxWidth: 150,
                minHeight: 140,
                minWidth: 150,
                paddingBottom: 5,
                paddingTop: 0,
              }}
            />
          </Chart>
          <Label>
            <Avg>
              <BulletPoint style={{ backgroundColor: '#1070ca' }} />
              <LabelText>Na média</LabelText>
              <Percentage>60%</Percentage>
            </Avg>
            <Avg>
              <BulletPoint style={{ backgroundColor: '#ec4c47' }} />
              <LabelText>Acima da média</LabelText>
              <Percentage>25%</Percentage>
            </Avg>
            <Avg>
              <BulletPoint style={{ backgroundColor: '#f7d154' }} />
              <LabelText>Abaixo da média</LabelText>
              <Percentage>15%</Percentage>
            </Avg>
          </Label>
        </Body>
      </Wrapper>
    </>
  )
}
export default Price
