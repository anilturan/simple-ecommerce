import {
  all,
  call,
  put,
  takeLatest
} from "redux-saga/effects";
import * as ProductActions from '../../Actions/ProductActions/index'
import * as ProductActionsConstants from '../../Actions/ProductActions/Constants/index';
import * as BasketActions from '../../Actions/BasketActions/index'
import * as BasketActionsConstants from '../../Actions/BasketActions/Constants/index';
import { defaultServiceError } from '../../Utils/StaticServiceErrorMessage';
import MockApi from '../../Services/MockApi.js';

export function* getProducts() {
  debugger;
  let response = "";
  try {
    response = yield MockApi.getProducts();
    if (response &&
      response.status &&
      response.status === 200) {
      yield put(ProductActions.getProductsSuccess(response.data.products))
    } else {
      yield put(ProductActions.getProductsFail(defaultServiceError()))
    }
  } catch (error) {
    yield put(ProductActions.getProductsFail(defaultServiceError()))
  }
}


export function* getBasketProducts() {
  debugger;
  let response = "";
  try {
    response = yield MockApi.getBasketProduct();
    if (response &&
      response.status &&
      response.status === 200) {
      yield put(BasketActions.getBasketProductsSuccess(response.data.products))
    } else {
      yield put(BasketActions.getBasketProductsFail(defaultServiceError()))
    }
  } catch (error) {
    yield put(BasketActions.getBasketProductsFail(defaultServiceError()))
  }
}

export function* addProductToBasket() {
  debugger;
  let response = "";
  try {
    response = yield MockApi.getBasketProduct();
    if (response &&
      response.status &&
      response.status === 200) {
      yield put(BasketActions.addProductToBasketSuccess(response.data.products))
    } else {
      yield put(BasketActions.getBasketProductsFail(defaultServiceError()))
    }
  } catch (error) {
    yield put(BasketActions.getBasketProductsFail(defaultServiceError()))
  }
}
export default function* ProductSagas(api) {
  yield all([
    takeLatest(ProductActionsConstants.getProducts,
      getProducts,
      api),
    takeLatest(BasketActionsConstants.getBasketProducts,
      getBasketProducts,
      api),
  ]);
}