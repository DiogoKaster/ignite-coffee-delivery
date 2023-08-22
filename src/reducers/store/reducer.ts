import { ActionTypes, CoffeeAction } from './actions'

export interface Coffee {
  id: number
  name: string
  price: number
  quantity: number
  imgSource: string
}

export function storeReducer(state: Coffee[], action: CoffeeAction) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload]
    case ActionTypes.UPDATE_COFFEE_QUANTITY: {
      const updatedCartList = state.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          return {
            ...coffee,
            quantity: action.payload.quantity,
          }
        }
        return coffee
      })
      return updatedCartList
    }
    case ActionTypes.DELETE_COFFEE_FROM_CART: {
      const updatedCartList = state.filter(
        (coffee) => coffee.id !== action.payload,
      )
      return updatedCartList
    }
  }

  return state
}
