import React from 'react'
import { Link } from 'react-router-dom'
import Resume from '../Assets/Software.pdf'
import AdeshImg from '../Assets/AdeshImg.jpeg'
export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/portfolio'} className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <img className='rounded-full w-16 h-15 cursor-pointer' src={AdeshImg} alt="" />
      <span className="ml-3 text-xl cursor-pointer hover:text-slate-300">Adesh</span>
    </Link>
    <span className=' flex flex-wrap ml-12 flex-col md:flex-row items-center' >
        <a className='mr-10 text-xl hover:text-blue-500 hover:text-2xl' href="https://www.linkedin.com/in/adesh-mutadak/"><i className="fa-brands fa-linkedin"></i></a>
        <a className='mr-10  hover:text-grey-500 hover:text-lg ' href="https://github.com/adeshmutadak"><i className="fa-brands fa-github"></i></a>
        <a className='mr-10  hover:text-red-500 hover:text-lg' href="mailto:adeshmutadak@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        <a className='mr-10   hover:text-white hover:text-lg' href= {Resume}><i className="fa-regular fa-file"></i></a>
        <a className='mr-10  hover:text-red-500 hover:text-lg' href="#"><i class="fa-brands fa-instagram"></i></a>
      </span>
    <nav className="md:ml-auto flex flex-wrap items-center  justify-center text-xl">
      <Link to={'/'} className="mr-5 cursor-pointer hover:text-slate-300">Home</Link>
      <Link to={'/project'} className="mr-5 cursor-pointer hover:text-slate-300">Projects</Link>
      <Link to={'/experience'} className="mr-5 cursor-pointer hover:text-slate-300">Experience</Link>
      <Link to={'/contact'} className="mr-5 cursor-pointer hover:text-slate-300">Contact Us</Link>
    </nav>
    <Link to={'/portfolio'} className="inline-flex items-center bg-red-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Portfolio
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
    </div>
  )
}
