import { ProjectCardProps, Tag } from "@/lib/data";
import React from "react";

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  tags,
  title,
  description,
  startedCount,
}) => {
  const getTagColors = (color: Tag["color"]) => {
    const colors = {
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
      gray: "bg-gray-100 text-gray-700 border-gray-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      red: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[color] || colors.gray;
  };

  return (
    <a
      href={href}
      className="flex flex-col rounded-md border bg-white p-3 transition-colors z-20 hover:border-gray-300 hover:bg-gray-50"
    >
      <span className="flex justify-between gap-1.5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-md border capitalize ${getTagColors(
              tag.color
            )} px-1 py-0.5 text-xs tracking-wide`}
          >
            {tag.text}
          </span>
        ))}
      </span>
      <span className="my-3 flex flex-col">
        <span className="mb-1 font-medium">{title}</span>
        <span className="text-sm text-gray-600">{description}</span>
      </span>
      <span className="flex items-center gap-2 text-xs text-gray-400">
        {startedCount} solutions
      </span>
    </a>
  );
};

export default ProjectCard;
