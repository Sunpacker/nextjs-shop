import Head from 'next/head'

export default function MetaInfo({ title = '', description, children }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/*<meta property="og:url" content="" />*/}
      {/*<meta property="og:site_name" content="" />*/}
      {/*<meta property="og:type" content="website" />*/}
      {/*<meta property="og:image" content="/assets/img/logo_og.jpg" />*/}
      {children}
    </Head>
  )
}
