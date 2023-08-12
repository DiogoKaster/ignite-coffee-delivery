import { useContext, useRef } from 'react'
import {
  CoffeeCardCategories,
  CoffeeCardDescription,
  CoffeeCardInput,
  CoffeeCardPrice,
} from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { PaperContainer } from '../../../../components/Paper'

type CoffeeCard = {
  id: number
  name: string
  description: string
  categories: string[]
  price: string
  imgSource: string
}

interface CoffeeCardProps {
  coffee: CoffeeCard
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const coffeeNumberRef = useRef<HTMLInputElement>(null)
  const { addToCart } = useContext(StoreContext)

  function handleAddToCart() {
    addToCart({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      quantity: Number(coffeeNumberRef.current?.value),
    })
  }

  return (
    <PaperContainer
      withBorder={true}
      paddingSize={1.75}
      gapSize={1.25}
      isAligned={true}
      imgSizeChange={true}
    >
      <img src={coffee.imgSource} alt={coffee.name} />
      <CoffeeCardCategories>
        {coffee.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </CoffeeCardCategories>
      <CoffeeCardDescription>
        <h3>{coffee.name}</h3>
        <label>{coffee.description}</label>
      </CoffeeCardDescription>
      <CoffeeCardInput>
        <CoffeeCardPrice>
          <p>R$</p>
          <span>{coffee.price}</span>
        </CoffeeCardPrice>
        <div>
          <input type="number" ref={coffeeNumberRef} />
          <button onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </CoffeeCardInput>
    </PaperContainer>
  )
}
