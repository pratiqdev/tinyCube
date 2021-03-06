
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/redux/store'
import { increment, decrement, incrementByAmount } from '../lib/redux/counter'
import styles from '../styles/Home.module.css'
import useSlice from '../lib/redux/useSlice'

const Home: NextPage = () => {
  const { dispatch, count } = useSlice('counter')

  return (
    <div className={styles.container}>
      <Head>
        <title>tinyCube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          <a href="https://nextjs.org">tinyCube</a>
        </h1>

        <p>Count: {count}</p>

        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>


    </div>
  )
}

export default Home
