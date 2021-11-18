import { takeEvery, put } from 'redux-saga/effects'
import {
  changeLocalProductNumber,
  changeServersProductNumber,
  deletProductFromLocalCart,
  deleteProductFromCart,
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
} from '../actions/cart.actions'
import axios from 'axios'

function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', {
    gid: action.payload,
  })
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts() {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart(action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload,
    },
  })
  yield put(deletProductFromLocalCart(data.index))
}

function* handleChangeServersProductNumber(action) {
  const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  yield put(changeLocalProductNumber(data))
}

export default function* cartSaga() {
  // 将商品添加到购物车种
  yield takeEvery(addProductToCart, handleAddProductToCart)
  yield takeEvery(loadCarts, handleLoadCarts)
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  yield takeEvery(changeServersProductNumber, handleChangeServersProductNumber)
}
