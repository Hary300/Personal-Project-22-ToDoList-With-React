import { useEffect, useState } from 'react';
import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  console.log(localStorage);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoItem todos={todos} setTodos={setTodos} />
    </>
  );
}
