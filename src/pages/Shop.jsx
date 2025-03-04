import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

import {
  motion,
  useAnimation,
  useSpring,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  setCategories,
  setProducts,
  setChecked,
} from "../redux/features/shop/shopSlice";
import Loader from "../components/Loader";
import ProductCard from "./Products/ProductCard";
import ShopTitle from "../components/ShopTitle";
import Testimonial from "../components/Testimonial";


const Shop = () => {
  const dispatch = useDispatch();
  const { categories, products, checked, radio } = useSelector(
    (state) => state.shop
  );

  const categoriesQuery = useFetchCategoriesQuery();
  
  const [priceFilter, setPriceFilter] = useState("");
  const [state, setState] = useState({
    radio,
  });

  const filteredProductsQuery = useGetFilteredProductsQuery({
    checked,
    radio,
  });

  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      dispatch(setCategories(categoriesQuery.data));
    }
  }, [categoriesQuery.data, dispatch]);

  useEffect(() => {
    if (!checked.length || !radio.length) {
      if (!filteredProductsQuery.isLoading) {
        // Filter products based on both checked categories and price filter
        const filteredProducts = filteredProductsQuery.data.filter(
          (product) => {
            // Check if the product price includes the entered price filter value
            return (
              product.price.toString().includes(priceFilter) ||
              product.price === parseInt(priceFilter, 10)
            );
          }
        );

        dispatch(setProducts(filteredProducts));
      }
    }
  }, [checked, radio, filteredProductsQuery.data, dispatch, priceFilter]);

  const handleBrandClick = (brand) => {
    const productsByBrand = filteredProductsQuery.data?.filter(
      (product) => product.brand === brand
    );
    dispatch(setProducts(productsByBrand));
  };

  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
    dispatch(setChecked(updatedChecked));
  };

  // Add "All Brands" option to uniqueBrands
  const uniqueBrands = [
    ...Array.from(
      new Set(
        filteredProductsQuery.data
          ?.map((product) => product.brand)
          .filter((brand) => brand !== undefined)
      )
    ),
  ];

  const handlePriceChange = (e) => {
    // Update the price filter state when the user types in the input filed
    setPriceFilter(e.target.value);
  };

  const firstRef = useRef(null);
  const isInView = useInView(firstRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  
  const colors = [
    "bg-gradient-to-b from-white via-[#F7FCF0] to-[#CBEC98]",
    "bg-gradient-to-b from-white via-[#DFF3FE] to-[#B2E3FE]",
    "bg-gradient-to-b from-white via-[#FCF0EB] to-[#EFB191]",
    "bg-gradient-to-b from-white via-[#F7E6DF] to-[#FF874B]",
    "bg-gradient-to-b from-white via-[#F8EBE0] to-[#E6BE99]",
    "bg-gradient-to-b from-white via-[#FFEEFA] to-[#FFC1EE]",
    "bg-gradient-to-b from-white via-[#F9FBEC] to-[#E6EFB4]",
    
  ];
 
  // const [currentColors, setCurrentColor] = useState(colors[0]);
  

  return (
    <>
      <div className=" mx-auto w-full">
        <ShopTitle/>
            <div className="grid grid-cols-2 gap-y-5 mx-2 bg-gradient-to-b from-slate-50 to-pink-300 rounded-2xl pb-10 pt-10 lg:grid-cols-3">
              {products.length === 0 ? (
                <Loader />
              ) : (
                products?.map((p,index) => (
                  <motion.div 
                   className="m-4" key={p._id}>
                    <ProductCard p={p} currentColor={colors[index % colors.length]} />
                  </motion.div>
                ))
              )}
            </div>
            
          <Testimonial/>
      </div>
    </>
  );
};

export default Shop;
