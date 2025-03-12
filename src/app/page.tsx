import { ExperienceDetails } from './ui/experience/experience-details';
import { Header } from './ui/header';

export default function Home() {
  return (
    <div>
      <Header />
      <ExperienceDetails open={true} />
    </div>
  );
}
