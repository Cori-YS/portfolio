import Image from 'next/image';
import Link from 'next/link';

export function Recommendation() {
  return (
    <div className='bg-gradient-to-r from-white to-background relative rounded-lg w-72 h-48 m-5 p-0.2'>
      <div className='bg-background p-3 rounded-l-lg h-full'>
        <p className='pb-3 font-mono text-sm text-gray-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <Link href='' className='flex'>
          <Image
            src='profile-placeholder.svg'
            width={50}
            height={50}
            alt='Picture of the author'
            className='rounded-full'
          />
          <span className='pt-3 pl-3 font-bold font-sans'>Client Name</span>
        </Link>
      </div>
      <h2 className='absolute flex top-6 left-10 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='bg-gray-700 px-2 font-normal font-sans text-8xl'>
          “
        </span>
      </h2>
    </div>
  );
}
