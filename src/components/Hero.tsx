import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/85" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-inter mb-6">
            <span className="block text-foreground">Hrishabh</span>
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              Shah
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer @ Siemens — building scalable backend systems with 
            cloud-native and DevOps tooling like Kubernetes, GitOps, and CI/CD.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-hero-gradient hover:opacity-90 text-white px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
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