import axios from 'axios'

import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_OK,
  GET_PRODUCTO,
  GET_PRODUCTO_OK,
  GET_PRODUCTO_FAIL
}from './actionType'

export function actionGetProducts() {
  return {
    type: GET_PRODUCTS
  }
}

export function actionGetProducto(productoId) {
  return {
    type: GET_PRODUCTO,
    payload: productoId
  }
}

export function actionGetProductsOk(products) {
  return {
    type: GET_PRODUCTS_OK,
    payload: products
  }
}

export function actionGetProductoOk(producto) {
  return {
    type: GET_PRODUCTO_OK,
    payload: producto
  }
}

export function actionGetProductsFail(error) {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error
  }
}

export function actionGetProductoFail(error) {
  return {
    type: GET_PRODUCTO_FAIL,
    payload: error
  }
}

export function getProducts(){
  return async (dispatch) =>{
    dispatch(actionGetProducts())

    try{
      const response = await axios.get('https://fakestoreapi.com/products?limit=20')
      dispatch(actionGetProductsOk(response.data))
    }catch(error){
      dispatch(actionGetProductsFail(error))
    }
  }
}

export function getProducto (productoId) {
  return async (dispatch) => {
    dispatch(actionGetProducto(productoId))

    try{
      const response = await axios.get(`https://fakestoreapi.com/products/${productoId}`)
      dispatch(actionGetProductoOk(response.data))
    }
    catch(error){
      dispatch(actionGetProductoFail(error))
    }
  }
}
