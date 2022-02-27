import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Button } from "@flyui/core"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlyUI Docs</title>
        <meta name="description" content="FlyUI Kit Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">FlyUI ✈️</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>{`happy coding />`}</code>
        </p>

        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find out about features and API.</p>
          </a>

          <a href="/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn how to build real-life apps!</p>
          </a>

          <a href="/learn" className={styles.card}>
            <div>
              <Button>Example Button</Button>
            </div>
          </a>
          
          <a href="/learn" className={styles.card}>
            <div>
              Example Card
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
