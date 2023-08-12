import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutResume } from './components/CheckoutResume'
import { CheckoutContainer, CheckoutMainContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutMainContainer>
        <CheckoutForm />
      </CheckoutMainContainer>
      <CheckoutMainContainer>
        <CheckoutResume />
      </CheckoutMainContainer>
    </CheckoutContainer>
  )
}
