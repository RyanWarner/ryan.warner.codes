import styled from 'styled-components'

const MyDiv = styled.div`
  width: 1200px;
  height: 630px;
  background: linear-gradient(151.43deg, #BAFFC5 5.07%, #74AED6 80.61%);
  color: #161E25;
  width: 100vw;
  height: 630px;
`

const H1 = styled.h1`
  font-size: 118px;
  margin: 0;
`

export default function OGImage () {
  return (
    <MyDiv id='social-card'>
      <H1>
        OGImage Component
      </H1>
    </MyDiv>
  )
}