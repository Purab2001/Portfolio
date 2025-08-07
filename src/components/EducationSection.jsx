import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Star,
  Award,
  Clock,
} from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor's in English Honours",
    institution: "Mohammadpur Kendriya College",
    university: "National University",
    duration: "2022 - 2026",
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
    year: "2022-2026",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="section-modern bg-gradient-to-b from-secondary/10 to-background py-12 sm:py-16 md:py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">
              Education
            </span>
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Timeline Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

              {/* Timeline Items */}
              <div className="space-y-8 sm:space-y-12">
                {educationData.map((item, index) => (
                  <div key={item.id} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 sm:left-4 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="ml-12 sm:ml-20">
                      <div className="card-modern p-4 sm:p-6 md:p-8 card-hover group-hover:border-primary/30 transition-all duration-500">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-4 mb-6">
                          <div className="flex-1 w-full sm:w-auto">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                              ></div>
                              <span className="text-xs sm:text-sm font-medium text-primary">
                                {item.year}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-left">
                              {item.degree}
                            </h3>
                            <div className="space-y-1 text-foreground/70 text-left">
                              <p className="text-base sm:text-lg font-medium">
                                {item.institution}
                              </p>
                              <p className="text-xs sm:text-sm">
                                {item.university}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 w-full sm:w-auto">
                            <span
                              className={`px-3 sm:px-4 py-2 rounded-full text-xs font-medium border-2 text-center ${
                                item.status === "Currently Pursuing"
                                  ? "bg-green-500/10 text-green-500 border-green-500/30"
                                  : "bg-primary/10 text-primary border-primary/30"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-left">
                            {item.description}
                          </p>

                          {/* Highlights */}
                          <div>
                            <h4 className="font-semibold mb-3 text-primary text-sm sm:text-base">
                              Key Learning Areas:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                              {item.highlights.map((highlight, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <Star className="w-3 h-3 text-primary flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-foreground/70">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              {item.duration}
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline End */}
              <div className="absolute left-2 sm:left-6 bottom-0 w-4 h-4 bg-primary/30 rounded-full animate-pulse-subtle"></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Quick Stats */}
            <div className="card-modern p-4 sm:p-6 text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Academic Progress
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70 text-sm sm:text-base">
                    Study Duration
                  </span>
                  <span className="font-semibold text-primary text-sm sm:text-base">
                    4 Years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70 text-sm sm:text-base">
                    Current Year
                  </span>
                  <span className="font-semibold text-primary text-sm sm:text-base">
                    3rd Year
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70 text-sm sm:text-base">
                    Current Status
                  </span>
                  <span className="font-semibold text-green-500 text-sm sm:text-base">
                    Active Student
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
    </section>
  );
}
