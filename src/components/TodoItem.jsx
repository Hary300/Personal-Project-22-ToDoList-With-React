import TodoDelete from './TodoDelete';
import TodoToggle from './TodoToggle';

export default function TodoItem({ todos, setTodos }) {
  return (
    <ol className='flex flex-col gap-4'>
      {todos.map((todo, index) => {
        return (
          <li
            key={index}
            className='p-4 rounded-2xl border-2 border-[#fe643b] shadow-[0_0_5px_rgba(0,0,0,0.3)] flex justify-between'
          >
            <div className='flex justify-center items-center gap-4'>
              <TodoToggle
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                index={index}
              />

              <p
                className={`${todo.done ? 'line-through' : ''} text-lg decoration-[#fe643b] decoration-2`}
              >
                {todo.text}
              </p>
            </div>
            <TodoDelete todos={todos} setTodos={setTodos} index={index} />
          </li>
        );
      })}
    </ol>
  );
}
