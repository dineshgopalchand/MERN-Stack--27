import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import NewToDoItem from "./NewToDoItem";
import Todo from "./Todo";
import './TodoList.css';
const todoItemList = [
    {
        id: 1,
        title: 'To do item title 1',
        desc: 'To do item 1 shot description To do item 1 shot description',
        time: new Date('09-16-2022').toString()
    },
    {
        id: 2,
        title: 'To do item title 2',
        desc: 'To do item 2 shot description To do item 2 shot description',
        time: new Date('09-16-2022').toString()
    },
    {
        id: 3,
        title: 'To do item title 3',
        desc: 'To do item 3 shot description To do item 3 shot description',
        time: new Date('09-17-2022').toString()
    },
    {
        id: 4,
        title: 'To do item title 4',
        desc: 'To do item 4 shot description To do item 4 shot description',
        time: new Date('09-15-2022').toString()
    }
];
const TodoList = () => {
    const [todoList, setTodoList] = useState(todoItemList);
    const [todoFormVisibility, setTodoFormVisibility] = useState(false);

    const updateTodoList = (updatedTodoItem) => {
        console.log(updatedTodoItem);
    }
    const getNewTodoItemHandler = (newTodo) => {
        // console.log('getNewTodoItemHandler called');
        setTodoList([...todoList, newTodo]);
        console.log(todoList);
    }

    const updateTodoFormVisibility = () => {
        setTodoFormVisibility(!todoFormVisibility);
    }
    return (
        <>
            <Container>
                <h3>
                    Todo List
                    {
                        !todoFormVisibility &&
                        <Button variant="primary"
                            className="ms-2 add-todo-form"
                            onClick={updateTodoFormVisibility}>
                            <i className="ms-1 me-2  fa-solid fa-plus"></i> Add New
                        </Button>
                    }
                </h3>
                <hr />
                {todoFormVisibility && <NewToDoItem onFormClose={updateTodoFormVisibility} onNewTodoItem={getNewTodoItemHandler} />}
                <Row>
                    {
                        todoList.length > 0 ? (
                            todoList.map(todo => {
                                return (
                                    <Todo details={todo} key={todo.id} onUpdateToDoItem={updateTodoList} />
                                );
                            })
                        ) : (
                            <div className="no-todo-list">
                                <big>No todo item available</big>
                            </div>
                        )
                    }
                </Row>
            </Container>
        </>
    );
}
export default TodoList;




