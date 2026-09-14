import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "NIELIT",
    period: "Aug – Sep 2022",
    location: "Remote",
    type: "Internship",
    description: "Gained hands-on experience with machine learning algorithms and data analysis techniques.",
    technologies: ["Machine Learning", "Python", "Data Analysis", "Algorithm Design"],
    current: false
  },
  {
    title: "Backend Development Intern",
    company: "Xopun Tech",
    period: "Jul – Sep 2023",
    location: "Remote",
    type: "Internship",
    description: "Developed robust backend systems using Spring Boot framework, implementing CRUD operations and authentication mechanisms.",
    technologies: ["Spring Boot", "Java", "REST APIs", "Database Design"],
    current: false
  },
  {
    title: "Apprentice Technical",
    company: "Siemens STSPL",
    period: "Aug 2024 – Aug 2025",
    location: "Bengaluru, India",
    type: "Apprenticeship",
    description: "Worked on backend development for the SiLC project during training, contributing to enterprise-level technical solutions.",
    technologies: ["Backend Development", "Enterprise Systems", "Technical Training"],
    current: false
  },
  {
    title: "Software Engineer",
    company: "Siemens STSPL",
    period: "Aug 2025 – Present",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Full-time software engineer building backend solutions for enterprise-level projects, delivering scalable and reliable systems.",
    technologies: ["Backend Development", "Enterprise Systems", "Docker", "Kubernetes", "Cloud Native", "CI/CD", "GitOps", "ArgoCD", "Helm"],
    current: true
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience in backend development, 
            automation, and enterprise systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-timeline-line"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-accent rounded-full border-4 border-background z-10 transition-transform duration-300 group-hover:scale-150">
                  {exp.current && (
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="group/card relative overflow-hidden shadow-card transition-all duration-300 hover:shadow-medium hover:-translate-y-1 hover:border-accent/50">
                    {/* Animated accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover/card:scale-y-100"></div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2.5">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors group-hover:text-accent">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-accent text-sm font-medium">
                            <Building className="mr-2 h-3.5 w-3.5" />
                            {exp.company}
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-accent text-accent-foreground text-xs">Current</Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2.5">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3.5 w-3.5" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="text-xs bg-skill-bg transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-medium cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}