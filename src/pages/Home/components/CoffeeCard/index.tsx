import { CoffeeCardCategories, CoffeeCardContainer, CoffeeCardDescription, CoffeeCardInput, CoffeeCardPrice } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'

type Coffee = {
  id: number
  name: string
  description: string
  categories: string[]
  price: string
  imgSource: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
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
          <input type="number"/>
          <button><ShoppingCartSimple weight='fill' size={22} /></button>
        </div>
      </CoffeeCardInput>

    </CoffeeCardContainer>
  )
}
