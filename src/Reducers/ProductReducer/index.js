import { initialState } from "./initialState";
import * as ProductActionsConstants from '../../Actions/ProductActions/Constants/index';

export default function (state = initialState, action) {
  debugger;
  switch (action.type) {
    case ProductActionsConstants.getProducts:
      return {
        ...state,
        ProductScreen: {
          ...state.ProductScreen,
          ServiceCallStatus: {
            ...state.ProductScreen.ServiceCallStatus,
            loader: true
          }
        }
      };

    case ProductActionsConstants.getProductsSuccess:
      debugger;
      return {
        ...state,
        ProductScreen: {
          loader: false,
          ServiceCallStatus: initialState.ProductScreen.ServiceCallStatus,
          Products: action.payload
        }
      }

    case ProductActionsConstants.getProductsFail:
      return {
        ...state,
        ProductScreen: {
          ...state.ProductScreen,
          ServiceCallStatus: {
            Exception: action.payload.ServiceCallStatus.Exception,
            loader: false,
          }
        }

      }
    default: {
      return state;
    }
  }

}
