import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float, Loader } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen c-space">
      {/* hapus overflow-hidden agar tangan tidak kepotong */}
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-y-0 right-0"
        style={
          isMobile
            ? {
                left: "-10%", // lebih lebar dari layar biar tidak kepotong
                right: "-10%",
                bottom: 0,
                height: "115vh",
              }
            : {
                width: "60vw", // lebih lebar sedikit
                height: "100vh",
                right: "-5%",
                overflow: "visible", // sedikit keluar kanan biar tangan tidak kepotong
              }
        }
      >
        <Loader />
        <Canvas
          camera={{ position: [0, 1, 3], fov: 75 }}
          style={{ overflow: "visible" }}
        >
          <Suspense fallback={null}>
            {/* Pencahayaan profesional */}
            <ambientLight intensity={0.4} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#1a0a00"
              intensity={0.8}
            />
            {/* Key light - utama dari kanan atas */}
            <directionalLight position={[4, 6, 3]} intensity={2.5} />
            {/* Fill light - kiri, soft biru */}
            <directionalLight
              position={[-3, 2, 2]}
              intensity={0.8}
              color="#a0c4ff"
            />
            {/* Rim light - dari belakang */}
            <directionalLight
              position={[-4, 4, -4]}
              intensity={1.5}
              color="#ffffff"
            />
            {/* Ground glow - hangat dari bawah */}
            <pointLight
              position={[0, -3, 2]}
              intensity={1}
              color="#ff7040"
              distance={8}
            />

            <Float floatIntensity={0.5} speed={2}>
              <Astronaut
                scale={isMobile ? 0.007 : undefined}
                position={isMobile ? [0, -0.5, 0] : undefined}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
}

export default Hero;
