import { Experience } from './ui/experience/experience';
import { Header } from './ui/header';
import { Project } from './ui/projects/project';
import { ProjectDetails } from './ui/projects/project-details';
import { Recommendation } from './ui/recommendations/recommendation';

export default function Home() {
  return (
    <div>
      <Header />
      <Project />
      <Recommendation />
      <Experience />
      <ProjectDetails open={true} />
    </div>
  );
}
