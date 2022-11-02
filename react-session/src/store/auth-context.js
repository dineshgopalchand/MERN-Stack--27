import React, { useEffect, useState } from "react";
const initLoginState = {
    isLogin: false,
    loginToken: '',
    userDetails: {},
    userLoginHandler: (loginToken, userDetails) => { },
    userLogoutHandler: () => { }
};
const AuthContext = React.createContext(initLoginState);

const AuthProvider = (props) => {
    const [loginDetails, setLoginDetails] = useState(initLoginState);
    useEffect(() => {
        const loginToken = window.localStorage.getItem('login_token');
        const userDetails = window.localStorage.getItem('user_details');
        userLoginHandler(loginToken, JSON.parse(userDetails));
    }, []);

    const userLoginHandler = (loginToken, userDetails) => {
        if (userDetails?.name && loginToken) {
            window.localStorage.setItem('login_token', loginToken);
            window.localStorage.setItem('user_details', JSON.stringify(userDetails));
            setLoginDetails(() => {
                return { isLogin: true, loginToken, userDetails };
            });
        } else {
            userLogoutHandler();
        }
    }
    const userLogoutHandler = () => {
        window.localStorage.removeItem('login_token');
        window.localStorage.removeItem('user_details');
        setLoginDetails(() => initLoginState);
    }
    return <AuthContext.Provider value={{ ...loginDetails, userLoginHandler, userLogoutHandler }}>
        {props.children}
    </AuthContext.Provider>


};

export { AuthContext, initLoginState, AuthProvider };


