import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const DynamicComponent = dynamic(() => import('@/components/DynamicComponent'))
const DynamicComponent2 = dynamic(() => import('../../../react/dynamic-comp/MyComp'), {
  loading: () => <p>Loading...</p>,
})  


export default function Home() {

  const [dynamicComp, setDynamicComp] = useState(false);
  const clickHandler = () => {
    // setDynamicComp(true)
    setDynamicComp(true)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello World</h1>
        {/* <DynamicComponent2 /> */}
        <button onClick={clickHandler}>Click to add a dynamic component</button>
        {dynamicComp && <DynamicComponent />}
      </main>
    </>
  )
}
