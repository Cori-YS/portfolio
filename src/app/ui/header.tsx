'use client';

import Link from 'next/link';
import { SocialIcons } from './social-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0, // <--- 0 instead of undefined
    height: 0, // <--- 0 instead of undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export function Header() {
  const [openMenu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!openMenu);
  };
  const size = useWindowSize();

  return (
    <header>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-0 w-full h-[70px] bg-gray text-gray-text font-mono font-normal'>
        <Link
          className='p-4 ml-7 text-4xl text-white font-sans font-extrabold'
          href='/'
        >
          Ismélio
          <span className='text-blue'>.</span>
        </Link>
        <div
          className={clsx(
            {
              'fixed top-[70] h-full w-full bg-black': openMenu,
            },
            {
              hidden: !openMenu && size.width < 1024,
            }
          )}
        >
          <nav
            className={clsx(
              'lg:col-span-2 lg:flex lg:p-7 lg:text-sm lg:justify-items-end',
              {
                'grid grid-cols-1 gap-5 p-6': openMenu,
              }
            )}
          >
            <Link className='hover:text-light-blue lg:mr-10' href='/'>
              Home
            </Link>
            <Link className='hover:text-light-blue lg:mr-10' href='/'>
              About
            </Link>
            <Link className='hover:text-light-blue lg:mr-10' href='/'>
              Projects
            </Link>
            <Link className='hover:text-light-blue lg:mr-10' href='/'>
              Skills
            </Link>
            <Link className='hover:text-light-blue lg:mr-10' href='/'>
              Experience
            </Link>
            <Link
              className='hover:text-light-blue lg:mr-28 whitespace-nowrap'
              href='/'
            >
              Get In Touch
            </Link>
            <div className='mr-10'>
              <SocialIcons />
            </div>
            <Link className='hover:text-light-blue' href='/'>
              EN
            </Link>
          </nav>
        </div>
        <button
          className='p-5 text-3xl justify-self-end hover:text-blue lg:hidden'
          onClick={handleClick}
        >
          {!openMenu && <FaBars />}
          {openMenu && <FaTimes />}
        </button>
      </div>
    </header>
  );
}
