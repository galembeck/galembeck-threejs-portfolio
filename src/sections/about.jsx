import { useState } from "react";

import Globe from "react-globe.gl";

import { Button } from "../components/button";

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("galembeckpedro@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <h1 className="head-text">About me</h1>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 mt-12 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Pedro Galembeck</p>
              <p className="grid-subtext">
                With 4 years of exeperience, I have honed my skills in frontend
                and banckend development, with a focus on animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container items-center">
            <img
              src="/assets/grid2.png"
              alt="Grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: -23,
                    lng: -46,
                    text: "São Paulo, Brazil",
                    color: "white",
                    size: 100,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in São Paulo - Brazil, with remote work
                available.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="Copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient hover:text-white/70 transition-colors">
                  galembeckpedro@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
