import Link from 'next/link';
import { SocialIcons } from './social-icons';
import { FaBars } from 'react-icons/fa';

export function Header() {
  return (
    <header>
      <div className='grid grid-cols-2 w-full h-[80px] bg-gray text-gray-text font-mono font-normal text-sm '>
        <Link
          className='p-5 text-4xl text-white font-sans font-extrabold'
          href='/'
        >
          Ismélio
          <span className='text-blue'>.</span>
        </Link>
        <nav className='hidden p-7 mx-auto'>
          <Link className='mr-10' href='/'>
            Home
          </Link>
          <Link className='mr-10' href='/'>
            About
          </Link>
          <Link className='mr-10' href='/'>
            Projects
          </Link>
          <Link className='mr-10' href='/'>
            Skills
          </Link>
          <Link className='mr-10' href='/'>
            Experience
          </Link>
          <Link className='mr-36' href='/'>
            Get In Touch
          </Link>
          <SocialIcons />
          <Link className='' href='/'>
            EN
          </Link>
        </nav>
        <button className='p-5 text-3xl justify-self-end'>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
