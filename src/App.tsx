import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Counter from './Counter'

interface AppProps {
  bg: number,
}

const App = styled.div<AppProps>`
  background-color: ${ (props) => props.bg ? props.bg : '#ff9900'  }
`

render(<App bg="lime"><Counter count={9} /></App>, document.getElementById('main'))
