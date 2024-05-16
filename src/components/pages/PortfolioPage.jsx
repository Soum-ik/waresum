import { useState } from "react";
import Sidebar from "../sidebar";
import image1 from "../../../public/img/portfolio/1.jpg";
import image2 from "../../../public/img/portfolio/2.jpg";
import image3 from "../../../public/img/portfolio/3.jpg";
import image4 from "../../../public/img/portfolio/5.jpg";

function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState("All"); // State to keep track of the selected item

  const projects = [
    { id: 1, image: image1, name: "Detailed" },
    { id: 2, image: image2, name: "MarkUp" },
    { id: 3, image: image3, name: "SoundCloud" },
    { id: 4, image: image4, name: "Video" },
  ];

  const item = ["All", "Detailed", "MarkUp", "SoundCloud", "Video", "Youtube"];

  // Function to handle item click
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  // Filter projects based on the selected item
  const filteredProjects =
    selectedItem === "All"
      ? projects
      : projects.filter((project) => project.name === selectedItem);

  return (
    <Sidebar>
      <div className="mx-5 flex flex-wrap my-5">
        <div className="my-5">
          <h1 className="font-semibold text-3xl">Portfolio</h1>
          <div className="flex gap-5 mt-5">
            {item.map((itemName, i) => (
              <h1
                className={`text-xs cursor-pointer select-none ${
                  selectedItem === itemName ? "text-blue-500" : ""
                }`}
                key={i}
                onClick={() => handleItemClick(itemName)}
              >
                {itemName}
              </h1>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            {filteredProjects.map((project, i) => (
              <div key={i} className="">
                <img src={project.image} alt="" className=" hover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default PortfolioPage;
