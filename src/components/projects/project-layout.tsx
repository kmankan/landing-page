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
}

// Define project data
const projects = [
  {
    title: 'Snack Safari',
    url: 'https://snack-safari.vercel.app/',
    previewImage: '/projects/snack-safari-preview.png',
    description: 'A fully functional e-commerce website selling the best snacks from around the world. Next.js frontend with ExpressJS backend. Neon hosted Postgres DB with Prisma ORM. Auth using Firebase. Includes full Stripe integration.',
    shortDescription: 'A fully functional e-commerce website selling the best snacks from around the world.'
  },
  {
    title: 'Felt Sense',
    url: 'https://felt-sense.vercel.app/',
    previewImage: '/projects/felt-sense-preview.png',
    description: 'An AI voice companion for exploring your emotions and working through difficulties. Built fully on Next.js with serverless functions, Postgres DB on Neon using Prisma ORM. Auth with AuthKit by WorkOS. Utilizes Deepgram for speech-to-text, Claude-Sonnet-3.5 for text generation, and Cartesia for text-to-speech.',
    shortDescription: 'An AI voice companion for exploring your emotions and working through difficulties.',
    videoEmbed: 'https://www.loom.com/embed/d73dcd71a85645b98cfaa75190e3c550?sid=16f09d37-d259-4a97-8f21-6188a1070916'
  },
  {
    title: 'Art & Friends',
    url: 'https://art-and-friends.mkan.xyz/',
    previewImage: '/projects/artandfriends-preview.png',
    description: 'A social media app for creating and sharing 3D art, as well as uploading your favourite images with your timeline. Built fully on Next.js, pgSQL on Vercel, AWS S3 for storage, and Clerk for authentication.',
    shortDescription: 'A social media app for generating and sharing art with your timeline.',
    videoEmbed: 'https://www.loom.com/embed/ad9e26f12bb84cd2a249feaf439d0b69?sid=4009a7ec-9a59-4f6c-88be-b342facdb5b7'
  },
  {
    title: 'PaperPilot',
    url: 'https://github.com/kmankan/paperpilot/',
    previewImage: '/projects/paperpilot-preview.png',
    description: 'Interactive PDF reader that auto-generates context to help understand scientific articles. Built with React and PDF.js.',
    shortDescription: 'Interactive PDF reader that auto-generates context to help understand scientific articles.',
    videoEmbed: 'https://www.loom.com/embed/7f3d59e360d24cf3af156d8d72a2ec84?sid=72f0bdc0-1047-41e2-ad5a-ef4c95804e68'
  },
  {
    title: 'Converse Chronicle',
    url: 'https://github.com/kmankan/converse-chronicle',
    previewImage: '/projects/converse-chronicle-preview.png',
    description: 'A React Native mobile application that enables users to record, transcribe, and analyze conversations with AI-powered insights. Features real-time audio visualization, accurate transcription with diarization, and conversation summarization.',
    shortDescription: 'React Native mobile app for recording and analyzing conversations.'
  },
  {
    title: 'Algorithm Visualizer',
    url: 'https://malin-algorithms.vercel.app/',
    previewImage: '/projects/algorithm-visualizer-preview.png',
    description: 'A visualizer for sorting and searching algorithms. Built purely with React and TailwindCSS.',
    shortDescription: 'A visualizer for search and sort algorithms.'
  }
]

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
      <div className="px-4 lg:px-0 mt-10 lg:mt-14 xl:mt-36 font-nunito">
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
      <div className="relative flex flex-wrap gap-2 justify-center items-center my-10 lg:my-20 xl:my-36 font-geist-mono">
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
