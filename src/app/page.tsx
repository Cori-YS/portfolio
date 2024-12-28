import { Header } from './ui/header';
import { Project } from './ui/projects/project';

export default function Home() {
  return (
    <div>
      <Header />
      <Project />
      <div className='relative rounded-md border border-gray'>
        <p className='p-3'>Some content here.</p>
        <p className='p-3'>Some content here.</p>
        <p className='p-3'>Some content here.</p>
        <p className='p-3'>Some content here.</p>
        <h2 className='absolute flex top-2 left-40 transform -translate-x-1/2 -translate-y-1/2'>
          <span className='bg-gray-700 px-2 font-bold text-4xl'>“</span>
        </h2>
      </div>
    </div>
  );
}
