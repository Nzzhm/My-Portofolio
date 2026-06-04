import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right[5rem] -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Nizham </p>
            <p className="subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nulla unde sunt doloribus excepturi corrupti laboriosam non
              adipisci nesciunt dolores vero iste eveniet tempora dolorum quod,
              natus consectetur quae consequuntur.
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo"></div>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "-75deg", top: "30%", left: "5%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "70%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "75deg",
                boottom: "20%",
                top: "20%",
                left: "55%",
              }}
              text="Design Pattern"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-10deg",
                boottom: "0%",
                top: "30%",
                left: "30%",
              }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "30deg",

                top: "70%",
                left: "50%",
              }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-30deg",
                top: "70%",
                left: "30%",
              }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Bandung, I open to work and intern
            </p>
          </div>
          {/* pindah figure ke luar div z-10, kasih ukuran jelas */}
          <figure className="absolute bottom-0 right-0 w-[60%] h-[80%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allows me to build rubust and scalable aplications/website
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-6 w-full h-full inset-s-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
