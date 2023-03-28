import axios from 'axios';

import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL,

  DO_LOGOUT
}from './actionType'

export function doLogin (loginData) {
  return { 
    type: DO_LOGIN,
    payload: loginData
  }
}

export function doLogout (){
  return{
    type: DO_LOGOUT
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

export function actionDoLogout() {
  return(dispatch)=>{
    dispatch(doLogout())
  }
}