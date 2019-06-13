import * as React from 'react'
import { render } from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Counter from './Counter'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

interface Props {
  bg: string
}

const App = styled.div<Props>`
  background-color: #${({ bg }) => (bg ? bg : 'ffff00')};
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-items: center;
  display: grid;
`

render(
  <>
    <GlobalStyle />
    <App bg="ff9900">
      <Counter count={9} />
    </App>
  </>,
  document.getElementById('main'),
)
