import { ArrowDown } from "lucide-react";
import ProfilePic from "../assets/Picture.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* On mobile, image on top; on md+, image on right */}
          <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end items-center w-full md:w-auto mb-6 md:mb-0">
            <img
              src={ProfilePic}
              alt="Profile picture of Abir Shahadat Purab"
              className="rounded-full border-4 border-primary shadow-lg w-36 h-36 md:w-56 md:h-56 lg:w-96 lg:h-96 object-cover opacity-0 animate-fade-in-delay-2"
            />
          </div>
          {/* Text Content */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I&#39;m</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Abir
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Shahadat Purab
              </span>
            </h1>

            <p className="text-lg md:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I build dynamic web apps with modern front-ends using HTML, CSS,
              Tailwind CSS, JavaScript, and React.js. Skilled in Node.js,
              Express.js, MongoDB, and Firebase, I deliver functional and
              attractive solutions. Explore my work to see ideas brought to
              life.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
