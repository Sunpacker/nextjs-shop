import { FC } from 'react'
import clsx from 'clsx'

import Header from 'components/Layout//Header'
import Footer from 'components/Layout/Footer'

import style from './styles.module.scss'

interface Props {
  className?: string
  children: any
}

const Layout: FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(style.container, className)}>
      <Header />
      <div className={style.body}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
