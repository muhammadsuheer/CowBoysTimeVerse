import Head from 'next/head'
import Quiz from '../components/quiz/Quiz'
import Navbar from '../components/navbar/navbar'
export default function Quiz() {
  return (
    <div>
      <Head>
        <title>CowboysTimeverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Quiz
      />
    </div>
  )
}
