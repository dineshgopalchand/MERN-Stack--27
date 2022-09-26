import moment from "moment";
import React, { useState } from "react";
import './NewToDoItem.css';
const NewToDoItem = (props) => {
    const { editItem = {}, isUpdate, onNewTodoItem, onFormClose, onUpdateTodoItem } = props;
    const [title, setTitle] = useState(editItem.title || '');
    const [desc, setDesc] = useState(editItem.desc || '');
    const [time, setTime] = useState(editItem.time ? moment(editItem.time).format('yyyy-MM-DD') : '');
    const submitHandler = (e) => {
        e.preventDefault();
        if (title && desc && time) {
            const toDo = {
                ...editItem,
                id: (isUpdate && editItem.id) ? editItem.id : Math.random(),
                title,
                desc,
                time,
                updatedOn: Date.now()
            };
            if ((isUpdate && editItem.id)) {
                onUpdateTodoItem(toDo);
            } else {
                onNewTodoItem(toDo);
            }

            setTitle('');
            setDesc('');
            setTime('');
            onFormClose();
        }

    }
    const titleChangeHandler = (e) => {
        console.log(e);
        setTitle(e.target.value);
    }
    const descChangeHandler = (e) => {
        setDesc(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setTime(e.target.value);
    }
    const closeHandler = (event) => {
        event.preventDefault();
        onFormClose();
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
                            <input type="date" className="form-control" value={time} onChange={dateChangeHandler} name="date" />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary px-5" type="submit" >Save & close</button>
                            <button className="btn btn-primary px-5 ms-3" onClick={closeHandler} >close</button>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};
export default NewToDoItem;