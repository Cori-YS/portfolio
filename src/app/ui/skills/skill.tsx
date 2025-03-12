import { FaNodeJs } from 'react-icons/fa';

export function Skill() {
  return (
    <div className='grid grid-cols-1 text-center bg-gray w-48 p-5 text-gray-text rounded-lg'>
      <FaNodeJs className='text-8xl mx-auto' />
      <span className='font-mono mb-1'>Node Js</span>
      <progress value={70} max={100} className='h-1 mx-auto'></progress>
    </div>
  );
}
