import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <motion.figure style={{ float: 'left' }}
                    layoutId="nextjsLogo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}>
                    <Image
                        src="/nextjs.svg"
                        alt="nextjs Logo"
                        width={100}
                        height={50}
                    />
                </motion.figure>
                <h1>
                    Under Construction <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <input></input>
                <br />
                <br />
                <button>Sign Up</button>
                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>HOME &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by
                    <motion.figure layoutId="vercelLogo" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        <Image
                            src="/vercel.svg"
                            alt="vercel Logo"
                            width={75}
                            height={75}
                        />
                    </motion.figure>
                </a>
            </footer>
        </div>
    )
}
