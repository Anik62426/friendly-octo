import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";
import SmallProduct from "./SmallProduct";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="flex flex-col mt-28">
      <h1 className="text-xl tracking-tighter capri font-bold ml-[11rem] ">
        FAVORITE PRODUCTS
      </h1>

      <div className="flex flex-wrap justify-center my-5">
        {favorites.map((product) => (
          <SmallProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
