
import styled from 'styled-components'

export const BLMComponent = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  flex-direction: column;
  padding: 0 60px;
  box-sizing: border-box;
  padding-top: 54px;
`

export const Header = styled.h1`

`

export const Description = styled.p`
  font-size: 25px;
  max-width: 500px;
  margin-bottom: 30px;
  text-align: center;
`

export const Donate = styled.a`
  width: 200px;
  height: 60px;
  background-color: yellow;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: black;
  }
`
