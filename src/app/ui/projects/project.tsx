import { FaNodeJs } from 'react-icons/fa';

export function Project() {
  return (
    <div className='grid grid-cols-2 gap-0 w-72 h-44 bg-gray m-5 p-2 rounded-lg'>
      <h1 className=''>Project Name</h1>
      <FaNodeJs className='text-4xl justify-self-end' />
      <p className='col-span-2 mt-0 pt-0 text-sm font-normal text-gray-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </div>
  );
}
