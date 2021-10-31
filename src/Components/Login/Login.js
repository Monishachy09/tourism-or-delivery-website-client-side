import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { allContext } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const Redirect = location?.state?.from;
    const { googleSignIn, signInWithEmail, getEmail, getPassword, error } = allContext;
    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1>Login</h1>
            <form onSubmit={signInWithEmail}>
                <div className="text_field">
                    <input onBlur={getEmail} type="text"  required />
                    <span></span>
                    <label>Enter Email</label>
                </div>
                <div className="text_field">
                    <input onBlur={getPassword} type="password"  required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass"><Link to="/reset">Forgot Password?</Link></div>
                <input  type="submit" value="Login" />
                <p className="text-center text-danger">{error}</p>

                <div className="signup_link">
                    Not a member? <Link to="/signUp">Signup</Link>
                    <h6>Login With </h6>
                    <i onClick={googleSignIn} style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} className="fab fa-google me-3"></i>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;