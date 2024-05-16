import { BiLocationPlus, BiPhone } from "react-icons/bi";
import Sidebar from "../sidebar";
import { BsMailbox } from "react-icons/bs";
import { RiGhost2Fill } from "react-icons/ri";
function ContactPage() {
  const contactDetails = [
    { id: 1, icon: <BiLocationPlus size={30} />, name: "San Francisco" },
    { id: 2, icon: <BiPhone size={30} />, name: "415-832-2000    " },
    { id: 3, icon: <BsMailbox size={30} />, name: "[email protected]" },
    {
      id: 4,
      icon: <RiGhost2Fill size={30} />,
      name: "Freelance Available    ",
    },
  ];

  return (
    <Sidebar>
      <div className=" mx-5 lg:mx-0  flex flex-wrap my-5">
        <div className="my-5">
          <h1 className="font-semibold text-3xl">Contact</h1>
          <div className=" flex justify-between  flex-col lg:flex-row gap-5 mt-10 ">
            <div className=" space-y-5 ">
              {contactDetails.map((item) => (
                <div
                  className=" w-60 py-5 gap-3 border flex items-center justify-center flex-col   "
                  key={item.id}
                >
                  <h1 className=" text-primary">{item.icon}</h1>
                  <h1 className=" font-medium">{item.name}</h1>
                </div>
              ))}
            </div>
            <div className="">
              <div className="w-[50%] ">
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  <a href="https://www.gps.ie/">gps trackers</a>
                </iframe>
              </div>
              <h1 className=" font-semibold mt-10">
                How Can <span className=" text-primary">I Help You?</span>
              </h1>
              <div className=" grid my-5 gap-4">
                <input
                  placeholder="Full Name"
                  className=" min-w-[300px] md:min-w-[400px] border  px-4 rounded-lg select-none py-2"
                  type="text"
                />
                <input
                  placeholder="Email Address"
                  className=" min-w-[300px] md:min-w-[400px] border  px-4 rounded-lg select-none py-2"
                  type="text"
                />
                <input
                  placeholder="Subject"
                  className=" min-w-[300px] md:min-w-[400px] border  px-4 rounded-lg select-none py-2"
                  type="text"
                />
                <textarea
                  placeholder="Message"
                  className=" min-w-[300px] md:min-w-[400px] border  px-4 rounded-lg select-none py-2"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button className=" text-center shadow-md border rounded-3xl mt-5 inline-block text-primary  px-5 text-lg hover:bg-primary hover:text-white py-2 transition-all duration-500">
            Submit Now
          </button>
        </div>
      </div>
    </Sidebar>
  );
}

export default ContactPage;
