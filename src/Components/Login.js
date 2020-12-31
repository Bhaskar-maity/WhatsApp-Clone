import React from 'react'
import { Button } from "@material-ui/core";
import { authentication, provider } from "../firebase";

import "./Login.css";
function Login() {

    const signIn = () => {
        authentication.signInWithPopup(provider)
        .then((res) => console.log(res))
        .catch((err) => alert(err.message))
        
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img
                alt="whats app logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png"
                />
                <div className="login__text">
                <h1>Welcome To WhatsApp Clone</h1>
                </div>

                <Button onClick={signIn}>SignIn with Google</Button>
                
            </div>
            
        </div>
    )
}

export default Login
