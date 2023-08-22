import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
}

export interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART
  payload: Coffee
}

export interface UpdateCoffeeQuantityAction {
  type: ActionTypes.UPDATE_COFFEE_QUANTITY
  payload: {
    coffeeId: number
    quantity: number
  }
}

export interface DeleteCoffeeFromCartAction {
  type: ActionTypes.DELETE_COFFEE_FROM_CART
  payload: number
}

export type CoffeeAction =
  | AddToCartAction
  | UpdateCoffeeQuantityAction
  | DeleteCoffeeFromCartAction

export function addToCartAction(coffeeData: Coffee): AddToCartAction {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: coffeeData,
  }
}

export function updateCoffeeQuantityAction(
  coffeeId: number,
  quantity: number,
): UpdateCoffeeQuantityAction {
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
      quantity,
    },
  }
}

export function deleteCoffeeFromCartAction(
  coffeeId: number,
): DeleteCoffeeFromCartAction {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_CART,
    payload: coffeeId,
  }
}
