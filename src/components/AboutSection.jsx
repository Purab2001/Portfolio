import {
  Briefcase,
  Code,
  User
} from "lucide-react";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              About Me
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer & Tech Enthusiast
            </h3>

            <p className="leading-relaxed text-foreground/70">
              My programming journey began with curiosity and a passion for
              solving problems. I specialize in building dynamic MERN stack
              applications and thrive in collaborative environments where ideas
              flow and innovation happens. I focus on creating clean,
              user-friendly interfaces and always aim for quality in every
              project.
              <br />
              <br />
              Outside of coding, I enjoy reading books, exploring new games, and
              watching sports. These interests fuel my creativity and bring
              fresh perspectives to my work.
            </p>

            <div className="flex justify-center gap-4 pt-4 md:justify-start">
              <Link href="#contact" className="cosmic-button">
                Get In Touch
              </Link>

              <Link
                href="https://drive.google.com/uc?export=download&id=1W8qPuVGPiei-FxNkIHyhPjw7GC4V2Bb1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 transition-colors duration-300 border rounded-full md:px-6 border-primary text-primary hover:bg-primary/10"
              >
                Download Resume
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks and cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    AI Collaboration & Prompt Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Leveraging AI tools and prompt engineering to build smarter,
                    more efficient web projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies and collaborative teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
