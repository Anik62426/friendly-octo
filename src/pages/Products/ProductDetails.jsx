import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import Ratings from "./Ratings";
import ProductTabs from "./ProductTabs";
import { addToCart } from "../../redux/features/cart/cartSlice";
import SmallProduct from "./SmallProduct";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  console.log(qty);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { data: item } = useGetTopProductsQuery();

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error?.data || error.message);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const averageRating =
    product?.reviews?.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

      const colors = [
        "bg-gradient-to-b from-white via-[#F7FCF0] to-[#CBEC98]",
        "bg-gradient-to-b from-white via-[#DFF3FE] to-[#B2E3FE]",
        "bg-gradient-to-b from-white via-[#FCF0EB] to-[#EFB191]",
        "bg-gradient-to-b from-white via-[#F7E6DF] to-[#FF874B]",
        "bg-gradient-to-b from-white via-[#F8EBE0] to-[#E6BE99]",
        "bg-gradient-to-b from-white via-[#FFEEFA] to-[#FFC1EE]",
        "bg-gradient-to-b from-white via-[#F9FBEC] to-[#E6EFB4]",
        
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    setCurrentIndex((prevIndex) => (prevIndex + randomNumber) % colors.length);
  }, [product]);

  return (
    <>
      <div>
        <Link
          to="/"
          className="text-white font-semibold hover:underline ml-[10rem]"
        >
          Go Back
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <>
          <div className="flex flex-wrap relative">
            <div className="grid grid-cols-2 ">
              <div
                className={`${colors[currentIndex]} w-[490px] ml-14  rounded-2xl flex justify-center mt-20`}
              >
                 <div className="relative flex justify-center w-full group">
            <img
              className="mt-[2rem] absolute z-10 cursor-pointer rounded-2xl w-[22rem] mb-auto hover:transform hover:scale-105 hover:duration-100"
              src={product.image}
              alt={product.name}
              style={{ objectFit: "cover" }}
            />
            <img
              className="relative mt-2 mix-blend-multiply w-full transform scale-0 group-hover:scale-105 transition-transform duration-300"
              // src="https://res.cloudinary.com/dpvt2kpli/image/upload/v1733248733/fo0cz1mbn7dnag7svwj7.webp"
              src="https://res.cloudinary.com/dpvt2kpli/image/upload/v1734347485/hllmklevtu1enbeerhu4.jpg"
              alt={product.name}
              style={{ objectFit: "contain" }}
            />
          </div>
                {/* <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-[20rem] mt-5 rounded-lg object-cover"
                /> */}

                <HeartIcon product={product} />
              </div>

              <div className=" ml-10 mt-20">
                <div className="flex">
                  <div className="flex ml-4 mt-7">
                    <div className="relative flex">
                      {Array.from({ length: 5 }, (v, i) => (
                        <FaStar strokeWidth={2} size={20} color="#D1D5DB" />
                      ))}
                    </div>
                    <div className="absolute flex">
                      {Array.from({ length: product.rating }, (v, i) => (
                        <FaStar size={20} color="#FF719D" />
                      ))}
                    </div>
                  </div>

                  <div className="font-mono mt-7 ml-5 font-semibold italic w-32">
                    {product.numReviews == 0 ? (
                      ""
                    ) : (
                      <p>{product.numReviews} REVIEWS</p>
                    )}
                  </div>
                </div>
                <h2 className="text-5xl font-bold pl-4 pt-2 uppercase pop tracking-tighter">
                  {product.name}
                </h2>
                <p className="mt-2 mb-3 pop  pl-5 font-bold  tracking-tighter text-xl">{product.description}</p>

                <div className="flex items-center justify-between w-[20rem]">
                  <div>
                    <h1 className="flex items-center pop font-bold w-28 rounded-xl text-2xl ml-5 pl-6 text-gray-600 py-1 border-2 border-black mb-4">
                      {product.brand}
                    </h1>
                    {/* <h1 className="flex items-center mb-6 w-[20rem]">
                    <FaClock className="mr-2 text-white" /> Added:{" "}
                    {moment(product.createAt).fromNow()}
                  </h1> */}
                    {/* <h1 className="flex items-center mb-6">
                    <FaStar className="mr-2 text-white" /> Reviews:{" "}
                    {product.numReviews}
                  </h1> */}
                  </div>

                  <div className="two">
                    {/* <h1 className="flex items-center mb-6">
                    <FaStar className="mr-2 text-white" /> Ratings: {Math.round(averageRating)}
                  </h1> */}
                    {/* <h1 className="flex items-center mb-6">
                    <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                    {product.quantity}
                  </h1> */}
                    {/* <h1 className="flex items-center mb-6 w-[10rem]">
                    <FaBox className="mr-2 text-white" /> In Stock:{" "}
                    {product.countInStock}
                  </h1> */}
                  </div>
                </div>

                <p className="text-4xl pl-5  mb-5 capri font-extrabold">
                  ₹{product.price}
                </p>

                <div className="flex flex-col pt-2 pl-5 ml-28  border-2 rounded-3xl pb-8 w-[25rem]">
                  {product.countInStock > 0 && (
                    <div className="flex justify-center mr-12 mt-4"> 
                      <div className=" cursor-pointer" onClick={() =>  qty>1 && setQty(qty - 1)}>
                      <TiMinus size={40}/>
                      </div>
                      <p className="text-4xl capri mx-4">{qty}</p>
                      <div className="cursor-pointer" onClick={() => setQty(qty + 1)}>
                      <FaPlus size={40} />
                      </div>
                    </div>
                  )}
                  <button
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                    className="bg-black text-white py-4 hover:bg-white hover:text-black text-2xl w-[20rem] px-4 border-2 border-black rounded-full mt-7 ml-5 uppercase font-bold font-mono  "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-[5rem] container flex  flex-wrap">
              <h1 className="text-3xl capri pl-16 ">Similar Products</h1>
              <section className="flex flex-wrap bg-[#FFF5F7]  justify-center w-full py-10">
                {!item ? (
                  <Loader />
                ) : (
                  item.map((product) => (
                    <div key={product._id}>
                      <SmallProduct product={product} />
                    </div>
                  ))
                )}
              </section>

              <section className="flex justify-center w-full">
                <div className=" w-[44%] mt-5 mb-5">
                  <p className="capri tracking-tighter text-2xl pl-2 pb-2">Customer Reviews</p>
                  <div>{product.reviews.length === 0 && <p className=" pl-2.5 capri text-lg">No Reviews Yet</p>}</div>
                  {product.reviews.map((review) => (
                    <div
                      key={review._id}
                      className="bg-white p-4 rounded-lg border shadow-md mb-2"
                    >
                      <p className="mt-2 mb-2 mx-4 capri">{review.comment}</p>
                      <div className="flex ml-2  mt-2">
                    <div className="relative flex">
                      {Array.from({ length: 5 }, (v, i) => (
                        <FaStar strokeWidth={2} size={20} color="#D1D5DB" />
                      ))}
                    </div>
                    <div className="absolute flex">
                      {Array.from({ length: review.rating }, (v, i) => (
                        <FaStar size={20} color="#FF719D" />
                      ))}
                    </div>
                  </div>
                      <div className=" mt-2 mx-4 flex justify-between">
                        <strong className="capri tracking-tighter">
                          {review.name}
                        </strong>
                        <p className="capri">
                          {review.createdAt.substring(0, 10)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* <ProductTabs
                loadingProductReview={loadingProductReview}
                userInfo={userInfo}
                submitHandler={submitHandler}
                rating={rating}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                product={product}
              /> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
