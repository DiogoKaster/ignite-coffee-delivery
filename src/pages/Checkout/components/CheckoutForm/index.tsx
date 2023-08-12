import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { PaperContainer } from '../../../../components/Paper'
import { CardsInputs, AdressInputs } from './styles'
import { CheckoutFormHeader } from './components/CheckoutFormHeader'
import { CheckoutFormCard } from './components/CheckoutFormCard'

export function CheckoutForm() {
  return (
    <>
      <h2>Complete seu pedido</h2>
      <PaperContainer gapSize={2} paddingSize={2.5}>
        <CheckoutFormHeader
          color="yellowDark"
          title="Endereço de entrega"
          description="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} />}
        />
        <AdressInputs>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </AdressInputs>
      </PaperContainer>
      <PaperContainer gapSize={2} paddingSize={2.5}>
        <CheckoutFormHeader
          color="purple"
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollarSimple size={22} />}
        />
        <CardsInputs>
          <CheckoutFormCard
            icon={<CreditCard size={22} />}
            cardType="Cartão de crédito"
          />
          <CheckoutFormCard
            icon={<Bank size={22} />}
            cardType="Cartão de débito"
          />
          <CheckoutFormCard icon={<Money size={22} />} cardType="Dinheiro" />
        </CardsInputs>
      </PaperContainer>
    </>
  )
}
