import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from './../actions/product.actions'
import axios from 'axios'

function* handleLoadProducts() {
  // 加载商品列表
  const { data } = yield axios.get('http://localhost:3005/goods')
  // 将商品列表保存到本地的localstorage中
  yield put(saveProducts(data))
}

export default function* productSaga() {
  yield takeEvery(loadProducts, handleLoadProducts)
}
