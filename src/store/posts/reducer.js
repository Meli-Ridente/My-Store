import { act } from 'react-dom/test-utils'
import{
  GET_PRODUCTO,
  GET_PRODUCTO_OK,
  GET_PRODUCTO_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_OK
}from './actionType'

const initialState = {
  products: [],
  loadingProducts: false,
  producto: {},
  loadingProducto: false,
  error: {
    message: ''
  }
}

export default function ProductsReducer(state= initialState, action){
    switch (action.type) {
      case GET_PRODUCTS:
        state = {...state, loadingProducts: true}
        break
      
      case GET_PRODUCTS_OK:
        state = {...state, loadingProducts: false, products: action.payload}
        break

      case GET_PRODUCTS_FAIL:
        state = {...state, loadingProducts: false, products: [], error: {message: action.payload}}
        break
    
      case GET_PRODUCTO:
        state = {...state, loadingProducto: true}
        break

      case GET_PRODUCTO_OK:
        state = {...state, loadingProducto: false, producto: action.payload}
        break

      case GET_PRODUCTO_FAIL:
        state = {...state, loadingProducto: false, producto: {}}
        break


      default:
        break
    }
  return state;
}