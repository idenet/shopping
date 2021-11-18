import { handleActions as createReducer } from 'redux-actions'
import {
  addProductToLocalCart,
  saveCarts,
  deletProductFromLocalCart,
  changeLocalProductNumber,
} from '../actions/cart.actions'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find((product) => product.id === action.payload.id)
  if (product) {
    product.count = product.count + 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeletProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find((product) => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer(
  {
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]: handleSaveCarts,
    [deletProductFromLocalCart]: handleDeletProductFromLocalCart,
    [changeLocalProductNumber]: handleChangeLocalProductNumber,
  },
  initialState
)
