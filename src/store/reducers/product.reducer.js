import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../actions/product.actions'

const initialState = []

const handleSaveproducts = (state, action) => action.payload

export default createReducer(
  {
    // 将商品列表数据保存到本地中
    [saveProducts]: handleSaveproducts,
  },
  initialState
)
