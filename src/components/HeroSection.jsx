"use client";
import { Code2, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Geometric Shapes */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float"
          style={{
            top: "10%",
            right: "20%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-tl from-primary/30 to-transparent rotate-45 blur-2xl animate-pulse-subtle"
          style={{
            bottom: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
          }}
        />

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient id="diagonal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }}
                />
                <stop offset="100%" style={{ stopColor: "transparent" }} />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <path d="M0,100 L100,0" stroke="url(#diagonal)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Asymmetrical Layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 opacity-0 animate-fade-in">
                <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></div>
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  Mern Stack Developer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="space-y-2 text-left">
                <div className="opacity-0 animate-fade-in-delay-1">
                  <span className="block text-2xl md:text-4xl font-light text-foreground/80">
                    Hi, I'm
                  </span>
                </div>
                <div className="opacity-0 animate-fade-in-delay-2">
                  <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gradient text-primary leading-none">
                    Abir
                  </span>
                </div>
                <div className="opacity-0 animate-fade-in-delay-3">
                  <span className="block text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                    Shahadat Purab
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-2xl opacity-0 animate-fade-in-delay-4 text-left">
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I craft dynamic web applications with modern technologies,
                specializing in React, Node.js, and full-stack development.
                Passionate about creating seamless user experiences and scalable
                solutions.
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["MongoDB", "Express.js", "React", "Node.js"].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-4">
              <Link
                href="#projects"
                className="cosmic-button group flex items-center gap-3 justify-center mx-auto sm:mx-0 w-full md:w-auto"
              >
                <Zap className="w-5 h-5 group-hover:animate-bounce-gentle" />
                <span>View My Work</span>
              </Link>
              <Link
                href="#contact"
                className="px-8 py-2 md:py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-3 justify-center group"
              >
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Let's Connect</span>
              </Link>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse-subtle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-sm animate-float"></div>

              {/* Main Image */}
              <div className="relative floating-card opacity-0 animate-fade-in-delay-2 mb-8 md:mb-0">
                <Image
                  src="/Picture.png"
                  alt="Profile picture of Abir Shahadat Purab"
                  width={384}
                  height={384}
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500"
                />

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 p-4 bg-primary/20 backdrop-blur-sm rounded-2xl animate-bounce-gentle">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-primary/20 backdrop-blur-sm rounded-2xl animate-float">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-foreground/60 mb-3 font-medium animate-pulse">
          Discover More
        </span>
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
