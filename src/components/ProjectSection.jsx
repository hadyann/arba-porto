import { projectsData } from '@/lib/data'
import React from 'react'
import Project from './project'

const ProjectSection = () => {
  

  return (
    <section className='px-8 scroll-mt-24' id='projects'>
      <h2  className='text-4xl font-bold mb-4 border-b border-blue-800 w-fit'>MyProjects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
           <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}



export default ProjectSection
