import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-300">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-black">
              About Me
            </h1>
            <p class="mb-8 leading-relaxed text-lg">
              I am a recent 2022 graduate, enthusiastic about becoming a
              proficient Full Stack Java developer. My experience encompasses a
              range of projects, notably the Library Management System and
              successful creation of REST APIs. Proficiency in Java, Spring
              Boot, Hibernate, and Rest APIs underscores my technical skills,
              while my commitment to problem-solving is evident through my
              achievement of solving over 300 coding questions on platforms like
              Geekster and LeetCode. My skill set extends beyond the technical ,
              encompassing creative thinking, collaborative teamwork, and
              leadership . <br />
              One of my standout projects includes the
              collaborative development of a Library Management System,
              demonstrating my knack for creating user-friendly solutions.
              Additionally, I've spearheaded the creation of robust REST APIs,
              showcasing my proficiency in facilitating smooth data exchange
              between applications..
            </p>
            <div class="flex justify-center">
              <Link  to={'/project'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Experience 
              </Link>
              <Link to={'/contact'} className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Let's Talk
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
