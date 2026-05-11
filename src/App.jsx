import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className='flex flex-col gap-5 w-full max-w-112.5 m-auto'>
      <h1 className='text-3xl font-bold text-[#fe643b] text-shadow-[0_0_2px_rgba(0,0,0,0.3)]'>
        Hary300 Todo
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
