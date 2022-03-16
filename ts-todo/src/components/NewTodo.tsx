import React, { useRef } from 'react';

interface NewTodoProps {
  addTodo: (todo: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const todo = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.current!.value !== '') {
      addTodo(todo.current!.value);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" ref={todo} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
