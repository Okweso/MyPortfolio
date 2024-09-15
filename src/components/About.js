// src/components/About.js

import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate component mounting for animations
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay for smoother animation
  }, []);

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I am a web developer with a passion for creating clean, functional, and visually appealing websites. 
            My journey into software development began with my curiosity about technology and its potential to solve real-world problems.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a strong foundation in both front-end and back-end development, I am focused on delivering user-friendly and scalable solutions.
            I love learning new technologies and constantly improving my skills to stay current in this fast-paced industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
