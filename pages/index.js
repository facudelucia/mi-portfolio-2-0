import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Facundo De Lucia</title>
        <meta name="description" content="Facundo De Lucia" />
        {/* <link rel="icon" href="/logo.png" /> */}
      </Head>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
