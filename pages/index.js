import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Base.module.css'
import { motion } from 'framer-motion';

export default function Base() {
  return (
    <div className={styles.containerFs}>
      <Head>
        <title>vanssign | EXPLORE</title>
      </Head>
      <motion.figure layoutId="nextjsLogo" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <Image
          src="/nextjs.svg"
          alt="nextjs Logo"
          width={250}
          height={200}
        />
      </motion.figure>
      <Link href="/home">
        <motion.a className={styles.CTA}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >EXPLORE</motion.a></Link>

      <div className={styles.tag}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >DESIGN | DEVELOP | EXPERIENCE</motion.p>
      </div>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>Hosted at&nbsp;</motion.div>
      <motion.figure layoutId="vercelLogo" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <Image
          src="/vercel.svg"
          alt="vercel Logo"
          width={100}
          height={50}
        />
      </motion.figure>
    </div>
  )
}