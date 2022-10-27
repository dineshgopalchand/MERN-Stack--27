import React from "react";
import { Card } from "react-bootstrap";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import  Login  from "./components/pages/login/Login";
import Post from "./components/pages/post/Post";
import TodoList from "./components/pages/todoList/TodoList";
const App = () => {
  return (
    <Card style={{ minHeight: '100vh' }}>
      <Card.Header className="p-0">
        <Header />
      </Card.Header>
      <Card.Body className="p-0">
        {/* <Home /> */}
        {/* <TodoList /> */}
        {/* <Contact /> */}
        {/* <Post /> */}
        <Login />
      </Card.Body>
      <Card.Footer className="p-0 mt-3">
        <Footer />
      </Card.Footer>
    </Card>
  );
}

export default App;
