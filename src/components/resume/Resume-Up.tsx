'use client'

import { useState } from 'react'
import { Mail, Phone, Globe } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { PreviewModal } from '@/components/resume/PreviewModal'
import { useRef } from 'react'
import PrintButton from '@/components/resume/PrintButton'

type ContractWork = {
  company: string
  location: string
  url?: string
  description: string
}

type Experience = {
  title: string
  company: string
  date: string
  description: string
  type: 'fullTime' | 'contract'
  contractWork?: ContractWork[]
  projects?: Projects[]
}

type TechStack = {
  category: string
  items: string
}

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
    title: 'Felt Sense',
    url: 'https://felt-sense.vercel.app/',
    previewImage: '/projects/felt-sense-preview.png',
    description: 'An AI voice companion for exploring your emotions and working through difficulties. Built fully on Next.js with serverless functions, postgres db on Neon using Prisma ORM. Auth with AuthKit by WorkOS. Utilizes Deepgram for speech-to-text, Claude-Sonnet-3.5 for text generation and Cartesia for text-to-speech.',
    shortDescription: 'An AI voice companion for exploring your emotions and working through difficulties.',
    videoEmbed: 'https://www.loom.com/embed/d73dcd71a85645b98cfaa75190e3c550?sid=16f09d37-d259-4a97-8f21-6188a1070916'
  },
  {
    title: 'Snack Safari',
    url: 'https://snack-safari.vercel.app/',
    previewImage: '/projects/snack-safari-preview.png',
    description: 'A fully functional e-commerce website selling the best snacks from around the world. Next.js frontend with expressJS backend. Neon hosted postgres db with Prisma ORM. Auth using Firebase.Includes full Stripe integration.',
    shortDescription: 'A fully functional e-commerce website selling the best snacks from around the world.'
  },
  {
    title: 'Converse Chronicle',
    url: 'https://github.com/kmankan/converse-chronicle',
    previewImage: 'https://media.mkan.xyz/cc-list.png',
    description: 'A React Native mobile application that enables users to record conversations with automatic transcription (including identifying distinct speakers) and relevant summarisation. Built with Expo framework, Node.js backend deployed on Railway, PostgresSQL on Neon using Prisma ORM and Clerk for authentication.',
    shortDescription: 'React Native mobile app for recording and analyzing conversations.'
  },
  {
    title: 'Art & Friends',
    url: 'https://art-and-friends.mkan.xyz/',
    previewImage: '/projects/artandfriends-preview.png',
    description: 'A social media app for creating and sharing 3D art, as well as uploading your favourite images with your timeline. Built fully on Next.js, pgSQL on vercel, AWS S3 for storage and Clerk for authentication.',
    shortDescription: 'A social media app for generating and sharing art with your timeline.',
    videoEmbed: 'https://www.loom.com/embed/ad9e26f12bb84cd2a249feaf439d0b69?sid=4009a7ec-9a59-4f6c-88be-b342facdb5b7'
  },
  {
    title: 'PaperPilot',
    url: 'https://github.com/pastarita/paperpilot/',
    previewImage: '/projects/paperpilot-preview.png',
    description: 'Interactive PDF reader that auto-generates context to help understand scientific articles. Built with React and PDF.js.',
    shortDescription: 'Interactive PDF reader that auto-generates context to help understand scientific articles.',
    videoEmbed: 'https://www.loom.com/embed/7f3d59e360d24cf3af156d8d72a2ec84?sid=72f0bdc0-1047-41e2-ad5a-ef4c95804e68'
  },
]

const experience: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Fractal Tech NYC',
    date: '2024',
    description: 'Built and deployed over 20 full-stack apps, 1000+ commits and 300+ PRs with >860 hours hands on keys',
    type: 'fullTime',
    projects: projects  // Using the existing projects array
  },
  {
    title: 'Contract Software Engineer',
    company: '',
    date: '2024',
    description: '',
    type: 'contract',
    contractWork: [
      {
        company: 'Plastic Labs',
        location: 'New York',
        url: 'https://plasticlabs.ai/',
        description: 'Built a chat-with-website feature for Bloom Tutor-GPT that cleanly scrapes the content of any provided URL, loads it into the LLMs context window and starts a conversation. Built with typescript on next.js with a uvicorn python backend, utilizing jina.ai SDK for scraping and text normalization.'
      },
      {
        company: 'Eyeball',
        location: 'New York',
        description: 'Built various tools for web scraping, enabling type safety and setting up caching with Redis.'
      },
    ]
  },
  {
    title: 'Technical Business Analyst',
    company: 'CBA',
    date: 'Aug 2020 – Jun 2023',
    description: "Led analysis and remediation efforts to ensure CBA's critical infrastructure compliance, improving key risk measure from 25% to 98% in 12 months. Acted as Product Owner to deliver a modern compliance reporting tool and integrate complex data into ServiceNow.",
    type: 'fullTime'
  },
  {
    title: 'Business Analyst',
    company: 'Macquarie Group',
    date: 'Dec 2016 – Aug 2020',
    description: 'Coordinated with cross-functional teams on a strategic initiative to insource global voice services management, reducing service costs by ~$5M and improving ticket completion times by 25%. Built a new knowledge management repository with detailed technical documentation and user guides.',
    type: 'fullTime'
  }
]

const techStack: TechStack[] = [
  { category: 'Frontend', items: 'React, Next.js, Tailwind, Vite, Zustand, Storybook' },
  { category: 'Backend', items: 'Node.js, Bun, Express, Next.js, Zod, TRPC' },
  { category: 'Auth', items: 'Clerk, Firebase, AuthKit, NextAuth' },
  { category: 'Scripting/Testing', items: 'Puppeteer, Playwright, Vitest, Postman' },
  { category: 'Databases', items: 'PostgreSQL, Prisma, Drizzle, Supabase, Redis' },
  { category: 'Deployment', items: 'Docker, Vercel, Railway, Render, Netlify, AWS EC2/S3' }
]

export default function ResumeUp() {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null)
  const componentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="font-circular dark:text-black">
      <div className="max-w-[794px] bg-[#ffee52] print:bg-white border-2 border-black print:border-none mx-auto py-6 print:py-0">
        <div
          ref={componentRef}
          className="w-full md:w-[794px] min-h-screen px-4 md:px-6 py-2"
        >
          <header className="mb-2">
            <h1 className="text-4xl md:text-[44px] print:text-4xl print:mt-0 font-black text-[#ff705c] text-center pb-2">
              Malin Kankanamge
            </h1>
            <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 mt-1 justify-center">
              <a href="mailto:malin.kankanamge@gmail.com" className="flex items-center text-xs md:text-sm text-black underline underline-offset-2 px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner">
                <Mail className="w-4 h-4 mr-2" />
                malin.kankanamge@gmail.com
              </a>
              <a href="tel:+61451667601" className="flex items-center text-xs md:text-sm text-black underline underline-offset-2 px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner">
                <Phone className="w-4 h-4 mr-2" />
                +61451667601
              </a>
              <a href="https://github.com/kmankan" className="flex items-center text-xs md:text-sm text-black underline underline-offset-2 px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-current">
                  <path d={siGithub.path} />
                </svg>
                github.com/kmankan
              </a>
              <a href="https://mkan.xyz" className="flex items-center text-xs md:text-sm text-black underline underline-offset-2 px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner">
                <Globe className="w-4 h-4 mr-2" />
                mkan.xyz
              </a>
            </div>
          </header>
          <hr className="border-black my-2" />

          <section className="mb-4 text-sm md:text-base print:text-base" id='experience'>
            <h2 className="text-xl font-black text-[#ff705c] mb-2 underline underline-offset-4">
              Experience
            </h2>
            <div className="space-y-3 md:space-y-4 print:space-y-3" id='all-experience'>
              {experience.map((exp) => (
                <div key={`${exp.title}-${exp.company}`}>
                  {exp.type === 'fullTime' ? (
                    <>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <p className="text-base md:text-lg print:text-base font-bold">
                          {exp.title} | <em>{exp.company}</em>
                        </p>
                        <span className="text-xs md:text-sm print:text-sm font-apercu-mono">{exp.date}</span>
                      </div>
                      <p className="text-black">{exp.description}</p>
                      {exp.projects && (
                        <div className="list-disc list-inside space-y-1 text-black pl-4">
                          {exp.projects.map((project) => (
                            <div key={project.title}>
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="underline underline-offset-2 px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner"
                              >
                                {project.title}
                              </button>
                              : {project.shortDescription}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-base md:text-lg print:text-base font-bold">Contract Software Engineer:</p>
                      <div className="space-y-1 pl-4">
                        {exp.contractWork?.map((contract) => (
                          <div key={contract.company}>
                            <p className="text-sm md:text-base font-medium text-black underline underline-offset-2">
                              {contract.url ? (
                                <a href={contract.url} target="_blank" rel="noopener noreferrer" className="px-1 py-0.5 rounded-md transition-all hover:bg-black hover:text-yellow-300 active:translate-y-0.5 active:shadow-inner">
                                  {contract.company}, <em>{contract.location}</em>
                                </a>
                              ) : (
                                <span>{contract.company}, <em>{contract.location}</em></span>
                              )}
                            </p>
                            <p className="text-black">{contract.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
          <hr className="border-black my-2" />

          <section className="mb-4" id='tech-stack'>
            <h2 className="text-xl font-black text-[#ff705c] mb-2 underline underline-offset-4">
              Tech Stack
            </h2>
            <div className='space-y-0.5'>
              {techStack.map(({ category, items }) => (
                <div key={category} className="flex flex-col md:flex-row">
                  <span className="font-bold md:mr-2 text-base md:text-lg print:text-base">{category}:</span>
                  <span className="text-black text-sm md:text-base print:text-base md:self-center">{items}</span>
                </div>
              ))}
            </div>
          </section>
          <hr className="border-black my-2" />

          <section id='education'>
            <h2 className="text-xl font-black text-[#ff705c] mb-2 underline underline-offset-4">Education</h2>
            <div className="space-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                <p className="text-sm md:text-base print:text-base text-black">
                  <span className="text-base md:text-lg print:text-base font-bold">Master of Commerce (Business Information Systems)</span> <span className="hidden print:inline">|</span> <br className="print:hidden" /> The University of Sydney
                </p>
                <span className="text-xs md:text-sm print:text-sm font-apercu-mono">{'2015 – 2017'}</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                <p className="text-sm md:text-base print:text-base text-black">
                  <span className="text-base md:text-lg print:text-base font-bold">Bachelor of Science (Neuroscience)</span> <span className="hidden print:inline">|</span> <br className="print:hidden" /> The University of Sydney
                </p>
                <span className="text-xs md:text-sm print:text-sm font-apercu-mono">{'2010 – 2013'}</span>
              </div>
            </div>
          </section>
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
  )
}

