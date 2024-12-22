import { useSelector } from "react-redux";

const FavoritesCount = () => {
  const favorites = useSelector((state) => state.favorites);
  const favoriteCount = favorites.length;

  return (
    <div className="absolute left-6 top-0">
      {favoriteCount > 0 && (
        <span className="px-1 py-0 text-xl font-bold  capri text-[#F16565]">
          {favoriteCount}
        </span>
      )}
    </div>
  );
};

export default FavoritesCount;
