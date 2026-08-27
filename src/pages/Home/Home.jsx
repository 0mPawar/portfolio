import Hero from "../../components/home/Hero";
import AboutPreview from "../../components/home/AboutPreview";
import Stats from "../../components/home/Stats";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import FeaturedSkills from "../../components/home/FeaturedSkills";
import FeaturedExperience from "../../components/home/FeaturedExperience";
import EducationPreview from "../../components/home/EducationPreview";
import FeaturedCertificates from "../../components/home/FeaturedCertificates";
import ContactPreview from "../../components/home/ContactPreview";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Stats />
      <FeaturedProjects />
      <FeaturedSkills />
      <FeaturedExperience />
      <EducationPreview />
      <FeaturedCertificates />
      <ContactPreview />
    </main>
  );
};

export default Home;