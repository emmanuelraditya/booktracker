import React,{ useEffect,useState } from 'react';
import { CircularProgress,Box } from "@mui/material";
import styles from './Login.module.css';
import { Link } from "react-router-dom";



function Login() {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    return (
        <>
        {loading ? (
            <div className="loadingBg">
            <Box sx={{ display: "flex", paddingLeft:"100px", paddingTop:"350px",fill: "white" }}>
              <CircularProgress loading={loading} />
              <p>Now Loading</p>
            </Box>
            </div>
          ) : (
        <div className={styles.loginWrapper}>
            <div className={styles.greeting}>
                <p>Welcome to bookTracker! </p>
            </div>
        <div className={styles.button}>
            <Link to="/home">
            <button>Login with NEAR</button>
            </Link>
            {/* <Button sx={{
                backgroundColor: "blue",
                color: "white",
            }}
            >Login with NEAR</Button> */}
        </div>
        </div>
          )}
        </>
    )
}

export default Login
