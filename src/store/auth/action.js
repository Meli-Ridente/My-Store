import axios from 'axios';

import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL,
  DO_LOGIN_OUT
}from './actionType'

export function doLogin (loginData) {
  return { 
    type: DO_LOGIN,
    payload: loginData
  }
}

export function doLoginOk (userData){
  return {
    type: DO_LOGIN_OK,
    payload: userData
  }
}

export function doLoginFail (error){
  return{
    type: DO_LOGIN_FAIL,
    payload: error
  }
}

// export function doLoginOut (){
//   return{
//     type: DO_LOGIN_FAIL,
//     payload: 
//   }
// }

export function doLoginUser(userData){
  return async(dispatch)=>{
    try{
      dispatch(doLogin(userData))

      const response = await axios.post('https://dummyjson.com/auth/login', userData)
      dispatch(doLoginOk(response.data))
    }catch(error){
      dispatch(doLoginFail(error))
    }
  }
}

// export function doLoginOut () {
//   return async(dispatch)=>{

//   }
// }