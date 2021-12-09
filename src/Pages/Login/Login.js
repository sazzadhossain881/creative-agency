import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { css } from "@emotion/react";
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeFirebase } from './HandleLogin';
import logo from '../../Images/logo.png';
import gLogo from '../../Images/gLogo.png';

initializeFirebase()
const initUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
}

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [userInfo, setUserInfo] = useState({ ...initUser });


    const override = css`
  display: block;
  margin: 0 auto;
  display:flex;
  color:#000;
`;

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                if (res.error) {
                    setUserInfo({ ...userInfo, errors: res })
                } else {
                    setUser({ ...res })
                    history.replace(from)
                }
            })
    }

    useEffect(() => {
        console.log('form login');
    }, [])

    if (user) {
        return <Redirect to='/' />
    }

    return (

        // <div className="google-sign-in mt-2 w-75" onClick={googleSignIn}>
        //     <span> Continue with google</span>
        // </div>
        <section id="login" className="container py-5 mt-5 text-center">
            <Link to="/">
                <img src={logo} alt="" width="150px" />
            </Link>
            <h1 className="text-warning mt-5"><b>Please Sign in First</b></h1>
            <button onClick={googleSignIn} className="mt-5 btn btn-light shadow border rounded-pill px-3">
                <img src={gLogo} alt="" width="30px" className="mb-1 mr-2" />
                <span>Sign in with Google</span>
            </button>
            <h6 className="mt-3">Don't have an account?<button onClick={googleSignIn} className="btn btn-link mb-2">Create an account</button></h6>
        </section>

    );
};

export default Login;