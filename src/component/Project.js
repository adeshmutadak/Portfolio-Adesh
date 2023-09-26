import React from 'react'
import shopping from '../Assets/Shopping.jpeg'
import Netflix from '../Assets/Netflix.jpeg'
import Travelling from '../Assets/Treavelling.jpeg'
import Port from '../Assets/port.jpeg'
import Porject1 from '../Assets/Backend/project1.jpeg'
import Porject2 from '../Assets/Backend/project2.jpeg'
import Porject3 from '../Assets/Backend/project3.jpeg'
import Porject4 from '../Assets/Backend/project4.jpeg'
// import Porject5 from '../Assets/Backend/project5.jpeg'
export default function Project() {
  return (
    <div> 
    
      <section className="text-gray-600 body-font bg-red-100" >
      <p className="text-4xl font-semibold text-gray-900 dark:text-black text-center hover:uppercase hover:bg-slate-500 hover:text-white" >Some of Projects are Below</p>
     <p className=" ml-5 text-2xl font-semibold text-gray-900 dark:text-black text-left hover:uppercase  hover:text-red-500 hover:font-bold" >Frontend Projects are Below</p>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
     
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={shopping} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shopping Website</h1>
            <p className="leading-relaxed mb-3">Shopping Website using HTML , Tailwind CSS , React, Js.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://totalitycorp-frontend-chall-git-28cf5b-adeshmutadak123-gmailcom.vercel.app/' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Demo
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  border-black border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Travelling} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Travelling Website</h1>
            <p className="leading-relaxed mb-3">Travelling Website using HTML , Tailwind CSS , React, Js.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://bucolic-douhua-b8ded0.netlify.app/' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Demo
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black  border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Netflix} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Netflix Clone</h1>
            <p className="leading-relaxed mb-3">Netflix Clone Website using HTML , CSS.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://totalitycorp-frontend-chall-git-28cf5b-adeshmutadak123-gmailcom.vercel.app/' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Demo
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black  border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Port} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Portfolio</h1>
            <p className="leading-relaxed mb-3">Portfolio using HTML , CSS , Js, React.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://main--quiet-begonia-d19b95.netlify.app/' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Demo
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black  border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src='https://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg' alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Working On Blog Website</h1>
            <p className="leading-relaxed mb-3">Coming Soon . . .</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='#' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Demo
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Backend section */}
<section className="text-gray-600 body-font bg-red-100" >
     
     <p className=" ml-5 text-2xl font-semibold text-gray-900 dark:text-black text-left hover:uppercase  hover:text-red-500 hover:font-bold" >Backend Projects are Below</p>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
     
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Porject1} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Book Management System</h1>
            <p className="leading-relaxed mb-3"> Book Management System using Java , Spring Boot , My SQL ,OOPs , Postman , Swagger</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://github.com/adeshmutadak/LibraryMagnementSystem' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Git Link
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  border-black border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Porject2} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Music Management System</h1>
            <p className="leading-relaxed mb-3">Music Management System using using Java , Spring Boot , My SQL ,OOPs , Postman , Swagger.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://github.com/adeshmutadak/Music_Streaming_Appp' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Git Link
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black  border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Porject3} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">E-Commerce Website</h1>
            <p className="leading-relaxed mb-3">E-Commerce Using Java , Spring Boot , My SQL ,OOPs , Postman , Swagger </p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://github.com/adeshmutadak/E-Commerce_Application' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Git Link
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black  border-opacity-60 rounded-lg overflow-hidden ">
          <img className=" lg:h-48 md:h-36 w-full object-cover object-center " src={Porject4} alt="blog"/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Employee Management System </h1>
            <p className="leading-relaxed mb-3">Employee Management  System using using Java , Spring Boot , My SQL ,OOPs , Postman , Swagger.</p>
            <div className="flex items-center flex-wrap ">
             <button className='focus:outline-none  bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'> <a href='https://github.com/adeshmutadak/Employee_AddressOneToOneMapping' className= "text-black inline-flex items-center md:mb-2 lg:mb-0 font-medium">Git Link
              </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}
