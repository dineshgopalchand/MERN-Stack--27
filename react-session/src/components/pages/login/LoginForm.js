import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './LoginForm.module.css';
const ACTION = {
    update_email: 'UPDATE_EMAIL_VALUE',
    update_password: 'UPDATE_PASSWORD_VALUE'
}
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

const loginFormReducer = (state, action) => {
    switch (action.type) {
        case ACTION.update_email:
            const emailVal = action.value;
            const emailErr = emailVal.match(emailRegex) == null ? true : false;
            return { ...state, email: { value: emailVal, error: emailErr } };

        case ACTION.update_password:
            const passVal = action.value;
            const passError = passVal.length === 0 ? true : false;
            return {
                ...state, password: {
                    value: passVal,
                    error: passError
                }
            }
        default:
            return state;
    }

};

const LoginForm = () => {
    const formInit = {
        email: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        }
    }
    const [formError, setFormError] = useState(true);
    const [loginForm, loginFormDispatch] = useReducer(loginFormReducer, formInit);


    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log({ email: loginForm.email.value, password: loginForm.password.value });
    }

    useEffect(() => {
        setFormError(loginForm.email.error || loginForm.password.error || loginForm.email.value === '' || loginForm.password.value === '')
    }, [loginForm.email.error, loginForm.password.error, loginForm.email.value, loginForm.password.value]);

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        name="email" className="form-control border border-primary"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={loginForm.email.value}
                        onChange={(event) => {
                            loginFormDispatch(
                                {
                                    type: ACTION.update_email,
                                    value: event.target.value.trim()
                                }
                            );
                        }} />
                    {loginForm.email.error && <p className={styles['error-msg']}>Email ID is not valid</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password"
                        className="form-control border border-primary"
                        value={loginForm.password.value}
                        id="exampleInputPassword1" onChange={(event) => {
                            loginFormDispatch(
                                {
                                    type: ACTION.update_password,
                                    value: event.target.value
                                }
                            );
                        }} />
                    {loginForm.password.error && <p className={styles['error-msg']}>please provide password</p>}
                </div>
                <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit" disabled={formError}>Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm