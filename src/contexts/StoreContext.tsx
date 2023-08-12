import { createContext, useState } from 'react'

interface Coffee {
  id: number
  name: string
  price: string
  quantity: number
}

interface StoreContextType {
  cartList: Coffee[]
  addToCart: (coffeeData: Coffee) => void
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: React.ReactNode
}

export function StoreCotextProvider({ children }: StoreContextProviderProps) {
  const [cartList, setCartList] = useState<Coffee[]>([])

  function addToCart(coffeeData: Coffee) {
    setCartList((state) => {
      return [...state, coffeeData]
    })
  }

  return (
    <StoreContext.Provider value={{ cartList, addToCart }}>
      {children}
    </StoreContext.Provider>
  )
}
