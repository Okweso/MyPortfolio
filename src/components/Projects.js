// src/components/Projects.js

import React from 'react';

const projects = [
  {
    title: 'Secure Voting System',
    description: 'This system was designed to be used in a university/college setup. It enables students to register as voters and vote remotely using their phones or personal computers. Technologies used include PHP, JavaScript, HTML, CSS, Git MySQL, and SQL',
    link: 'https://github.com/Okweso/Voting-System'
  },
  {
    title: 'YouTube Video Saver',
    description: 'This is a web application that enables a user to save YouTube videos directly into their personal devices. Technologies used include  Python (Django), HTML, CSS, and Git',
    link: 'https://github.com/Okweso/YT-Video-Saver'
  },
  {
    title: 'Shirikisha Platform',
    description: 'Shirikisha is a public participation platform for Kenyan citizens to engage with current affairs, express their opinions on various issues (bills, policies, or matters of national importance), and analyze public sentiment. The platform allows users to submit opinions anonymously and view real-time analysis of public sentiment, helping decision-makers understand the pulse of the people.',
    link: 'https://github.com/Okweso/Shirikisha-Platform'
  },
  {
    title: 'Ecommerce Website',
    description: 'This Ecommerce wesbite enables trade to be carried out online between the buyer and the seller. I integrated M-Pesa as the mode of payment. Technologies used include Django Rest Framework, React.js, and Tailwindcss',
    link: 'https://github.com/Okweso/Ecommerce-Website/'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full inline-block transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
