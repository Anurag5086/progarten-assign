import styles from "./styles/comingSoon.module.css"
import {useState} from 'react'

export default function ComingSoonBody(){
    const [email,setEmail] = useState("");
    const [result1, setResult1] = useState({});
    const [msg, setMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        let emailUser = email;
        console.log(emailUser);
        const res = await fetch('https://progarten-assign.vercel.app/api/emailSubscribe',{
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

            if(res.status == 200){
                setMsg("Thank your for Subscribing!")
            }else{
                setMsg(`Error ${res.json()}`)
            }

            
       
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
                        <input type="submit" className={styles.subsButton} value="Subscribe"/>
                    </form>
                    <p>{msg}</p>
                </div>
            </div>

        </>
    )
}