'use client';

import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { FaTimes, FaNodeJs } from 'react-icons/fa';

export function ProjectDetails({ open }: { open: boolean }) {
  const [openModal, setModal] = useState(open);
  const handleModal = () => {
    setModal(!openModal);
  };
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains('outside')) {
      handleModal();
    }
  };

  return (
    <div>
      {openModal && (
        <div
          className='outside fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'
          onClick={handleClick}
        >
          <div className='bg-gray shadow-lg rounded-lg w-[900px] h-[600px]'>
            <div className='grid grid-cols-2'>
              <h1 className='ml-5 mt-5 font-sans font-bold text-4xl'>
                Project Name
              </h1>
              <button className='m-3 justify-self-end'>
                <FaTimes className='text-3xl' onClick={handleModal} />
              </button>
            </div>
            <div className='h-[406px] p-5 m-5 font-mono text-gray-text overflow-auto'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus placerat magna nibh, at gravida justo rutrum ut.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Donec vitae sem sollicitudin nisl aliquam
                pretium vel eget nisl. Proin rutrum molestie magna, quis
                convallis nulla porttitor eu. Cras quis est dui. Fusce pretium
                et ex eget feugiat. Mauris semper elit dui, ac pellentesque est
                consequat maximus. Aenean hendrerit ac lacus ac aliquam.
              </p>
              <br />
              <p>
                Curabitur mattis finibus ante eget auctor. Nam pulvinar auctor
                tellus convallis malesuada. Quisque et sapien ante. Phasellus
                luctus, quam id placerat posuere, mi quam hendrerit eros, a
                lacinia felis odio fermentum lacus. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Proin hendrerit urna id enim
                tempor commodo. In rutrum turpis sem, eget pulvinar lorem
                molestie vel. Duis pharetra consectetur ligula, at pharetra leo
                hendrerit eleifend. Curabitur a sapien nec diam aliquet
                consectetur. Maecenas augue mi, ornare a imperdiet a, pharetra
                vitae metus. Nullam mattis interdum tellus, ac fringilla purus.
              </p>
              <br />
              <p>
                Vestibulum nisl mauris, consequat vel feugiat at, commodo eu
                nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed diam magna, pretium quis nisl non, pulvinar euismod orci.
                Aliquam erat volutpat. In tristique placerat neque sed viverra.
                Praesent massa libero, interdum non dui et, fermentum egestas
                lorem. Fusce ligula urna, sodales sit amet euismod non, blandit
                non est. Duis id ligula sit amet dui egestas luctus. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Suspendisse sit amet metus semper, ornare nisi
                et, gravida neque.
              </p>
            </div>
            <div className='flex flex-auto flex-row gap-20 p-5 m-5 border border-black rounded-lg shadow-md shadow-zinc-950 font-mono'>
              <Link href=''>Github</Link>
              <Link href=''>Demo</Link>
              <FaNodeJs className='ml-auto text-3xl' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
