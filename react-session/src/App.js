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
import { AuthContext } from './store/auth-context';
import { useContext } from "react";
import ContactForm from "./components/pages/contact-form/ContactForm";


const App = () => {
  const authCtx = useContext(AuthContext);
  const { isLogin } = authCtx;
  // console.log(loginDetails)
  return (
    <Card className="vh-100 overflow-auto">
      <Card.Header className="p-0 main-header">
        <Header />
      </Card.Header>
      <Card.Body className="p-0">
          {isLogin ? (
            <>
              {/* <Home /> */}
              {/* <TodoList /> */}
              {/* <Contact /> */}
              {/* <Post /> */}
              <ContactForm />
            </>
          ) : (
            <>
              <Login />
            </>
          )}
      </Card.Body>
      <Card.Footer className="p-0 mt-3">
        <Footer />
      </Card.Footer>
    </Card>

  );
}

export default App;
