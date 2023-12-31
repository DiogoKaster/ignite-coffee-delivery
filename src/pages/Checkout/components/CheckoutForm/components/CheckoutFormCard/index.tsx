import { CardContainer } from './styles'

interface CheckoutFormCardProps {
  icon: JSX.Element
  cardType: string
}

export function CheckoutFormCard({ icon, cardType }: CheckoutFormCardProps) {
  return (
    <CardContainer>
      <input type="radio" name="typeOfPayment" value={cardType} />
      {icon}
      <span>{cardType}</span>
    </CardContainer>
  )
}
