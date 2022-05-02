import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import Loading from '../../Loading/Loading';



const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    console.log(user);
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate("/home");
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="login-container">
                <div className="login-title">REGISTER</div>
                <form className="login-form" onSubmit={handleRegister}>
                    <input type="text" name='name' placeholder="Your name" />
                    <input type="email" name='email' placeholder="Your Email" />
                    <input type="password" name='password' placeholder="Your Password" />
                    <button>Login</button>
                    <p>Already have Account??
                        <Link to="/login">Please Login</Link></p>
                </form>
                <button>Google</button>
            </div>
        </div >
    );
};

export default Register;