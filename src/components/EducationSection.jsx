import {
  GraduationCap,
  Calendar,
  MapPin,
  Star,
  Code,
  Trophy,
} from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in English Honours",
    institution: "Mohammadpur Kendriya College",
    university: "National University",
    duration: "2021 - 2026",
    status: "Currently Pursuing",
    location: "Dhaka, Bangladesh",
    description:
      "Developing strong analytical, critical thinking, and communication skills through comprehensive study of English literature and language.",
    highlights: [
      "Literary Analysis & Criticism",
      "Advanced Writing & Communication",
      "Research Methodology",
      "Cross-cultural Studies",
    ],
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    year: "2021-2026",
    type: "Academic",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              EDUCATION
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Content */}
          <div className="lg:col-span-2">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start gap-6 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:transform hover:scale-[1.02] backdrop-blur-sm h-full flex flex-col">
                  {/* Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full animate-bounce-gentle">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-primary font-semibold text-sm">
                        {item.year}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 animate-glow">
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <h4 className="text-lg font-semibold text-foreground/90 mb-1">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    {item.university}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Learning Areas */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 animate-pulse" />
                      Key Learning Areas:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300 animate-slide-left"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <Star className="w-3 h-3 text-primary animate-pulse" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border/30 text-sm mt-auto">
                    <div className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Progress Card */}
          <div className="lg:col-span-1">
            <div className="border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:transform hover:scale-[1.02] animate-fade-in-delay-2 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse-subtle">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                  Academic Progress
                </h3>
              </div>

              {/* Progress Items */}
              <div className="space-y-4 flex-1">
                <div
                  className="flex justify-between items-center py-3 border-b border-border/30 hover:border-primary/30 transition-colors duration-300 animate-slide-right"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="text-foreground/80">Study Duration</span>
                  <span className="font-semibold text-primary animate-glow">
                    4 Years
                  </span>
                </div>

                <div
                  className="flex justify-between items-center py-3 border-b border-border/30 hover:border-primary/30 transition-colors duration-300 animate-slide-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="text-foreground/80">Current Year</span>
                  <span className="font-semibold text-blue-400 animate-glow">
                    3rd Year
                  </span>
                </div>

                <div
                  className="flex justify-between items-center py-3 animate-slide-right"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="text-foreground/80">Current Status</span>
                  <span className="font-semibold text-green-400 animate-glow">
                    Active Student
                  </span>
                </div>

                {/* Additional spacing content */}
                <div className="py-6">
                  <div className="text-center text-foreground/40 text-sm">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-dashed border-foreground/20 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <p>Academic Excellence</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-auto animate-fade-in-delay-4">
                <div className="flex justify-between text-sm text-foreground/70 mb-2">
                  <span>Progress</span>
                  <span className="animate-pulse">75%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full w-3/4 transition-all duration-2000 animate-scale-in"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
