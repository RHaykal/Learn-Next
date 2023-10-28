import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirtsPost() {
  return (
    <Layout>
      <Head >
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First-post</h1>
      {/* <h2>
        <Link href="/">Back to Home</Link>
      </h2> */}
    </Layout>
  )
}
