import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
      <div className="container mt-28 flex justify-around items-start flex-wrap mx-auto ">
        {cartItems.length === 0 ? (
          <div className="capri  tracking-tighter text-3xl mb-10 ">
            Your cart is empty <Link to="/shop">Go To Shop</Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-[80%]">
              <h1 className="text-3xl font-semibold tracking-tighter mt-[-1rem] mb-10">Shopping Cart</h1>
                 
                 <div className="flex">
              <div className="w-[70%] border-r pr-5 ">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center mb-[0.5rem] pb-2 border pt-2 pr-3 shadow-sm hover:rounded-lg hover:shadow-lg hover:border-black">
                  <div className="w-[9rem] h-[10rem] border bg-[#F0F2F6]  ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>

                  <div className="flex-1 mt-[-4rem] ml-4">
                    <Link to={`/product/${item._id}`} className="capri  tracking-tighter text-xl hover:text-[#FF3F6C]">
                    <div className=" text-black text-lg  capri  tracking-tighter hover:text-[#ff3f6cd6] ">{item.brand}</div>
                      {item.name}
                    </Link>

                    <div className=" text-black font-bold capri  tracking-tighter ">
                    ₹ {item.price}
                    </div>
                  </div>

                  <div className="w-24 flex text-[#282C3F] ">
                    <span className="mr-1  text-lg capri tracking-tighter"> Qty: </span>                   
                    <select
                      className="w-full p-1 border rounded bg-[#F5F5F6] text-black capri tracking-tighter"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(5).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ml-4 mt-[-8rem] capri text-2xl font-bold cursor-pointer">
                    <button
                      className="text-orange-500 hover:text-orange-400 "
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                     &#10006;
                    </button>
                  </div>
                </div>
              ))}
              </div>

              <div className="mt-8 ml-5 w-[30%] ">
                <div className="w-[18.5rem]">
                <p  className=" font-mono font-semibold  tracking-tighter">PRICE DETAILS ({cartItems.reduce((acc, item) => acc + item.qty, 0)} Items)</p>
                <p className="pt-2 capri tracking-tighter">Total MRP 
                  <span className="float-right font-mono"> {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}</span>
                      </p>
                      <p className="capri pt-1 tracking-tighter">Platform Fee <span className="text-[#65BBA8] font-mono float-right">FREE</span></p>
                      <p className="capri pt-1 tracking-tighter">Shipping Fee <span className="text-[#65BBA8] font-mono float-right">FREE</span></p>
                      <p className="capri pt-1 tracking-tighter">Total Amount <span className="font-mono float-right"> {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}</span></p>
                      <div className="w-full h-[1px] mt-3 bg-gray-400"/>
                      <button
                    className="bg-[#FF3F6C] hover:bg-[#E93D67] mt-4 py-2 px-4 text-white text-xl font-mono font-bold tracking-tighter w-full"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Place Order
                  </button>
                  </div>
              </div>

                 </div>

            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
