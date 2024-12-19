import React from 'react'
import { FaStar } from 'react-icons/fa6'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>

    
      <div className="testimonial-container">
        <div className="testimonial-items">
          
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">Sarah Johnson</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“I absolutely love the products from this store! The quality is outstanding and the customer service is top-notch.”</p>
          </div>

        
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">John Doe</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“The products are great, and the website is very easy to navigate. Highly recommended!”</p>
          </div>

      
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">Jane Smith</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“Amazing experience! The quality is top-notch, and I love how easy it is to shop here.”</p>
          </div>
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">Sarah Johnson</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“I absolutely love the products from this store! The quality is outstanding and the customer service is top-notch.”</p>
          </div>

        
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">John Doe</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“The products are great, and the website is very easy to navigate. Highly recommended!”</p>
          </div>

      
          <div className="testimonial-item rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto p-6 pt-6">
            <div className='flex'>
              <img className='h-12 w-12 mr-4 ml-3 rounded-full' src="https://kzmo3u94e65rcdi94si8.lite.vusercontent.net/placeholder.svg?height=40&width=40" alt="profile" />
              <h3 className="text-2xl mt-[-3px] font-semibold">Jane Smith</h3>
            </div>
            <div className='text-sm mt-[-18px] flex ml-[4.7rem]'>
              {Array.from({ length: 5 }, (v, i) => <FaStar strokeWidth={2} size={20} color="#FF719D" />)}
            </div>
            <p className="text-gray-600 italic mt-4 ml-2">“Amazing experience! The quality is top-notch, and I love how easy it is to shop here.”</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
