import { useState } from "react";
import spotifyApi from '../controllers/SpotifyApi';
import useStore from "../config/store.jsx"
import SearchIcon from '../assets/icons/SearchIcon';
import ExploreIcon from "../assets/icons/ExploreIcon";

const Search = () => {
  const [query, setQuery] = useState("");
  const setPlayList = useStore((state) => state.setPlayList);


  const onSearch = (query) => {
    spotifyApi
      .get("/search", {
        params: {
          q: query,
          type: "track,artist,album", 
          limit: 10, 
        },
      })
      .then((response) => {
        console.log("Respuesta:", response.data);
        //Canciones 
        const tracks = response.data.tracks?.items || [];
        console.log("Resultados:", tracks);
        setPlayList(tracks);
      })
      .catch((err) => console.error("Error al buscar:", err));
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-tertiary-dark rounded-full px-4 py-2 w-full h-full max-w-lg mx-auto shadow-md focus-within:ring-2 focus-within:ring-white"
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="¿Qué quieres reproducir?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2"
      />
      <div className="border-l pl-2">
        <button className="h-fit">
          <ExploreIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
