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
        time: new Date('09-16-2022').toString(),
        complete: false,
        updatedOn: 1664176526364
    },
    {
        id: 2,
        title: 'To do item title 2',
        desc: 'To do item 2 shot description To do item 2 shot description',
        time: new Date('09-16-2022').toString(),
        complete: false,
        updatedOn: 1664176526365
    },
    {
        id: 3,
        title: 'To do item title 3',
        desc: 'To do item 3 shot description To do item 3 shot description',
        time: new Date('09-17-2022').toString(),
        complete: false,
        updatedOn: 1664176526370
    },
    {
        id: 4,
        title: 'To do item title 4',
        desc: 'To do item 4 shot description To do item 4 shot description',
        time: new Date('09-15-2022').toString(),
        complete: true,
        updatedOn: 1664176526375
    }
];
const TodoList = () => {
    const [todoList, setTodoList] = useState(todoItemList);
    const [todoFormVisibility, setTodoFormVisibility] = useState(false);
    const [editedTodoItem, setEditedTodoItem] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    const addNewTodoItemHandler = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    }


    const updateTodoFormVisibility = () => {
        setTodoFormVisibility(!todoFormVisibility);
    }

    const deleteHandler = (id) => {
        const todoListLocal = [...todoList];
        todoListLocal.splice(todoListLocal.findIndex(todo => todo.id === id), 1)
        setTodoList(todoListLocal);
    }
    const changeCompleteHandler = (id) => {
        const todoListLocal = [...todoList];
        const todoItemIndex = todoList.findIndex(todo => todo.id === id);
        let todoItem = todoList.filter(todo => todo.id === id)[0];
        todoItem = {
            ...todoItem,
            complete: !todoItem.complete,
            updatedOn: Date.now()
        };

        todoListLocal.splice(todoItemIndex, 1, todoItem);
        setTodoList(todoListLocal);
    }

    const editButtonClickHandler = (todo) => {
        setTodoFormVisibility(true);
        setEditedTodoItem(todo);
        setIsUpdate(true);
    }

    const udpateNewTodoItemHandler = (updatedTodo) => {
        console.log(updatedTodo);
        const todoListLocal = [...todoList];
        const todoItemIndex = todoList.findIndex(todo => todo.id === updatedTodo.id);
        todoListLocal.splice(todoItemIndex, 1, updatedTodo);
        setTodoList(todoListLocal);
        setEditedTodoItem({});
        setIsUpdate(false);
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
                {
                    todoFormVisibility &&
                    <NewToDoItem
                        onFormClose={updateTodoFormVisibility}
                        onNewTodoItem={addNewTodoItemHandler}
                        isUpdate={isUpdate}
                        editItem={editedTodoItem}
                        onUpdateTodoItem={udpateNewTodoItemHandler}
                    />}
                <Row>
                    {
                        todoList.length > 0 ? (
                            todoList.map(todo => {
                                return (
                                    <Todo details={todo} key={todo.id + '' + todo.updatedOn} onDeleteTodo={deleteHandler} onCompleteChange={changeCompleteHandler} onEditButtonClick={editButtonClickHandler} />
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




