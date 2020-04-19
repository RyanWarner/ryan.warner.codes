
import styled from 'styled-components'

export const TutorialsComponent = styled.div`
  margin-top: 50px;
  display: flex;

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  li {
    list-style-type: none;
  }
`

export const Tutorials = styled.div`
  width: 100%;
`

export const Filters = styled.div`
  width: 320px;
  flex-shrink: 100%;
  margin-right: 40px;
`
