import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoItem key={todo.id} todo={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
