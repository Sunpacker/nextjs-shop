import React from 'react'
import { useSelector } from 'react-redux'
import { GetServerSideProps } from 'next'

import MetaInfo from 'components/Layout/MetaInfo'

import { wrapper } from 'store/store'
import { loadGoodsThunk } from 'store/goods/thunks'
import { getGoodsItems } from 'store/goods/selectors'

export default function Home({ meta }) {
  const { items } = useSelector((state) => ({
    items: getGoodsItems(state),
  }))

  return (
    <>
      <MetaInfo {...meta} />
      <p>hello world</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (): Promise<any> => {
    await store.dispatch(loadGoodsThunk())

    return {
      props: {
        meta: {
          title: 'home',
          description: 'home page',
        },
      },
    }
  })
