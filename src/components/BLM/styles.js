
import styled from 'styled-components'

export const BLMComponent = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  flex-direction: column;
  padding: 0 60px;
  box-sizing: border-box;
  padding-top: 100px;
`

export const Header = styled.h2`

`

export const Description = styled.p`
  font-size: 15px;
  max-width: 500px;
  margin-bottom: 30px;
`

export const Donate = styled.a`
  width: 100px;
  height: 40px;
  background-color: yellow;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: black;
  }
`
