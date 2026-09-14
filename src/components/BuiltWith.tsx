import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container, Ship, Workflow, GitBranch, Rocket, Github } from "lucide-react"

const stack = [
  {
    icon: Container,
    title: "Dockerized",
    description: "Built as a multi-stage Docker image served by Nginx for a small, production-ready artifact.",
  },
  {
    icon: Ship,
    title: "Helm & Kubernetes",
    description: "Packaged as a Helm chart with Deployment, Service, Ingress, and HPA manifests for Kubernetes.",
  },
  {
    icon: GitBranch,
    title: "GitOps",
    description: "Continuously reconciled from Git using ArgoCD and Flux — the cluster always matches the repo.",
  },
  {
    icon: Workflow,
    title: "CI/CD",
    description: "GitHub Actions pipeline: lint → test with coverage → build → publish the image to GHCR.",
  },
]

export function BuiltWith() {
  return (
    <section id="built-with" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            How This Site Is <span className="bg-hero-gradient bg-clip-text text-transparent">Built &amp; Deployed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This portfolio is shipped the same way I build production software —
            containerized, running on Kubernetes, and delivered through GitOps and CI/CD.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stack.map((item) => {
            const IconComponent = item.icon
            return (
              <Card
                key={item.title}
                className="group shadow-card transition-all duration-300 hover:shadow-medium hover:-translate-y-1 hover:border-accent/50"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-skill-bg rounded-lg mb-4 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <IconComponent className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-hero-gradient hover:opacity-90 text-white"
            asChild
          >
            <a
              href="https://github.com/Hrishabhshah006/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              Explore the Source & Deployment
              <Rocket className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
