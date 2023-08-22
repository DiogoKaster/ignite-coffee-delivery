import { useContext } from 'react'
import { PaperContainer } from '../../../../components/Paper'
import { CoffeeResume } from './components/CoffeeResume'
import { PriceResumeContainer, ResumeButton } from './styles'
import { StoreContext } from '../../../../contexts/StoreContext'

export function CheckoutResume() {
  const { cartListState, totalPrice } = useContext(StoreContext)
  const totalPriceWithDelivery = totalPrice + 3.5

  return (
    <>
      <h2>Cafés selecionados</h2>
      <PaperContainer withBorder={true} gapSize={1.5} paddingSize={2.5}>
        {cartListState.map((coffee) => (
          <>
            <CoffeeResume key={coffee.id} coffee={coffee} />
            <hr></hr>
          </>
        ))}
        <PriceResumeContainer>
          <div>
            <p>Total de itens</p>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ {totalPriceWithDelivery.toFixed(2)}</span>
          </div>
        </PriceResumeContainer>
        <ResumeButton type="submit">CONFIRMAR PEDIDO</ResumeButton>
      </PaperContainer>
    </>
  )
}
