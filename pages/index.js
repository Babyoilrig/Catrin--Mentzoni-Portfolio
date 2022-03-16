import Footer from '../components/Footer'
import ProjectsSection1 from '../components/ProjectSection';
import ProjectsSection3 from '../components/ProjectSection3';
import ProjectsSection2 from '../components/ProjectSection2';
import ProjectHeading from '../components/ProjectHeading';



export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ProjectHeading />
      <ProjectsSection1 />
      <ProjectsSection2 />
      <ProjectsSection3 />
      <Footer />
    </div>
  );
}
