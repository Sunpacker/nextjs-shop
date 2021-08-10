import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from 'store/store'

import 'assets/styles/index.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(WrappedApp)
