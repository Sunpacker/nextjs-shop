import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { LOADING_STATUS } from 'constants/loadingStatus'

import { loadGoodsThunk } from './thunks'
import { IGood } from './types'

interface IStateGoods {
  loadingStatus: LOADING_STATUS
  items: IGood[]
}

const initialState: IStateGoods = {
  loadingStatus: LOADING_STATUS.IDLE,
  items: [
    {
      name: 'gfdg',
      price: 1,
      image: '',
    },
  ],
}

export const adapter = createEntityAdapter()

export const goods = createSlice({
  name: 'goods',
  initialState: adapter.getInitialState(initialState),
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(loadGoodsThunk.pending, (state) => {
      state.loadingStatus = LOADING_STATUS.LOADING
    })
    addCase(loadGoodsThunk.fulfilled, (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.IDLE
      state.items = payload
    })
    // [HYDRATE]: (state, { payload }) => {
    //   return payload.goods
    // },
    // [loadGoodsThunk.pending]: (state) => {
    //   state.loadingStatus = LOADING_STATUS.LOADING
    // },
    // [loadGoodsThunk.fulfilled]: (state, { payload }) => {
    //   state.loadingStatus = LOADING_STATUS.IDLE
    //   state.items = payload
    // },
  },
})

export default goods.reducer
