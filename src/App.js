import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [entryText, setEntryText] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      text: "Task one",
      isComplete: false
    },
    {
      id: uuidv4(),
      text: "Task two",
      isComplete: false
    },
    {
      id: uuidv4(),
      text: "Task three",
      isComplete: false
    }
  ]);

  // Text handler
  const onChangeHandler = (e) => {
    const newText = e.target.value;
    setEntryText(newText);
  };

  // Submit handler
  const submitHandler = (e, text) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    const todoListCopy = [...todoList];

    const newItem = {
      id: uuidv4(),
      text: text,
      isComplete: false
    };

    todoListCopy.push(newItem);
    setTodoList(todoListCopy);
    setEntryText("");
  };

  // isComplete Handler
  const isCompleteHandler = (id) => {
    const todoListCopy = [...todoList];
    const targetItem = todoListCopy.find(item => item.id === id);
    targetItem.isComplete = !targetItem.isComplete;
    setTodoList(todoListCopy);
  };

  // Delete handler
  const deleteHandler = (id) => {
    const todoListCopy = [...todoList].filter(item => item.id !== id);
    setTodoList(todoListCopy);
  };

  return (
    <div className="App">
      <Todo todoList={todoList} submitHandler={submitHandler} onChangeHandler={onChangeHandler} entryText={entryText} deleteHandler={deleteHandler} isCompleteHandler={isCompleteHandler} />
    </div>
  );
}

export default App;
