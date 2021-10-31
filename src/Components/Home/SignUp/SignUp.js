import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { allContext } = useAuth();
    const { signUp, getEmail, getPassword, getName, error } = allContext;
    return (
        <div>
            <div className="login-form">
        <div className="center mt-5">
            <h1>SignUp</h1>
            <form onSubmit={signUp}>
                <div className="text_field">
                    <input onBlur={getName} type="text"  required />
                   <span></span>
                    <label>Your Name</label>
                </div>
                <div className="text_field">
                    <input onBlur={getEmail} type="email"  required />
                   <span></span>
                    <label>Email Address</label>
                </div>
                <div className="text_field">
                    <input onBlur={getPassword} type="Password" required />
                   <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="SignUp" />
                <p className="text-center text-danger">{error}</p>
                <div className="signup_link">
                   Have a Account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default SignUp;