import { FaNodeJs } from 'react-icons/fa';

export function Project() {
  return (
    <div className='grid grid-cols-2 gap-0 h-44 bg-gray p-3 rounded-lg sm:w-72 m-5 md:mb-0'>
      <h1 className='font-sans'>Project Name</h1>
      <FaNodeJs className='text-4xl justify-self-end' />
      <p className='col-span-2 mt-0 pt-0 font-mono text-sm text-gray-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </div>
  );
}
