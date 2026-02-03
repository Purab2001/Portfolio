"use client";

import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import ProjectGallery from "@/components/ui/ProjectGallery";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  Target,
} from "lucide-react";

const ProjectDetails = ({ project }) => {
  const [isDarkMode, , mounted] = useTheme();
  const router = useRouter();

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    images = [],
    overview,
    features,
    techStacks,
    challenges,
    futurePlans,
    demoUrl,
    githubUrl,
  } = project;

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      <StarBackground />

      {/* Back Arrow */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-3 lg:left-10 z-20 p-2 rounded-full bg-card/80 hover:bg-card shadow transition cursor-pointer"
        aria-label="Back to Home"
        type="button"
      >
        <ArrowLeft className="w-6 h-6 text-primary" />
      </button>

      <main className="relative z-10 max-w-5xl mx-auto pt-20 pb-20 px-4">
        {/* Project Gallery */}
        <ProjectGallery images={images} />

        {/* Project Title and Overview */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <p className="mt-4 text-foreground/70 leading-relaxed">{overview}</p>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mb-12">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors flex items-center"
            >
              <ExternalLink size={20} className="inline-block mr-0 md:mr-2" />
              <span className="max-sm:hidden">Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors flex items-center"
            >
              <Github size={20} className="inline-block mr-0 md:mr-2" />
              <span className="max-sm:hidden">GitHub</span>
            </a>
          )}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-3"
              >
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-col gap-6">
            {Object.entries(techStacks).map(([category, stacks]) => (
              <div key={category}>
                <h3 className="capitalize text-start text-lg font-semibold mb-4">
                  {category.replace("_", " ")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stacks.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-card border border-border rounded-lg py-2 px-4"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Faced Section */}
        {challenges && (
          <div className="mb-12">
            <h2 className="text-lg md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Challenges Faced
            </h2>
            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/70 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Plans Section */}
        {futurePlans && (
          <div className="mb-12">
            <h2 className="text-lg md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Future Plans & Improvements
            </h2>
            <div className="space-y-3">
              {futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/70 leading-relaxed">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
