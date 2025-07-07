import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Silicon Town, Electronic City Phase 2",
    subvalue: "Bengaluru, India",
    action: null
  },
  {
    icon: Mail,
    label: "Email",
    value: "hrishabhshah006@gmail.com",
    subvalue: null,
    action: "mailto:hrishabhshah006@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 60009 16848",
    subvalue: "+91 93655 51406",
    action: "tel:+916000916848"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@hrishabhshah006",
    url: "https://github.com/hrishabhshah006",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "@hrishabhshah",
    url: "https://linkedin.com/in/hrishabhshah",
    color: "hover:text-blue-600"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities in DevOps, backend development, 
            or any exciting technical projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const content = (
                    <Card className="shadow-card hover:shadow-medium transition-shadow">
                      <CardContent className="flex items-center p-6">
                        <div className="p-3 bg-skill-bg rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.label}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                          {info.subvalue && (
                            <p className="text-muted-foreground text-sm">{info.subvalue}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )

                  return info.action ? (
                    <a key={index} href={info.action} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Card key={index} className="shadow-card hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center group"
                        >
                          <div className="p-3 bg-skill-bg rounded-lg mr-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                              {social.label}
                            </h4>
                            <p className="text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Ready to Work Together?
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a conversation about technology and DevOps. Whether you're 
                    looking for a dedicated team member or want to collaborate on something 
                    exciting, I'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-hero-gradient hover:opacity-90 text-white"
                      asChild
                    >
                      <a href="mailto:hrishabhshah006@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Me an Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href="tel:+916000916848">
                        <Phone className="mr-2 h-5 w-5" />
                        Give Me a Call
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}