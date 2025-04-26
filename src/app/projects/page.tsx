import { Project } from '../ui/projects/project';

export default function Projects() {
  return (
    <div>
      <div>
        <div className='p-5'>
          <h1 className='font-sans font-extrabold text-3xl'>Projects</h1>
          <p className='font-mono text-gray-text'>Learning with practice.</p>
        </div>
        <div className='flex overflow-x-auto whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm'>
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
      <div className='flex overflow-x-auto mt-3 whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm'>
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
      <div>
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
