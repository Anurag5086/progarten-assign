import styles from "./styles/comingSoon.module.css"
import {useState} from 'react'

export default function ComingSoonBody(){
    const [email,setEmail] = useState("");

    const handleSubmit = (e) => {
        let emailUser = email;
        console.log(emailUser);
        const res = fetch('http://localhost:3000/api/emailSubscribe',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: emailUser
                }
            )
        });
        e.preventDefault();
        setEmail("");
    }
    return(
        <>
            <div className={styles.container}>
                <img src="/Coming Soon.svg" alt="" width="55%" className={styles.image}/>

                <div className={styles.sideText}>
                    <h1 className={styles.topText}>We are launching soon</h1>
                    <p className={styles.middleText}>India's first Clinical Career Counselling initiative</p>
                    <br/>
                    <p className={styles.bottomText}>Book your free session today with us</p>

                    <form onSubmit={e => {handleSubmit(e)}}>
                        <input type="email" placeholder="Email" className={styles.emailField} value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="submit" className={styles.subsButton} value="Subscribe" />
                    </form>
                </div>
            </div>

        </>
    )
}