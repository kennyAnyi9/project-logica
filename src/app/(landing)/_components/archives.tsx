import { projectsData } from "@/lib/data";
import ProjectCard from "./logica/card";

const Archives = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 mt-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Archives;
