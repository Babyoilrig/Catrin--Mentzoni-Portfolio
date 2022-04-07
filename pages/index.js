import Footer from '../components/Footer'
import ProjectsSection1 from '../components/ProjectSection';
import ProjectsSection3 from '../components/ProjectSection3';
import ProjectsSection2 from '../components/ProjectSection2';
import ProjectHeading from '../components/ProjectHeading';
import YoutubeVideo from '../components/VideoSection';
import IntroPage1 from '../components/Intro';
import YoutubeEmbed from '../components/VideoSection';






export default function Home() {
  return (
    <div>
      <IntroPage1 />
      {/* <YoutubeVideo /> */}
      {/* <YoutubeEmbed embedId="GNbKZls3W4w"/> */}

      
      
      
      <ProjectHeading />
      <ProjectsSection1 />
      <ProjectsSection2 />
      <ProjectsSection3 />
      <Footer />
    </div>
  );
}
