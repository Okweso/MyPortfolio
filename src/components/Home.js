// src/components/Home.js

import React, { useEffect, useState } from 'react';
import PAUL from '../PAUL.jpg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

const images = [
  {id:1,image:PAUL},
]

  // Simulate component mounting for animations
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay the animation for smoother loading
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left - Intro text with fade-in and slide-up animation */}
        <div
          className={`text-white text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Paul Okweso!
          </h1>
          <p className="text-xl mb-6">
            I'm a passionate software developer focused on creating clean, elegant, and efficient websites and applications.
          </p>
          <a
            href="#projects"
            className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 transform hover:scale-105 transition duration-300"
          >
            View My Work
          </a>
        </div>
        
        {/* Right - Image with zoom-in effect */}
        <div className="mt-8 md:mt-0 md:ml-10">
          <img
            src= {images[0].image}
            alt="Your Portrait"
            className={`rounded-full w-64 h-64 object-cover border-4 border-white transition-transform duration-1000 ${
              isVisible ? 'scale-100' : 'scale-90'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
