import PlayIcon from "../assets/icons/PlayIcon";

const PlaylistCard = ({ title, subtitle, imageUrl, songs }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer">
      <div className="relative">
        <img
          src={imageUrl || "/api/placeholder/160/160"}
          alt={title}
          className="w-full aspect-square object-cover rounded-md mb-4"
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full items-center justify-center hidden group-hover:flex shadow-xl transition-all duration-300 hover:scale-105">
          <PlayIcon fill="black" className="text-black ml-1" />
        </button>
      </div>
      <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
      <p className="text-sm text-gray-400 truncate">{subtitle}</p>
      {songs && <p className="text-xs text-gray-400 mt-1">{songs} songs</p>}
    </div>
  );
};


export default PlaylistCard;