import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import NavBar from '../../components/navbar'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <NavBar />
        <Container></Container>
      </Layout>
    </>
  )
}

export default Index