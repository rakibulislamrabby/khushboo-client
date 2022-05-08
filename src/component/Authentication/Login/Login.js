import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase_init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passRef = useRef("");
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //Reset password hooks
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorShow;
    if (error) {
        errorShow = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    // if (!user) {
    //     alert("Dont match")
    // }

    //reset password
    const resetPassword = () => {
        const email = emailRef.current.value;
        console.log("email", email);
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast("please enter your email")
        }
        navigate("/login")
    }

    return (

        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleSubmit} className="login-form">
                <input ref={emailRef} type="text" placeholder="Your Email" />
                <input ref={passRef} type="password" placeholder="Your Password" />
                {errorShow}
                <button type='submit' className='button'>Login</button>
                <p>New to Khushboo??
                    <Link to="/register">Sign up First</Link></p>
            </form>
            <p>Forgate PassWord? <button className='btn btn-link text-success text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>

    );
};

export default Login;