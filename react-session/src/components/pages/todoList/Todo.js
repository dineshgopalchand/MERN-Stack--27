import moment from "moment";
import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
const Todo = (props) => {
    const { details, onDeleteTodo, onCompleteChange } = props;
    const [todo] = useState({
        id: details.id,
        title: details.title,
        time: details.time,
        desc: details.desc,
        isCompleted: details.complete,
    });

    return (
        <Col sm={3} className="my-1">
            <Card >
                <Card.Body>
                    <Card.Title style={{ cursor: 'pointer' }} className={todo.isCompleted ? 'text-decoration-line-through' : ''} onClick={() => { onCompleteChange(todo.id) }}>
                        {todo.title}
                        {todo.isCompleted && <i className="fa-solid fa-check" style={{ color: '#45ce45' }}></i>}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>
                        {moment(todo.time).format('DD/MM/yyy')}
                    </Card.Subtitle>
                    <Card.Text>
                        {todo.desc}
                    </Card.Text>
                    <Button variant="primary ms-1" >Edit</Button >
                    <Button variant="danger ms-1" onClick={() => onDeleteTodo(todo.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col >
    )
};

export default Todo;
