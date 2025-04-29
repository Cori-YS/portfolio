import portfolio from './portfolio';

export type PersonalProject = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  githubLink: string;
  demoLink?: string;
  iconId: string;
  tags: string[];
  languages: string[];
};

const projects = [portfolio];

export { projects };
