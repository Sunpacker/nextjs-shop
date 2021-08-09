import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGoods } from 'api/rest/goods'

export const loadGoodsThunk = createAsyncThunk(
  'goods/getAll',
  async (_, thunkAPI) => {
    const res = await fetchGoods()
    if (res.data.error) return { items: {} }
    return res.data
  }
)
