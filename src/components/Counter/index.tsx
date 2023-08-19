import React from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  type: 'number' | 'text'
  defaultValue?: number
  handleQuantityChangeFunction?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
}

const Counter = React.forwardRef<HTMLInputElement, CounterProps>(
  function CounterComponent(
    { type, defaultValue = 1, handleQuantityChangeFunction },
    ref,
  ) {
    return (
      <CounterContainer
        onChange={handleQuantityChangeFunction}
        type={type}
        ref={ref}
        defaultValue={defaultValue}
      />
    )
  },
)

Counter.displayName = 'Counter' // Adicione esta linha

export default Counter
