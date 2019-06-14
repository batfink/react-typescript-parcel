import * as React from 'react'

interface Props {
  count?: number
}

const Counter: React.FunctionComponent<Props> = ({ count }: Props) => (
  <span>{count}</span>
)

export default Counter
