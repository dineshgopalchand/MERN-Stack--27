import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './LoginForm.module.css';
const ACTION = {
    update_email: 'UPDATE_EMAIL_VALUE'
}

const emailReducer = (state, action) => {
    switch (action.type) {
        case ACTION.update_email:
            return action.value;
        default:
            return state;
    }
}

const LoginForm = () => {
    // const [emailVal, setEmailVal] = useState('');
    const [emailVal, emailDispatch] = useReducer(emailReducer, '');
    const [passwordVal, setPasswordVal] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);




    const emailChangeHandler = (e) => {
        const emailValue = e.target.value.trim();
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        setEmailError(emailValue.match(emailRegex) == null ? true : false);

        console.log(emailValue);
        emailDispatch(
            {
                type: ACTION.update_email,
                value: emailValue
            }
        );
    }
    const passwordChangeHandler = (e) => {
        const passVal = e.target.value.trim();
        console.log(passVal);
        setPasswordError(passVal.length === 0 ? true : false);
        setPasswordVal(passVal);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log({ emailVal, passwordVal });
    }

    useEffect(() => {
        console.log('useEffect with no dep');
    })
    useEffect(() => {
        console.log('error changed');
        console.log({ emailError, passwordError });
    }, [emailError, passwordError]);
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        name="email" className="form-control border border-primary"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={emailVal}
                        onChange={emailChangeHandler} />
                    {emailError && <p className={styles['error-msg']}>Email ID is not valid</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password"
                        className="form-control border border-primary"
                        value={passwordVal}
                        id="exampleInputPassword1" onChange={passwordChangeHandler} />
                    {passwordError && <p className={styles['error-msg']}>please provide password</p>}
                </div>
                <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit" disabled={(emailError || passwordError) ? true : false}>Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm