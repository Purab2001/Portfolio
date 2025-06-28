import { useState } from "react";
import { cn } from "@/lib/utils";

// Import SVGs from assets
import HTMLIcon from "@/assets/HTML.svg";
import CSSIcon from "@/assets/CSS.svg";
import JSIcon from "@/assets/JS.svg";
import ReactIcon from "@/assets/react.svg";
import TailwindIcon from "@/assets/Tailwind CSS.svg";
import ExpressIcon from "@/assets/Express JS.svg";
import MongoDBIcon from "@/assets/mongoDB.svg";
import FirebaseIcon from "@/assets/Firebase.svg";
import GithubIcon from "@/assets/Github.svg";
import FigmaIcon from "@/assets/Figma.svg";
import VSCodeIcon from "@/assets/VS Code.svg";
import NodeIcon from "@/assets/Node JS.svg";

// Import react-icons for missing icons
import { SiDaisyui, SiAxios, SiDocker } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", level: 100, category: "frontend", icon: HTMLIcon },
  { name: "CSS", level: 90, category: "frontend", icon: CSSIcon },
  { name: "JavaScript", level: 90, category: "frontend", icon: JSIcon },
  { name: "React", level: 90, category: "frontend", icon: ReactIcon },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: TailwindIcon },
  {
    name: "DaisyUI",
    level: 100,
    category: "frontend",
    icon: <SiDaisyui color="#6B21A8" size={32} />,
  },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: NodeIcon },
  { name: "Express", level: 75, category: "backend", icon: ExpressIcon },
  { name: "MongoDB", level: 70, category: "backend", icon: MongoDBIcon },
  {
    name: "Axios",
    level: 75,
    category: "backend",
    icon: <SiAxios color="#5A29E4" size={32} />,
  },
  {
    name: "Firebase Admin",
    level: 70,
    category: "backend",
    icon: FirebaseIcon,
  },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: GithubIcon },
  {
    name: "Docker",
    level: 70,
    category: "tools",
    icon: <SiDocker color="#2496ED" size={32} />,
  },
  { name: "Figma", level: 85, category: "tools", icon: FigmaIcon },
  { name: "VS Code", level: 95, category: "tools", icon: VSCodeIcon },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Render SVG or React icon */}
                {typeof skill.icon === "string" ? (
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                ) : (
                  skill.icon
                )}
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
