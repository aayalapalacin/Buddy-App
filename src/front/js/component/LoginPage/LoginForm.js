import React from 'react'
import './login.css'
const LoginForm = () => {
    return (
        <>
            <div className="inputs">
                <form>
                    <label>
                        <input
                            className="username"
                            type="text"
                            name="name"
                            placeholder="Username"
                        />
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="password"
                            type="text"
                            name="name"
                            placeholder="Password"
                        />
                    </label>
                </form>
                <br></br>
                <a href="/">Forgot Password?</a>
            </div>
            <button className="login-button">Login</button>
            <button className="account-button">Create a new account</button>
        </>
    )
}

export default LoginForm