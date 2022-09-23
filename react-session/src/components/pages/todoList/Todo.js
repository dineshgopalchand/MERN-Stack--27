import moment from "moment";
import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
const Todo = (props) => {
    const { details, onUpdateToDoItem } = props;
    const [title, setTitle] = useState(details.title);
    const [time, setTime] = useState(details.time);
    const [desc, setDesc] = useState(details.desc);

    // console.log(props);
    const updateTitle = () => {
        console.log('updateTitle function call', title)
        // setTitle('Update title value ');
        const updatedTitleValue = 'Update title value ';
        setTitle(() => {
            return updatedTitleValue
        });
        onUpdateToDoItem({
            ...details,
            title: updatedTitleValue,
            time,
            desc
        });


    }
    const editTodo = () => {

    }

    return (
        <Col sm={3} className="my-1">
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>
                        {moment(time).format('DD/MM/yyy')}
                    </Card.Subtitle>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary me-2" onClick={updateTitle}>Update To Do</Button>
                    <Button variant="primary" onClick={editTodo}>Edit</Button>
                    {/* <Button variant="primary" onClick={() => {
                        console.log('updateTitle function call', title)
                        title = 'updated title';
                        console.log(title);
                    }}>Update Title</Button> */}
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Todo;
