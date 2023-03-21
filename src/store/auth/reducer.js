
import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL
}from './actionType'

const initialState = {
  loading: false,
  user: {},
  error:{
    message: ''
  }
}

export default function formValidation (state = initialState, action) {
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