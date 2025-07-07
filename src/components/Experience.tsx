import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Apprentice Technical",
    company: "Siemens STSPL",
    period: "Aug 2024 – Present",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Working on backend development for SiLC project during training, contributing to enterprise-level technical solutions.",
    technologies: ["Backend Development", "Enterprise Systems", "Technical Training"],
    current: true
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
    title: "Machine Learning Intern",
    company: "NIELIT",
    period: "Aug – Sep 2022",
    location: "Remote",
    type: "Internship",
    description: "Gained hands-on experience with machine learning algorithms and data analysis techniques.",
    technologies: ["Machine Learning", "Python", "Data Analysis", "Algorithm Design"],
    current: false
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

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10">
                  {exp.current && (
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="shadow-card hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-accent font-medium mb-2">
                            <Building className="mr-2 h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-accent text-accent-foreground">Current</Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="text-xs bg-skill-bg"
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