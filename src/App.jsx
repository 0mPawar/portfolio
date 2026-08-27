import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Skills from "./pages/Skills/Skills";
import Technologies from "./pages/Technologies/Technologies";
import Experience from "./pages/Experience/Experience";
import ExperienceDetails from "./pages/Experience/ExperienceDetails";
import Education from "./pages/Education/Education";
import EducationDetails from "./pages/Education/EducationDetails";
import Certificates from "./pages/Certificates/Certificates";
import Achievements from "./pages/Achievements/Achievements";
import Competitions from "./pages/Competitions/Competitions";
import GitHub from "./pages/GitHub/GitHub";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import IconShowcase from "./pages/IconShowcase/IconShowcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/icons" element={<IconShowcase />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.PROJECT_DETAILS} element={<ProjectDetails />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          <Route path={ROUTES.TECHNOLOGIES} element={<Technologies />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.EXPERIENCE_DETAILS} element={<ExperienceDetails />}/>
          <Route path={ROUTES.EDUCATION} element={<Education />} />
          <Route path={ROUTES.EDUCATION_DETAILS} element={<EducationDetails />} />
          <Route path={ROUTES.CERTIFICATES} element={<Certificates />} />
          <Route path={ROUTES.ACHIEVEMENTS} element={<Achievements />} />
          <Route path={ROUTES.COMPETITIONS} element={<Competitions />} />
          <Route path={ROUTES.GITHUB} element={<GitHub />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path={ROUTES.CATCH_ALL} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
