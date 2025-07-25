"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  shortDescription: string;
  previewImage: string;
  videoEmbed?: string;
  url: string;
  onClick: () => void;
}

export default function ProjectCard({ title, shortDescription, onClick }: ProjectCardProps) {
  return (
    <div
      id="project-card"
      className="relative w-[80%] lg:w-[431px] h-auto lg:min-h-[150px] rounded-xl bg-slate-100 p-6 shadow-lg border-2 border-gray-800
        transition-all duration-200 
        hover:scale-105 hover:shadow-md 
        active:scale-95 active:bg-gray-100
        cursor-pointer"
      onClick={onClick}
    >
      <h1 className="text-2xl font-bold pb-2">{title}</h1>
      <p className="text-sm ">{shortDescription}</p>
    </div>
  );
}
