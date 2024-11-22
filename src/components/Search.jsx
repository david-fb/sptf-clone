import { useState } from "react";
import spotifyApi from '../controllers/SpotifyApi';
import useStore from "../config/store.jsx"

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
