import Footer from '../components/Footer'
import DeveloperSection from '../components/DeveloperSection'
import HobbiesSection from '../components/Hobbies';
import BodyText from '../components/BodyText';
import IntroSection2 from '../components/IntroPage2';

export default function About() {
  return (
    <div>
      <IntroSection2 />
      <BodyText />
        <DeveloperSection />
        <HobbiesSection />
      {/* <Footer /> */}
    </div>
  );
}
