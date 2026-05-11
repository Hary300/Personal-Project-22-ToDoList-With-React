export default function TodoToggle({ todos, setTodos, todo, index }) {
  return (
    <button
      className={`p-4 cursor-pointer flex justify-center items-center relative rounded-lg border-2 border-[#fe643b]`}
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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='#fe643b'
        className={`size-8 transition-all duration-300 ${todo.done ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} absolute left-0`}
      >
        <path
          fillRule='evenodd'
          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
}
