import { useState } from 'react';
import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState([{ text: 'Belajar React', done: false }]);
  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoItem todos={todos} setTodos={setTodos} />
    </>
  );
}
