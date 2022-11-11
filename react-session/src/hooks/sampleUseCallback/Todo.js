import React, { memo } from 'react'

const Todo = (props) => {
    const todos = props.todosList;
    const addTodo=props.onAddTodo;
    console.log(props);
    return (
        <>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })
            }
            <button onClick={addTodo} > Add Todo</button >
        </>
    )
}

export default memo(Todo)