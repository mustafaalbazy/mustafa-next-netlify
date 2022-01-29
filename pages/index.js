import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mustafa Albazy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mustafa Albazy" />
        <p className="description">
          Welcome to my personal site. The site still under construction and hopefully will get ready within a month.
          <br />
          For now you can check my Arabic blog on https://www.albazy.com/
        </p>
      </main>

      <Footer />
    </div>
  )
}
