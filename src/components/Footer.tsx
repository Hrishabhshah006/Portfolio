import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
              Hrishabh Shah
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring DevOps Engineer passionate about automation, cloud technologies, 
              and building scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-accent transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/hrishabhshah006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/hrishabhshah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:hrishabhshah006@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              📍 Bengaluru, India<br />
              📧 hrishabhshah006@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Hrishabh Shah. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}