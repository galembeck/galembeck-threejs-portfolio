import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { workExperiences } from "../constants";

import { CanvasLoader } from "../components/canvas-loader";
import Developer from "../components/developer";

export const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work-experience">
      <div className="w-full text-white-600">
        <h1 className="head-text">My work experience</h1>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={4} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[0, 0, 0]} intensity={1} />

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, icon, position, duration, title, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="Logo" className="w-full h-full" />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {position} | {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
