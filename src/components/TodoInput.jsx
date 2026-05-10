export default function TodoInput() {
  return (
    <div className='flex justify-between w-full'>
      <input
        type='text'
        className='p-4 rounded-2xl border-2 border-[#fe643b] shadow-[0_0_5px_rgba(0,0,0,0.3)] focus:outline-0 w-[80%]'
        placeholder='Write todo...'
      />
      <button className='flex justify-center items-center text-[#681d11] rounded-2xl bg-[#fe643b] w-[15%] cursor-pointer  transition-all duration-300 shadow-[0_0_5px_rgba(0,0,0,0.3)] active:shadow-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='2.5'
          stroke='currentColor'
          class='size-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </div>
  );
}
