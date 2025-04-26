'use client';

import Link from 'next/link';
import { SocialIcons } from './social-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
];

export function Header() {
  const [openMenu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!openMenu);
  };
  const size = useWindowSize();
  const pathname = usePathname();

  return (
    <header>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-0 w-full h-[70px] bg-gray text-gray-text font-mono font-normal mx-auto lg:w-[1380] lg:rounded-b-md'>
        <Link
          className='p-4 ml-1 text-4xl text-white font-sans font-extrabold lg:ml-7'
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
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx('hover:text-light-blue lg:mr-10', {
                    'text-blue': pathname === link.href,
                  })}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              className={clsx(
                'hover:text-light-blue lg:mr-28 whitespace-nowrap',
                {
                  'text-blue': pathname === '/contact',
                }
              )}
              href='/contact'
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
