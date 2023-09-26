import React from 'react'
import HomeImg from '../Assets/Backend/HomeImg.jpg'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <div>
     <section class="text-gray-600 body-font bg-gray-300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-contain object-center rounded w-280  h-250 " alt="hero" src={HomeImg}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-black">I'm a Full Stack Developer
        
      </h1>
      <p class="mb-8 leading-relaxed text-lg">I have experience in building and creating websites. Currently, I love to work on web application using technologies like Java, Spring Boot, MySQL, HTML, CSS,Javascript ,React & Tailwind .</p>
     
    </div>
  </div>
</section> 
<AboutMe/>

    </div>
  )
}
