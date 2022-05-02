import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="login-title">LOGIN</div>
                <form className="login-form">
                    <input type="text" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <button>Login</button>
                    <p>Don't have an Account?
                        <Link to="/register">Sign up First</Link></p>
                </form>
                <button>Google</button>
            </div>
        </div>
    );
};

export default Login;