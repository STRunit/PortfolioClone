import { useState } from "react";
import {
  AboutSection,
  Contact,
  ExperiencesSection,
  Footer,
  MainSection,
  MenuDrawer,
  NavbarSection,
  SkillsSection,
  WorkSection,
} from "./constants";

function App() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  const handlerClick = () => setIsMobileMenuShow(!isMobileMenuShow);

  return (
    <div>
      <NavbarSection handlerClick={handlerClick} />
      {isMobileMenuShow ? <MenuDrawer handlerClick={handlerClick} /> : <></>}
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <WorkSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
