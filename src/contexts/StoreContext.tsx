import { createContext, useEffect, useState } from 'react'

interface Coffee {
  id: number
  name: string
  price: number
  quantity: number
  imgSource: string
}

interface RequestData {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  typeOfPayment: string
}

interface StoreContextType {
  cartList: Coffee[]
  requestData: RequestData
  totalPrice: number
  totalQuantity?: number
  addToCart: (coffeeData: Coffee) => void
  addRequestData: (requestData: RequestData) => void
  setTotalPrice: (totalPrice: number) => void
  updateCoffeeQuantity: (coffeeId: number, quantity: number) => void
  deleteCoffeeFromCart: (coffeeId: number) => void
  setTotalQuantity?: (totalQuantity: number) => void
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: React.ReactNode
}

export function StoreCotextProvider({ children }: StoreContextProviderProps) {
  const [cartList, setCartList] = useState<Coffee[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [requestData, setRequestData] = useState<RequestData>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    typeOfPayment: '',
  })

  useEffect(() => {
    const totalPrice = cartList.reduce((acc, coffee) => {
      return acc + coffee.price * coffee.quantity
    }, 0)

    const totalQuantity = cartList.reduce((acc, coffee) => {
      return acc + coffee.quantity
    }, 0)

    setTotalQuantity(totalQuantity)
    setTotalPrice(totalPrice)
  }, [cartList])

  function addToCart(coffeeData: Coffee) {
    setCartList((state) => {
      return [...state, coffeeData]
    })
  }

  function updateCoffeeQuantity(coffeeId: number, quantity: number) {
    const updatedCartList = cartList.map((coffee) => {
      if (coffee.id === coffeeId) {
        return {
          ...coffee,
          quantity,
        }
      }

      return coffee
    })

    setCartList(updatedCartList)
  }

  function deleteCoffeeFromCart(coffeeId: number) {
    const updatedCartList = cartList.filter((coffee) => coffee.id !== coffeeId)

    setCartList(updatedCartList)
  }

  function addRequestData(requestData: RequestData) {
    setRequestData(requestData)
  }

  return (
    <StoreContext.Provider
      value={{
        cartList,
        addToCart,
        requestData,
        addRequestData,
        totalPrice,
        setTotalPrice,
        updateCoffeeQuantity,
        deleteCoffeeFromCart,
        totalQuantity,
        setTotalQuantity,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
