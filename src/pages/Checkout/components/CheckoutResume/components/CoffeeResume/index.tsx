import Counter from '../../../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'
import {
  CoffeeResumeContainer,
  CoffeeResumeDetails,
  CoffeeResumeDetailsContainer,
  CoffeeResumePrice,
  CoffeeResumeTrashButton,
} from './styles'

export function CoffeeResume() {
  return (
    <CoffeeResumeContainer>
      <CoffeeResumeDetailsContainer>
        <div>
          <p>imagem</p>
        </div>
        <CoffeeResumeDetails>
          <p>Latte</p>
          <div>
            <Counter type="number" />
            <CoffeeResumeTrashButton>
              <Trash size={22} />
              remover
            </CoffeeResumeTrashButton>
          </div>
        </CoffeeResumeDetails>
      </CoffeeResumeDetailsContainer>
      <CoffeeResumePrice>R$ 9,90</CoffeeResumePrice>
    </CoffeeResumeContainer>
  )
}
