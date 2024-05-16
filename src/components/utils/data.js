import { BiBookBookmark, BiSolidBusiness } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";


const sideBar = [
  { id: 1, icon: <IoMdHome size={30} />, name: "Home" },
  { id: 1, icon: <BsPerson size={30} />, name: "About Me" },
  { id: 1, icon: <MdCastForEducation size={30} />, name: "Resume" },
  { id: 1, icon: <BiBookBookmark size={30} />, name: "Portfolio" },
  { id: 1, icon: <BiSolidBusiness size={30} />, name: "Blog" },
  { id: 1, icon: <CiMail size={30} />, name: "Contact" },
];

const social = [
  { id: 1, icon: <BsLinkedin /> },
  { id: 2, icon: <BsFacebook /> },
  { id: 3, icon: <BsTwitter /> },
];

export { sideBar, social };
