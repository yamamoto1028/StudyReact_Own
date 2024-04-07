import React from 'react';
import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm.jsx';
import { Title } from "./components/Title.jsx";
import { TodoList } from './components/TodoList.jsx';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={ taskList } setTaskList={ setTaskList }/>
      <TodoList taskList={ taskList } setTaskList={ setTaskList }/>
    </div>
  );
}

export default App;
