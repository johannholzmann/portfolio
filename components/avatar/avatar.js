
import Image from 'next/image'
import styles from "./avatar.module.css";

export default function Avatar() {
    let width = 1447;
    let height = 1786;

    width = 176;
    height = 176;
    width = 200;
    height = 200;
    return (
        <Image src="/avatar.png" alt="Vercel Logo" width={width} height={height} className={styles.avatar_image}  />
    );
}