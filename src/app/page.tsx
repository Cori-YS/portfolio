import { Header } from './ui/header';
import { Project } from './ui/projects/project';
import { Recommendation } from './ui/recommendations/recommendation';

export default function Home() {
  return (
    <div>
      <Header />
      <Project />
      <Recommendation />
    </div>
  );
}
