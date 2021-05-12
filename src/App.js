import React, { useState } from 'react'
import './App.css';
import Form from './components/Form/Form'
import TodoList from './components/TodoLlist/TodoList'



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]); 
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
      <h1>Ashley's Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
