import moment from "moment";
import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
const Todo = (props) => {
    const { details, onDeleteTodo, onCompleteChange } = props;
    const [id, setId] = useState(details.id);
    const [title, setTitle] = useState(details.title);
    const [time, setTime] = useState(details.time);
    const [desc, setDesc] = useState(details.desc);
    const [isCompleted, setIsCompleted] = useState(details.complete);

    return (
        <Col sm={3} className="my-1">
            <Card >
                <Card.Body>
                    <Card.Title style={{ cursor: 'pointer' }} className={isCompleted ? 'text-decoration-line-through' : ''} onClick={() => { onCompleteChange(id) }}>
                        {title}
                        {isCompleted && <i className="fa-solid fa-check" style={{ color: '#45ce45' }}></i>}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>
                        {moment(time).format('DD/MM/yyy')}
                    </Card.Subtitle>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary ms-1" >Edit</Button >
                    <Button variant="danger ms-1" onClick={() => onDeleteTodo(id)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col >
    )
};

export default Todo;
