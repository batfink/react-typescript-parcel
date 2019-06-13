import * as React from 'react'

interface Props {
  count?: number
}

const Counter: React.FunctionComponent<Props> = ({ count }) => (
  <span>{count}</span>
)

export default Counter
