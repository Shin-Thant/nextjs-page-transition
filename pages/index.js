import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Head>
                <title>Page Transition</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className={styles.container}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layoutId="header"
                    className={styles.headText}
                >
                    Next Store
                </motion.h1>

                <div className={styles["product-container"]}>
                    {["camera", "nike", "headphone"].map((item) => (
                        <Link key={item} href={item}>
                            <div className={styles.imgContainer}>
                                <motion.img
                                    layoutId={item}
                                    animate={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className={styles.image}
                                    src={item + ".jpg"}
                                    alt={item}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
