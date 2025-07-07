import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Server, Wrench, Terminal, Trophy } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "MySQL"],
    color: "text-blue-500"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "React.js", "Angular", "Node.js", "REST APIs"],
    color: "text-green-500"
  },
  {
    title: "DevOps & Cloud",
    icon: Server,
    skills: ["Docker", "Kubernetes", "KubeVela", "CI/CD", "GitOps", "FluxCD"],
    color: "text-purple-500"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Ansible", "Chef", "Spring Boot", "Linux CLI", "SDLC"],
    color: "text-orange-500"
  },
  {
    title: "Core Concepts",
    icon: Terminal,
    skills: ["OOP", "DSA", "System Design", "Database Design", "Problem Solving"],
    color: "text-red-500"
  }
]

const achievements = [
  {
    title: "Technical Head - Coding Club",
    organization: "Assam Engineering College",
    description: "Led coding initiatives and organized programming competitions"
  },
  {
    title: "Competitive Programming",
    organization: "Multiple Platforms",
    description: "5★ HackerRank Problem Solving • 200+ LeetCode Problems"
  },
  {
    title: "Academic Achievements",
    organization: "Entrance Examinations",
    description: "CEE Rank 192 • JEE AIR 114452 • GATE Rank 3784 (Score 472)"
  },
  {
    title: "Programming Contests",
    organization: "College Competitions",
    description: "3rd Place - Codewar @ AEC • 2nd Place - Algosmash @ Royal Global"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            Skills & <span className="bg-hero-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern software development and DevOps practices.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-medium transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-skill-bg rounded-lg mr-3">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-skill-bg hover:bg-accent hover:text-accent-foreground transition-colors text-sm py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-skill-bg rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-inter mb-4 flex items-center justify-center">
              <Trophy className="mr-3 h-8 w-8 text-accent" />
              Achievements & Recognition
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition for technical leadership, academic excellence, and competitive programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-background shadow-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-accent font-medium mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}