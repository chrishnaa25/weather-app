import React from "react";

function Search(props) {
  return (
    <div className="shadow-xl flex">
      <input
        type="search"
        value={props.searchData}
        onChange={props.onChange}
        className="w-full border border-black text-2xl p-3"
      />
      <button onClick={props.onClick} className="bg-slate-500 text-white p-3">
        Search
      </button>
    </div>
  );
}

export default Search;
