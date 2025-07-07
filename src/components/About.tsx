import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Assam Engineering College",
    period: "2020 – 2024",
    description: "Focused on software engineering, data structures, and system design"
  },
  {
    degree: "AISSCE (Class XII)",
    institution: "Delhi Public School, Digboi",
    period: "2018 – 2020",
    description: "Science stream with Mathematics, Physics, and Chemistry"
  },
  {
    degree: "AISSE (Class X)",
    institution: "The Little Stars Sr. Sec. School, Digboi",
    period: "2018",
    description: "Foundation in core subjects with excellent academic performance"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging development and operations through automation, 
            cloud technologies, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated DevOps enthusiast with a strong foundation in computer science 
              and engineering. My journey began with a curiosity for backend development and 
              has evolved into a passion for automation, cloud-native technologies, and 
              streamlining software delivery processes.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through various internships and projects, I've gained hands-on experience with 
              modern DevOps tools and practices, including containerization, orchestration, 
              CI/CD pipelines, and infrastructure as code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm working as an Apprentice Technical at Siemens STSPL, where I 
              continue to grow my expertise in enterprise-level systems and contribute to 
              innovative technical solutions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-accent" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-accent font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}