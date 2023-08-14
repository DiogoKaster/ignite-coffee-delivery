import React from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  type: 'number' | 'text'
}

const Counter = React.forwardRef<HTMLInputElement, CounterProps>(
  function CounterComponent({ type }, ref) {
    return <CounterContainer type={type} ref={ref} />
  },
)

Counter.displayName = 'Counter' // Adicione esta linha

export default Counter
