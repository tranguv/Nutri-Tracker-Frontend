import { useStateContext } from '../../contexts/ContextProvider';
import { TbBell } from 'react-icons/tb';

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 md:mx-6 relative top-0'>
      <div className='pt-1'>
        <p className='text-3xl font-bold text-gray-700'>Hi, Gia Bao</p>
        <p className='text-gray-400 pt-2'>
          Effortlessly record and analyze your life
        </p>
      </div>
      <div className='flex'>
        <form>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          ></label>
          <div className='relative mt-2'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Mockups, Logos...'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-red-300 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
        </form>
        <div>
          <TbBell className=' text-4xl rounded-full cursor-pointer  mt-4 ml-3 hover:drop-shadow-xl border border-sky-500' />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
