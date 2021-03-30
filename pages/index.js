import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Base.module.css'

export default function Base() {
  return (
    <div className={styles.containerFs}>
      <Head>
        <title>vanssign | EXPLORE</title>
      </Head>
      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={250}
          height={200}
        />
      </div>
      <Link href="/home">
        <a className={styles.CTA}>EXPLORE</a></Link>

      <div className={styles.tag}>
        <p>DESIGN | DEVELOP | EXPERIENCE</p>
      </div>
      <div>Developed in&nbsp;</div>
      <div>
        <Image
          src="/nextjs.svg"
          alt="Nextjs Logo"
          width={100}
          height={50}
        />
      </div>
    </div>
  )
}