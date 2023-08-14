import { PaperContainer } from '../../../../components/Paper'
import { CoffeeResume } from './components/CoffeeResume'
import { PriceResumeContainer, ResumeButton } from './styles'

export function CheckoutResume() {
  return (
    <>
      <h2>Cafés selecionados</h2>
      <PaperContainer withBorder={true} gapSize={1.5} paddingSize={2.5}>
        <CoffeeResume />
        <CoffeeResume />
        <CoffeeResume />
        <PriceResumeContainer>
          <div>
            <p>Total de itens</p>
            <span>R$ 9,90</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ 12,50</span>
          </div>
        </PriceResumeContainer>
        <ResumeButton type="submit">CONFIRMAR PEDIDO</ResumeButton>
      </PaperContainer>
    </>
  )
}
