import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const json = JSON.stringify(store.getState().FormValidation.user)
  localStorage.setItem("_user", json)
})

export default store;