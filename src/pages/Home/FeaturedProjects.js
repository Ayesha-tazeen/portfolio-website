


import React, { useState, useEffect } from 'react';
import amazonclone from "../../Asset/amazonclone.jpg";
import journeyexplorer from "../../Asset/jorney-explorer.png";
import currencyconverter from "../../Asset/currency-converter-image.jpg"

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce application (Amazon Clone)",
      description: "A comprehensive e-commerce application, inspired by Amazon's interface, featuring essential functionalities such as API integration for product management, user authentication with sign-in and create account pages, a fully functional shopping cart, and seamless checkout bill calculation.",
      additional_description: "Our Amazon Clone project not only replicates the familiar shopping experience of Amazon but also offers a robust and user-friendly interface for both customers and administrators. With a focus on scalability and performance, the application is designed to handle large volumes of data and concurrent user interactions efficiently.",
      stack: "React.js, Redux-toolkit, Tailwind CSS, Firebase",
      link: "https://amazon-clone-by-ayesha.netlify.app/",
      image: amazonclone
    },
    {
      id: 2,
      title: "Journey Explorer",
      description: "Embark on a digital voyage with 'Journey Explorer' - where wanderlust meets seamless travel planning! 🌍✈️ .It redefines travel planning by offering a seamless and interactive platform to discover new destinations and plan unforgettable journeys.",
      additional_description: "Journey Explorer redefines travel planning by offering a seamless and interactive platform to discover new destinations and plan unforgettable journeys. With comprehensive travel guides, customizable itineraries, and real-time updates, this application empowers travelers to explore the world with confidence and convenience.",
      stack: "React, Tailwind CSS",
      link: "https://journey-explorer-by-ayesha.netlify.app/",
      image: journeyexplorer
    },
    {
      id:3,
      title:"Currency converter",
      description:"Convert currencies using a simple React.js application.Using fetch API ",
      additional_description:"hello",
      link:'https://currencyconverter-app-by-ayesha.netlify.app/',
      image:currencyconverter
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    const newIndex = currentProjectIndex === 0 ? featuredProjects.length - 1 : currentProjectIndex - 1;
    setCurrentProjectIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProjectIndex]);

 

  return (
    <section className="bg-semihead py-10">
      <h2 className="text-3xl text-white name text-center font-bold mb-8">Featured Projects</h2>
      <div className="w-3/4 mx-auto rounded-lg bg-white relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10" onClick={prevProject}>&lt;</button>
        <div className="carousel relative overflow-hidden">
          <div className="project flex items-center justify-center">
            <div className='h-[500px] rounded-lg'>
              <img src={featuredProjects[currentProjectIndex].image} alt={featuredProjects[currentProjectIndex].title} className="rounded-lg md:h-4/5 pt-3 shadow-md overflow-hidden max-w-full" />
            </div>
            <div className="project-info absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{featuredProjects[currentProjectIndex].title}</h3>
              <p className="text-gray-700 mt-2">{featuredProjects[currentProjectIndex].description}</p>
              <a href={featuredProjects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer" className="mt-4 block text-blue-600 font-semibold hover:underline">Learn More</a>
            </div>
          </div>
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10" onClick={nextProject}>&gt;</button>
      </div>
    </section>
  );
  
}

export default FeaturedProjects;
