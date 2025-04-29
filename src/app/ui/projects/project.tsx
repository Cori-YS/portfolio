import { PersonalProject } from '@/app/data/projects';
import { FaNodeJs } from 'react-icons/fa';

export function Project({ project }: { project: PersonalProject }) {
  return (
    <div className='grid grid-cols-2 gap-0 h-44 bg-gray p-3 rounded-lg sm:w-72 m-5 md:mb-0'>
      <h1 className='font-sans'>{project.title}</h1>
      <FaNodeJs className='text-4xl justify-self-end' />
      <p className='col-span-2 mt-0 pt-0 font-mono text-sm text-gray-text'>
        {project.shortDescription}
      </p>
    </div>
  );
}
