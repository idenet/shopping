//1. 向服务器端发送请求，告诉服务器将哪一个商品添加到购物车中
//2. 将商品添加到本地的购物车中

import { createAction } from 'redux-actions'

export const addProductToCart = createAction('addProductToCart')

export const addProductToLocalCart = createAction('addProductToLocalCart')

// 向服务器发送请求获取列表数据
export const loadCarts = createAction('loadCarts')

export const saveCarts = createAction('saveCarts')

export const deleteProductFromCart = createAction('deleteProductFromCart')

export const deletProductFromLocalCart = createAction(
  'deletProductFromLocalCart'
)

export const changeServersProductNumber = createAction(
  'changeServersProductNumber'
)

export const changeLocalProductNumber = createAction('changeLocalProductNumber')
