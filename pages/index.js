import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/top-bar/top'
import Foot from '../components/footer/foot'
import styles from '../styles/Home.module.css'
import MyImage from './image'

export default function Home() {
  return (

      <div> 
      <MyImage /> 
      <Top />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome To Career Site.
        </h1>
          {/* <div className={styles.servicesbox}>
          <Link href="/services">
            <a className={styles.card}>
              <h2>Services card &rarr;</h2>
              <p>This is Services page for visit</p>
            </a>
          </Link>
          </div> */}
          <div className={styles.productsbox}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>Products card &rarr;</h2>
              <p>This is Products page for visit</p>
            </a>
          </Link>
          </div>
          <div className={styles.servicesbox}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>Services card &rarr;</h2>
              <p>This is Products page for visit</p>
            </a>
          </Link>
          </div>
      </main>
      <Foot />

      </div>

  )
}
