import React from 'react';
import styles from './Login.module.css';



function Login() {
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.greeting}>
                <p>Welcome to bookTracker! </p>
            </div>
        <div className={styles.button}>
            <button>Login with NEAR</button>
            {/* <Button sx={{
                backgroundColor: "blue",
                color: "white",
            }}
            >Login with NEAR</Button> */}
        </div>
        </div>
    )
}

export default Login
