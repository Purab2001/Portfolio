"use client";

import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, , mounted] = useTheme();
  const [progress, setProgress] = useState(0);

  const getContactSectionTop = () => {
    const contact = document.getElementById("contact");
    return contact ? contact.offsetTop : document.documentElement.scrollHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const updateProgress = () => {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      const contact = document.getElementById("contact");
      const contactTop = contact
        ? contact.offsetTop
        : document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const maxScroll = contactTop - window.innerHeight;
      const prog = Math.min(100, (scrollY / maxScroll) * 100);
      setProgress(prog);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateProgress);
    updateProgress(); // set initial value

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "py-2 glassmorphism border-b border-white/10"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <a
            className="relative group flex items-center transition-all duration-300 hover:scale-105"
            href="#hero"
          >
            <div className="relative flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="A.S.Purab Logo"
                width={48}
                height={48}
                className="h-6 w-auto transition-transform duration-300 group-hover:rotate-12"
                priority
              />
              <span className="font-bold text-lg md:text-3xl tracking-wide">
                ASP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-card/40 backdrop-blur-md rounded-full p-2 border border-border/20">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group flex items-center gap-2",
                  activeSection === item.href.substring(1)
                    ? "bg-primary/20 text-primary shadow-lg"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                )}
              >
                <span>{item.name}</span>
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-pulse-subtle" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden relative p-3 rounded-full transition-all duration-300 z-50",
              isScrolled ? "glassmorphism" : "bg-card/20 backdrop-blur-sm",
              isMenuOpen ? "rotate-180" : "hover:scale-110"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="text-primary animate-scale-in" />
              ) : (
                <Menu size={24} className="text-foreground animate-scale-in" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 z-40 transition-all duration-500",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center gap-4 text-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "group relative px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-110 flex items-center gap-4",
                    "stagger-animation",
                    activeSection === item.href.substring(1)
                      ? "text-primary glassmorphism shadow-xl"
                      : "text-foreground/80 hover:text-primary hover:glassmorphism"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-space-grotesk">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-40">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </>
  );
};
