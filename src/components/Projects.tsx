import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Database, Server } from "lucide-react"

const projects = [
  {
    title: "Cloud-Native Portfolio",
    description: "This very portfolio, shipped like production software: containerized with Docker, packaged as a Helm chart, deployed to Kubernetes, and continuously delivered through GitOps and CI/CD.",
    technologies: ["Docker", "Kubernetes", "Helm", "ArgoCD", "FluxCD", "GitHub Actions"],
    category: "DevOps",
    icon: Server,
    highlights: ["GitOps with ArgoCD & Flux", "Helm-packaged K8s Deployment", "CI/CD to GHCR"],
    github: "https://github.com/Hrishabhshah006/Portfolio",
    demo: null
  },
  {
    title: "Library Management System",
    description: "Full-featured library management application with user authentication, book catalog management, and comprehensive CRUD operations built with Spring Boot.",
    technologies: ["Spring Boot", "Java", "MySQL", "Spring Security", "REST APIs", "Thymeleaf"],
    category: "Backend",
    icon: Database,
    highlights: ["User Authentication", "CRUD Operations", "Security Implementation"],
    github: "https://github.com/Hrishabhshah006/Library-Management-Backend-using-Spring-Boot",
    demo: null
  },
  {
    title: "Attendance Management System",
    description: "Modern attendance tracking system with Angular frontend and Spring Boot backend, featuring real-time updates and comprehensive reporting.",
    technologies: ["Angular", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Material UI"],
    category: "Full Stack",
    icon: Code,
    highlights: ["Real-time Updates", "Responsive Design", "Comprehensive Reports"],
    github: "https://github.com/Hrishabhshah006/attendease",
    demo: null
  }
]

const categoryColors = {
  "DevOps": "bg-tech-blue text-white",
  "Backend": "bg-tech-purple text-white",
  "Full Stack": "bg-accent text-accent-foreground"
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in DevOps, backend development, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-skill-bg rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent-muted"
                        asChild
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a 
              href="https://github.com/Hrishabhshah006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}