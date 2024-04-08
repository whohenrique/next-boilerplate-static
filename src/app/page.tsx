'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth, TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-full justify-start items-center">
      <BackgroundBeams />
      <div className="flex items-start mt-24">
        <TypewriterEffectSmooth 
          words={[{ 
            text: "Boilerplate feito para mudar o mundo do dev front-end!",
            className: "text-md xl:text-3xl"
          }]}

        />
      </div>
    </main>
  );
}
