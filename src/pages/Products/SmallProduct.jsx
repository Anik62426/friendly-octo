import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeartIcon from './HeartIcon';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

const SmallProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }));
    window.scrollTo({ top: 0, behavior: 'smooth' })
      toast.success("Item added successfully");
    navigate('/cart');
  };

  return (
    <div className="w-[13.5rem] h-[21.5rem] bg-white m-2 border">
        <Link to={`/product/${product._id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div className="relative border-b bg-[#f6f9ff] border-gray-200">
        <div className="relative flex justify-center w-full group">
            <img
              className="mt-4 absolute z-10 cursor-pointer rounded-2xl w-[11rem] mb-auto hover:transform hover:scale-105 hover:duration-100"
              src={product.image}
              alt={product.name}
              style={{ objectFit: "cover" }}
            />
            <img
              className="relative mt-2 mix-blend-multiply w-72 transform scale-0 group-hover:scale-105 transition-transform duration-200"
              // src="https://res.cloudinary.com/dpvt2kpli/image/upload/v1733248733/fo0cz1mbn7dnag7svwj7.webp"
              src="https://res.cloudinary.com/dpvt2kpli/image/upload/v1734347485/hllmklevtu1enbeerhu4.jpg"
              alt={product.name}
              style={{ objectFit: "cover" }}
            />
          </div>
        <HeartIcon product={product} />
      </div>

      <div className="pt-2 pl-4">
          <div className="flex flex-col">
            <p className="capri font-medium hover:text-[#fd4b74]">{product.brand}</p>
            <div className="capri text-sm tracking-tighter text-gray-400 hover:text-[#fd4b74]">
              {product.name}
            </div>
            <span className="capri font-semibold pb-1 text-[#fd4b74]">
              ₹{product.price}
            </span>
            <hr />
            <button
              onClick={() => addToCartHandler(product)}
              disabled={product.countInStock === 0}
              className="pt-1 font-mono font-semibold tracking-tighter text-[#fd4b74]"
            >
              Add To Cart
            </button>
          </div>
      </div>
        </Link>
    </div>
  );
};

export default SmallProduct;
