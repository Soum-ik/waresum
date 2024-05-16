import Sidebar from "../sidebar";
import blog1 from "../../../public/img/blog/blog_post_1.jpg";
import blog2 from "../../../public/img/blog/blog_post_2.jpg";
import blog3 from "../../../public/img/blog/blog_post_3.jpg";
import blog4 from "../../../public/img/blog/blog_post_4.jpg";
import { Link } from "react-router-dom";
function BlogPage() {
  const blog = [
    {
      title: "Why I Switched to Sketch For UI Design",
      date: "05 Mar 2020",
      image: blog1,
      herf: "#",
    },
    {
      title: "Why I Switched to Sketch For UI Design",
      date: "05 Mar 2020",
      herf: "#",
      image: blog2,
    },
    {
      title: "Why I Switched to Sketch For UI Design",
      date: "05 Mar 2020",
      image: blog3,
      herf: "#",
    },
    {
      title: "Why I Switched to Sketch For UI Design",
      date: "05 Mar 2020",
      image: blog4,
      herf: "#",
    },
  ];

  return (
    <Sidebar>
      <div className=" mx-5 flex flex-wrap my-5 ">
        <div className=" my-5">
          <h1 className=" font-semibold text-3xl">Blog</h1>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {blog.map((item, index) => (
              <Link to={item.herf} className="block space-y-1.5" key={index}>
                <img src={item.image} alt="" />
                <h1 className=" text-black/60 text-xs">{item.date}</h1>
                <h1>{item.title}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default BlogPage;
