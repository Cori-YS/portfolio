import { Header } from './ui/header';
import Link from 'next/link';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import { SocialIcons } from './ui/social-icons';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex mx-auto justify-center p-5 md:grid md:grid-cols-2 md:gap-12 md:w-[820]'>
        <div className='font-mono grid grid-cols-1 gap-4'>
          <div className='mx-auto sm:grid sm:grid-cols-2 gap-5'>
            <div className='md:col-span-2 md:mt-8'>
              <h2>Back End Developer</h2>
              <h1 className='font-sans text-4xl sm:text-6xl font-extrabold'>
                Hello I&apos;m <br />{' '}
                <span className='text-blue'>Ismélio Cori</span>
              </h1>{' '}
            </div>
            <div className='overflow-hidden h-[200] sm:h-[210] md:hidden'>
              <Image
                src='/cori.png'
                width={640}
                height={640}
                alt='Ismélio Cori Picture'
                className='sm:rounded-full sm:w-[200]'
              />
            </div>
          </div>
          <p className='text-base text-gray-text md:p-3'>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <Link
            href=''
            className='flex p-4 bg-blue border-light-blue border rounded-md font-bold w-48 h-14 justify-center mx-auto'
          >
            DOWNLOAD CV <FaDownload className='ml-3 mt-1' />
          </Link>
          <div className='text-base text-gray-text mx-auto'>
            <SocialIcons />
          </div>
        </div>{' '}
        <Image
          src='/cori.png'
          width={350}
          height={350}
          alt='Ismélio Cori Picture'
          className='hidden rounded-full md:block mt-8'
        />
      </div>
    </div>
  );
}
