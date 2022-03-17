import Footer from '../components/Footer'
import DeveloperSection from '../components/DeveloperSection'
import HobbiesSection from '../components/Hobbies';
import BodyText from '../components/BodyText';

export default function About() {
  return (
    <div>
      <h1>Hello World!</h1>
      <BodyText />
        <DeveloperSection />
        <HobbiesSection />
      <Footer />
    </div>
  );
}
