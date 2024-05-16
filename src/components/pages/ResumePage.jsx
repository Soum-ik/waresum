import Sidebar from "../sidebar";
import "../../index.css";
import Education from "../education";
import Desgin from "../Desgin";
import Knowledge from "../knowledge";

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

  const Skills = [
    { id: 1, percentage: 20, name: "React" },
    { id: 2, percentage: 20, name: "React" },
    { id: 3, percentage: 20, name: "Rode js" },
    { id: 4, percentage: 20, name: "React" },
  ];

  const data = [
    "Marketing",
    "Print",
    "Digital",
    "Design ",
    "Social",
    "Media",
    "Time ",
    "Management ",
    "Social ",
    "Networking ",
    "Flexibility",
  ];
  return (
    <Sidebar>
      <section className="flex flex-wrap my-5 " id="remus">
        <div className=" my-5">
          <h1 className=" font-semibold text-3xl">Resume</h1>
          <div className=" grid grid-cols-1 lg:gap-10 lg:grid-cols-2">
            <div>
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
            <div>
              <div className=" my-5">
                <h1 className=" font-semibold text-lg mb-5">Design Skills</h1>
                {Skills.map((design, index) => (
                  <Desgin design={design} key={index} />
                ))}
              </div>
              <div className=" my-10">
                <h1 className=" font-semibold text-lg mb-5">Codeing Skills</h1>
                {Skills.map((design, index) => (
                  <Desgin design={design} key={index} />
                ))}
              </div>
              <div className=" my-10">
                <h1 className=" font-semibold text-lg mb-5">Knowledges</h1>
                <div className=" max-w-[450px] flex flex-wrap gap-2">
                  {data.map((str, index) => (
                    <Knowledge info={str} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold text-xl">Certificates</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5">
              <div className=" rounded-lg border ">
                <img src={''} alt="" />
                <div className="  p-3">
                  <h1 className=" text-lg font-medium">Psyhology of Intertnation Design</h1>
                  <h1 className=" text-sm text-black/60">Membership ID: XXXX</h1>
                  <h1 className="text-xs text-black/40">19 April 2018</h1>
                </div>
              </div>
              <div className=" rounded-lg border ">
                <img src={''} alt="" />
                <div className="  p-3">
                  <h1 className=" text-lg font-medium">Psyhology of Intertnation Design</h1>
                  <h1 className=" text-sm text-black/60">Membership ID: XXXX</h1>
                  <h1 className="text-xs text-black/40">19 April 2018</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Sidebar>
  );
}

export default ResumePage;
