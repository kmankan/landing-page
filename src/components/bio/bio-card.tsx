"use client";

export default function BioCard() {
  return (
    <div
      id="bio-card"
      className="relative w-[631px] h-[600px] rounded-xl bg-slate-200 p-6 shadow-lg border-2 border-gray-800
        cursor-pointer"
    >
      <div className="flex flex-col">
        <h1 id="title">hey i'm malin</h1>
        <br></br>
        <div id="blurb">
          <p>Im a software developer</p>
          <br></br>
          <p>In a previous life I worked on improving infra at large orgs.</p><br></br>
          <p>In 2023 I realised what I actually wanted to do was build things. Useful things. Beatiful things.</p>
          <br></br>
          <p>So I decided to become a fullstack software developer.</p>
          <br></br>
          <p>In Autumn 2024 I completed the Fractal Tech Software Engineering Accelerator program in New York. This was something like a religious experience where I fell deeply in love with the process of building software. I leveled up a lot, obliterated my self-doubt and learned more than I thought was possible.</p>
          <br></br>
          <p>Now i'm looking to join a brilliant team of engineers and creatives on a mission to build something incredible. If you're seeing this and that's you please reach out. Email me, DM me on twitter or book a call!</p>
          <br></br>
          <p>I'm currently based in Sydney Australia but open to moving basically anywhere for the right role.</p>
        </div>

      </div>

    </div>
  );
}
