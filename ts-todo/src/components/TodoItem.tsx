import React, { useState } from 'react';
import { ReactComponent as Delete } from '../assets/delete.svg';
import { ReactComponent as Done } from '../assets/done.svg';

interface TodoItemProps {
  todo: string;
  id: string;
  onDeleteClick: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, id, onDeleteClick }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li className={`todo ${isDone ? 'todo-done' : ''}`}>
      {todo}
      <span className="delete-btn">
        <Delete onClick={() => onDeleteClick(id)} />
      </span>
      <div className="done-btn">
        <Done onClick={() => setIsDone(true)} />
      </div>
    </li>
  );
};

export default TodoItem;
