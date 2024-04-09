import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <label
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        htmlFor="default-search"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <path
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
        <input
          required=""
          placeholder="Search"
          className="block w-full p-4 py-5 ps-10 text-lg text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-slate-600 outline-none focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-300 dark:focus:ring-slate-500 dark:focus:border-slate-500"
          id="default-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-slate-500 rounded-lg border border-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};
export default SearchInput;
