'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { languages } from '../data/languages';
import { projects } from '../data/projects';
import { tags } from '../data/tags';
import { Project } from '../ui/projects/project';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Projects() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const removeQueryParam = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    console.log(params.toString());
    return params.toString();
  };

  return (
    <div className='lg:w-[1380] md:mx-auto'>
      <div className='md:flex md:mt-8'>
        <div className='md:w-[350px] md:pl-5 lg:p-0'>
          <h1 className='font-sans font-extrabold text-3xl md:text-4xl md:pb-5 lg:text-6xl'>
            Projects
          </h1>
          <p className='font-mono text-gray-text text-nowrap'>
            Learning with practice.
          </p>
        </div>
        <div className='flex overflow-x-auto whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm w-full md:p-7 md:h-[70px] md:mt-3 md:rounded-l-md lg:mt-7 lg:rounded-md'>
          <a
            href={pathname + '?' + removeQueryParam('language')}
            className={clsx('hover:text-light-blue', {
              'text-blue': searchParams.get('language') === null,
            })}
          >
            All
          </a>
          {languages.map((language) => {
            return (
              <a
                key={language.tag}
                href={
                  pathname + '?' + createQueryString('language', language.tag)
                }
                className={clsx('hover:text-light-blue', {
                  'text-blue': searchParams.get('language') === language.tag,
                })}
              >
                {language.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className='flex overflow-x-auto mt-3 whitespace-nowrap space-x-8 p-4 scrollbar-hide hover:scrollbar-default bg-gray font-mono text-gray-text text-sm lg:rounded-md w-full md:p-7 md:mt-7 md:h-[70px]'>
        <a
          href={pathname + '?' + removeQueryParam('tag')}
          className={clsx('hover:text-light-blue', {
            'text-blue': searchParams.get('tag') === null,
          })}
        >
          All
        </a>
        {tags.map((tag) => {
          return (
            <a
              key={tag.tag}
              href={pathname + '?' + createQueryString('tag', tag.tag)}
              className={clsx('hover:text-light-blue', {
                'text-blue': searchParams.get('tag') === tag.tag,
              })}
            >
              {tag.name}
            </a>
          );
        })}
      </div>
      <div className='sm:grid sm:grid-cols-2 sm:mx-auto sm:mt-3 md:grid-cols-3 lg:w-[930px]'>
        {projects.map((project) => {
          const tag = searchParams.get('tag');
          const language = searchParams.get('language');
          console.log(language, tag);
          if (
            (!language && !tag) ||
            (!language && tag && project.tags.includes(tag)) ||
            (language && !tag && project.languages.includes(language)) ||
            (language &&
              tag &&
              project.languages.includes(language) &&
              project.tags.includes(tag))
          ) {
            return (
              <Link
                key={project.id}
                className='hover:text-blue'
                href={pathname + '?' + createQueryString('project', project.id)}
              >
                {' '}
                <Project key={project.id} project={project} />{' '}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
