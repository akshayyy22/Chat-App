import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <label
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          for="default-search"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <input
            required=""
            placeholder="Search"
			class="block w-full p-4 py-5 ps-10 text-lg text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-slate-600 outline-none focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-300 dark:focus:ring-slate-500 dark:focus:border-slate-500"
            id="default-search"
            type="search"
          />
          <button class="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-slate-500 rounded-lg border border-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </form>
	  
  );
};
export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
