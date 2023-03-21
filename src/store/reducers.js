import { combineReducers } from "redux";
import ProductsReducer from './posts/reducer'
import formValidation from "./auth/reducer";

const rootReducer = combineReducers ({
  ProductsReducer,
  formValidation
})

export default rootReducer;