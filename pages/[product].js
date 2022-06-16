import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {
    const {
        query: { product },
    } = useRouter();

    return (
        <div className={styles.detailContainer}>
            <motion.img
                layoutId={product}
                className={styles["big-image"]}
                src={product + ".jpg"}
                alt={product}
            />

            <div className={styles.content}>
                <h1 className={styles.headText}>{product?.toUpperCase()}</h1>
                <p className={styles.text}>
                    <p className={styles.highlight}>{product?.toUpperCase()}</p>{" "}
                    is one of the premium products in our store.
                </p>
                <Link href="/">
                    <button className={styles.backBtn}>Back</button>
                </Link>
            </div>
        </div>
    );
}
