import { resumeData } from "./resumeData.js";
import WorkExperience from "./WorkExp.jsx";
import PersonalInfo from "./personalInfo.jsx";
import Skills from "./Skils.jsx";
import Languages from "./Language.jsx";
import Education from "./Education.jsx";
import Navbar from "./Navbar.jsx";
import ThankYou from "./Thankyou.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="personal" className="scroll-mt-24">
        <PersonalInfo personalInfo={resumeData.personalInfo} />
      </section>
      <section id="experience">
        <WorkExperience workExperience={resumeData.workExperience} />
      </section>
      <section id="skills">
        <Skills skills={resumeData.skills} tools={resumeData.tools} />
      </section>
      <section id="education">
        <Education education={resumeData.education} />
      </section>
      <section id="languages">
        <Languages languages={resumeData.languages} />
      </section>
      <ThankYou />
    </>
  );
};

export default App;