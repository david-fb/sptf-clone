import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-lg mx-auto shadow-md"
    >
      <input
        type="text"
        placeholder="Buscar canción, artista o álbum..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200"
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
