import React, { useState } from "react";
import './NewToDoItem.css';
const NewToDoItem = (props) => {
    const { onNewTodoItem } = props;
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [dateVal, setDateVal] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log('submitHandler called');
        // console.log({title,desc,dateVal});
        // const newToDo = { title: title, desc: desc, time: dateVal };
        const newToDo = {
            id:Math.random(),
            title,
            desc,
            time: dateVal
        };
        onNewTodoItem(newToDo);
        setTitle('');
        setDesc('');
        setDateVal('');
    }
    const titleChangeHandler = (e) => {
        console.log(e);
        setTitle(e.target.value);
    }
    const descChangeHandler = (e) => {
        setDesc(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setDateVal(e.target.value);
    }

    return (
        <div className="new-todo-item mb-4" onSubmit={submitHandler}>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" value={title} placeholder="Title" onChange={titleChangeHandler} name="title" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="3" placeholder="Description" value={desc} onChange={descChangeHandler} name="desc"></textarea>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <input type="date" className="form-control" value={dateVal} onChange={dateChangeHandler} name="date" />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary form-control" type="submit">Submit</button>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};
export default NewToDoItem;