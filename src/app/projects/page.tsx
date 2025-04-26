import { Project } from '../ui/projects/project';

export default function Projects() {
  return (
    <div className='lg:w-[1380] md:mx-auto'>
      <div className='md:flex md:mt-8'>
        <div className='md:w-[350px]'>
          <h1 className='font-sans font-extrabold text-3xl md:text-6xl md:pb-5'>
            Projects
          </h1>
          <p className='font-mono text-gray-text text-nowrap'>
            Learning with practice.
          </p>
        </div>
        <div className='flex overflow-x-auto whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm md:rounded-md w-full md:p-7 md:mt-7 md:h-[70px]'>
          <a href='#' className='hover:text-blue'>
            All
          </a>
          <a href='#' className='hover:text-blue'>
            Node Js
          </a>
          <a href='#' className='hover:text-blue'>
            Python
          </a>
          <a href='#' className='hover:text-blue'>
            PHP
          </a>
          <a href='#' className='hover:text-blue'>
            Java
          </a>
        </div>
      </div>
      <div className='flex overflow-x-auto mt-3 whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm md:rounded-md w-full md:p-7 md:mt-7 md:h-[70px]'>
        <a href='#' className='hover:text-blue'>
          All
        </a>
        <a href='#' className='hover:text-blue'>
          API
        </a>
        <a href='#' className='hover:text-blue'>
          Microservices
        </a>
        <a href='#' className='hover:text-blue'>
          Tests
        </a>
        <a href='#' className='hover:text-blue'>
          Mobile
        </a>
      </div>
      <div className='sm:grid sm:grid-cols-2 sm:mx-auto sm:mt-3 md:grid-cols-3 lg:w-[930px]'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
