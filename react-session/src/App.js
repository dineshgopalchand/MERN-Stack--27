import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Post from "./components/pages/post/Post";
import TodoList from "./components/pages/todoList/TodoList";
import './App.css';
import { AuthContext, initLoginState } from './store/auth-context';


const App = () => {
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
  // console.log(loginDetails)
  return (
    <AuthContext.Provider value={{ ...loginDetails, userLoginHandler, userLogoutHandler }}>
      <AuthContext.Consumer>
        {(authCtx) => {
          const { isLogin } = authCtx;
          return <Card className="vh-100 overflow-auto">
            <Card.Header className="p-0 main-header">
              <Header loginDetails={loginDetails} onLogout={userLogoutHandler} />
            </Card.Header>
            <Card.Body className="p-0">
              {isLogin ? (
                <>
                  {/* <Home /> */}
                  <TodoList />
                  {/* <Contact /> */}
                  {/* <Post /> */}</>
              ) : (
                <>
                  <Login onLogin={userLoginHandler} />
                </>
              )}

            </Card.Body>
            <Card.Footer className="p-0 mt-3">
              <Footer />
            </Card.Footer>
          </Card>
        }

        }

      </AuthContext.Consumer>
    </AuthContext.Provider>
  );
}

export default App;
