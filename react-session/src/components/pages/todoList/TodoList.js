import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewToDoItem from "./NewToDoItem";
import Todo from "./Todo";
const TodoList = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'To do item title 1',
            desc: 'To do item 1 shot description To do item 1 shot description',
            time: '09-16-2022'
        },
        {
            id: 2,
            title: 'To do item title 2',
            desc: 'To do item 2 shot description To do item 2 shot description',
            time: '09-16-2022'
        },
        {
            id: 3,
            title: 'To do item title 3',
            desc: 'To do item 3 shot description To do item 3 shot description',
            time: '09-17-2022'
        },
        {
            id: 4,
            title: 'To do item title 4',
            desc: 'To do item 4 shot description To do item 4 shot description',
            time: '09-15-2022'
        }
    ]);

    const updateTodoList = (updatedTodoItem) => {
        console.log(updatedTodoItem);
    }
    const getNewTodoItemHandler = (newTodo) => {
        // console.log('getNewTodoItemHandler called');
        setTodoList([...todoList,newTodo]);
        console.log(todoList);
    }
    return (
        <>
            <Container>
                <h3>Todo List</h3>
                <hr />
                <NewToDoItem onNewTodoItem={getNewTodoItemHandler} />
                <Row>
                    {todoList.map(todo => {
                        return (
                            <Todo details={todo} key={todo.id} onUpdateToDoItem={updateTodoList} />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}
export default TodoList;

