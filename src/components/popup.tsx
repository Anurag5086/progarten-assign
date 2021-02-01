import styles from './styles/popup.module.css'

export default function Popup(){
    return(
        <>

        <div className={styles.box}>
            <a className={styles.button} href="#popup1">Let me Pop up</a>
        </div>
        <div id="popup1" className={styles.overlay}>
            <div className={styles.popup}>
                <h2>Here i am</h2>
                <a className={styles.close} href="#">&times;</a>
                <div className={styles.content}>
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
            </div>
        </div>

        </>


    )
}