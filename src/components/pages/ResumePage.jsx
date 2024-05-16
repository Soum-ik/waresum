import Sidebar from "../sidebar";
import "../../index.css";
import Education from "../education";

function ResumePage() {
  const educations = [
    {
      startYear: "2008",
      endYear: "2008",
      university: "University of Studies",

      title: "Frontend Development",
      description:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
    },
    {
      startYear: "2008",
     
      university: "University of Studies",

      title: "Frontend Development",
      description:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
    },
  ];
  const Experiences = [
    {
      startYear: "2008",
      endYear: "2008",
      university: "University of Studies",

      title: "Junior Ui/Ux Designer",
      description:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
    },
    {
      startYear: "2008",
     
      university: "University of Studies",

      title: "Junior Ui/Ux Designer",
      description:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
    },
  ];
  return (
    <Sidebar>
      <section className="flex flex-wrap my-5 " id="remus">
        <div className=" my-5">
          <h1 className=" font-semibold text-3xl">Resume</h1>
          <div className=" my-5">
            <h1 className=" font-semibold text-base mb-5">Education</h1>
            {educations.map((education, i) => (
              <Education education={education} key={i} />
            ))}
          </div>
          <div className=" my-5">
            <h1 className=" font-semibold text-base mb-5">Experience</h1>
            {Experiences.map((experience, i) => (
              <Education education={experience} key={i} />
            ))}
          </div>

          
        </div>
      </section>
    </Sidebar>
  );
}

export default ResumePage;
