import Head from 'next/head'
import utilStyles from '../components/layout.module.css'
import Image from 'next/image'

export default function Custom404() {
  return (
    <Layout>
      <Head>404 - Page Not Found</Head>
      <h1 className={utilStyles.heading2Xl}>Page Not Found :(</h1>
    </Layout>
  )
}