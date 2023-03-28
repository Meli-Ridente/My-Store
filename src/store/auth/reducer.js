
import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL
}from './actionType'

function conservarUser(){
  try{  
    return JSON.parse(localStorage.getItem("_user"))
  }catch(error){
    return {}
  }
}

const initialState = {
  loading: false,
  user: conservarUser(),
  error:{
    message: ''
  }
}

export default function FormValidation (state = initialState, action) {
  switch(action.type)
  {
    case DO_LOGIN:
      state = {...state, loading: true}
      break;
    
    case DO_LOGIN_OK:
        state = {...state, loading: false, user: action.payload}
        break;

    case DO_LOGIN_FAIL:
        state = {...state, loading: false, user:{}}
        break;

    default:
      break;
  }
  return state;
}