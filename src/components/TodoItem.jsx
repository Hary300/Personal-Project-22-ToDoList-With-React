import TodoDelete from './TodoDelete';

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
              <button
                className='cursor-pointer flex justify-center items-center'
                onClick={() =>
                  setTodos(
                    todos.map((todo, indexTodo) => {
                      if (indexTodo === index) {
                        return { ...todo, done: !todo.done };
                      }
                      return todo;
                    })
                  )
                }
              >
                {todo.done ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#fe643b'
                    className='size-8'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <div className='size-8 rounded-lg border-2 border-[#fe643b] '></div>
                )}
              </button>
              {todo.text}
            </div>
            <TodoDelete todos={todos} setTodos={setTodos} index={index} />
          </li>
        );
      })}
    </ol>
  );
}
