import React from 'react';
import './Login.css'

const Reset = () => {
    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1>Reset Password</h1>
            <form>
                <div className="text_field">
                    <input type="text"  required />
                    <span></span>
                    <label>current password</label>
                </div>
                <div className="text_field">
                    <input type="password"  required />
                    <span></span>
                    <label>New Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
    );
};

export default Reset;