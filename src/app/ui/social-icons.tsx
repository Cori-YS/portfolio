import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export function SocialIcons() {
  return (
    <div className='flex text-xl'>
      <Link className='mr-5 hover:text-blue' href='/'>
        <FaLinkedinIn />
      </Link>
      <Link className='mr-5 hover:text-blue' href='/'>
        <FaGithub />
      </Link>
      <Link className='hover:text-blue' href='/'>
        <FaTwitter />
      </Link>
    </div>
  );
}
