import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { nanoid } from 'nanoid';

const App: React.FC = () => {
  const todos = [
    { id: nanoid(), text: 'finish the react section of the ts course' },
    { id: nanoid(), text: 'finish the react section of the ts course' },
    { id: nanoid(), text: 'finish the react section of the ts course' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <TodoList items={todos} />
      </header>
    </div>
  );
};

export default App;
