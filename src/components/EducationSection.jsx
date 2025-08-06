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
      className="section-modern bg-gradient-to-b from-secondary/10 to-background py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Education
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <div key={item.id} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="ml-20">
                      <div className="card-modern p-8 card-hover group-hover:border-primary/30 transition-all duration-500">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                              ></div>
                              <span className="text-sm font-medium text-primary">
                                {item.year}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-left">
                              {item.degree}
                            </h3>
                            <div className="space-y-1 text-foreground/70 text-left">
                              <p className="text-lg font-medium">
                                {item.institution}
                              </p>
                              <p className="text-sm">{item.university}</p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span
                              className={`px-4 py-2 rounded-full text-xs font-medium border-2 ${
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
                          <p className="text-foreground/80 leading-relaxed text-left">
                            {item.description}
                          </p>

                          {/* Highlights */}
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">
                              Key Learning Areas:
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {item.highlights.map((highlight, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <Star className="w-3 h-3 text-primary" />
                                  <span className="text-sm text-foreground/70">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <Calendar className="w-4 h-4" />
                              {item.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <MapPin className="w-4 h-4" />
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
              <div className="absolute left-6 bottom-0 w-4 h-4 bg-primary/30 rounded-full animate-pulse-subtle"></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="card-modern p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Study Duration</span>
                  <span className="font-semibold text-primary">4 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Current Year</span>
                  <span className="font-semibold text-primary">3rd Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Current Status</span>
                  <span className="font-semibold text-green-500">
                    Active Student
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
    </section>
  );
}
