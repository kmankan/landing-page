"use client";
import { useState } from "react";
import ProjectCard from "./project-card";
import { PreviewModal } from "@/components/resume/PreviewModal";
import { Badge } from "./badge";

type Projects = {
  title: string
  url: string
  previewImage: string
  description: string
  shortDescription: string
  videoEmbed?: string
  githubUrl?: string
}

// Define project data
import { projects } from "@/lib/references/projects";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "Typescript",
  "Node.js",
  "Python",
  "Go",
  "Postgres",
  "Docker",
]

export default function ProjectLayout() {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null)

  return (
    <>
      <h1 className="relative text-4xl font-bold text-center mt-6 font-comfortaa">Projects</h1>
      <div className="px-4 lg:px-0 mt-10 lg:mt-14 2xl:mt-36 font-nunito">
        <div className="max-w-sm lg:max-w-6xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-20 xl:gap-x-24 gap-y-10 w-full">
            {projects.map((project) => (
              <div className="flex justify-center" key={project.title}>
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap gap-2 justify-center items-center my-10 lg:my-20 2xl:my-36 font-geist-mono">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>

      {selectedProject && (
        <PreviewModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </>
  );
}
