import { resumeData } from "./ResumeDatas";
import WorkExperience from "./WorkExp";
import PersonalInfo from "./personalInfo";
import Skills from "./Skils";
import Languages from "./Language";
import Education from "./Education";
import Navbar from "./Navbar";
import ThankYou from "./Thankyou";

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