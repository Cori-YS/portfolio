import Image from 'next/image';

export function Experience() {
  return (
    <div className='grid grid-cols-2 gap-0 w-72 h-44 bg-gray m-5 p-3 rounded-lg'>
      <div className='flex col-span-2'>
        <Image
          src='vercel.svg'
          width={45}
          height={45}
          alt='Picture of the author'
        />
        <h1 className='pl-2 pt-2 font-sans font-bold'>Company Name</h1>
      </div>
      <div className='col-span-2 grid grid-cols-1'>
        <span className='pt-2 font-mono text-sm text-gray-text'>
          Back-end Developer
        </span>
        <span className='font-mono text-sm text-gray-text'>
          May 2023 - Present - 1 year 10 months
        </span>
        <span className='font-mono text-sm text-gray-text'>
          Brasil - Remote
        </span>
      </div>
    </div>
  );
}
