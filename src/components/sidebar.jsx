  import { BiBookBookmark, BiSolidBusiness } from "react-icons/bi";
  import { BsPerson } from "react-icons/bs";
  import { CiMail } from "react-icons/ci";
  import { IoMdHome } from "react-icons/io";
  import { MdCastForEducation } from "react-icons/md";
  import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

  import { TiThMenu } from "react-icons/ti";
  import { IoClose } from "react-icons/io5";

  import logo from "../../public/img/main_photo.jpg";
  import { useState } from "react";
  import { Link } from "react-router-dom";

  // eslint-disable-next-line react/prop-types
  function Sidebar({ children }) {
    const [isNav, setIsNav] = useState(false);
    const sideBar = [
      { id: 1, herf: "/", icon: <IoMdHome size={30} />, name: "Home" },
      { id: 2, herf: "/about-me", icon: <BsPerson size={30} />, name: "About Me" },
      {
        id: 3,
        herf: "/resume",
        icon: <MdCastForEducation size={30} />,
        name: "Resume",
      },
      {
        id: 4,
        herf: "/portfolio",
        icon: <BiBookBookmark size={30} />,
        name: "Portfolio",
      },
      { id: 5, herf: "/blog", icon: <BiSolidBusiness size={30} />, name: "Blog" },
      { id: 6, herf: "/contact", icon: <CiMail size={30} />, name: "Contact" },
    ];

    const social = [
      { id: 1, icon: <BsLinkedin /> },
      { id: 2, icon: <BsFacebook /> },
      { id: 3, icon: <BsTwitter /> },
    ];

    return (
      <div className=" relative  lg:py-0">
        <div className="  lg:grid lg:grid-cols-3 gap-10  mx-auto  ">
          <div className=" lg:flex hidden max-h-[100vh] over">
            <div className=" my-5 space-y-5  px-3">
              {sideBar.map((item) => (
                <Link
                  to={item.herf}
                  key={item.id}
                  className=" cursor-pointer block"
                >
                  <div className=" flex items-center flex-col px-2 gap-[1px]">
                    <p className=" text-gray-400/80 hover:text-[#04B4E0] transition-all duration-300">
                      {item.icon}
                    </p>
                    <p className="w-full inline-block text-center text-xs  text-black/50">
                      {item.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className=" bg-[#04B4E0] max-h-[200vh] md:min-w-[350px] h-[180vh] ">
              <div
                className=" flex items-center justify-center
                flex-col w-full  mt-10 lg:px-8  xl:px-16"
              >
                <img
                  className=" object-cover !rounded-full size-48 border-4 border-white border-b"
                  src={logo}
                  alt=""
                />
                <div className=" mt-10 text-center !text-white">
                  <h1 className=" !text-white text-xl font-bold ">Sadekur Rahman </h1>
                  <h1 className=" !text-white text-sm mt-2"> Managing Director </h1>
                </div>
                <div className=" flex items-center justify-center  gap-3 mt-4 text-white">
                  {social.map((icon, index) => (
                    <h1 key={index}>{icon.icon}</h1>
                  ))}
                </div>

                <button className=" shadow-md border rounded-3xl mt-20 inline-block text-white  px-5 text-lg hover:bg-white hover:text-[#04B4E0] py-2 transition-all duration-500">
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/*children component  */}
          <div className=" lg:col-span-2 w-full overflow-hidden ">{children}</div>
          <div className=" lg:hidden ">
            <button
              onClick={() => setIsNav(!isNav)}
              className=" bg-[#04B4E0] text-white px-6 py-6 rounded-full shadow-md absolute top-1 right-1 md:right-3 md:top-5
                    "
            >
              {isNav ? <IoClose /> : <TiThMenu />}
            </button>
          </div>
        </div>

        {isNav && (
          <div className=" lg:hidden bg-[#04B4E0] absolute top-24 right-10  rounded-md pb-10 ">
            <div
              className=" flex items-center justify-center
              flex-col  mx-2 mt-10 px-6"
            >
              <img
                className=" rounded-full size-48 border-4 border-white border-b"
                src={logo}
                alt=""
              />
              <div className=" mt-10 text-center !text-white">
                <h1 className=" !text-white text-3xl font-bold ">Alex Smith</h1>
                <h1 className=" !text-white text-lg mt-2"> Web Designer</h1>
              </div>
              <div className=" flex items-center justify-center  gap-3 mt-4 text-white">
                {social.map((icon, index) => (
                  <h1 key={index}>{icon.icon}</h1>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default Sidebar;
