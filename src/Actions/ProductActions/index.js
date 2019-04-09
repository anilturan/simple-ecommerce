import * as ProductConstants from './Constants/index';

export const getProducts = () => {
  debugger;
  return {
    type: ProductConstants.getProducts,
  }
}
export const getProductsSuccess = (payload) => {
  debugger;
  return {
    type: ProductConstants.getProductsSuccess,
    payload,

  }
}
export const getProductsFail = (payload) => {
  return {
    type: ProductConstants.getProductsFail,
    payload
  }
}
