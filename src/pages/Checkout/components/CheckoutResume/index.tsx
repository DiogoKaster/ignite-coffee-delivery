import { PaperContainer } from '../../../../components/Paper'

export function CheckoutResume() {
  return (
    <>
      <h2>Cafés selecionados</h2>
      <PaperContainer withBorder={true}>
        <p>Nome do café</p>
      </PaperContainer>
    </>
  )
}
