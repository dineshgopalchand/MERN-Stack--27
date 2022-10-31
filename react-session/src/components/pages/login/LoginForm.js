import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../UI/loader/Loader';
import styles from './LoginForm.module.css';
const ACTION = {
    update_email: 'UPDATE_EMAIL_VALUE',
    update_password: 'UPDATE_PASSWORD_VALUE',
    update_loader: 'UPDATE_LOADER_STATUS'
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
        case ACTION.update_loader:
            return { ...state, formloader: action.value };
        default:
            return state;
    }

};

const LoginForm = (props) => {
    const loginHandler=props.onLogin;
    const formInit = {
        email: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        },
        formloader: false
    }
    const [formError, setFormError] = useState({
        error: true, message: ''
    });
    const [loginForm, loginFormDispatch] = useReducer(loginFormReducer, formInit);

    const validateSignIn = async (email, password) => {
        // Login API call replication 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'dinesh@gmail.com' && password === 'pass123') {
                    resolve({
                        successType: 'success',
                        statusCode: 10,
                        method: 'User login',
                        userDetails: {
                            name: 'Dinesh',
                            email: 'dinesh@gmail.com',
                            location: 'BLR'
                        },
                        token:'fww3324asdfsadasdss',
                        message: 'user login susccessfull'
                    });

                } else {
                    resolve({
                        successType: 'fail',
                        statusCode: 11,
                        method: 'User login',
                        message: 'email/password is incorrect'
                    });
                }
            }, 3000);
        });

    }
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        console.log({ email, password });
        // Rest api call to validate username/password
        loginFormDispatch({
            type: ACTION.update_loader,
            value: true
        });
        const response = await validateSignIn(email, password);
        loginFormDispatch({
            type: ACTION.update_loader,
            value: false
        });
        console.log(response);
        if (response.statusCode === 11) { // error
            setFormError({
                error: true,
                message: response.message
            });
        }
        if (response.statusCode === 10) { // successfull
            loginHandler(response.token,response.userDetails)
            setFormError({
                error: false,
                message: response.message
            });
        }

    }

    useEffect(() => {
        setFormError({
            message: '',
            error: loginForm.email.error ||
                loginForm.password.error ||
                loginForm.email.value === '' ||
                loginForm.password.value === ''
        });
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
                    <button className="btn btn-primary " type="submit" disabled={formError.error}>Login </button>
                    {loginForm.formloader && <Loader />}
                    <p style={{ color: formError.error ? 'red' : 'green', fontSize: '0.8rem' }}>{formError.message}</p>
                </div>
            </form>
        </>
    )
}

export default LoginForm