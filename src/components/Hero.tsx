import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"

const roles = ["Software Engineer", "Backend Developer", "DevOps Enthusiast"]

const stats = [
  { value: "1+ yr", label: "@ Siemens" },
  { value: "200+", label: "LeetCode" },
  { value: "5★", label: "HackerRank" },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return reduced
}

function useTypewriter(words: string[]) {
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(timeout)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? 45 : 90)
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, reducedMotion])

  return reducedMotion ? words[0] : words[index].substring(0, subIndex)
}

export function Hero() {
  const typedRole = useTypewriter(roles)

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/85" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-inter mb-4">
            <span className="block text-foreground">Hrishabh</span>
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              Shah
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-9 sm:h-10 mb-6" aria-live="polite">
            <span className="text-2xl sm:text-3xl font-semibold text-accent font-inter">
              {typedRole}
            </span>
            <span className="inline-block w-0.5 h-6 sm:h-7 ml-1 align-middle bg-accent animate-pulse" />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer @ Siemens — building scalable backend systems with
            cloud-native and DevOps tooling like Kubernetes, GitOps, and CI/CD.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              onClick={scrollToContact}
              className="bg-hero-gradient hover:opacity-90 text-white px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
            <Button 
              className="bg-accent hover:bg-accent-muted text-accent-foreground px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="/resume.pdf" download="Hrishabh-Shah-Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Résumé
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-2 rounded-xl bg-skill-bg shadow-card min-w-[100px] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-xl sm:text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/hrishabhshah006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-accent transition-colors p-2"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/hrishabhshah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-accent transition-colors p-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:hrishabhshah006@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-accent transition-colors p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}