import * as BasketActionsConstants from '../../Actions/BasketActions/Constants/index'
import { initialState } from "./initialState";


export default function (state = initialState, action) {
  switch (action.type) {
    // case BasketActionsConstants.addProductToBasket: {
    //   return {
    //     ...state,
    //     BasketScreen: {
    //       ...state.BasketScreen,
    //       BasketProducts: action.payload,
    //     }
    //   }
    // }
    // case BasketActionsConstants.addProductToBasketSuccess: {
    //   return {
    //     ...state,
    //     BasketScreen: {
    //       ...state.BasketScreen,
    //       BasketProducts: action.payload,
    //     }
    //   }
    // }
    // case BasketActionsConstants.addProductToBasketFail: {
    //   return {
    //     ...state,
    //     BasketScreen: {
    //       ...state.BasketScreen,
    //       ServiceCallStatus: action.payload.ServiceCallStatus
    //     }
    //   }
    // }

    case BasketActionsConstants.getBasketProducts: {
      debugger;
      return {
        ...state,
        BasketScreen: {
          ...state.BasketScreen,
        }
      }
    }
    case BasketActionsConstants.getBasketProductsSuccess: {
      return {
        ...state,
        BasketScreen: {
          ...state.BasketScreen,
          BasketProducts: action.payload,
        }
      }
    }
    case BasketActionsConstants.getBasketProductsFail: {
      return {
        ...state,
        BasketScreen: {
          ...state.BasketScreen,
          ServiceCallStatus: action.payload.ServiceCallStatus
        }
      }
    }
    default: {
      return state
    }
  }
}