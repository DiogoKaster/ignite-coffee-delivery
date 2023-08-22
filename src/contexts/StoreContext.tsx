import { createContext, useEffect, useReducer, useState } from 'react'
import { Coffee, storeReducer } from '../reducers/store/reducer'
import {
  addToCartAction,
  deleteCoffeeFromCartAction,
  updateCoffeeQuantityAction,
} from '../reducers/store/actions'
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
  cartListState: Coffee[]
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
  const [cartListState, dispatch] = useReducer(storeReducer, [])

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
    const totalPrice = cartListState.reduce((acc, coffee) => {
      return acc + coffee.price * coffee.quantity
    }, 0)

    const totalQuantity = cartListState.reduce((acc, coffee) => {
      return acc + coffee.quantity
    }, 0)

    setTotalQuantity(totalQuantity)
    setTotalPrice(totalPrice)
  }, [cartListState])

  function addToCart(coffeeData: Coffee) {
    dispatch(addToCartAction(coffeeData))
  }

  function updateCoffeeQuantity(coffeeId: number, quantity: number) {
    dispatch(updateCoffeeQuantityAction(coffeeId, quantity))
  }

  function deleteCoffeeFromCart(coffeeId: number) {
    dispatch(deleteCoffeeFromCartAction(coffeeId))
  }

  function addRequestData(requestData: RequestData) {
    setRequestData(requestData)
  }

  return (
    <StoreContext.Provider
      value={{
        cartListState,
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
