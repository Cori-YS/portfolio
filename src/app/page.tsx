import { Header } from './ui/header';
import Link from 'next/link';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex justify-center mt-14'>
        <div className='font-mono w-96 grid grid-cols-1 gap-5'>
          <div>
            <h2>Back End Developer</h2>
            <h1 className='font-sans text-5xl font-extrabold'>Ismélio Cori</h1>
          </div>
          <p className='text-sm text-gray-text'>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <Link
            href=''
            className='flex p-4 bg-blue border-light-blue border rounded-md font-bold w-48 h-14 justify-center'
          >
            DOWNLOAD CV <FaDownload className='ml-3 mt-1' />
          </Link>
        </div>
        <Image
          src='/cori.png'
          width={300}
          height={300}
          alt='Ismélio Cori Picture'
          className='rounded-full ml-20'
        />
      </div>
    </div>
  );
}
