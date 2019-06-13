import * as React from 'react'

interface Props {
  count?: number
}

const Counter: React.FunctionComponent<Props> = props => <h1>{props.count}</h1>

export default Counter
