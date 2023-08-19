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
          <input type="text" placeholder="CEP" name="cep" />
          <input type="text" placeholder="Rua" name="rua" />
          <div>
            <input type="text" placeholder="Número" name="numero" />
            <input type="text" placeholder="Complemento" name="complemento" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" name="bairro" />
            <input type="text" placeholder="Cidade" name="cidade" />
            <input type="text" placeholder="UF" name="uf" />
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
