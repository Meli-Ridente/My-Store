import { combineReducers } from "redux";
import ProductsReducer from './posts/reducer'
import FormValidation from "./auth/reducer";

const rootReducer = combineReducers ({
  ProductsReducer,
  FormValidation
})

export default rootReducer;