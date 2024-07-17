import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <form className="flex gap-2 px-5 py-4 mt-7 w-full text-xs bg-white rounded shadow-lg max-w-[345px] text-black text-opacity-30">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3933b89e6b0da1b6a13251e2f203ead07139ceb33aa005e2d6451afef79e4a8?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 border-2 border-solid aspect-square border-neutral-900 stroke-[1.6px] stroke-neutral-900 w-[15px]" />
            <label htmlFor="searchInput" className="sr-only">Search for recipes & ingredients</label>
            <input
                type="text"
                id="searchInput"
                placeholder="Search for recipes & ingredients"
                className="w-full bg-transparent border-none focus:outline-none"
            />
        </form>
    );
};

export default SearchBar;