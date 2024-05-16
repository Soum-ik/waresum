import Sidebar from "../sidebar";
import { FaShop } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { FaFontAwesomeFlag } from "react-icons/fa";
import image1 from "../../../public/img/clients/client-1.png";
import image2 from "../../../public/img/clients/client-2.png";
import image3 from "../../../public/img/clients/client-3.png";
import image4 from "../../../public/img/clients/client-4.png";
import image5 from "../../../public/img/clients/client-5.png";
import image6 from "../../../public/img/clients/client-6.png";
import image7 from "../../../public/img/clients/client-7.png";
import { BiAward, BiHappy } from "react-icons/bi";
import { TbHours24 } from "react-icons/tb";
 
function AboutMePage() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const Do = [
    {
      id: 1,
      p: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dicta, recusandae id quibusdam a nemo consectetur dolorum eaque fugit iusto possimus sunt nulla corrupti. Animi iusto eum officia quibusdam illo?`,
      icon: <FaShop size={30} />,
      name: "E-Comarce",
    },
    {
      id: 1,
      p: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dicta, recusandae id quibusdam a nemo consectetur dolorum eaque fugit iusto possimus sunt nulla corrupti. Animi iusto eum officia quibusdam illo?`,
      icon: <FaPen size={30} />,
      name: "Copywriting",
    },
    {
      id: 1,
      p: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dicta, recusandae id quibusdam a nemo consectetur dolorum eaque fugit iusto possimus sunt nulla corrupti. Animi iusto eum officia quibusdam illo?`,
      icon: <MdOutlineComputer size={30} />,
      name: "Web Design   ",
    },
    {
      id: 1,
      p: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dicta, recusandae id quibusdam a nemo consectetur dolorum eaque fugit iusto possimus sunt nulla corrupti. Animi iusto eum officia quibusdam illo?`,
      icon: <FaFontAwesomeFlag size={30} />,
      name: "   Management    ",
    },
  ];
  const test = [
    {
      id: 1,
      name: "Jhon Do",
      role: "Product Designer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam eveniet qui eaque! Nam, exercitationem numquam fuga, assumenda rerum sapiente obcaecati quos perferendis sint molestias dolorem accusantium nihil sed accusamus.      ",
      image: "image.jpg",
    },
    {
      id: 1,
      name: "Jhon Do",
      role: "Product Designer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam eveniet qui eaque! Nam, exercitationem numquam fuga, assumenda rerum sapiente obcaecati quos perferendis sint molestias dolorem accusantium nihil sed accusamus.      ",
      image: "image.jpg",
    },
  ];

  const fun = [
    { name: "Happy Client", count: 444 , icon: <BiHappy size={30}/>},
    { name: "Working Hours ", count: 444, icon: <TbHours24 size={30}/> },
    { name: "Awards Won", count: 444 , icon: <BiAward size={30}/>},
    
  ];

  return (
    <Sidebar>
      <div className=" mx-5 flex flex-wrap my-5 ">
        <div className="my-5">
          <h1 className=" font-semibold text-3xl">
            About <span className="text-[#04B4E0]">Me</span>
          </h1>
          <div className="flex md:flex-row flex-col mt-5 gap-5">
            <p className=" max-w-md text-black/60">
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
              hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
              condimentum dictum et vel massa. Ut in imperdiet dolor, vel
              consectetur dui.
            </p>
            <div>
              <h1>
                <span className=" pr-3 text-[#04B4E0] font-bold">Age</span> 32
              </h1>
              <h1>
                <span className=" pr-3 text-[#04B4E0] font-bold">
                  Residence
                </span>{" "}
                USA
              </h1>
              <h1>
                <span className=" pr-3 text-[#04B4E0] font-bold">Address</span>{" "}
                88 Some Street, Some Town
              </h1>
              <h1>
                <span className=" pr-3 text-[#04B4E0] font-bold">e-mail</span>{" "}
                [email protected]
              </h1>
              <h1>
                <span className=" pr-3 text-[#04B4E0] font-bold">Phone</span>{" "}
                +0123 123 456 789
              </h1>
            </div>
          </div>
        </div>

        <div className="  my-5">
          <h1 className=" text-2xl">
            What<span className=" text-[#04B4E0]"> I Do</span>
          </h1>
          <div className="mt-5 grid grid-cols-2 gap-10">
            {Do.map((item, index) => (
              <div className=" flex flex-col space-y-3" key={index}>
                <p className=" text-[#04B4E0]">{item.icon}</p>
                <h1 className="  font-semibold  text-lg">{item.name}</h1>
                <p className=" text-sm text-black/60">{item.p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="  my-5">
          <h1 className=" text-2xl">Testimonials</h1>
          <div className="flex mt-5 gap-5">
            {test.map((item, i) => (
              <div
                key={i}
                className=" max-w-sm row-span-2 p-3 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8"
              >
                <div className="h-full flex flex-col justify-center space-y-4 relative">
                  <p className="text-gray-600 md:text-sm">{item.text}</p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">
                      {item.name}
                    </h6>
                    <span className="text-xs text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  my-5">
          <h1 className=" text-2xl">Client</h1>
          <div className="flex mt-5 gap-5  overflow-x-scroll">
            {images.map((item, i) => (
              <div key={i} className=" stroke-red-300">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="  my-5">
          <h1 className=" text-2xl w-full">Pricing</h1>
          <div className=" mt-5 grid grid-cols-2 gap-10">
            <div className=" p-10 border rounded-lg flex items-center justify-center flex-col text-center space-y-3">
              <h1>Silver</h1>
              <div>
                <h1 className=" text-3xl  mb-1">$64</h1>
                <h1>per month</h1>
              </div>
              <div className=" text-black/50 space-y-1">
                <h1>Lorem ipsum dolor</h1>
                <h1>Lorem ipsum dolor ipsum dolor</h1>
                <h1>Lorem ipsum dolor</h1>
              </div>
            </div>
            <div className=" border  rounded-md flex items-center justify-center flex-col text-center space-y-3">
              <h1>Silver</h1>
              <div>
                <h1 className=" text-3xl  mb-1">$64</h1>
                <h1 className=" text-xs">per month</h1>
              </div>
              <div className=" text-black/50 space-y-1">
                <h1>Lorem ipsum dolor</h1>
                <h1>Lorem ipsum dolor ipsum dolor</h1>
                <h1>Lorem ipsum dolor</h1>
                <h1>Lorem ipsum dolor ipsum dolor</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="  my-5">
          <h1 className=" text-2xl w-full">Fun Facts</h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 mt-5">
            {fun.map((item, i) => (
              <div key={i} className=" w-52 flex items-center flex-col   py-10 border text-center space-y-2 hover:shadow-lg transition-all duration-300 hover:mb-1 rounded-lg">
                <h1 className=" text-[#04B4E0] text-center">{item.icon}</h1>
                <h1 className="  text-sm  font-semibold">{item.name}</h1>
                <h1 className="  text-2xl text-black/50">{item.count}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default AboutMePage;
