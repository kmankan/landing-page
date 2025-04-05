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

// projects data
import { projects } from "@/lib/references/projects";

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
            I&apos;ve since built projects ranging from
            <span> tools for </span><span onClick={() => handleOnProjectClick(4)} className="cursor-pointer text-blue-500 underline"> introspection</span> and <span onClick={() => handleOnProjectClick(2)} className="cursor-pointer text-blue-500 underline">guidance</span> to
            <span onClick={() => handleOnProjectClick(0)} className="cursor-pointer text-blue-500 underline"> consumer mobile apps</span> to
            <span onClick={() => handleOnProjectClick(3)} className="cursor-pointer text-blue-500 underline"> digital banking assistants</span> and many many more.
          </p>
          <p>I&apos;m currently working as a contract software engineer. Inside of me there are two wolves: one wants to build beautiful minimalist mobile apps, the other wants to create immense shareholder value by building enterprise automation tools.</p>
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
