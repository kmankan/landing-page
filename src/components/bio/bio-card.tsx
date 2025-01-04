"use client";
import Image from "next/image";

export default function BioCard() {
  return (
    <div
      id="bio-card"
      className="relative w-[80%] md:w-[631px] h-auto min-h-[640px] rounded-xl bg-slate-100 p-4 md:p-6 shadow-lg border-2 border-gray-800
        cursor-text"
    >
      <div className="flex flex-col">
        <Image src="/profile/IMG_9314.png" alt="Malin" width={110} height={110} className="rounded-full relative mb-2 md:mb-0 md:absolute md:top-4 md:right-4 border-2 md:border-2 mx-auto md:mx-0" />
        <div id="blurb">
          <h1 id="title">hey i&apos;m malin (a.k.a mahlen)</h1>
          <br></br>
          <p>In a previous life I worked on improving infra at large orgs.</p>
          <br></br>
          <p>In 2023 I realised what I actually wanted to do was build things.</p>
          <p>Useful things. Beautiful things.</p>
          <br></br>
          <p>So I decided to become a fullstack software engineer.</p>
          <br></br>
          <p>In Autumn 2024 I moved to New York for the <a href="https://fractalbootcamp.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Fractal Tech</a> Software Engineering Accelerator. This was something like a religious experience where I fell deeply in love with the process of building software. I leveled up a lot, obliterated my self-doubt and learned more than I thought was possible.</p>
          <br></br>
          <p>Now i&apos;m looking to join a brilliant team of engineers and creatives on a mission to build something incredible. If you&apos;re seeing this and that&apos;s you please reach out.</p>
          <br></br>
          <p>If you made it this far and are still on the fence, read this doc on <a href="https://mkan.xyz/thoughts/why-you-should-hire-me" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">why you should hire me.</a></p>
          <br></br>
          <p>I&apos;m typically based in Sydney Australia but open to moving basically anywhere for the right role.</p>
        </div>

      </div>

    </div>
  );
}
