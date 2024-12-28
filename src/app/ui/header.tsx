import Link from 'next/link';
import { SocialIcons } from './social-icons';

export function Header() {
  return (
    <div className='flex w-3/4 p-7 bg-gray text-gray-text font-mono font-normal text-sm rounded-b-lg justify-center place-self-center'>
      <Link className='mr-14' href='/'>
        Home
      </Link>
      <Link className='mr-14' href='/'>
        Projects
      </Link>
      <Link className='mr-14' href='/'>
        Skills
      </Link>
      <Link className='mr-14' href='/'>
        Experience
      </Link>
      <Link className='mr-36' href='/'>
        Get In Touch
      </Link>
      <SocialIcons />
      <Link className='ml-10' href='/'>
        EN
      </Link>
    </div>
  );
}
