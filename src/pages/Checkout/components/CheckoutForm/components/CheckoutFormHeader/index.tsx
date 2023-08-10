import { CheckoutFormHeaderContainer } from './styles'

interface CheckoutFormHeaderProps {
  icon: JSX.Element
  color: 'purple' | 'yellowDark'
  title: string
  description: string
}

export function CheckoutFormHeader({
  icon,
  color,
  title,
  description,
}: CheckoutFormHeaderProps) {
  return (
    <CheckoutFormHeaderContainer color={color}>
      {icon}
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </CheckoutFormHeaderContainer>
  )
}
