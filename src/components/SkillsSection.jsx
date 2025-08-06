import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Star, Zap, Code, Database, Wrench, Award } from "lucide-react";

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
  { name: "Firebase", level: 70, category: "backend", icon: FirebaseIcon },

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

const categories = [
  {
    id: "all",
    label: "All Skills",
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    label: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillRefs = useRef([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Intersection Observer for skill animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSkills((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredSkills]);

  const getCategoryStats = (category) => {
    const categorySkills =
      category === "all"
        ? skills
        : skills.filter((s) => s.category === category);
    const avgLevel = Math.round(
      categorySkills.reduce((sum, skill) => sum + skill.level, 0) /
        categorySkills.length
    );
    return { count: categorySkills.length, avgLevel };
  };

  return (
    <section
      id="skills"
      className="section-modern bg-gradient-to-b from-background to-secondary/20 py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Technical Skills
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Tech
            <span className="text-gradient"> Arsenal</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const stats = getCategoryStats(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group relative px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105",
                  "border-2 border-transparent hover:border-primary/20",
                  activeCategory === category.id
                    ? "glassmorphism shadow-xl border-primary/30"
                    : "bg-card/40 hover:glassmorphism"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-xl bg-gradient-to-r transition-transform duration-300 group-hover:scale-110",
                      activeCategory === category.id
                        ? category.color
                        : "from-primary/20 to-primary/10"
                    )}
                  >
                    <category.icon
                      className={cn(
                        "w-5 h-5",
                        activeCategory === category.id
                          ? "text-white"
                          : "text-primary"
                      )}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">
                      {category.label}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {stats.count} skills • {stats.avgLevel}% avg
                    </div>
                  </div>
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl animate-pulse-subtle" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${activeCategory}`}
              ref={(el) => (skillRefs.current[index] = el)}
              data-index={index}
              className={cn(
                "group relative card-modern p-6 hover:scale-105 transition-all duration-500",
                "border border-border/50 hover:border-primary/30",
                visibleSkills.has(index) ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    {typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8">
                        {skill.icon}
                      </div>
                    )}
                  </div>
                  {skill.level >= 90 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 flex items-center">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="relative flex items-center justify-center mb-4">
                <svg className="transform -rotate-90 w-24 h-24">
                  {/* Background Circle */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-primary/10"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={
                      visibleSkills.has(index)
                        ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}`
                        : `${2 * Math.PI * 40}`
                    }
                    className="text-primary transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Proficiency</span>
                  <span className="text-primary font-medium">
                    {skill.level >= 90
                      ? "Expert"
                      : skill.level >= 80
                      ? "Advanced"
                      : skill.level >= 70
                      ? "Intermediate"
                      : "Beginner"}
                  </span>
                </div>
                <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visibleSkills.has(index)
                        ? `${skill.level}%`
                        : "0%",
                      transitionDelay: `${index * 0.1 + 0.5}s`,
                    }}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse-subtle"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
    </section>
  );
};
