import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, initLoginState } from "./auth-context";

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
    return (
        <AuthContext.Provider
            value={{ ...loginDetails, userLoginHandler, userLogoutHandler }}>
            {props.children}
        </AuthContext.Provider>
    );


};
const RequireAuth = ({ children }) => {
    const { isLogin } = useAuth();
    const location=useLocation();
    // console.log(location);
    const {pathname}=location;
    return isLogin === true ? children : <Navigate to={`/login${pathname?'?ref='+pathname:''}`} />;
}
const NoLoggedInAuth = ({ children }) => {
    const { isLogin } = useAuth();
    return isLogin !== true ? children : <Navigate to={`/user`} />;
}
const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, RequireAuth, useAuth, NoLoggedInAuth };


