"use client";
import Image from "next/image";

export default function BioCard() {
  return (
    <div
      id="bio-card"
      className="relative w-[80%] lg:w-[631px] 2xl:w-[800px] h-auto min-h-[640px] rounded-xl bg-slate-100 p-4 lg:p-6 2xl:p-8 shadow-lg border-2 border-gray-800
        cursor-text mx-auto"
    >
      <div className="flex flex-col">
        <Image src="/profile/serious-2.png" alt="Malin" width={110} height={110} priority className="rounded-full relative mb-2 lg:mb-0 lg:absolute lg:top-4 lg:right-4 2xl:top-8 2xl:right-8 border-2 lg:border-2 mx-auto lg:mx-0" />
        <div id="blurb" className="space-y-[18px]">
          <h1 id="title">hey i&apos;m malin (a.k.a mahlen)</h1>
          <p>In a previous life I worked on improving infra at large banks.</p>
          <p>In 2023 I realised what I actually wanted to do was build things.</p>
          <p>Useful things. Beautiful things.</p>
          <p>So I decided to become a fullstack software engineer.</p>
          <p>In Autumn 2024 I moved to New York for the <a href="https://fractalbootcamp.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Fractal Tech</a> Software Engineering Accelerator. This was something like a religious experience where I fell deeply in love with the process of building software. I leveled up a lot, obliterated my self-doubt and learned more than I thought was possible.</p>
          <p>Now i&apos;m looking to join a brilliant team of engineers and creatives on a mission to build something incredible. If that&apos;s you then please reach out.</p>
          <p>If you made it this far and are still on the fence, read <a href="https://mkan.xyz/thoughts/why-you-should-hire-me" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">why you should hire me.</a></p>
          <p>I&apos;m typically based in Sydney Australia but would love to move to any of Melbourne, SF or New York for the right role.</p>
          <p>btw if you are US-based and concerned about visas/sponsorships/etc please read this post I wrote about <a href="https://mkan.xyz/The-E3-Visa" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">E3 visas.</a> They are a beautiful gift of the 2005 US-Australia Free Trade Agreement and they make it a breeze for Australians to live and work in the US at basically no cost to the employer.</p>
        </div>
      </div>
    </div>
  );
}
