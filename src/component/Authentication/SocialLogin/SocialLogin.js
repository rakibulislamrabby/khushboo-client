import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase_init';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    let errorShow;
    if (error) {
        errorShow = <div>
            <p>Error: {error?.message}</p>
        </div>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {errorShow}
            <button onClick={() => signInWithGoogle()} className='button'>Sign in With Google</button>
        </div>
    );
};

export default SocialLogin;