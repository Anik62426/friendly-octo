import React from 'react'
import { useGetMyOrdersQuery } from '../../redux/api/orderApiSlice'
import { Link } from 'react-router-dom'

const UserOrderList = () => {
  
  const userInfo = localStorage.getItem("userInfo");
  const userID = userInfo ? JSON.parse(userInfo)._id : null;
  const Username = userInfo ? JSON.parse(userInfo).username : null;

  const { data, isLoading, isError } = useGetMyOrdersQuery(userID);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading orders.</div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div>No orders found.</div>;
  }
 
  return (
    <div className='w-[80%] flex justify-center mx-auto mt-24 '>
      <div className='w-[30%]'>
        <h1 className="text-3xl font-semibold tracking-tighter mt-[-1rem] mb-10">My Orders</h1>
        <p className='capri text-2xl'>Account</p>
        <p className='capri  uppercase pb-5'>{Username}</p>
        <hr  />
        <p className='pt-4 capri text-lg pb-5'>Overview</p>
        <hr />
        <p className='pt-5 pb-2 mono '>Orders</p>
        <p className='text-[#14CDA8] text-lg capri pb-4'>Orders & Return</p>
        <hr />
        <p className='capri text-xl pt-4'>Account</p>
        <Link to="/profile" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:text-[#14CDA8]'>
        <p className='capri text- pt-1'>Profile</p>
        </Link>
        <p className='capri text- pt-1'>Address</p>
        
      </div>
      <div className="w-[70%] border-l pl-5 ">
                    {data.map((item,i) => (
                      <div key={i}  className="flex items-center mb-[0.5rem] pb-2 border pt-2 pr-3 shadow-sm">
                        <div className="w-[9rem] h-[10rem] border bg-[#F0F2F6]  ">
                          <img
                            src={item.orderItems[0].image}
                            alt={item.orderItems[0].name}
                            className="w-full h-full object-contain rounded"
                          />
                        </div>
      
                        <div className="flex-1 mt-[-4rem] ml-4">
                          <div className=" text-black text-xl capri  tracking-tighter ">{item.brand}</div>
                          <Link to={`/product/${item._id}`} className="capri  tracking-tighter text-lg">
                            {item.orderItems[0].name}
                          </Link>
      
                          <div className=" text-black font-bold capri  tracking-tighter ">
                          ₹ {item.orderItems[0].price}
                          </div>
                        </div>
      
                        <div className="w-24 flex text-[#282C3F] ">
                          <span className="mr-1  text-lg capri tracking-tighter"> Qty: {item.orderItems[0].qty} </span>                   
                          
                        </div>
      
                       
                      </div>
                    ))}
                    </div> 
    </div>
  )
}

export default UserOrderList