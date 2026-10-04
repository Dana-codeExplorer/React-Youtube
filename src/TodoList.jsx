import React, { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function addTodo() {
    if(newTodo.trim() !== '') {
      setTodos(t => [...todos, newTodo]);
      setNewTodo('');
    }
  }

  function removeTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  function moveTodoUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

  function moveTodoDown(index) {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

    
    
    return (
    <div>
        <div className="to-do-list">
            <h1>Todo List</h1>
            <div className="input-container">
            <button 
                className="add-button"
                onClick={addTodo}>  
                Add
            </button>
                <input
                type="text"
                placeholder="Enter a task..."
                value={newTodo}
                onChange={handleInputChange} />
            </div>
        </div>
        <ol>
            {todos.map((todo, index) => (
            <li key={index}>
            <span className="text">{todo}</span>
            <button  
                className="remove-button"   
                onClick={() => removeTodo(index)}>
                Remove
            </button>
            <button     
                className="move-up-button" 
                onClick={() => moveTodoUp(index)}>
                ↑ High Priority
            </button>
            <button 
                className="move-down-button"
                onClick={() => moveTodoDown(index)}>
                ↓ Low Priority
            </button>
            </li>
        ))}
        </ol>
    </div>
    )
}
       

export default TodoList