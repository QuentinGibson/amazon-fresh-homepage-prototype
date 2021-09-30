import { useContext, useRef } from "react";
import { searchContext } from "App";
const Search = () => {
  const [, setSearch] = useContext(searchContext)
  const ref = useRef();
  return (
    <div>
      <div className="relative">
        <div className="text-gray-500 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-4 md:h-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={10} cy={10} r={7} />
            <line x1={21} y1={21} x2={15} y2={15} />
          </svg>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSearch(ref.current.value.trim().toLowerCase()); }}>
        <input
          ref={ref}
          className="hidden bg-gray-700 bg-opacity-10 md:block focus:outline-none focus:border-indigo-700 w-42 rounded text-sm pl-8 py-2 placeholder-gray-200 text-gray-400"
          type="text"
          placeholder="Search here"
        />
        <input className="hidden" type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Search

