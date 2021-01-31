import styles from "./styles/style.module.css"

export default function Footer() {
    const contactNumber = "+91 89203 40443";
    return(
        <>
            <div className={styles.container_footer}>
                <div className={styles.contact}>
                    <img src="/whatsapp.svg" alt="" width="25px"/>
                    <img src="/phone.svg" alt="" width="25px" height="25px"/>
                    <h3 className={styles.contact_text}>{contactNumber}</h3>
                </div>
            </div>

        </>
    )
}