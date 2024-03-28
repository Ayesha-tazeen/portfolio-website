import React from 'react'
import listOfProjects from './ProjectConstant'
import ProjectCard from './ProjectCard'

function ProjectPage() {
    return (
        <> <div  >
            <h2 className=' pb-4 pt-4  text-center bg-semihead  font-bold text-white name  font-xl md:text-2xl lg:text-3xl'>MY PROJECTS</h2>
            <div className='bg-semihead pb-5'>
                <div className="grid grid-cols-1  gap-6 px-[5%] md:px-[10%]">
                    {listOfProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default ProjectPage