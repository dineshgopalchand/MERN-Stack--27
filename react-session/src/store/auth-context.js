import React from "react";
const initLoginState = {
    isLogin: false,
    loginToken: '',
    userDetails: {},
    userLoginHandler: (loginToken, userDetails) => { },
    userLogoutHandler: () => { }
};
const AuthContext = React.createContext(initLoginState);

export { AuthContext, initLoginState };


