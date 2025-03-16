import { Github, Mail, Twitter, User, ChevronDown } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Track RP",
    description: "Ein FiveM RP Server, der auf einem eigenen Framework basiert.",
    images: [
      "https://cdn.discordapp.com/attachments/1256319335702728705/1330957817560961044/SPOILER_image.png?ex=67d7b84f&is=67d666cf&hm=fd84cc6f7ca569b8fe0e612ff99bbbd2ac6ab28abc55b669d70d5bc81d38cf6a&",
      "https://cdn.discordapp.com/attachments/1256319335702728705/1324805043937087498/SPOILER_Screenshot_2025-01-03_185215.png?ex=67d7bf98&is=67d66e18&hm=e76cbf103a63eff1bf9c10fe4bb1b1554c8e4f0ec66bb0e5c3ac9f36412f7cca&",
      "https://cdn.discordapp.com/attachments/1257760105676673055/1324789192596652034/image.png?ex=67d7b0d4&is=67d65f54&hm=1d8ad04082abedac8c970a08826be78ed3f6d6d7d4ea42019fb4a2f83fe7ef43&"
    ],
    technologies: ["Lua","React"],
    link: "https://discord.gg/mYF3GMnWv3"
  },
  {
    title: "Social Media Manager",
    description: "Ich habe auch ein sehr erfolgreichen Tiktok Account, mit über 50k likes.",
    images: [
      "https://cdn.discordapp.com/attachments/976583295796121600/1350844412040577077/image.png?ex=67d83765&is=67d6e5e5&hm=05b5f1e6919f89a1937d90f1d4ea262a61e09836fa0d52a5c8b5a395669ff7f5&"
    ],
    technologies: ["Tiktok"],
    link: "https://www.tiktok.com/@trackrp"
  },
];

function App() {
  return (
    <div className="min-h-screen bg-pattern">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm text-white">
        <header className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-4xl w-full space-y-16">
            <div className="space-y-6">
              <img 
                src="https://i.ibb.co/jYQwCPF/Logo-Dusty.png"
                alt="Professional headshot"
                className="w-24 h-24 rounded-full object-cover bg-white/10 p-1"
              />
              <h1 className="text-6xl font-bold tracking-tight">Dusty</h1>
              <p className="text-xl text-white/80 max-w-lg">
                Der einfachste weg ein problem zu lösen ist, es gar nicht erst entstehen zu lassen.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/dustyrepo" className="text-white/80 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/Z8AsyjFH27" className="text-white/80 hover:text-white transition-colors">
                  <User className="w-6 h-6" />
                </a>
                <a href="https://x.com/dustyrepo" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="mailto:dustyrepo@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-white/80" />
              <div className="absolute inset-0 animate-pulse-glow blur-sm">
                <ChevronDown className="w-8 h-8 text-white/40" />
              </div>
            </div>
          </div>
        </header>

        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-start mb-12">
              <span className="text-white/60 text-sm font-medium mb-2 tracking-wider uppercase">Portfolio</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Abgeschlossene Projekte 
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-start mb-12">
              <span className="text-white/60 text-sm font-medium mb-2 tracking-wider uppercase">Kontakt</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-8">
                Lass uns sprechen.
              </h2>
              <p className="text-lg text-white/60 max-w-lg mb-8">
                Haben Sie eine spannende Idee oder ein Projekt? Schreibt mir gerne eine E-Mail.
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="mailto:dustyrepo@gmail.com"
                  className="group flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg border-b border-transparent group-hover:border-white/20">
                    dustyrepo@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>


        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center text-white/60">
            <p>© 2025 dustyrepo</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;