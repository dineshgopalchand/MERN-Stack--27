import React from "react";
import { Col, Row } from "react-bootstrap";
import './NewToDoItem.css';
const NewToDoItem = () => {
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('submitHandler called');
    }
    return (
        <div className="new-todo-item mb-4" onSubmit={submitHandler}>
            <form >
                <div className="mb-3">
                    <input type="email" className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="desc" rows="3" placeholder="Description"></textarea>
                </div>
                <div className="mb-3">
                    <Row>
                        <Col>
                            <input type="date" className="form-control" id="date" placeholder="Title" />
                        </Col>
                        <Col>
                            <button className="btn btn-primary form-control" type="submit">Submit</button>

                        </Col>
                    </Row>

                </div>

            </form>
        </div>
    );
};
export default NewToDoItem;