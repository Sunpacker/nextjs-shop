import { createSelector } from '@reduxjs/toolkit'

export const getGoods = (state) => state.goods

export const getGoodsItems = createSelector(getGoods, ({ items }) => items)
