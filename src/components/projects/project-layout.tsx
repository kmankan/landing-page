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
const projects = [
  {
    "title": "council.ai",
    "url": "https://the-council-xi.vercel.app/",
    "previewImage": "/projects/council-ai-preview.png",
    "description": "Built for ElevenLabs x a16z global hackathon. \nThrough a series of reflective questions we identify and generate a council of personalised advisors perfectly suited to your unique circumstances that you can openly converse with. \nBuilt with Next.js, Supabase PostgreSQL and Auth, Claude Sonnet 3.5 for character generation, ElevenLabs Voice Design for unique advisor voices, Fal AI flux-lora for realistic character images, and OpenAI Whisper for voice transcription.",
    "shortDescription": "Converse with a panel of advisors - ranging from historical figures to fictional characters; each bringing a unique perspective and wisdom to help you navigate life's challenges.",
    "videoEmbed": "https://www.youtube.com/embed/VV4KOicuIdI?si=-pmSXH8X-Cz9ewFP",
    "githubUrl": "https://github.com/kmankan/the-council"
  },
  {
    title: 'Up Assistant',
    url: 'https://whatsup.mahlen.dev/',
    previewImage: '/projects/up-assistant-preview.png',
    description: 'An AI-powered Up Bank companion with three interfaces: \na chat assistant using Gemini-Flash-2.0 with Deep Research for accurate product information, an Australian voice agent via BlandAI for natural phone conversations and an Account Explorer that leverages the Up API to help you explore your transaction history via natural language conversations. \nBuilt with Next.js and Express, featuring end-to-end encryption with asymmetric key exchange and JWT authentication to securely handle sensitive API credentials while maintaining user privacy.',
    shortDescription: 'A multi-modal AI companion to Up Bank that provides product information and conversational interactions with transaction data using Up API.',
    videoEmbed: 'https://www.loom.com/embed/c182cc8c73954b6f9d68a3281e961adb?sid=f0f62b62-dd51-4a5a-8ca8-29f7a3e89c41',
    githubUrl: 'https://github.com/kmankan/voice-agent-up'
  },
  {
    title: 'Felt Sense',
    url: 'https://felt-sense.vercel.app/',
    previewImage: '/projects/felt-sense-preview.png',
    description: 'An AI voice companion for exploring your emotions and working through difficulties. Built fully on Next.js with serverless functions, Postgres DB on Neon using Prisma ORM. Auth with AuthKit by WorkOS. Utilizes Deepgram for speech-to-text, Claude-Sonnet-3.5 for text generation, and Cartesia for text-to-speech.',
    shortDescription: 'An AI voice companion for exploring your emotions and working through difficulties.',
    videoEmbed: 'https://www.loom.com/embed/d73dcd71a85645b98cfaa75190e3c550?sid=16f09d37-d259-4a97-8f21-6188a1070916',
    githubUrl: 'https://github.com/kmankan/felt-sense'
  },
  {
    title: 'Snack Safari',
    url: 'https://snack-safari.vercel.app/',
    previewImage: '/projects/snack-safari-preview.png',
    description: 'A simple e-commerce platform for selling snacks from different countries from around the world. \nBuilt with Next.js frontend with ExpressJS backend. \nNeon hosted Postgres DB with Prisma ORM. \nAuth using Firebase. \nIncludes full Stripe integration.',
    shortDescription: 'A fully functional e-commerce website selling the best snacks from around the world.',
    githubUrl: 'https://github.com/kmankan/snack-safari'
  },
  {
    title: 'Art & Friends',
    url: 'https://art-and-friends.mkan.xyz/',
    previewImage: '/projects/artandfriends-preview.png',
    description: 'A social media app for creating and sharing 3D art, as well as uploading your favourite images with your timeline. Built fully on Next.js, pgSQL on Vercel, AWS S3 for storage, and Clerk for authentication.',
    shortDescription: 'A social media app for generating and sharing art with your timeline.',
    videoEmbed: 'https://www.loom.com/embed/ad9e26f12bb84cd2a249feaf439d0b69?sid=4009a7ec-9a59-4f6c-88be-b342facdb5b7',
    githubUrl: 'https://github.com/kmankan/malin.social-art'
  },
  {
    title: 'PaperPilot',
    url: 'https://github.com/kmankan/paperpilot/',
    previewImage: '/projects/paperpilot-preview.png',
    description: 'Interactive PDF reader that auto-generates context to help understand scientific articles. Built with React and PDF.js.',
    shortDescription: 'Interactive PDF reader that auto-generates context to help understand scientific articles.',
    videoEmbed: 'https://www.loom.com/embed/7f3d59e360d24cf3af156d8d72a2ec84?sid=72f0bdc0-1047-41e2-ad5a-ef4c95804e68',
    githubUrl: 'https://github.com/kmankan/paperpilot'
  },
  {
    title: 'Converse Chronicle',
    url: 'https://github.com/kmankan/converse-chronicle',
    previewImage: '/projects/converse-chronicle-preview.png',
    description: 'A React Native mobile application that enables users to record, transcribe, and analyze conversations with AI-powered insights. Features real-time audio visualization, accurate transcription with diarization, and conversation summarization.',
    shortDescription: 'React Native mobile app for recording and analyzing conversations.',
    githubUrl: 'https://github.com/kmankan/converse-chronicle'
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
