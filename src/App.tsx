import * as React from 'react'
import { render } from 'react-dom'

import Counter from './Counter'
// import * as css from './App.css'
import { foo } from './App.css'

interface Props {
  children: React.ReactNode
}

const App: React.FunctionComponent<Props> = ({ children }: Props) => (
  <div className={foo}>{children}</div>
)

render(
  <App>
    <Counter count={9} />
  </App>,
  document.getElementById('main'),
)
