import React from 'react'
import { useSelector } from 'react-redux'
import { GetServerSideProps } from 'next'

import Layout from 'components/Layout'
import MetaInfo from 'components/Layout/MetaInfo/index'

import { wrapper } from 'store/store'
import { loadGoodsThunk } from 'store/goods/thunks'
import { getGoodsItems } from 'store/goods/selectors'

import s from './styles.module.scss'

export default function Home({ meta }) {
  const { items } = useSelector((state) => ({
    items: getGoodsItems(state),
  }))

  return (
    <Layout>
      <MetaInfo {...meta} />
      <p className={s.test}>hello world</p>
    </Layout>
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
