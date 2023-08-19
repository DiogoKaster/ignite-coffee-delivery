import Counter from '../../../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'
import {
  CoffeeResumeContainer,
  CoffeeResumeDetails,
  CoffeeResumeDetailsContainer,
  CoffeeResumePrice,
  CoffeeResumeTrashButton,
} from './styles'
import { StoreContext } from '../../../../../../contexts/StoreContext'
import { useContext } from 'react'

interface CoffeeResumeProps {
  coffee: {
    id: number
    name: string
    price: number
    quantity: number
    imgSource: string
  }
}

export function CoffeeResume({ coffee }: CoffeeResumeProps) {
  const coffeeTotalPrice = coffee.price * coffee.quantity
  const { updateCoffeeQuantity, deleteCoffeeFromCart } =
    useContext(StoreContext)

  function handleQuantityChangeFunction(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const quantity = Number(event.target.value)
    updateCoffeeQuantity(coffee.id, quantity)
  }

  function handleDeleteCoffeeFromCart() {
    deleteCoffeeFromCart(coffee.id)
  }

  return (
    <CoffeeResumeContainer>
      <CoffeeResumeDetailsContainer>
        <div>
          <img src={coffee.imgSource} alt={coffee.name} />
        </div>
        <CoffeeResumeDetails>
          <p>{coffee.name}</p>
          <div>
            <Counter
              handleQuantityChangeFunction={handleQuantityChangeFunction}
              type="number"
              defaultValue={coffee.quantity}
            />
            <CoffeeResumeTrashButton onClick={handleDeleteCoffeeFromCart}>
              <Trash size={22} />
              remover
            </CoffeeResumeTrashButton>
          </div>
        </CoffeeResumeDetails>
      </CoffeeResumeDetailsContainer>
      <CoffeeResumePrice>R$ {coffeeTotalPrice.toFixed(2)}</CoffeeResumePrice>
    </CoffeeResumeContainer>
  )
}
