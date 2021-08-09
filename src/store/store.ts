import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import goods from 'store/goods/slice'

const makeStore = (context) =>
  configureStore({
    // preloadedState: false,
    devTools: process.env.NODE_ENV === 'development',
    reducer: {
      goods,
    },
  })

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})
