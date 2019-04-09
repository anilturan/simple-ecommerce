import * as BasketActionsConstants from './Constants/index';

export const addProductToBasket = (payload) => {
  debugger;
  return {
    type: BasketActionsConstants.addProductToBasket,
  }
}
export const addProductToBasketSuccess = (payload) => {
  debugger;
  return {
    type: BasketActionsConstants.addProductToBasketSuccess,
    payload,

  }
}
export const addProductToBasketFail = (payload) => {
  return {
    type: BasketActionsConstants.addProductToBasketFail,
    payload
  }
}
//Basket'e eklenmiş ürünleri getiren reducerlar
export const getBasketProducts = () => {
  debugger;
  return {
    type: BasketActionsConstants.getBasketProducts,
  }
}
export const getBasketProductsSuccess = (payload) => {
  debugger;
  return {
    type: BasketActionsConstants.getBasketProductsSuccess,
    payload,

  }
}
export const getBasketProductsFail = (payload) => {
  return {
    type: BasketActionsConstants.getBasketProductsFail,
    payload
  }
}
