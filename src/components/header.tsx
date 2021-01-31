import styles from "./styles/style.module.css"

export default function Header() {
    return(
        <>
            <div className={styles.container}>
                <img src="/Logo_png.png" alt="" className={styles.header_img}/>
                <div className={styles.social_media}>
                    <img src="/facebook.svg" alt="" width="30px"/>
                    <img src="/instagram.svg" alt="" width="30px"/>
                    <img src="/linkedin.svg" alt="" width="30px"/>
                </div>
            </div>

        </>
    )
}