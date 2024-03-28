import React from 'react';
import '../Home/Skills.css'


const ProjectCard = ({ title, description,additional_description, stack, link, image }) => {
  return (
    
    <div className="bg-wall slider flex md:flex-row flex-col justify-between text-white shadow-lg shadow-black p-4 rounded-md transition-transform transform hover:scale-105">
     <div className='md:w-[50%]'>
      <h2 className="text-xl  text-black font-serif font-bold mb-2">{title}</h2>
      <p className="text-black mb-4">{description}</p>
      <p className="text-black  hidden md:inline-block mb-4">{additional_description}</p>
      <p className="text-sm text-gray-900 mb-2">{stack}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
      </div>
<div className='md:w-[50%]'>

      <img
        src={`${image}`}
        alt={`${title} Preview`}
        className=" md:h-[350px] border-[5px] border-head fade-pic md:w-[600px] h-[150px]  w-[300px] pl-3 md:pl-0 object-fill mb-4 rounded-sm"
      />
      </div>
    </div>
  
  );
};

export default ProjectCard;
