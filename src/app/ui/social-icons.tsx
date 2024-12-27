import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export function SocialIcons() {
  return (
    <div className='flex text-xl'>
      <Link className='mr-5' href='/'>
        <FaLinkedinIn />
      </Link>
      <Link className='mr-5' href='/'>
        <FaGithub />
      </Link>
      <Link className='mr-5' href='/'>
        <FaTwitter />
      </Link>
    </div>
  );
}
