import React from 'react';
import todoIcon from '../images/todoIcon.png'

const Todo = ({ todoList, submitHandler, onChangeHandler, deleteHandler, entryText, isCompleteHandler }) => {

    return (
        <div className="main-container">
            <img className="todo-icon" src={todoIcon} alt="" />
            <h3>REACT TO DO</h3>
            <ul className="todo-list">
                {todoList.map(item => (
                    <li className="todo-item" key={item.id}>
                        {item.isComplete ? <p style={{ textDecoration: "line-through" }}>{item.text}</p> : <p>{item.text}</p>}
                        <button className="check-btn" onClick={() => isCompleteHandler(item.id)}><i className="fas fa-check fa-lg"></i></button>
                        <button className="delete-btn" onClick={() => deleteHandler(item.id)}><i className="fas fa-trash-alt fa-lg"></i></button>
                    </li>
                ))}
            </ul>
            <form className="input-container" onSubmit={(e) => submitHandler(e, entryText)}>
                <input className="input-box" type="text" placeholder="Enter Task..." value={entryText} onChange={(e) => onChangeHandler(e)} />
                <button className="add-btn" type="submit"><i className="fas fa-plus fa-lg"></i></button>
            </form>
        </div>
    );
};

export default Todo;
