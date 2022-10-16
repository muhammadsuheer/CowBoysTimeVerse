import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import StoriesCard from '../components/storiesCard/storiesCard'
export default function Stories() {
  return (
    <div>
      <Head>
        <title>CowBoys --- Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <StoriesCard/>
    </div>
  )
}
