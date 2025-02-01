"use client";
import Image from "next/image";
import { PreviewModal } from "../resume/PreviewModal";
import { useState } from "react";

type Projects = {
  title: string
  url: string
  previewImage: string
  description: string
  shortDescription: string
  videoEmbed?: string
  githubUrl?: string
}

const projects = [
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
    description: 'A fully functional e-commerce website selling the best snacks from around the world. Next.js frontend with ExpressJS backend. Neon hosted Postgres DB with Prisma ORM. Auth using Firebase. Includes full Stripe integration.',
    shortDescription: 'A fully functional e-commerce website selling the best snacks from around the world.',
    githubUrl: 'https://github.com/kmankan/snack-safari'
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

export default function BioCard() {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null)
  const handleOnProjectClick = (i: number) => {
    setSelectedProject(projects[i])
  }
  return (
    <div
      id="bio-card"
      className="relative w-[80%] lg:w-[631px] 2xl:w-[800px] h-auto min-h-[600px] rounded-xl bg-slate-100 p-4 lg:p-6 2xl:p-8 shadow-lg border-2 border-gray-800
        cursor-text mx-auto"
    >
      <div className="flex flex-col lg:block">
        <Image
          src="/profile/serious-2.png"
          alt="Malin"
          width={110}
          height={110}
          priority
          className="rounded-full relative mb-2 lg:mb-0 lg:float-right lg:ml-4 2xl:ml-6 border-2 mx-auto lg:mx-0"
        />
        <div id="blurb" className="space-y-[18px]">
          <h1 id="title">Hey I&apos;m Malin.</h1>
          <p>In a previous life I worked on banking infrastructure at some of Australia&apos;s top financial institutions.</p>
          <p>In 2024, I leaned in to a desire for more creativity in my work and I made the leap to software engineering through NYC&apos;s <a href="https://fractalbootcamp.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Fractal Tech</a> SWE Accelerator. This was like a religious experience where I fell deeply in love with the process of building software.</p>
          <p>
            I built products ranging from
            <span onClick={() => handleOnProjectClick(0)} className="cursor-pointer text-blue-500 underline"> AI voice therapists</span> to
            <span onClick={() => handleOnProjectClick(1)} className="cursor-pointer text-blue-500 underline"> e-commerce platforms</span> to
            <span onClick={() => handleOnProjectClick(2)} className="cursor-pointer text-blue-500 underline"> PDF analysis tools</span> and many many more.
            I won an AI Agents hackathon and shipped real features for local NYC startups.
          </p>
          <p>I&apos;m currently working as a contract software engineer, building a wellness startup and experimenting with voice agents in my free time.</p>
          {/* <p>I leveled up, obliterated my self-doubt and learned more than I thought was possible.</p> */}
          <p>I&apos;m always on the lookout to join a brilliant team of engineers and creatives on a mission to build something incredible. So if that&apos;s you and you feel like there&apos;s some synergies, reach out.</p>
          <p>Also, <a href="https://mkan.xyz/thoughts/why-you-should-hire-me" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">read this page.</a></p>
          {/* <p>I&apos;m typically based in Sydney but happy to relocate to Melbourne, SF, or NYC for the right opportunity.</p> */}
          <p>If you are a US-based employer you should read this post I wrote about <a href="https://mkan.xyz/The-E3-Visa" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">E3 visas.</a> They are a beautiful gift of the 2005 US-Australia Free Trade Agreement and they make it a breeze for Australians to work in the US at basically no cost to the employer.</p>
        </div>
      </div>
      {selectedProject && (
        <PreviewModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </div>
  );
}
