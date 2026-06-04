import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Lingkaran Luar */}
      <OrbitingCircles iconSize={40} radius={160} speed={1}>
        {skills.slice(0, 8).map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>

      {/* Lingkaran Dalam (Reverse) */}
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.slice(8).map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// Komponen Icon yang sudah diperbaiki props-nya
const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="duration-200 rounded-sm w-full h-full object-contain"
  />
);
