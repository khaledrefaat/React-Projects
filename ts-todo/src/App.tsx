import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { nanoid } from 'nanoid';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: nanoid(), text: 'finish the react section of the ts course' },
    { id: nanoid(), text: 'finish the react section of the ts course' },
    { id: nanoid(), text: 'finish the react section of the ts course' },
  ]);

  const handelNewTodo = (todo: string) =>
    setTodos(todos => [...todos, { id: nanoid(), text: todo }]);

  const removeTodo = (id: string) =>
    setTodos(todos => todos.filter(todo => todo.id !== id));

  return (
    <div className="App">
      <header className="App-header">
        <NewTodo addTodo={handelNewTodo} />
        {todos.map(todo => (
          <TodoItem
            onDeleteClick={removeTodo}
            key={todo.id}
            todo={todo.text}
            id={todo.id}
          />
        ))}
      </header>
    </div>
  );
};

export default App;
